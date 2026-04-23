(() => {
  var e = {
      72290(e) {
        var t,
          n,
          r,
          i = (e.exports = {});
        function o() {
          throw Error("setTimeout has not been defined");
        }
        function s() {
          throw Error("clearTimeout has not been defined");
        }
        try {
          t = "function" == typeof setTimeout ? setTimeout : o;
        } catch (e) {
          t = o;
        }
        try {
          n = "function" == typeof clearTimeout ? clearTimeout : s;
        } catch (e) {
          n = s;
        }
        function a(e) {
          if (t === setTimeout) return setTimeout(e, 0);
          if ((t === o || !t) && setTimeout)
            return (t = setTimeout), setTimeout(e, 0);
          try {
            return t(e, 0);
          } catch (n) {
            try {
              return t.call(null, e, 0);
            } catch (n) {
              return t.call(this, e, 0);
            }
          }
        }
        var l = [],
          c = !1,
          u = -1;
        function d() {
          c &&
            r &&
            ((c = !1),
            r.length ? (l = r.concat(l)) : (u = -1),
            l.length && p());
        }
        function p() {
          if (!c) {
            var e = a(d);
            c = !0;
            for (var t = l.length; t; ) {
              for (r = l, l = []; ++u < t; ) r && r[u].run();
              (u = -1), (t = l.length);
            }
            (r = null),
              (c = !1),
              (function (e) {
                if (n === clearTimeout) return clearTimeout(e);
                if ((n === s || !n) && clearTimeout)
                  return (n = clearTimeout), clearTimeout(e);
                try {
                  n(e);
                } catch (t) {
                  try {
                    return n.call(null, e);
                  } catch (t) {
                    return n.call(this, e);
                  }
                }
              })(e);
          }
        }
        function h(e, t) {
          (this.fun = e), (this.array = t);
        }
        function f() {}
        (i.nextTick = function (e) {
          var t = Array(arguments.length - 1);
          if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
          l.push(new h(e, t)), 1 !== l.length || c || a(p);
        }),
          (h.prototype.run = function () {
            this.fun.apply(null, this.array);
          }),
          (i.title = "browser"),
          (i.browser = !0),
          (i.env = {}),
          (i.argv = []),
          (i.version = ""),
          (i.versions = {}),
          (i.on = f),
          (i.addListener = f),
          (i.once = f),
          (i.off = f),
          (i.removeListener = f),
          (i.removeAllListeners = f),
          (i.emit = f),
          (i.prependListener = f),
          (i.prependOnceListener = f),
          (i.listeners = function (e) {
            return [];
          }),
          (i.binding = function (e) {
            throw Error("process.binding is not supported");
          }),
          (i.cwd = function () {
            return "/";
          }),
          (i.chdir = function (e) {
            throw Error("process.chdir is not supported");
          }),
          (i.umask = function () {
            return 0;
          });
      },
      790171(e, t, n) {
        "use strict";
        function r(e) {
          let { maxBudgetMinute: t, maxBudgetHour: n } = e,
            r = { slot: 0, budgetUsed: 0 },
            i = { slot: 0, budgetUsed: 0 };
          return () => {
            let e = Date.now(),
              o = Math.round(e / 1e3 / 60),
              s = Math.round(e / 1e3 / 60 / 60);
            return (
              r.slot !== o && ((r.slot = o), (r.budgetUsed = 0)),
              i.slot !== s && ((i.slot = s), (i.budgetUsed = 0)),
              !!(r.budgetUsed < t) &&
                (r.budgetUsed++, !!(i.budgetUsed < n)) &&
                (i.budgetUsed++, !0)
            );
          };
        }
        n.d(t, { p: () => r });
      },
      168769(e, t, n) {
        "use strict";
        n.d(t, { i: () => h });
        var r = n(501661),
          i = n(774099),
          o = n(122343),
          s = n(883950),
          a = n(871186),
          l = n(502513),
          c = n(70298),
          u = n(790171);
        let d = ["oppobrowser", "realmebrowser", "heytapbrowser"],
          p = (0, u.p)({ maxBudgetMinute: 1, maxBudgetHour: 3 });
        function h() {
          r.Ts({
            tunnel: "/error-reporting-proxy/web",
            dsn: "https://fa97a90475514c03a42f80cd36d147c4@sentry.io/140984",
            autoSessionTracking: !1,
            environment: window.GLOBAL_ENV.RELEASE_CHANNEL,
            release: "discord_web-749c43af9e2a25c93f3806b25c221d203f3000b3",
            beforeSend: function (e, t) {
              return !(
                (null != e.exception &&
                  null != e.exception.values &&
                  e.exception.values.every(
                    (e) =>
                      null == e.stacktrace ||
                      (null != e.stacktrace.frames &&
                        1 === e.stacktrace.frames.length),
                  ) &&
                  "canary" !== window.GLOBAL_ENV.RELEASE_CHANNEL) ||
                d.some(
                  (e) =>
                    window.navigator.appVersion.toLowerCase().indexOf(e) >= 0,
                )
              ) &&
                !(0, c.b)() &&
                "Aborted" !== e.message &&
                "cancel captcha" !== e.message &&
                p()
                ? e
                : null;
            },
            integrations: [
              i.L({ onerror: !0, onunhandledrejection: !0 }),
              o.F({
                console: !0,
                dom: !0,
                fetch: !0,
                history: !0,
                sentry: !0,
                xhr: !0,
              }),
              s.S(),
            ],
            ignoreErrors: [
              "EADDRINUSE",
              "BetterDiscord",
              "EnhancedDiscord",
              "Powercord",
              "RecipeWebview",
              "jQuery",
              "localStorage",
              "has already been declared",
              "Cannot call hover while not dragging.",
              "Cannot call beginDrag while dragging.",
              "getHostNode",
              "setupCSS",
              "on missing remote object",
              "ChunkLoadError",
              "Cannot find module 'discord_utils'",
              "Failed to setup Krisp module",
              "Error invoking remote method 'DISCORD_NATIVE_MODULES_INSTALL': Error: Module updater is not available!",
              "Non-Error promise rejection captured with keys:",
              "Request has been terminated",
              "Cannot resolve a Slate point from DOM point",
              "Failed to fetch",
              "no suitable image found",
              "ResizeObserver loop limit exceeded",
              "ResizeObserver loop completed with undelivered notifications.",
              "The play() request was interrupted",
              "could not play audio",
              "notosans-400-normalitalic",
            ],
            denyUrls: [/recaptcha/, /mobilediscord\.com/, /betterdiscord:\/\//],
          }),
            a.NA("buildNumber", "533774"),
            a.NA("builtAt", String("1776904423701"));
          let e = window.GLOBAL_ENV.SENTRY_TAGS;
          if (null != e && "object" == typeof e) for (let t in e) a.NA(t, e[t]);
          return l;
        }
      },
      70298(e, t, n) {
        "use strict";
        function r() {
          let e = window;
          return (
            null != e.jQuery ||
            null != e.$ ||
            null != e.BetterDiscord ||
            null != e.BdApi ||
            null != e.rambox
          );
        }
        n.d(t, { b: () => r });
      },
      313322(e, t, n) {
        "use strict";
        n.d(t, { y: () => d });
        var r = n(683863),
          i = n(588130),
          o = n(472882),
          s = n(272469),
          a = n(607423),
          l = n(297458),
          c = n(804524),
          u = n(405589);
        class d extends r.V {
          constructor(e) {
            const t = { parentSpanIsAlwaysRootSpan: !0, ...e },
              n = c.jf.SENTRY_SDK_SOURCE || (0, i.e)();
            (0, o.K)(t, "browser", ["browser"], n),
              super(t),
              t.sendClientReports &&
                c.jf.document &&
                c.jf.document.addEventListener("visibilitychange", () => {
                  "hidden" === c.jf.document.visibilityState &&
                    this._flushOutcomes();
                });
          }
          eventFromException(e, t) {
            return (0, l.u)(
              this._options.stackParser,
              e,
              t,
              this._options.attachStacktrace,
            );
          }
          eventFromMessage(e, t = "info", n) {
            return (0, l.qv)(
              this._options.stackParser,
              e,
              t,
              n,
              this._options.attachStacktrace,
            );
          }
          captureUserFeedback(e) {
            if (!this._isEnabled()) {
              a.T &&
                s.vF.warn("SDK not enabled, will not capture user feedback.");
              return;
            }
            let t = (0, u.L)(e, {
              metadata: this.getSdkMetadata(),
              dsn: this.getDsn(),
              tunnel: this.getOptions().tunnel,
            });
            this.sendEnvelope(t);
          }
          _prepareEvent(e, t, n) {
            return (
              (e.platform = e.platform || "javascript"),
              super._prepareEvent(e, t, n)
            );
          }
        }
      },
      607423(e, t, n) {
        "use strict";
        n.d(t, { T: () => r });
        let r = "u" < typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
      },
      297458(e, t, n) {
        "use strict";
        n.d(t, { H7: () => g, K8: () => c, qv: () => m, u: () => f });
        var r = n(630449),
          i = n(86622),
          o = n(875565),
          s = n(231577),
          a = n(835869),
          l = n(690094);
        function c(e, t) {
          var n, r;
          let i,
            o,
            s = d(e, t),
            a = {
              type:
                !(i = (n = t) && n.name) && h(n)
                  ? n.message &&
                    Array.isArray(n.message) &&
                    2 == n.message.length
                    ? n.message[0]
                    : "WebAssembly.Exception"
                  : i,
              value: (o = (r = t) && r.message)
                ? o.error && "string" == typeof o.error.message
                  ? o.error.message
                  : h(r) && Array.isArray(r.message) && 2 == r.message.length
                    ? r.message[1]
                    : o
                : "No error message",
            };
          return (
            s.length && (a.stacktrace = { frames: s }),
            void 0 === a.type &&
              "" === a.value &&
              (a.value = "Unrecoverable error caught"),
            a
          );
        }
        function u(e, t) {
          return { exception: { values: [c(e, t)] } };
        }
        function d(e, t) {
          var n, r;
          let i = t.stacktrace || t.stack || "",
            o = (n = t) && p.test(n.message) ? 1 : 0,
            s = "number" == typeof (r = t).framesToPop ? r.framesToPop : 0;
          try {
            return e(i, o, s);
          } catch (e) {}
          return [];
        }
        let p = /Minified React error #\d+;/i;
        function h(e) {
          return (
            "u" > typeof WebAssembly &&
            void 0 !== WebAssembly.Exception &&
            e instanceof WebAssembly.Exception
          );
        }
        function f(e, t, n, r) {
          let i = g(e, t, (n && n.syntheticException) || void 0, r);
          return (
            (0, s.M6)(i),
            (i.level = "error"),
            n && n.event_id && (i.event_id = n.event_id),
            (0, a.XW)(i)
          );
        }
        function m(e, t, n = "info", r, i) {
          let o = _(e, t, (r && r.syntheticException) || void 0, i);
          return (
            (o.level = n),
            r && r.event_id && (o.event_id = r.event_id),
            (0, a.XW)(o)
          );
        }
        function g(e, t, n, a, p) {
          let h;
          if ((0, o.T2)(t) && t.error) return u(e, t.error);
          if ((0, o.BD)(t) || (0, o.W6)(t)) {
            if ("stack" in t) h = u(e, t);
            else {
              let r = t.name || ((0, o.BD)(t) ? "DOMError" : "DOMException"),
                i = t.message ? `${r}: ${t.message}` : r;
              (h = _(e, i, n, a)), (0, s.gO)(h, i);
            }
            return (
              "code" in t &&
                (h.tags = { ...h.tags, "DOMException.code": `${t.code}` }),
              h
            );
          }
          return (0, o.bJ)(t)
            ? u(e, t)
            : ((0, o.Qd)(t) || (0, o.xH)(t)
                ? (h = (function (e, t, n, s) {
                    let a = (0, r.KU)(),
                      u = a && a.getOptions().normalizeDepth,
                      p = (function (e) {
                        for (let t in e)
                          if (Object.prototype.hasOwnProperty.call(e, t)) {
                            let n = e[t];
                            if (n instanceof Error) return n;
                          }
                      })(t),
                      h = { __serialized__: (0, i.cd)(t, u) };
                    if (p)
                      return { exception: { values: [c(e, p)] }, extra: h };
                    let f = {
                      exception: {
                        values: [
                          {
                            type: (0, o.xH)(t)
                              ? t.constructor.name
                              : s
                                ? "UnhandledRejection"
                                : "Error",
                            value: (function (e, { isUnhandledRejection: t }) {
                              let n = (0, l.HF)(e),
                                r = t ? "promise rejection" : "exception";
                              if ((0, o.T2)(e))
                                return `Event \`ErrorEvent\` captured as ${r} with message \`${e.message}\``;
                              if ((0, o.xH)(e)) {
                                let t = (function (e) {
                                  try {
                                    let t = Object.getPrototypeOf(e);
                                    return t ? t.constructor.name : void 0;
                                  } catch (e) {}
                                })(e);
                                return `Event \`${t}\` (type=${e.type}) captured as ${r}`;
                              }
                              return `Object captured as ${r} with keys: ${n}`;
                            })(t, { isUnhandledRejection: s }),
                          },
                        ],
                      },
                      extra: h,
                    };
                    if (n) {
                      let t = d(e, n);
                      t.length &&
                        (f.exception.values[0].stacktrace = { frames: t });
                    }
                    return f;
                  })(e, t, n, p))
                : ((h = _(e, t, n, a)), (0, s.gO)(h, `${t}`, void 0)),
              (0, s.M6)(h, { synthetic: !0 }),
              h);
        }
        function _(e, t, n, r) {
          let i = {};
          if (r && n) {
            let r = d(e, n);
            r.length &&
              (i.exception = {
                values: [{ value: t, stacktrace: { frames: r } }],
              }),
              (0, s.M6)(i, { synthetic: !0 });
          }
          if ((0, o.NF)(t)) {
            let {
              __sentry_template_string__: e,
              __sentry_template_values__: n,
            } = t;
            return (i.logentry = { message: e, params: n }), i;
          }
          return (i.message = t), i;
        }
      },
      620248(e, t, n) {
        "use strict";
        n.d(t, { C: () => o });
        var r = n(742741),
          i = n(529251);
        let o = (0, r.aD)({ lazyLoadIntegration: i.b });
      },
      451049(e, t, n) {
        "use strict";
        n.d(t, { X: () => i });
        var r = n(742741);
        let i = (0, r.aD)({
          getModalIntegration: () => r.j0,
          getScreenshotIntegration: () => r.U$,
        });
      },
      804524(e, t, n) {
        "use strict";
        n.d(t, {
          LV: () =>
            function e(t, n = {}) {
              if ("function" != typeof t) return t;
              try {
                let e = t.__sentry_wrapped__;
                if (e)
                  if ("function" == typeof e) return e;
                  else return t;
                if ((0, i.sp)(t)) return t;
              } catch (e) {
                return t;
              }
              let r = function (...r) {
                try {
                  let i = r.map((t) => e(t, n));
                  return t.apply(this, i);
                } catch (e) {
                  throw (
                    (c++,
                    setTimeout(() => {
                      c--;
                    }),
                    (0, o.v4)((t) => {
                      t.addEventProcessor(
                        (e) => (
                          n.mechanism &&
                            ((0, s.gO)(e, void 0, void 0),
                            (0, s.M6)(e, n.mechanism)),
                          (e.extra = { ...e.extra, arguments: r }),
                          e
                        ),
                      ),
                        (0, a.Cp)(e);
                    }),
                    e)
                  );
                }
              };
              try {
                for (let e in t)
                  Object.prototype.hasOwnProperty.call(t, e) && (r[e] = t[e]);
              } catch (e) {}
              (0, i.pO)(r, t), (0, i.my)(t, "__sentry_wrapped__", r);
              try {
                Object.getOwnPropertyDescriptor(r, "name").configurable &&
                  Object.defineProperty(r, "name", { get: () => t.name });
              } catch (e) {}
              return r;
            },
          jN: () => u,
          jf: () => l,
        });
        var r = n(978862),
          i = n(690094),
          o = n(630449),
          s = n(231577),
          a = n(871186);
        let l = r.O,
          c = 0;
        function u() {
          return c > 0;
        }
      },
      502513(e, t, n) {
        "use strict";
        n.r(t),
          n.d(t, {
            BrowserClient: () => N.y,
            OpenFeatureIntegrationHook: () => ec.o,
            SDK_VERSION: () => "8.55.0",
            SEMANTIC_ATTRIBUTE_SENTRY_OP: () => r.uT,
            SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN: () => r.JD,
            SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE: () => r.sy,
            SEMANTIC_ATTRIBUTE_SENTRY_SOURCE: () => r.i_,
            Scope: () => i.H,
            WINDOW: () => A.jf,
            addBreadcrumb: () => o.Z,
            addEventProcessor: () => s.SA,
            addIntegration: () => a.Q8,
            addTracingExtensions: () => l.U,
            breadcrumbsIntegration: () => U.F,
            browserApiErrorsIntegration: () => q.G,
            browserProfilingIntegration: () => ei.f,
            browserSessionIntegration: () => es.p,
            browserTracingIntegration: () => en.dp,
            buildLaunchDarklyFlagUsedHandler: () => el.g,
            captureConsoleIntegration: () => c.q,
            captureEvent: () => s.r,
            captureException: () => s.Cp,
            captureFeedback: () => u.q,
            captureMessage: () => s.wd,
            captureSession: () => s.J5,
            captureUserFeedback: () => $.lo,
            chromeStackLineParser: () => P.Yj,
            close: () => s.VN,
            contextLinesIntegration: () => V.l,
            continueTrace: () => d.V4,
            createTransport: () => p.o,
            createUserFeedbackEnvelope: () => j.L,
            debugIntegration: () => h._,
            dedupeIntegration: () => f.s,
            defaultRequestInstrumentationOptions: () => et.h$,
            defaultStackLineParsers: () => P.c9,
            defaultStackParser: () => P.lG,
            endSession: () => s.ky,
            eventFromException: () => F.u,
            eventFromMessage: () => F.qv,
            exceptionFromError: () => F.K8,
            extraErrorDataIntegration: () => m.X,
            featureFlagsIntegration: () => ea.S,
            feedbackAsyncIntegration: () => Y.C,
            feedbackIntegration: () => Q.X,
            feedbackSyncIntegration: () => Q.X,
            flush: () => s.bX,
            forceLoad: () => $.w7,
            functionToStringIntegration: () => g.Z,
            geckoStackLineParser: () => P.dY,
            getActiveSpan: () => _.Bk,
            getClient: () => v.KU,
            getCurrentHub: () => y.B,
            getCurrentScope: () => v.o5,
            getDefaultIntegrations: () => $.nI,
            getFeedback: () => Z.e4,
            getGlobalScope: () => v.m6,
            getIsolationScope: () => v.rm,
            getReplay: () => G.M,
            getRootSpan: () => _.zU,
            getSpanDescendants: () => _.xO,
            getSpanStatusFromHttpCode: () => b.A,
            globalHandlersIntegration: () => B.L,
            httpClientIntegration: () => X.c,
            httpContextIntegration: () => z.M,
            inboundFiltersIntegration: () => S.D,
            init: () => $.Ts,
            instrumentOutgoingRequests: () => et.Qb,
            isInitialized: () => s.Dp,
            lastEventId: () => s.Q,
            launchDarklyIntegration: () => el.L,
            lazyLoadIntegration: () => W.b,
            linkedErrorsIntegration: () => H.p,
            makeBrowserOfflineTransport: () => er.z9,
            makeFetchTransport: () => L._,
            makeMultiplexedTransport: () => w.N,
            metrics: () => ee.q,
            moduleMetadataIntegration: () => E.Q,
            onLoad: () => $.kF,
            openFeatureIntegration: () => ec.h,
            opera10StackLineParser: () => P.Q_,
            opera11StackLineParser: () => P.Vv,
            parameterize: () => k.y,
            registerSpanErrorInstrumentation: () => x.s,
            replayCanvasIntegration: () => J.y,
            replayIntegration: () => G.w,
            reportingObserverIntegration: () => K.n,
            rewriteFramesIntegration: () => C.D,
            sendFeedback: () => Z.Sq,
            sessionTimingIntegration: () => T.Z,
            setContext: () => s.o,
            setCurrentClient: () => I.B,
            setExtra: () => s.l7,
            setExtras: () => s.cx,
            setHttpStatus: () => b.N,
            setMeasurement: () => M.X,
            setTag: () => s.NA,
            setTags: () => s.Wt,
            setUser: () => s.gV,
            showReportDialog: () => $.mn,
            spanToBaggageHeader: () => O.HW,
            spanToJSON: () => _.et,
            spanToTraceHeader: () => _.Qh,
            spotlightBrowserIntegration: () => eo.zP,
            startBrowserTracingNavigationSpan: () => en.Nt,
            startBrowserTracingPageLoadSpan: () => en.Sx,
            startInactiveSpan: () => d.Uk,
            startNewTrace: () => d.Y7,
            startSession: () => s.J0,
            startSpan: () => d.Lk,
            startSpanManual: () => d.nV,
            statsigIntegration: () => ed.I,
            suppressTracing: () => d.M1,
            thirdPartyErrorFilterIntegration: () => D.y,
            unleashIntegration: () => eu.v,
            updateSpanName: () => _.zQ,
            winjsStackLineParser: () => P.$2,
            withActiveSpan: () => d.hb,
            withIsolationScope: () => v.rB,
            withScope: () => v.v4,
            zodErrorsIntegration: () => R.rB,
          });
        var r = n(92332),
          i = n(128377),
          o = n(984083),
          s = n(871186),
          a = n(688331),
          l = n(556929),
          c = n(899822),
          u = n(876194),
          d = n(660161),
          p = n(47363),
          h = n(417394),
          f = n(453614),
          m = n(525501),
          g = n(76005),
          _ = n(582102),
          v = n(630449),
          y = n(32616),
          b = n(855160),
          S = n(550601),
          w = n(477657),
          E = n(711392),
          k = n(616700),
          x = n(439057),
          C = n(926603),
          T = n(143939),
          I = n(779949),
          M = n(142080),
          O = n(411361),
          D = n(30216),
          R = n(709139),
          A = n(804524),
          N = n(313322),
          L = n(195588),
          P = n(719736),
          F = n(297458),
          j = n(405589),
          $ = n(501661),
          U = n(122343),
          B = n(774099),
          z = n(416626),
          H = n(956203),
          q = n(972130),
          W = n(529251),
          K = n(152937),
          X = n(286622),
          V = n(392679),
          G = n(35733),
          J = n(129313),
          Y = n(620248),
          Q = n(451049),
          Z = n(742741),
          ee = n(630700),
          et = n(795197),
          en = n(719468),
          er = n(584035),
          ei = n(992734),
          eo = n(124861),
          es = n(973913),
          ea = n(883950),
          el = n(774206),
          ec = n(372084),
          eu = n(157738),
          ed = n(58797);
      },
      122343(e, t, n) {
        "use strict";
        n.d(t, { F: () => b });
        var r = n(756813),
          i = n(69171),
          o = n(300297),
          s = n(933138),
          a = n(823783),
          l = n(688331),
          c = n(630449),
          u = n(984083),
          d = n(231577),
          p = n(272469),
          h = n(693037),
          f = n(196010),
          m = n(826476),
          g = n(592388),
          _ = n(791132),
          v = n(607423),
          y = n(804524);
        let b = (0, l._C)((e = {}) => {
          let t = {
            console: !0,
            dom: !0,
            fetch: !0,
            history: !0,
            sentry: !0,
            xhr: !0,
            ...e,
          };
          return {
            name: "Breadcrumbs",
            setup(e) {
              var n, l, b, S, w, E, k;
              t.console &&
                (0, s.P)(
                  ((n = e),
                  function (e) {
                    if ((0, c.KU)() !== n) return;
                    let t = {
                      category: "console",
                      data: { arguments: e.args, logger: "console" },
                      level: (0, f.t)(e.level),
                      message: (0, m.gt)(e.args, " "),
                    };
                    if ("assert" === e.level)
                      if (!1 !== e.args[0]) return;
                      else
                        (t.message = `Assertion failed: ${(0, m.gt)(e.args.slice(1), " ") || "console.assert"}`),
                          (t.data.arguments = e.args.slice(1));
                    (0, u.Z)(t, { input: e.args, level: e.level });
                  }),
                ),
                t.dom &&
                  (0, r.i)(
                    ((l = e),
                    (b = t.dom),
                    function (e) {
                      let t, n;
                      if ((0, c.KU)() !== l) return;
                      let r =
                          "object" == typeof b ? b.serializeAttribute : void 0,
                        i =
                          "object" == typeof b &&
                          "number" == typeof b.maxStringLength
                            ? b.maxStringLength
                            : void 0;
                      i &&
                        i > 1024 &&
                        (v.T &&
                          p.vF.warn(
                            `\`dom.maxStringLength\` cannot exceed 1024, but a value of ${i} was configured. Sentry will use 1024 instead.`,
                          ),
                        (i = 1024)),
                        "string" == typeof r && (r = [r]);
                      try {
                        var o;
                        let s = e.event,
                          a = (o = s) && o.target ? s.target : s;
                        (t = (0, h.Hd)(a, { keyAttrs: r, maxStringLength: i })),
                          (n = (0, h.xE)(a));
                      } catch (e) {
                        t = "<unknown>";
                      }
                      if (0 === t.length) return;
                      let s = { category: `ui.${e.name}`, message: t };
                      n && (s.data = { "ui.component_name": n }),
                        (0, u.Z)(s, {
                          event: e.event,
                          name: e.name,
                          global: e.global,
                        });
                    }),
                  ),
                t.xhr &&
                  (0, i.Mn)(
                    ((S = e),
                    function (e) {
                      if ((0, c.KU)() !== S) return;
                      let { startTimestamp: t, endTimestamp: n } = e,
                        r = e.xhr[i.Er];
                      if (!t || !n || !r) return;
                      let { method: o, url: s, status_code: a, body: l } = r,
                        d = {
                          xhr: e.xhr,
                          input: l,
                          startTimestamp: t,
                          endTimestamp: n,
                        },
                        p = (0, g.X)(a);
                      (0, u.Z)(
                        {
                          category: "xhr",
                          data: { method: o, url: s, status_code: a },
                          type: "http",
                          level: p,
                        },
                        d,
                      );
                    }),
                  ),
                t.fetch &&
                  (0, a.ur)(
                    ((w = e),
                    function (e) {
                      if ((0, c.KU)() !== w) return;
                      let { startTimestamp: t, endTimestamp: n } = e;
                      if (
                        n &&
                        (!e.fetchData.url.match(/sentry_key/) ||
                          "POST" !== e.fetchData.method)
                      )
                        if (e.error) {
                          let r = e.fetchData,
                            i = {
                              data: e.error,
                              input: e.args,
                              startTimestamp: t,
                              endTimestamp: n,
                            };
                          (0, u.Z)(
                            {
                              category: "fetch",
                              data: r,
                              level: "error",
                              type: "http",
                            },
                            i,
                          );
                        } else {
                          let r = e.response,
                            i = { ...e.fetchData, status_code: r && r.status },
                            o = {
                              input: e.args,
                              response: r,
                              startTimestamp: t,
                              endTimestamp: n,
                            },
                            s = (0, g.X)(i.status_code);
                          (0, u.Z)(
                            {
                              category: "fetch",
                              data: i,
                              type: "http",
                              level: s,
                            },
                            o,
                          );
                        }
                    }),
                  ),
                t.history &&
                  (0, o._)(
                    ((E = e),
                    function (e) {
                      if ((0, c.KU)() !== E) return;
                      let t = e.from,
                        n = e.to,
                        r = (0, _.Dl)(y.jf.location.href),
                        i = t ? (0, _.Dl)(t) : void 0,
                        o = (0, _.Dl)(n);
                      (i && i.path) || (i = r),
                        r.protocol === o.protocol &&
                          r.host === o.host &&
                          (n = o.relative),
                        r.protocol === i.protocol &&
                          r.host === i.host &&
                          (t = i.relative),
                        (0, u.Z)({
                          category: "navigation",
                          data: { from: t, to: n },
                        });
                    }),
                  ),
                t.sentry &&
                  e.on(
                    "beforeSendEvent",
                    ((k = e),
                    function (e) {
                      (0, c.KU)() === k &&
                        (0, u.Z)(
                          {
                            category: `sentry.${"transaction" === e.type ? "transaction" : "event"}`,
                            event_id: e.event_id,
                            level: e.level,
                            message: (0, d.$X)(e),
                          },
                          { event: e },
                        );
                    }),
                  );
            },
          };
        });
      },
      972130(e, t, n) {
        "use strict";
        n.d(t, { G: () => l });
        var r = n(690094),
          i = n(688331),
          o = n(968072),
          s = n(804524);
        let a = [
            "EventTarget",
            "Window",
            "Node",
            "ApplicationCache",
            "AudioTrackList",
            "BroadcastChannel",
            "ChannelMergerNode",
            "CryptoOperation",
            "EventSource",
            "FileReader",
            "HTMLUnknownElement",
            "IDBDatabase",
            "IDBRequest",
            "IDBTransaction",
            "KeyOperation",
            "MediaController",
            "MessagePort",
            "ModalWindow",
            "Notification",
            "SVGElementInstance",
            "Screen",
            "SharedWorker",
            "TextTrack",
            "TextTrackCue",
            "TextTrackList",
            "WebSocket",
            "WebSocketWorker",
            "Worker",
            "XMLHttpRequest",
            "XMLHttpRequestEventTarget",
            "XMLHttpRequestUpload",
          ],
          l = (0, i._C)((e = {}) => {
            let t = {
              XMLHttpRequest: !0,
              eventTarget: !0,
              requestAnimationFrame: !0,
              setInterval: !0,
              setTimeout: !0,
              ...e,
            };
            return {
              name: "BrowserApiErrors",
              setupOnce() {
                t.setTimeout && (0, r.GS)(s.jf, "setTimeout", c),
                  t.setInterval && (0, r.GS)(s.jf, "setInterval", c),
                  t.requestAnimationFrame &&
                    (0, r.GS)(s.jf, "requestAnimationFrame", u),
                  t.XMLHttpRequest &&
                    "XMLHttpRequest" in s.jf &&
                    (0, r.GS)(XMLHttpRequest.prototype, "send", d);
                let e = t.eventTarget;
                e && (Array.isArray(e) ? e : a).forEach(p);
              },
            };
          });
        function c(e) {
          return function (...t) {
            let n = t[0];
            return (
              (t[0] = (0, s.LV)(n, {
                mechanism: {
                  data: { function: (0, o.qQ)(e) },
                  handled: !1,
                  type: "instrument",
                },
              })),
              e.apply(this, t)
            );
          };
        }
        function u(e) {
          return function (t) {
            return e.apply(this, [
              (0, s.LV)(t, {
                mechanism: {
                  data: {
                    function: "requestAnimationFrame",
                    handler: (0, o.qQ)(e),
                  },
                  handled: !1,
                  type: "instrument",
                },
              }),
            ]);
          };
        }
        function d(e) {
          return function (...t) {
            let n = this;
            return (
              ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(
                (e) => {
                  e in n &&
                    "function" == typeof n[e] &&
                    (0, r.GS)(n, e, function (t) {
                      let n = {
                          mechanism: {
                            data: { function: e, handler: (0, o.qQ)(t) },
                            handled: !1,
                            type: "instrument",
                          },
                        },
                        i = (0, r.sp)(t);
                      return (
                        i && (n.mechanism.data.handler = (0, o.qQ)(i)),
                        (0, s.LV)(t, n)
                      );
                    });
                },
              ),
              e.apply(this, t)
            );
          };
        }
        function p(e) {
          let t = s.jf[e],
            n = t && t.prototype;
          n &&
            n.hasOwnProperty &&
            n.hasOwnProperty("addEventListener") &&
            ((0, r.GS)(n, "addEventListener", function (t) {
              return function (n, r, i) {
                try {
                  var a;
                  (a = r),
                    "function" == typeof a.handleEvent &&
                      (r.handleEvent = (0, s.LV)(r.handleEvent, {
                        mechanism: {
                          data: {
                            function: "handleEvent",
                            handler: (0, o.qQ)(r),
                            target: e,
                          },
                          handled: !1,
                          type: "instrument",
                        },
                      }));
                } catch (e) {}
                return t.apply(this, [
                  n,
                  (0, s.LV)(r, {
                    mechanism: {
                      data: {
                        function: "addEventListener",
                        handler: (0, o.qQ)(r),
                        target: e,
                      },
                      handled: !1,
                      type: "instrument",
                    },
                  }),
                  i,
                ]);
              };
            }),
            (0, r.GS)(n, "removeEventListener", function (e) {
              return function (t, n, r) {
                try {
                  let i = n.__sentry_wrapped__;
                  i && e.call(this, t, i, r);
                } catch (e) {}
                return e.call(this, t, n, r);
              };
            }));
        }
      },
      973913(e, t, n) {
        "use strict";
        n.d(t, { p: () => c });
        var r = n(300297),
          i = n(688331),
          o = n(272469),
          s = n(871186),
          a = n(607423),
          l = n(804524);
        let c = (0, i._C)(() => ({
          name: "BrowserSession",
          setupOnce() {
            if (void 0 === l.jf.document) {
              a.T &&
                o.vF.warn(
                  "Using the `browserSessionIntegration` in non-browser environments is not supported.",
                );
              return;
            }
            (0, s.J0)({ ignoreDuration: !0 }),
              (0, s.J5)(),
              (0, r._)(({ from: e, to: t }) => {
                void 0 !== e &&
                  e !== t &&
                  ((0, s.J0)({ ignoreDuration: !0 }), (0, s.J5)());
              });
          },
        }));
      },
      392679(e, t, n) {
        "use strict";
        n.d(t, { l: () => l });
        var r = n(978862),
          i = n(688331),
          o = n(791132),
          s = n(231577);
        let a = r.O,
          l = (0, i._C)((e = {}) => {
            let t = null != e.frameContextLines ? e.frameContextLines : 7;
            return {
              name: "ContextLines",
              processEvent: (e) =>
                (function (e, t) {
                  let n = a.document,
                    r = a.location && (0, o.f)(a.location.href);
                  if (!n || !r) return e;
                  let i = e.exception && e.exception.values;
                  if (!i || !i.length) return e;
                  let l = n.documentElement.innerHTML;
                  if (!l) return e;
                  let c = [
                    "<!DOCTYPE html>",
                    "<html>",
                    ...l.split("\n"),
                    "</html>",
                  ];
                  return (
                    i.forEach((e) => {
                      let n = e.stacktrace;
                      n &&
                        n.frames &&
                        (n.frames = n.frames.map((e) => {
                          var n, i, o, a;
                          return (
                            (n = e),
                            (i = c),
                            (o = r),
                            (a = t),
                            n.filename === o &&
                              n.lineno &&
                              i.length &&
                              (0, s.db)(i, n, a),
                            n
                          );
                        }));
                    }),
                    e
                  );
                })(e, t),
            };
          });
      },
      883950(e, t, n) {
        "use strict";
        n.d(t, { S: () => o });
        var r = n(688331),
          i = n(215570);
        let o = (0, r._C)(() => ({
          name: "FeatureFlags",
          processEvent: (e, t, n) => (0, i.OW)(e),
          addFeatureFlag(e, t) {
            (0, i.bj)(e, t);
          },
        }));
      },
      774206(e, t, n) {
        "use strict";
        n.d(t, { L: () => o, g: () => s });
        var r = n(688331),
          i = n(215570);
        let o = (0, r._C)(() => ({
          name: "LaunchDarkly",
          processEvent: (e, t, n) => (0, i.OW)(e),
        }));
        function s() {
          return {
            name: "sentry-flag-auditor",
            type: "flag-used",
            synchronous: !0,
            method: (e, t, n) => {
              (0, i.bj)(e, t.value);
            },
          };
        }
      },
      372084(e, t, n) {
        "use strict";
        n.d(t, { h: () => o, o: () => s });
        var r = n(688331),
          i = n(215570);
        let o = (0, r._C)(() => ({
          name: "OpenFeature",
          processEvent: (e, t, n) => (0, i.OW)(e),
        }));
        class s {
          after(e, t) {
            (0, i.bj)(t.flagKey, t.value);
          }
          error(e, t, n) {
            (0, i.bj)(e.flagKey, e.defaultValue);
          }
        }
      },
      58797(e, t, n) {
        "use strict";
        n.d(t, { I: () => o });
        var r = n(688331),
          i = n(215570);
        let o = (0, r._C)(({ featureFlagClient: e }) => ({
          name: "Statsig",
          processEvent: (e, t, n) => (0, i.OW)(e),
          setup() {
            e.on("gate_evaluation", (e) => {
              (0, i.bj)(e.gate.name, e.gate.value);
            });
          },
        }));
      },
      157738(e, t, n) {
        "use strict";
        n.d(t, { v: () => l });
        var r = n(688331),
          i = n(690094),
          o = n(272469),
          s = n(607423),
          a = n(215570);
        let l = (0, r._C)(({ unleashClientClass: e }) => ({
          name: "Unleash",
          processEvent: (e, t, n) => (0, a.OW)(e),
          setupOnce() {
            let t = e.prototype;
            (0, i.GS)(t, "isEnabled", c);
          },
        }));
        function c(e) {
          return function (...t) {
            let n = t[0],
              r = e.apply(this, t);
            return (
              "string" == typeof n && "boolean" == typeof r
                ? (0, a.bj)(n, r)
                : s.T &&
                  o.vF.error(
                    `[Feature Flags] UnleashClient.isEnabled does not match expected signature. arg0: ${n} (${typeof n}), result: ${r} (${typeof r})`,
                  ),
              r
            );
          };
        }
      },
      774099(e, t, n) {
        "use strict";
        n.d(t, { L: () => f });
        var r = n(688331),
          i = n(469052),
          o = n(630449),
          s = n(871186),
          a = n(291686),
          l = n(875565),
          c = n(693037),
          u = n(272469),
          d = n(607423),
          p = n(297458),
          h = n(804524);
        let f = (0, r._C)((e = {}) => {
          let t = { onerror: !0, onunhandledrejection: !0, ...e };
          return {
            name: "GlobalHandlers",
            setupOnce() {
              Error.stackTraceLimit = 50;
            },
            setup(e) {
              var n, r;
              t.onerror &&
                ((n = e),
                (0, i.L)((e) => {
                  var t, r, i, a;
                  let u,
                    d,
                    f,
                    m,
                    _,
                    v,
                    { stackParser: y, attachStacktrace: b } = g();
                  if ((0, o.KU)() !== n || (0, h.jN)()) return;
                  let { msg: S, url: w, line: E, column: k, error: x } = e,
                    C =
                      ((t = (0, p.H7)(y, x || S, void 0, b, !1)),
                      (r = w),
                      (i = E),
                      (a = k),
                      (_ = (m = (f = (d = (u = t.exception =
                        t.exception || {}).values =
                        u.values || [])[0] =
                        d[0] || {}).stacktrace =
                        f.stacktrace || {}).frames =
                        m.frames || []),
                      (v = (0, l.Kg)(r) && r.length > 0 ? r : (0, c.$N)()),
                      0 === _.length &&
                        _.push({
                          colno: a,
                          filename: v,
                          function: "?",
                          in_app: !0,
                          lineno: i,
                        }),
                      t);
                  (C.level = "error"),
                    (0, s.r)(C, {
                      originalException: x,
                      mechanism: { handled: !1, type: "onerror" },
                    });
                }),
                m("onerror")),
                t.onunhandledrejection &&
                  ((r = e),
                  (0, a.r)((e) => {
                    var t;
                    let { stackParser: n, attachStacktrace: i } = g();
                    if ((0, o.KU)() !== r || (0, h.jN)()) return;
                    let a = (function (e) {
                        if ((0, l.sO)(e)) return e;
                        try {
                          if ("reason" in e) return e.reason;
                          if ("detail" in e && "reason" in e.detail)
                            return e.detail.reason;
                        } catch (e) {}
                        return e;
                      })(e),
                      c = (0, l.sO)(a)
                        ? ((t = a),
                          {
                            exception: {
                              values: [
                                {
                                  type: "UnhandledRejection",
                                  value: `Non-Error promise rejection captured with value: ${String(t)}`,
                                },
                              ],
                            },
                          })
                        : (0, p.H7)(n, a, void 0, i, !0);
                    (c.level = "error"),
                      (0, s.r)(c, {
                        originalException: a,
                        mechanism: {
                          handled: !1,
                          type: "onunhandledrejection",
                        },
                      });
                  }),
                  m("onunhandledrejection"));
            },
          };
        });
        function m(e) {
          d.T && u.vF.log(`Global Handler attached: ${e}`);
        }
        function g() {
          let e = (0, o.KU)();
          return (
            (e && e.getOptions()) || {
              stackParser: () => [],
              attachStacktrace: !1,
            }
          );
        }
      },
      286622(e, t, n) {
        "use strict";
        n.d(t, { c: () => f });
        var r = n(69171),
          i = n(688331),
          o = n(871186),
          s = n(366781),
          a = n(823783),
          l = n(630449),
          c = n(978862),
          u = n(272469),
          d = n(509474),
          p = n(231577),
          h = n(607423);
        let f = (0, i._C)((e = {}) => {
          let t = {
            failedRequestStatusCodes: [[500, 599]],
            failedRequestTargets: [/.*/],
            ...e,
          };
          return {
            name: "HttpClient",
            setup(e) {
              var n, i, d, p;
              (n = e),
                (i = t),
                (0, s.m7)() &&
                  (0, a.ur)((e) => {
                    if ((0, l.KU)() !== n) return;
                    let { response: t, args: r, error: s, virtualError: a } = e,
                      [c, u] = r;
                    t &&
                      (function (e, t, n, r, i) {
                        if (_(e, n.status, n.url)) {
                          var s, a;
                          let e,
                            l,
                            c,
                            u,
                            d =
                              ((s = t),
                              (!(a = r) && s instanceof Request) ||
                              (s instanceof Request && s.bodyUsed)
                                ? s
                                : new Request(s, a));
                          y() &&
                            (([e, c] = m("Cookie", d)),
                            ([l, u] = m("Set-Cookie", n)));
                          let p = v({
                            url: d.url,
                            method: d.method,
                            status: n.status,
                            requestHeaders: e,
                            responseHeaders: l,
                            requestCookies: c,
                            responseCookies: u,
                            error: i,
                          });
                          (0, o.r)(p);
                        }
                      })(i, c, t, u, s || a);
                  }, !1),
                (d = e),
                (p = t),
                "XMLHttpRequest" in c.O &&
                  (0, r.Mn)((e) => {
                    if ((0, l.KU)() !== d) return;
                    let { error: t, virtualError: n } = e,
                      i = e.xhr,
                      s = i[r.Er];
                    if (!s) return;
                    let { method: a, request_headers: c } = s;
                    try {
                      !(function (e, t, n, r, i) {
                        if (_(e, t.status, t.responseURL)) {
                          let e, s, a;
                          if (y()) {
                            try {
                              let e =
                                t.getResponseHeader("Set-Cookie") ||
                                t.getResponseHeader("set-cookie") ||
                                void 0;
                              e && (s = g(e));
                            } catch (e) {}
                            try {
                              let e;
                              a = (e = t.getAllResponseHeaders())
                                ? e.split("\r\n").reduce((e, t) => {
                                    let [n, r] = t.split(": ");
                                    return n && r && (e[n] = r), e;
                                  }, {})
                                : {};
                            } catch (e) {}
                            e = r;
                          }
                          let l = v({
                            url: t.responseURL,
                            method: n,
                            status: t.status,
                            requestHeaders: e,
                            responseHeaders: a,
                            responseCookies: s,
                            error: i,
                          });
                          (0, o.r)(l);
                        }
                      })(p, i, a, c, t || n);
                    } catch (e) {
                      h.T &&
                        u.vF.warn(
                          "Error while extracting response event form XHR response",
                          e,
                        );
                    }
                  });
            },
          };
        });
        function m(e, t) {
          var n;
          let r,
            i,
            o =
              ((n = t.headers),
              (r = {}),
              n.forEach((e, t) => {
                r[t] = e;
              }),
              r);
          try {
            let t = o[e] || o[e.toLowerCase()] || void 0;
            t && (i = g(t));
          } catch (e) {}
          return [o, i];
        }
        function g(e) {
          return e.split("; ").reduce((e, t) => {
            let [n, r] = t.split("=");
            return n && r && (e[n] = r), e;
          }, {});
        }
        function _(e, t, n) {
          var r, i;
          return (
            (r = e.failedRequestStatusCodes),
            r.some((e) =>
              "number" == typeof e ? e === t : t >= e[0] && t <= e[1],
            ) &&
              ((i = e.failedRequestTargets),
              i.some((e) =>
                "string" == typeof e ? n.includes(e) : e.test(n),
              )) &&
              !(0, d.A)(n, (0, l.KU)())
          );
        }
        function v(e) {
          let t = (0, l.KU)(),
            n =
              t && e.error && e.error instanceof Error ? e.error.stack : void 0,
            r = n && t ? t.getOptions().stackParser(n, 0, 1) : void 0,
            i = `HTTP Client Error with status code: ${e.status}`,
            o = {
              message: i,
              exception: {
                values: [
                  {
                    type: "Error",
                    value: i,
                    stacktrace: r ? { frames: r } : void 0,
                  },
                ],
              },
              request: {
                url: e.url,
                method: e.method,
                headers: e.requestHeaders,
                cookies: e.requestCookies,
              },
              contexts: {
                response: {
                  status_code: e.status,
                  headers: e.responseHeaders,
                  cookies: e.responseCookies,
                  body_size: (function (e) {
                    if (e) {
                      let t = e["Content-Length"] || e["content-length"];
                      if (t) return parseInt(t, 10);
                    }
                  })(e.responseHeaders),
                },
              },
            };
          return (0, p.M6)(o, { type: "http.client", handled: !1 }), o;
        }
        function y() {
          let e = (0, l.KU)();
          return !!e && !!e.getOptions().sendDefaultPii;
        }
      },
      416626(e, t, n) {
        "use strict";
        n.d(t, { M: () => o });
        var r = n(688331),
          i = n(804524);
        let o = (0, r._C)(() => ({
          name: "HttpContext",
          preprocessEvent(e) {
            if (!i.jf.navigator && !i.jf.location && !i.jf.document) return;
            let t =
                (e.request && e.request.url) ||
                (i.jf.location && i.jf.location.href),
              { referrer: n } = i.jf.document || {},
              { userAgent: r } = i.jf.navigator || {},
              o = {
                ...(e.request && e.request.headers),
                ...(n && { Referer: n }),
                ...(r && { "User-Agent": r }),
              },
              s = { ...e.request, ...(t && { url: t }), headers: o };
            e.request = s;
          },
        }));
      },
      956203(e, t, n) {
        "use strict";
        n.d(t, { p: () => s });
        var r = n(391316),
          i = n(688331),
          o = n(297458);
        let s = (0, i._C)((e = {}) => {
          let t = e.limit || 5,
            n = e.key || "cause";
          return {
            name: "LinkedErrors",
            preprocessEvent(e, i, s) {
              let a = s.getOptions();
              (0, r.Q)(o.K8, a.stackParser, a.maxValueLength, n, t, e, i);
            },
          };
        });
      },
      152937(e, t, n) {
        "use strict";
        n.d(t, { n: () => u });
        var r = n(978862),
          i = n(630449),
          o = n(871186),
          s = n(366781),
          a = n(688331);
        let l = r.O,
          c = new WeakMap(),
          u = (0, a._C)((e = {}) => {
            let t = e.types || ["crash", "deprecation", "intervention"];
            function n(e) {
              if (c.has((0, i.KU)()))
                for (let t of e)
                  (0, i.v4)((e) => {
                    e.setExtra("url", t.url);
                    let n = `ReportingObserver [${t.type}]`,
                      r = "No details available";
                    if (t.body) {
                      let n = {};
                      for (let e in t.body) n[e] = t.body[e];
                      if ((e.setExtra("body", n), "crash" === t.type)) {
                        let e = t.body;
                        r =
                          [e.crashId || "", e.reason || ""].join(" ").trim() ||
                          r;
                      } else r = t.body.message || r;
                    }
                    (0, o.wd)(`${n}: ${r}`);
                  });
            }
            return {
              name: "ReportingObserver",
              setupOnce() {
                (0, s.vQ)() &&
                  new l.ReportingObserver(n, {
                    buffered: !0,
                    types: t,
                  }).observe();
              },
              setup(e) {
                c.set(e, !0);
              },
            };
          });
      },
      124861(e, t, n) {
        "use strict";
        n.d(t, { zP: () => l });
        var r = n(743154),
          i = n(272469),
          o = n(847745),
          s = n(688331),
          a = n(607423);
        let l = (0, s._C)((e = {}) => {
          let t = e.sidecarUrl || "http://localhost:8969/stream";
          return {
            name: "SpotlightBrowser",
            setup: () => {
              a.T && i.vF.log("Using Sidecar URL", t);
            },
            processEvent: (e) => {
              var t;
              return "transaction" === (t = e).type &&
                t.spans &&
                t.contexts &&
                t.contexts.trace &&
                "ui.action.click" === t.contexts.trace.op &&
                t.spans.some(
                  ({ description: e }) => e && e.includes("#sentry-spotlight"),
                )
                ? null
                : e;
            },
            afterAllSetup: (e) => {
              var n, s;
              let a, l;
              (n = e),
                (s = t),
                (a = (0, r.qd)("fetch")),
                (l = 0),
                n.on("beforeEnvelope", (e) => {
                  l > 3
                    ? i.vF.warn(
                        "[Spotlight] Disabled Sentry -> Spotlight integration due to too many failed requests:",
                        l,
                      )
                    : a(s, {
                        method: "POST",
                        body: (0, o.bN)(e),
                        headers: {
                          "Content-Type": "application/x-sentry-envelope",
                        },
                        mode: "cors",
                      }).then(
                        (e) => {
                          e.status >= 200 && e.status < 400 && (l = 0);
                        },
                        (e) => {
                          l++,
                            i.vF.error(
                              "Sentry SDK can't connect to Sidecar is it running? See: https://spotlightjs.com/sidecar/npx/",
                              e,
                            );
                        },
                      );
                });
            },
          };
        });
      },
      630700(e, t, n) {
        "use strict";
        n.d(t, { q: () => o });
        var r = n(888700),
          i = n(564289);
        let o = {
          increment: function (e, t = 1, n) {
            r.q.increment(i.v, e, t, n);
          },
          distribution: function (e, t, n) {
            r.q.distribution(i.v, e, t, n);
          },
          set: function (e, t, n) {
            r.q.set(i.v, e, t, n);
          },
          gauge: function (e, t, n) {
            r.q.gauge(i.v, e, t, n);
          },
          timing: function (e, t, n = "second", o) {
            return r.q.timing(i.v, e, t, n, o);
          },
        };
      },
      992734(e, t, n) {
        "use strict";
        n.d(t, { f: () => c });
        var r = n(582102),
          i = n(272469),
          o = n(688331),
          s = n(607423),
          a = n(989808),
          l = n(400713);
        let c = (0, o._C)(() => ({
          name: "BrowserProfiling",
          setup(e) {
            let t = (0, r.Bk)(),
              n = t && (0, r.zU)(t);
            n && (0, l.c4)(n) && (0, l.Xu)(n) && (0, a.H)(n),
              e.on("spanStart", (e) => {
                e === (0, r.zU)(e) && (0, l.Xu)(e) && (0, a.H)(e);
              }),
              e.on("beforeEnvelope", (e) => {
                if (!(0, l.ex)()) return;
                let t = (0, l.WK)(e);
                if (!t.length) return;
                let n = [];
                for (let e of t) {
                  let t = e && e.contexts,
                    r = t && t.profile && t.profile.profile_id,
                    o = t && t.profile && t.profile.start_timestamp;
                  if ("string" != typeof r || !r) {
                    s.T &&
                      i.vF.log(
                        "[Profiling] cannot find profile for a span without a profile context",
                      );
                    continue;
                  }
                  t && t.profile && delete t.profile;
                  let a = (0, l.ws)(r);
                  if (!a) {
                    s.T &&
                      i.vF.log(
                        `[Profiling] Could not retrieve profile for span: ${r}`,
                      );
                    continue;
                  }
                  let c = (0, l.Bj)(r, o, a, e);
                  c && n.push(c);
                }
                (0, l.lV)(e, n);
              });
          },
        }));
      },
      989808(e, t, n) {
        "use strict";
        n.d(t, { H: () => d });
        var r = n(83220),
          i = n(272469),
          o = n(582102),
          s = n(231577),
          a = n(630449),
          l = n(607423),
          c = n(804524),
          u = n(400713);
        function d(e) {
          let t;
          (0, u.c4)(e) && (t = 1e3 * (0, r.zf)());
          let n = (0, u.Dg)();
          if (!n) return;
          l.T &&
            i.vF.log(
              `[Profiling] started profiling span: ${(0, o.et)(e).description}`,
            );
          let d = (0, s.eJ)();
          async function p() {
            if (e && n)
              return n
                .stop()
                .then((t) => {
                  if (
                    (h && (c.jf.clearTimeout(h), (h = void 0)),
                    l.T &&
                      i.vF.log(
                        `[Profiling] stopped profiling of span: ${(0, o.et)(e).description}`,
                      ),
                    !t)
                  ) {
                    l.T &&
                      i.vF.log(
                        `[Profiling] profiler returned null profile for: ${(0, o.et)(e).description}`,
                        "this may indicate an overlapping span or a call to stopProfiling with a profile title that was never started",
                      );
                    return;
                  }
                  (0, u.DE)(d, t);
                })
                .catch((e) => {
                  l.T &&
                    i.vF.log("[Profiling] error while stopping profiler:", e);
                });
          }
          (0, a.o5)().setContext("profile", {
            profile_id: d,
            start_timestamp: t,
          });
          let h = c.jf.setTimeout(() => {
              l.T &&
                i.vF.log(
                  "[Profiling] max profile duration elapsed, stopping profiling for:",
                  (0, o.et)(e).description,
                ),
                p();
            }, u.TD),
            f = e.end.bind(e);
          e.end = function () {
            return e
              ? (p().then(
                  () => {
                    f();
                  },
                  () => {
                    f();
                  },
                ),
                e)
              : f();
          };
        }
      },
      400713(e, t, n) {
        "use strict";
        n.d(t, {
          Bj: () => I,
          DE: () => R,
          Dg: () => C,
          TD: () => x,
          WK: () => E,
          Xu: () => T,
          c4: () => S,
          ex: () => O,
          lV: () => w,
          ws: () => D,
        });
        var r = n(272469),
          i = n(83220),
          o = n(922248),
          s = n(231577),
          a = n(582102),
          l = n(847745),
          c = n(630449),
          u = n(754433),
          d = n(607423),
          p = n(804524);
        let h = String(0),
          f = "",
          m = "",
          g = "",
          _ = (p.jf.navigator && p.jf.navigator.userAgent) || "",
          v = "",
          y =
            (p.jf.navigator && p.jf.navigator.language) ||
            (p.jf.navigator &&
              p.jf.navigator.languages &&
              p.jf.navigator.languages["0"]) ||
            "",
          b = p.jf.navigator && p.jf.navigator.userAgentData;
        function S(e) {
          return "pageload" === (0, a.et)(e).op;
        }
        function w(e, t) {
          if (!t.length) return e;
          for (let n of t) e[1].push([{ type: "profile" }, n]);
          return e;
        }
        function E(e) {
          let t = [];
          return (
            (0, l.yH)(e, (e, n) => {
              if ("transaction" === n)
                for (let n = 1; n < e.length; n++) {
                  let r = e[n];
                  r &&
                    r.contexts &&
                    r.contexts.profile &&
                    r.contexts.profile.profile_id &&
                    t.push(e[n]);
                }
            }),
            t
          );
        }
        "object" == typeof b &&
          null !== b &&
          "getHighEntropyValues" in b &&
          b
            .getHighEntropyValues([
              "architecture",
              "model",
              "platform",
              "platformVersion",
              "fullVersionList",
            ])
            .then((e) => {
              if (
                ((f = e.platform || ""),
                (g = e.architecture || ""),
                (v = e.model || ""),
                (m = e.platformVersion || ""),
                e.fullVersionList && e.fullVersionList.length > 0)
              ) {
                let t = e.fullVersionList[e.fullVersionList.length - 1];
                _ = `${t.brand} ${t.version}`;
              }
            })
            .catch((e) => void 0);
        let k = !1,
          x = 3e4;
        function C() {
          let e = p.jf.Profiler;
          if ("function" != typeof e) {
            d.T &&
              r.vF.log(
                "[Profiling] Profiling is not supported by this browser, Profiler interface missing on window object.",
              );
            return;
          }
          let t = Math.floor(x / 10);
          try {
            return new e({ sampleInterval: 10, maxBufferSize: t });
          } catch (e) {
            d.T &&
              (r.vF.log(
                "[Profiling] Failed to initialize the Profiling constructor, this is likely due to a missing 'Document-Policy': 'js-profiling' header.",
              ),
              r.vF.log(
                "[Profiling] Disabling profiling for current user session.",
              )),
              (k = !0);
          }
        }
        function T(e) {
          if (k)
            return (
              d.T &&
                r.vF.log(
                  "[Profiling] Profiling has been disabled for the duration of the current user session.",
                ),
              !1
            );
          if (!e.isRecording())
            return (
              d.T &&
                r.vF.log(
                  "[Profiling] Discarding profile because transaction was not sampled.",
                ),
              !1
            );
          let t = (0, c.KU)(),
            n = t && t.getOptions();
          if (!n)
            return (
              d.T &&
                r.vF.log("[Profiling] Profiling disabled, no options found."),
              !1
            );
          let i = n.profilesSampleRate;
          return (
            ("number" != typeof i && "boolean" != typeof i) ||
            ("number" == typeof i && isNaN(i))
              ? (d.T &&
                  r.vF.warn(
                    `[Profiling] Invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(i)} of type ${JSON.stringify(typeof i)}.`,
                  ),
                1)
              : !0 !== i &&
                !1 !== i &&
                (i < 0 || i > 1) &&
                (d.T &&
                  r.vF.warn(
                    `[Profiling] Invalid sample rate. Sample rate must be between 0 and 1. Got ${i}.`,
                  ),
                1)
          )
            ? (d.T &&
                r.vF.warn(
                  "[Profiling] Discarding profile because of invalid sample rate.",
                ),
              !1)
            : i
              ? !!(!0 === i || Math.random() < i) ||
                (d.T &&
                  r.vF.log(
                    `[Profiling] Discarding profile because it's not included in the random sample (sampling rate = ${Number(i)})`,
                  ),
                !1)
              : (d.T &&
                  r.vF.log(
                    "[Profiling] Discarding profile because a negative sampling decision was inherited or profileSampleRate is set to 0",
                  ),
                !1);
        }
        function I(e, t, n, a) {
          return (
            n.samples.length < 2
              ? (d.T &&
                  r.vF.log(
                    "[Profiling] Discarding profile because it contains less than 2 samples",
                  ),
                1)
              : !n.frames.length &&
                (d.T &&
                  r.vF.log(
                    "[Profiling] Discarding profile because it contains no frames",
                  ),
                1)
          )
            ? null
            : (function (e, t, n, a) {
                var l, b;
                let S, w, E, k;
                if ("transaction" !== a.type)
                  throw TypeError(
                    "Profiling events may only be attached to transactions, this should never occur.",
                  );
                if (null == n)
                  throw TypeError(
                    `Cannot construct profiling event envelope without a valid profile. Got ${n} instead.`,
                  );
                let x = ("string" ==
                    typeof (S =
                      a &&
                      a.contexts &&
                      a.contexts.trace &&
                      a.contexts.trace.trace_id) &&
                    32 !== S.length &&
                    d.T &&
                    r.vF.log(
                      `[Profiling] Invalid traceId: ${S} on profiled event`,
                    ),
                  "string" != typeof S)
                    ? ""
                    : S,
                  C =
                    "thread_metadata" in (l = n)
                      ? l
                      : (function (e) {
                          let t,
                            n = 0,
                            r = {
                              samples: [],
                              stacks: [],
                              frames: [],
                              thread_metadata: { [h]: { name: "main" } },
                            },
                            o = e.samples[0];
                          if (!o) return r;
                          let s = o.timestamp,
                            a =
                              "number" == typeof performance.timeOrigin
                                ? performance.timeOrigin
                                : i.k3 || 0,
                            l = a - (i.k3 || a);
                          return (
                            e.samples.forEach((i, o) => {
                              if (void 0 === i.stackId) {
                                void 0 === t &&
                                  ((t = n), (r.stacks[t] = []), n++),
                                  (r.samples[o] = {
                                    elapsed_since_start_ns: (
                                      (i.timestamp + l - s) *
                                      1e6
                                    ).toFixed(0),
                                    stack_id: t,
                                    thread_id: h,
                                  });
                                return;
                              }
                              let a = e.stacks[i.stackId],
                                c = [];
                              for (; a; ) {
                                c.push(a.frameId);
                                let t = e.frames[a.frameId];
                                t &&
                                  void 0 === r.frames[a.frameId] &&
                                  (r.frames[a.frameId] = {
                                    function: t.name,
                                    abs_path:
                                      "number" == typeof t.resourceId
                                        ? e.resources[t.resourceId]
                                        : void 0,
                                    lineno: t.line,
                                    colno: t.column,
                                  }),
                                  (a =
                                    void 0 === a.parentId
                                      ? void 0
                                      : e.stacks[a.parentId]);
                              }
                              let u = {
                                elapsed_since_start_ns: (
                                  (i.timestamp + l - s) *
                                  1e6
                                ).toFixed(0),
                                stack_id: n,
                                thread_id: h,
                              };
                              (r.stacks[n] = c), (r.samples[o] = u), n++;
                            }),
                            r
                          );
                        })(l),
                  T =
                    t ||
                    ("number" == typeof a.start_timestamp
                      ? 1e3 * a.start_timestamp
                      : 1e3 * (0, i.zf)()),
                  I =
                    "number" == typeof a.timestamp
                      ? 1e3 * a.timestamp
                      : 1e3 * (0, i.zf)();
                return {
                  event_id: e,
                  timestamp: new Date(T).toISOString(),
                  platform: "javascript",
                  version: "1",
                  release: a.release || "",
                  environment: a.environment || o.U,
                  runtime: {
                    name: "javascript",
                    version: p.jf.navigator.userAgent,
                  },
                  os: { name: f, version: m, build_number: _ },
                  device: {
                    locale: y,
                    model: v,
                    manufacturer: _,
                    architecture: g,
                    is_emulator: !1,
                  },
                  debug_meta: {
                    images:
                      ((b = n.resources),
                      (k =
                        (E = (w = (0, c.KU)()) && w.getOptions()) &&
                        E.stackParser)
                        ? (0, u.i)(k, b)
                        : []),
                  },
                  profile: C,
                  transactions: [
                    {
                      name: a.transaction || "",
                      id: a.event_id || (0, s.eJ)(),
                      trace_id: x,
                      active_thread_id: h,
                      relative_start_ns: "0",
                      relative_end_ns: ((I - T) * 1e6).toFixed(0),
                    },
                  ],
                };
              })(e, t, n, a);
        }
        let M = new Map();
        function O() {
          return M.size;
        }
        function D(e) {
          let t = M.get(e);
          return t && M.delete(e), t;
        }
        function R(e, t) {
          if ((M.set(e, t), M.size > 30)) {
            let e = M.keys().next().value;
            M.delete(e);
          }
        }
      },
      501661(e, t, n) {
        "use strict";
        n.d(t, {
          Ts: () => C,
          kF: () => M,
          lo: () => O,
          mn: () => T,
          nI: () => x,
          w7: () => I,
        });
        var r = n(550601),
          i = n(76005),
          o = n(453614),
          s = n(272469),
          a = n(366781),
          l = n(968072),
          c = n(688331),
          u = n(779949),
          d = n(630449),
          p = n(871186),
          h = n(555625),
          f = n(313322),
          m = n(607423),
          g = n(804524),
          _ = n(122343),
          v = n(972130),
          y = n(973913),
          b = n(774099),
          S = n(416626),
          w = n(956203),
          E = n(719736),
          k = n(195588);
        function x(e) {
          let t = [
            (0, r.D)(),
            (0, i.Z)(),
            (0, v.G)(),
            (0, _.F)(),
            (0, b.L)(),
            (0, w.p)(),
            (0, o.s)(),
            (0, S.M)(),
          ];
          return !1 !== e.autoSessionTracking && t.push((0, y.p)()), t;
        }
        function C(e = {}) {
          let t = (function (e = {}) {
            let t = {
              defaultIntegrations: x(e),
              release:
                "string" == typeof __SENTRY_RELEASE__
                  ? __SENTRY_RELEASE__
                  : g.jf.SENTRY_RELEASE && g.jf.SENTRY_RELEASE.id
                    ? g.jf.SENTRY_RELEASE.id
                    : void 0,
              autoSessionTracking: !0,
              sendClientReports: !0,
            };
            return (
              null == e.defaultIntegrations && delete e.defaultIntegrations,
              { ...t, ...e }
            );
          })(e);
          if (
            !t.skipBrowserExtensionCheck &&
            (function () {
              let e = void 0 !== g.jf.window && g.jf;
              if (!e) return !1;
              let t = e.chrome ? "chrome" : "browser",
                n = e[t],
                r = n && n.runtime && n.runtime.id,
                i = (g.jf.location && g.jf.location.href) || "",
                o =
                  !!r &&
                  g.jf === g.jf.top &&
                  [
                    "chrome-extension:",
                    "moz-extension:",
                    "ms-browser-extension:",
                    "safari-web-extension:",
                  ].some((e) => i.startsWith(`${e}//`)),
                s = void 0 !== e.nw;
              return !!r && !o && !s;
            })()
          )
            return void (0, s.pq)(() => {
              console.error(
                "[Sentry] You cannot run Sentry this way in a browser extension, check: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/",
              );
            });
          m.T &&
            !(0, a.vm)() &&
            s.vF.warn(
              "No Fetch API detected. The Sentry SDK requires a Fetch API compatible environment to send events. Please add a Fetch API polyfill.",
            );
          let n = {
            ...t,
            stackParser: (0, l.vk)(t.stackParser || E.lG),
            integrations: (0, c.mH)(t),
            transport: t.transport || k._,
          };
          return (0, u.J)(f.y, n);
        }
        function T(e = {}) {
          if (!g.jf.document) {
            m.T &&
              s.vF.error(
                "Global document not defined in showReportDialog call",
              );
            return;
          }
          let t = (0, d.o5)(),
            n = t.getClient(),
            r = n && n.getDsn();
          if (!r) {
            m.T && s.vF.error("DSN not configured for showReportDialog call");
            return;
          }
          if ((t && (e.user = { ...t.getUser(), ...e.user }), !e.eventId)) {
            let t = (0, p.Q)();
            t && (e.eventId = t);
          }
          let i = g.jf.document.createElement("script");
          (i.async = !0),
            (i.crossOrigin = "anonymous"),
            (i.src = (0, h.k)(r, e)),
            e.onLoad && (i.onload = e.onLoad);
          let { onClose: o } = e;
          if (o) {
            let e = (t) => {
              if ("__sentry_reportdialog_closed__" === t.data)
                try {
                  o();
                } finally {
                  g.jf.removeEventListener("message", e);
                }
            };
            g.jf.addEventListener("message", e);
          }
          let a = g.jf.document.head || g.jf.document.body;
          a
            ? a.appendChild(i)
            : m.T &&
              s.vF.error(
                "Not injecting report dialog. No injection point found in HTML",
              );
        }
        function I() {}
        function M(e) {
          e();
        }
        function O(e) {
          let t = (0, d.KU)();
          t && t.captureUserFeedback(e);
        }
      },
      719736(e, t, n) {
        "use strict";
        n.d(t, {
          $2: () => h,
          Q_: () => m,
          Vv: () => _,
          Yj: () => l,
          c9: () => v,
          dY: () => d,
          lG: () => y,
        });
        var r = n(968072);
        function i(e, t, n, r) {
          let i = {
            filename: e,
            function: "<anonymous>" === t ? "?" : t,
            in_app: !0,
          };
          return (
            void 0 !== n && (i.lineno = n), void 0 !== r && (i.colno = r), i
          );
        }
        let o = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
          s =
            /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
          a = /\((\S*)(?::(\d+))(?::(\d+))\)/,
          l = [
            30,
            (e) => {
              let t = o.exec(e);
              if (t) {
                let [, e, n, r] = t;
                return i(e, "?", +n, +r);
              }
              let n = s.exec(e);
              if (n) {
                if (n[2] && 0 === n[2].indexOf("eval")) {
                  let e = a.exec(n[2]);
                  e && ((n[2] = e[1]), (n[3] = e[2]), (n[4] = e[3]));
                }
                let [e, t] = b(n[1] || "?", n[2]);
                return i(t, e, n[3] ? +n[3] : void 0, n[4] ? +n[4] : void 0);
              }
            },
          ],
          c =
            /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
          u = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
          d = [
            50,
            (e) => {
              let t = c.exec(e);
              if (t) {
                if (t[3] && t[3].indexOf(" > eval") > -1) {
                  let e = u.exec(t[3]);
                  e &&
                    ((t[1] = t[1] || "eval"),
                    (t[3] = e[1]),
                    (t[4] = e[2]),
                    (t[5] = ""));
                }
                let e = t[3],
                  n = t[1] || "?";
                return (
                  ([n, e] = b(n, e)),
                  i(e, n, t[4] ? +t[4] : void 0, t[5] ? +t[5] : void 0)
                );
              }
            },
          ],
          p =
            /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
          h = [
            40,
            (e) => {
              let t = p.exec(e);
              return t
                ? i(t[2], t[1] || "?", +t[3], t[4] ? +t[4] : void 0)
                : void 0;
            },
          ],
          f = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,
          m = [
            10,
            (e) => {
              let t = f.exec(e);
              return t ? i(t[2], t[3] || "?", +t[1]) : void 0;
            },
          ],
          g =
            / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i,
          _ = [
            20,
            (e) => {
              let t = g.exec(e);
              return t ? i(t[5], t[3] || t[4] || "?", +t[1], +t[2]) : void 0;
            },
          ],
          v = [l, d],
          y = (0, r.gd)(...v),
          b = (e, t) => {
            let n = -1 !== e.indexOf("safari-extension"),
              r = -1 !== e.indexOf("safari-web-extension");
            return n || r
              ? [
                  -1 !== e.indexOf("@") ? e.split("@")[0] : "?",
                  n ? `safari-extension:${t}` : `safari-web-extension:${t}`,
                ]
              : [e, t];
          };
      },
      795363(e, t, n) {
        "use strict";
        n.d(t, { i: () => a });
        var r = n(582102),
          i = n(272469),
          o = n(607423),
          s = n(804524);
        function a() {
          s.jf && s.jf.document
            ? s.jf.document.addEventListener("visibilitychange", () => {
                let e = (0, r.Bk)();
                if (!e) return;
                let t = (0, r.zU)(e);
                if (s.jf.document.hidden && t) {
                  let e = "cancelled",
                    { op: n, status: s } = (0, r.et)(t);
                  o.T &&
                    i.vF.log(
                      `[Tracing] Transaction: ${e} -> since tab moved to the background, op: ${n}`,
                    ),
                    s || t.setStatus({ code: 2, message: e }),
                    t.setAttribute(
                      "sentry.cancellation_reason",
                      "document.hidden",
                    ),
                    t.end();
                }
              })
            : o.T &&
              i.vF.warn(
                "[Tracing] Could not set up background tab detection due to lack of global document",
              );
        }
      },
      719468(e, t, n) {
        "use strict";
        n.d(t, { Nt: () => x, Sx: () => k, dp: () => E });
        var r = n(208232),
          i = n(673604),
          o = n(300297),
          s = n(925012),
          a = n(439057),
          l = n(978862),
          c = n(92332),
          u = n(582102),
          d = n(272469),
          p = n(630449),
          h = n(697043),
          f = n(411361),
          m = n(83220),
          g = n(834932),
          _ = n(693037),
          v = n(607423),
          y = n(804524),
          b = n(795363),
          S = n(795197);
        let w = {
            ...s.C,
            instrumentNavigation: !0,
            instrumentPageLoad: !0,
            markBackgroundSpan: !0,
            enableLongTask: !0,
            enableLongAnimationFrame: !0,
            enableInp: !0,
            _experiments: {},
            ...S.h$,
          },
          E = (e = {}) => {
            (0, a.s)();
            let {
                enableInp: t,
                enableLongTask: n,
                enableLongAnimationFrame: g,
                _experiments: {
                  enableInteractions: _,
                  enableStandaloneClsSpans: E,
                },
                beforeStartSpan: T,
                idleTimeout: I,
                finalTimeout: M,
                childSpanTimeout: O,
                markBackgroundSpan: D,
                traceFetch: R,
                traceXHR: A,
                trackFetchStreamPerformance: N,
                shouldCreateSpanForRequest: L,
                enableHTTPTimings: P,
                instrumentPageLoad: F,
                instrumentNavigation: j,
              } = { ...w, ...e },
              $ = (0, r.bk)({ recordClsStandaloneSpans: E || !1 });
            t && (0, i.Z)(),
              g &&
              l.O.PerformanceObserver &&
              PerformanceObserver.supportedEntryTypes &&
              PerformanceObserver.supportedEntryTypes.includes(
                "long-animation-frame",
              )
                ? (0, r.U$)()
                : n && (0, r.c8)(),
              _ && (0, r.DI)();
            let U = { name: void 0, source: void 0 };
            function B(e, t) {
              let n = "pageload" === t.op,
                i = T ? T(t) : t,
                o = i.attributes || {};
              t.name !== i.name && ((o[c.i_] = "custom"), (i.attributes = o)),
                (U.name = i.name),
                (U.source = o[c.i_]);
              let a = (0, s.D)(i, {
                idleTimeout: I,
                finalTimeout: M,
                childSpanTimeout: O,
                disableAutoFinish: n,
                beforeSpanEnd: (e) => {
                  $(), (0, r.QU)(e, { recordClsOnPageloadSpan: !E });
                },
              });
              function l() {
                ["interactive", "complete"].includes(
                  y.jf.document.readyState,
                ) && e.emit("idleSpanEnableAutoFinish", a);
              }
              return (
                n &&
                  y.jf.document &&
                  (y.jf.document.addEventListener("readystatechange", () => {
                    l();
                  }),
                  l()),
                a
              );
            }
            return {
              name: "BrowserTracing",
              afterAllSetup(e) {
                var n, r, a, l;
                let g,
                  w,
                  E = y.jf.location && y.jf.location.href;
                function T() {
                  w &&
                    !(0, u.et)(w).timestamp &&
                    (v.T &&
                      d.vF.log(
                        `[Tracing] Finishing current active span with op: ${(0, u.et)(w).op}`,
                      ),
                    w.end());
                }
                e.on("startNavigationSpan", (t) => {
                  (0, p.KU)() === e &&
                    (T(), (w = B(e, { op: "navigation", ...t })));
                }),
                  e.on("startPageLoadSpan", (t, n = {}) => {
                    if ((0, p.KU)() !== e) return;
                    T();
                    let r = n.sentryTrace || C("sentry-trace"),
                      i = n.baggage || C("baggage"),
                      o = (0, h.kM)(r, i);
                    (0, p.o5)().setPropagationContext(o),
                      (w = B(e, { op: "pageload", ...t }));
                  }),
                  e.on("spanEnd", (e) => {
                    let t = (0, u.et)(e).op;
                    if (
                      e !== (0, u.zU)(e) ||
                      ("navigation" !== t && "pageload" !== t)
                    )
                      return;
                    let n = (0, p.o5)(),
                      r = n.getPropagationContext();
                    n.setPropagationContext({
                      ...r,
                      sampled: void 0 !== r.sampled ? r.sampled : (0, u.pK)(e),
                      dsc: r.dsc || (0, f.k1)(e),
                    });
                  }),
                  y.jf.location &&
                    (F &&
                      k(e, {
                        name: y.jf.location.pathname,
                        startTime: m.k3 ? m.k3 / 1e3 : void 0,
                        attributes: {
                          [c.i_]: "url",
                          [c.JD]: "auto.pageload.browser",
                        },
                      }),
                    j &&
                      (0, o._)(({ to: t, from: n }) => {
                        if (void 0 === n && E && -1 !== E.indexOf(t)) {
                          E = void 0;
                          return;
                        }
                        n !== t &&
                          ((E = void 0),
                          x(e, {
                            name: y.jf.location.pathname,
                            attributes: {
                              [c.i_]: "url",
                              [c.JD]: "auto.navigation.browser",
                            },
                          }));
                      })),
                  D && (0, b.i)(),
                  _ &&
                    ((n = I),
                    (r = M),
                    (a = O),
                    (l = U),
                    y.jf.document &&
                      addEventListener(
                        "click",
                        () => {
                          let e = "ui.action.click",
                            t = (0, u.Bk)(),
                            i = t && (0, u.zU)(t);
                          if (
                            i &&
                            ["navigation", "pageload"].includes((0, u.et)(i).op)
                          ) {
                            v.T &&
                              d.vF.warn(
                                `[Tracing] Did not create ${e} span because a pageload or navigation span is in progress.`,
                              );
                            return;
                          }
                          if (
                            (g &&
                              (g.setAttribute(c.fs, "interactionInterrupted"),
                              g.end(),
                              (g = void 0)),
                            !l.name)
                          ) {
                            v.T &&
                              d.vF.warn(
                                `[Tracing] Did not create ${e} transaction because _latestRouteName is missing.`,
                              );
                            return;
                          }
                          g = (0, s.D)(
                            {
                              name: l.name,
                              op: e,
                              attributes: { [c.i_]: l.source || "url" },
                            },
                            {
                              idleTimeout: n,
                              finalTimeout: r,
                              childSpanTimeout: a,
                            },
                          );
                        },
                        { once: !1, capture: !0 },
                      )),
                  t && (0, i.B)(),
                  (0, S.Qb)(e, {
                    traceFetch: R,
                    traceXHR: A,
                    trackFetchStreamPerformance: N,
                    tracePropagationTargets:
                      e.getOptions().tracePropagationTargets,
                    shouldCreateSpanForRequest: L,
                    enableHTTPTimings: P,
                  });
              },
            };
          };
        function k(e, t, n) {
          e.emit("startPageLoadSpan", t, n),
            (0, p.o5)().setTransactionName(t.name);
          let r = (0, u.Bk)();
          return "pageload" === (r && (0, u.et)(r).op) ? r : void 0;
        }
        function x(e, t) {
          (0, p.rm)().setPropagationContext({ traceId: (0, g.el)() }),
            (0, p.o5)().setPropagationContext({ traceId: (0, g.el)() }),
            e.emit("startNavigationSpan", t),
            (0, p.o5)().setTransactionName(t.name);
          let n = (0, u.Bk)();
          return "navigation" === (n && (0, u.et)(n).op) ? n : void 0;
        }
        function C(e) {
          let t = (0, _.NX)(`meta[name=${e}]`);
          return t ? t.getAttribute("content") : void 0;
        }
      },
      795197(e, t, n) {
        "use strict";
        n.d(t, { Qb: () => w, h$: () => S });
        var r = n(69171),
          i = n(505880),
          o = n(229148),
          s = n(823783),
          a = n(346033),
          l = n(791132),
          c = n(582102),
          u = n(83220),
          d = n(826476),
          p = n(370932),
          h = n(855160),
          f = n(660161),
          m = n(92332),
          g = n(722571),
          _ = n(657018),
          v = n(804524);
        let y = new WeakMap(),
          b = new Map(),
          S = {
            traceFetch: !0,
            traceXHR: !0,
            enableHTTPTimings: !0,
            trackFetchStreamPerformance: !1,
          };
        function w(e, t) {
          let {
              traceFetch: n,
              traceXHR: i,
              trackFetchStreamPerformance: o,
              shouldCreateSpanForRequest: u,
              enableHTTPTimings: w,
              tracePropagationTargets: k,
            } = {
              traceFetch: S.traceFetch,
              traceXHR: S.traceXHR,
              trackFetchStreamPerformance: S.trackFetchStreamPerformance,
              ...t,
            },
            C = "function" == typeof u ? u : (e) => !0,
            T = (e) =>
              (function (e, t) {
                let n = v.jf.location && v.jf.location.href;
                if (n) {
                  let r, i;
                  try {
                    (r = new URL(e, n)), (i = new URL(n).origin);
                  } catch (e) {
                    return !1;
                  }
                  let o = r.origin === i;
                  return t
                    ? (0, d.Xr)(r.toString(), t) ||
                        (o && (0, d.Xr)(r.pathname, t))
                    : o;
                }
                {
                  let n = !!e.match(/^\/(?!\/)/);
                  return t ? (0, d.Xr)(e, t) : n;
                }
              })(e, k),
            I = {};
          n &&
            (e.addEventProcessor(
              (e) => (
                "transaction" === e.type &&
                  e.spans &&
                  e.spans.forEach((e) => {
                    if ("http.client" === e.op) {
                      let t = b.get(e.span_id);
                      t && ((e.timestamp = t / 1e3), b.delete(e.span_id));
                    }
                  }),
                e
              ),
            ),
            o &&
              (0, s.B$)((e) => {
                if (e.response) {
                  let t = y.get(e.response);
                  t && e.endTimestamp && b.set(t, e.endTimestamp);
                }
              }),
            (0, s.ur)((e) => {
              let t = (0, a.v)(e, C, T, I);
              if (
                (e.response &&
                  e.fetchData.__span &&
                  y.set(e.response, e.fetchData.__span),
                t)
              ) {
                let n = x(e.fetchData.url),
                  r = n ? (0, l.Dl)(n).host : void 0;
                t.setAttributes({ "http.url": n, "server.address": r });
              }
              w && t && E(t);
            })),
            i &&
              (0, r.Mn)((e) => {
                let t = (function (e, t, n, i) {
                  let o = e.xhr,
                    s = o && o[r.Er];
                  if (!o || o.__sentry_own_request__ || !s) return;
                  let a = (0, p.w)() && t(s.url);
                  if (e.endTimestamp && a) {
                    let e = o.__sentry_xhr_span_id__;
                    if (!e) return;
                    let t = i[e];
                    t &&
                      void 0 !== s.status_code &&
                      ((0, h.N)(t, s.status_code), t.end(), delete i[e]);
                    return;
                  }
                  let u = x(s.url),
                    d = u ? (0, l.Dl)(u).host : void 0,
                    v = !!(0, c.Bk)(),
                    y =
                      a && v
                        ? (0, f.Uk)({
                            name: `${s.method} ${s.url}`,
                            attributes: {
                              type: "xhr",
                              "http.method": s.method,
                              "http.url": u,
                              url: s.url,
                              "server.address": d,
                              [m.JD]: "auto.http.browser",
                              [m.uT]: "http.client",
                            },
                          })
                        : new g.w();
                  return (
                    (o.__sentry_xhr_span_id__ = y.spanContext().spanId),
                    (i[o.__sentry_xhr_span_id__] = y),
                    n(s.url) &&
                      (function (e, t) {
                        let { "sentry-trace": n, baggage: r } = (0, _.i)({
                          span: t,
                        });
                        n &&
                          (function (e, t, n) {
                            try {
                              e.setRequestHeader("sentry-trace", t),
                                n && e.setRequestHeader("baggage", n);
                            } catch (e) {}
                          })(e, n, r);
                      })(o, (0, p.w)() && v ? y : void 0),
                    y
                  );
                })(e, C, T, I);
                w && t && E(t);
              });
        }
        function E(e) {
          let { url: t } = (0, c.et)(e).data || {};
          if (!t || "string" != typeof t) return;
          let n = (0, i.wv)("resource", ({ entries: r }) => {
            r.forEach((r) => {
              "resource" === r.entryType &&
                "initiatorType" in r &&
                "string" == typeof r.nextHopProtocol &&
                ("fetch" === r.initiatorType ||
                  "xmlhttprequest" === r.initiatorType) &&
                r.name.endsWith(t) &&
                ((function (e) {
                  let { name: t, version: n } = (0, o.Ep)(e.nextHopProtocol),
                    r = [];
                  return (r.push(
                    ["network.protocol.version", n],
                    ["network.protocol.name", t],
                  ),
                  u.k3)
                    ? [
                        ...r,
                        ["http.request.redirect_start", k(e.redirectStart)],
                        ["http.request.fetch_start", k(e.fetchStart)],
                        [
                          "http.request.domain_lookup_start",
                          k(e.domainLookupStart),
                        ],
                        [
                          "http.request.domain_lookup_end",
                          k(e.domainLookupEnd),
                        ],
                        ["http.request.connect_start", k(e.connectStart)],
                        [
                          "http.request.secure_connection_start",
                          k(e.secureConnectionStart),
                        ],
                        ["http.request.connection_end", k(e.connectEnd)],
                        ["http.request.request_start", k(e.requestStart)],
                        ["http.request.response_start", k(e.responseStart)],
                        ["http.request.response_end", k(e.responseEnd)],
                      ]
                    : r;
                })(r).forEach((t) => e.setAttribute(...t)),
                setTimeout(n));
            });
          });
        }
        function k(e = 0) {
          return ((u.k3 || performance.timeOrigin) + e) / 1e3;
        }
        function x(e) {
          try {
            return new URL(e, v.jf.location.origin).href;
          } catch (e) {
            return;
          }
        }
      },
      195588(e, t, n) {
        "use strict";
        n.d(t, { _: () => s });
        var r = n(743154),
          i = n(835869),
          o = n(47363);
        function s(e, t = (0, r.qd)("fetch")) {
          let n = 0,
            a = 0;
          return (0, o.o)(e, function (o) {
            let s = o.body.length;
            (n += s), a++;
            let l = {
              body: o.body,
              method: "POST",
              referrerPolicy: "origin",
              headers: e.headers,
              keepalive: n <= 6e4 && a < 15,
              ...e.fetchOptions,
            };
            if (!t)
              return (
                (0, r.y7)("fetch"),
                (0, i.xg)("No fetch implementation available")
              );
            try {
              return t(e.url, l).then(
                (e) => (
                  (n -= s),
                  a--,
                  {
                    statusCode: e.status,
                    headers: {
                      "x-sentry-rate-limits": e.headers.get(
                        "X-Sentry-Rate-Limits",
                      ),
                      "retry-after": e.headers.get("Retry-After"),
                    },
                  }
                ),
              );
            } catch (e) {
              return (0, r.y7)("fetch"), (n -= s), a--, (0, i.xg)(e);
            }
          });
        }
      },
      584035(e, t, n) {
        "use strict";
        n.d(t, { z9: () => u });
        var r = n(847745),
          i = n(543507),
          o = n(804524),
          s = n(195588);
        function a(e) {
          return new Promise((t, n) => {
            (e.oncomplete = e.onsuccess = () => t(e.result)),
              (e.onabort = e.onerror = () => n(e.error));
          });
        }
        function l(e) {
          return a(e.getAllKeys());
        }
        function c(e) {
          let t;
          function n() {
            var n, r;
            let i, o;
            return (
              void 0 == t &&
                ((n = e.dbName || "sentry-offline"),
                (r = e.storeName || "queue"),
                ((i = indexedDB.open(n)).onupgradeneeded = () =>
                  i.result.createObjectStore(r)),
                (o = a(i)),
                (t = (e) =>
                  o.then((t) =>
                    e(t.transaction(r, "readwrite").objectStore(r)),
                  ))),
              t
            );
          }
          return {
            push: async (t) => {
              try {
                var i, o;
                let s = await (0, r.bN)(t);
                await ((i = n()),
                (o = e.maxQueueSize || 30),
                i((e) =>
                  l(e).then((t) => {
                    if (!(t.length >= o))
                      return e.put(s, Math.max(...t, 0) + 1), a(e.transaction);
                  }),
                ));
              } catch (e) {}
            },
            unshift: async (t) => {
              try {
                var i, o;
                let s = await (0, r.bN)(t);
                await ((i = n()),
                (o = e.maxQueueSize || 30),
                i((e) =>
                  l(e).then((t) => {
                    if (!(t.length >= o))
                      return e.put(s, Math.min(...t, 0) - 1), a(e.transaction);
                  }),
                ));
              } catch (e) {}
            },
            shift: async () => {
              try {
                let e = await n()((e) =>
                  l(e).then((t) => {
                    let n = t[0];
                    if (null != n)
                      return a(e.get(n)).then(
                        (t) => (e.delete(n), a(e.transaction).then(() => t)),
                      );
                  }),
                );
                if (e) return (0, r.mE)(e);
              } catch (e) {}
            },
          };
        }
        function u(e = s._) {
          var t;
          return (
            (t = (0, i.BP)(e)),
            (e) => {
              let n = t({ ...e, createStore: c });
              return (
                o.jf.addEventListener("online", async (e) => {
                  await n.flush();
                }),
                n
              );
            }
          );
        }
      },
      405589(e, t, n) {
        "use strict";
        n.d(t, { L: () => o });
        var r = n(608768),
          i = n(847745);
        function o(e, { metadata: t, tunnel: n, dsn: s }) {
          let a = {
              event_id: e.event_id,
              sent_at: new Date().toISOString(),
              ...(t &&
                t.sdk && { sdk: { name: t.sdk.name, version: t.sdk.version } }),
              ...(!!n && !!s && { dsn: (0, r.SB)(s) }),
            },
            l = [{ type: "user_report" }, e];
          return (0, i.h4)(a, [l]);
        }
      },
      215570(e, t, n) {
        "use strict";
        n.d(t, { OW: () => s, bj: () => a });
        var r = n(630449),
          i = n(272469),
          o = n(607423);
        function s(e) {
          let t = (0, r.o5)().getScopeData().contexts.flags,
            n = t ? t.values : [];
          return (
            n.length &&
              (void 0 === e.contexts && (e.contexts = {}),
              (e.contexts.flags = { values: [...n] })),
            e
          );
        }
        function a(e, t, n = 100) {
          let s = (0, r.o5)().getScopeData().contexts;
          s.flags || (s.flags = { values: [] }),
            (function (e, t, n, r) {
              if ("boolean" != typeof n) return;
              if (e.length > r) {
                o.T &&
                  i.vF.error(
                    `[Feature Flags] insertToFlagBuffer called on a buffer larger than maxSize=${r}`,
                  );
                return;
              }
              let s = e.findIndex((e) => e.flag === t);
              -1 !== s && e.splice(s, 1),
                e.length === r && e.shift(),
                e.push({ flag: t, result: n });
            })(s.flags.values, e, t, n);
        }
      },
      529251(e, t, n) {
        "use strict";
        n.d(t, { b: () => a });
        var r = n(630449),
          i = n(804524);
        let o = {
            replayIntegration: "replay",
            replayCanvasIntegration: "replay-canvas",
            feedbackIntegration: "feedback",
            feedbackModalIntegration: "feedback-modal",
            feedbackScreenshotIntegration: "feedback-screenshot",
            captureConsoleIntegration: "captureconsole",
            contextLinesIntegration: "contextlines",
            linkedErrorsIntegration: "linkederrors",
            debugIntegration: "debug",
            dedupeIntegration: "dedupe",
            extraErrorDataIntegration: "extraerrordata",
            httpClientIntegration: "httpclient",
            reportingObserverIntegration: "reportingobserver",
            rewriteFramesIntegration: "rewriteframes",
            sessionTimingIntegration: "sessiontiming",
            browserProfilingIntegration: "browserprofiling",
            moduleMetadataIntegration: "modulemetadata",
          },
          s = i.jf;
        async function a(e, t) {
          var n;
          let a,
            l,
            c = o[e],
            u = (s.Sentry = s.Sentry || {});
          if (!c) throw Error(`Cannot lazy load integration: ${e}`);
          let d = u[e];
          if ("function" == typeof d && !("_isShim" in d)) return d;
          let p =
              ((n = c),
              new URL(
                `/8.55.0/${n}.min.js`,
                ((l = (a = (0, r.KU)()) && a.getOptions()) && l.cdnBaseUrl) ||
                  "https://browser.sentry-cdn.com",
              ).toString()),
            h = i.jf.document.createElement("script");
          (h.src = p),
            (h.crossOrigin = "anonymous"),
            (h.referrerPolicy = "origin"),
            t && h.setAttribute("nonce", t);
          let f = new Promise((e, t) => {
              h.addEventListener("load", () => e()),
                h.addEventListener("error", t);
            }),
            m = i.jf.document.currentScript,
            g =
              i.jf.document.body ||
              i.jf.document.head ||
              (m && m.parentElement);
          if (g) g.appendChild(h);
          else
            throw Error(
              `Could not find parent element to insert lazy-loaded ${e} script`,
            );
          try {
            await f;
          } catch (t) {
            throw Error(`Error when loading integration: ${e}`);
          }
          let _ = u[e];
          if ("function" != typeof _)
            throw Error(`Could not load integration: ${e}`);
          return _;
        }
      },
      555625(e, t, n) {
        "use strict";
        n.d(t, { Z: () => o, k: () => s });
        var r = n(608768);
        function i(e) {
          let t = e.protocol ? `${e.protocol}:` : "",
            n = e.port ? `:${e.port}` : "";
          return `${t}//${e.host}${n}${e.path ? `/${e.path}` : ""}/api/`;
        }
        function o(e, t, n) {
          let r;
          return (
            t ||
            `${i(e)}${e.projectId}/envelope/?${((r = { sentry_version: "7" }), e.publicKey && (r.sentry_key = e.publicKey), n && (r.sentry_client = `${n.name}/${n.version}`), new URLSearchParams(r).toString())}`
          );
        }
        function s(e, t) {
          let n = (0, r.AD)(e);
          if (!n) return "";
          let o = `${i(n)}embed/error-page/`,
            s = `dsn=${(0, r.SB)(n)}`;
          for (let e in t)
            if ("dsn" !== e && "onClose" !== e)
              if ("user" === e) {
                let e = t.user;
                if (!e) continue;
                e.name && (s += `&name=${encodeURIComponent(e.name)}`),
                  e.email && (s += `&email=${encodeURIComponent(e.email)}`);
              } else
                s += `&${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`;
          return `${o}?${s}`;
        }
      },
      452681(e, t, n) {
        "use strict";
        n.d(t, { h: () => o });
        var r = n(75109),
          i = n(775464);
        function o(e) {
          let t = (0, r.S)(e);
          return t.acs ? t.acs : (0, i.z)();
        }
      },
      775464(e, t, n) {
        "use strict";
        n.d(t, { z: () => p });
        var r = n(887525),
          i = n(128377),
          o = n(875565),
          s = n(75109);
        class a {
          constructor(e, t) {
            let n, r;
            (n = e || new i.H()),
              (r = t || new i.H()),
              (this._stack = [{ scope: n }]),
              (this._isolationScope = r);
          }
          withScope(e) {
            let t,
              n = this._pushScope();
            try {
              t = e(n);
            } catch (e) {
              throw (this._popScope(), e);
            }
            return (0, o.Qg)(t)
              ? t.then(
                  (e) => (this._popScope(), e),
                  (e) => {
                    throw (this._popScope(), e);
                  },
                )
              : (this._popScope(), t);
          }
          getClient() {
            return this.getStackTop().client;
          }
          getScope() {
            return this.getStackTop().scope;
          }
          getIsolationScope() {
            return this._isolationScope;
          }
          getStackTop() {
            return this._stack[this._stack.length - 1];
          }
          _pushScope() {
            let e = this.getScope().clone();
            return this._stack.push({ client: this.getClient(), scope: e }), e;
          }
          _popScope() {
            return !(this._stack.length <= 1) && !!this._stack.pop();
          }
        }
        function l() {
          let e = (0, s.E)(),
            t = (0, s.S)(e);
          return (t.stack = t.stack || new a((0, r.r)(), (0, r.q)()));
        }
        function c(e) {
          return l().withScope(e);
        }
        function u(e, t) {
          let n = l();
          return n.withScope(() => ((n.getStackTop().scope = e), t(e)));
        }
        function d(e) {
          return l().withScope(() => e(l().getIsolationScope()));
        }
        function p() {
          return {
            withIsolationScope: d,
            withScope: c,
            withSetScope: u,
            withSetIsolationScope: (e, t) => d(t),
            getCurrentScope: () => l().getScope(),
            getIsolationScope: () => l().getIsolationScope(),
          };
        }
      },
      683863(e, t, n) {
        "use strict";
        n.d(t, { V: () => w });
        var r = n(555625),
          i = n(630449),
          o = n(326447),
          s = n(397805),
          a = n(688331),
          l = n(680753),
          c = n(411361),
          u = n(500216),
          d = n(608768),
          p = n(847745),
          h = n(33735),
          f = n(875565),
          m = n(272469),
          g = n(231577),
          _ = n(835869),
          v = n(838596),
          y = n(299346),
          b = n(582102);
        let S = "Not capturing exception because it's already been captured.";
        class w {
          constructor(e) {
            if (
              ((this._options = e),
              (this._integrations = {}),
              (this._numProcessing = 0),
              (this._outcomes = {}),
              (this._hooks = {}),
              (this._eventProcessors = []),
              e.dsn
                ? (this._dsn = (0, d.AD)(e.dsn))
                : o.T &&
                  m.vF.warn("No DSN provided, client will not send events."),
              this._dsn)
            ) {
              const t = (0, r.Z)(
                this._dsn,
                e.tunnel,
                e._metadata ? e._metadata.sdk : void 0,
              );
              this._transport = e.transport({
                tunnel: this._options.tunnel,
                recordDroppedEvent: this.recordDroppedEvent.bind(this),
                ...e.transportOptions,
                url: t,
              });
            }
            const t = [
              "enableTracing",
              "tracesSampleRate",
              "tracesSampler",
            ].find((t) => t in e && void 0 == e[t]);
            t &&
              (0, m.pq)(() => {
                console.warn(
                  `[Sentry] Deprecation warning: \`${t}\` is set to undefined, which leads to tracing being enabled. In v9, a value of \`undefined\` will result in tracing being disabled.`,
                );
              });
          }
          captureException(e, t, n) {
            let r = (0, g.eJ)();
            if ((0, g.GR)(e)) return o.T && m.vF.log(S), r;
            let i = { event_id: r, ...t };
            return (
              this._process(
                this.eventFromException(e, i).then((e) =>
                  this._captureEvent(e, i, n),
                ),
              ),
              i.event_id
            );
          }
          captureMessage(e, t, n, r) {
            let i = { event_id: (0, g.eJ)(), ...n },
              o = (0, f.NF)(e) ? e : String(e),
              s = (0, f.sO)(e)
                ? this.eventFromMessage(o, t, i)
                : this.eventFromException(e, i);
            return (
              this._process(s.then((e) => this._captureEvent(e, i, r))),
              i.event_id
            );
          }
          captureEvent(e, t, n) {
            let r = (0, g.eJ)();
            if (t && t.originalException && (0, g.GR)(t.originalException))
              return o.T && m.vF.log(S), r;
            let i = { event_id: r, ...t },
              s = (e.sdkProcessingMetadata || {}).capturedSpanScope;
            return this._process(this._captureEvent(e, i, s || n)), i.event_id;
          }
          captureSession(e) {
            "string" != typeof e.release
              ? o.T &&
                m.vF.warn(
                  "Discarded session because of missing or non-string release",
                )
              : (this.sendSession(e), (0, l.qO)(e, { init: !1 }));
          }
          getDsn() {
            return this._dsn;
          }
          getOptions() {
            return this._options;
          }
          getSdkMetadata() {
            return this._options._metadata;
          }
          getTransport() {
            return this._transport;
          }
          flush(e) {
            let t = this._transport;
            return t
              ? (this.emit("flush"),
                this._isClientDoneProcessing(e).then((n) =>
                  t.flush(e).then((e) => n && e),
                ))
              : (0, _.XW)(!0);
          }
          close(e) {
            return this.flush(e).then(
              (e) => ((this.getOptions().enabled = !1), this.emit("close"), e),
            );
          }
          getEventProcessors() {
            return this._eventProcessors;
          }
          addEventProcessor(e) {
            this._eventProcessors.push(e);
          }
          init() {
            (this._isEnabled() ||
              this._options.integrations.some(({ name: e }) =>
                e.startsWith("Spotlight"),
              )) &&
              this._setupIntegrations();
          }
          getIntegrationByName(e) {
            return this._integrations[e];
          }
          addIntegration(e) {
            let t = this._integrations[e.name];
            (0, a.qm)(this, e, this._integrations), t || (0, a.lc)(this, [e]);
          }
          sendEvent(e, t = {}) {
            this.emit("beforeSendEvent", e, t);
            let n = (0, s.V7)(
              e,
              this._dsn,
              this._options._metadata,
              this._options.tunnel,
            );
            for (let e of t.attachments || []) n = (0, p.W3)(n, (0, p.bm)(e));
            let r = this.sendEnvelope(n);
            r && r.then((t) => this.emit("afterSendEvent", e, t), null);
          }
          sendSession(e) {
            let t = (0, s.LE)(
              e,
              this._dsn,
              this._options._metadata,
              this._options.tunnel,
            );
            this.sendEnvelope(t);
          }
          recordDroppedEvent(e, t, n) {
            if (this._options.sendClientReports) {
              let r = "number" == typeof n ? n : 1,
                i = `${e}:${t}`;
              o.T &&
                m.vF.log(
                  `Recording outcome: "${i}"${r > 1 ? ` (${r} times)` : ""}`,
                ),
                (this._outcomes[i] = (this._outcomes[i] || 0) + r);
            }
          }
          on(e, t) {
            let n = (this._hooks[e] = this._hooks[e] || []);
            return (
              n.push(t),
              () => {
                let e = n.indexOf(t);
                e > -1 && n.splice(e, 1);
              }
            );
          }
          emit(e, ...t) {
            let n = this._hooks[e];
            n && n.forEach((e) => e(...t));
          }
          sendEnvelope(e) {
            return (this.emit("beforeEnvelope", e),
            this._isEnabled() && this._transport)
              ? this._transport
                  .send(e)
                  .then(
                    null,
                    (e) => (
                      o.T && m.vF.error("Error while sending envelope:", e), e
                    ),
                  )
              : (o.T && m.vF.error("Transport disabled"), (0, _.XW)({}));
          }
          _setupIntegrations() {
            let { integrations: e } = this._options;
            (this._integrations = (0, a.P$)(this, e)), (0, a.lc)(this, e);
          }
          _updateSessionFromEvent(e, t) {
            let n = "fatal" === t.level,
              r = !1,
              i = t.exception && t.exception.values;
            if (i)
              for (let e of ((r = !0), i)) {
                let t = e.mechanism;
                if (t && !1 === t.handled) {
                  n = !0;
                  break;
                }
              }
            let o = "ok" === e.status;
            ((o && 0 === e.errors) || (o && n)) &&
              ((0, l.qO)(e, {
                ...(n && { status: "crashed" }),
                errors: e.errors || Number(r || n),
              }),
              this.captureSession(e));
          }
          _isClientDoneProcessing(e) {
            return new _.T2((t) => {
              let n = 0,
                r = setInterval(() => {
                  0 == this._numProcessing
                    ? (clearInterval(r), t(!0))
                    : ((n += 1), e && n >= e && (clearInterval(r), t(!1)));
                }, 1);
            });
          }
          _isEnabled() {
            return (
              !1 !== this.getOptions().enabled && void 0 !== this._transport
            );
          }
          _prepareEvent(e, t, n = (0, i.o5)(), r = (0, i.rm)()) {
            let o = this.getOptions(),
              s = Object.keys(this._integrations);
            return (
              !t.integrations && s.length > 0 && (t.integrations = s),
              this.emit("preprocessEvent", e, t),
              e.type || r.setLastEventId(e.event_id || t.event_id),
              (0, y.mG)(o, e, t, n, this, r).then(
                (e) => (
                  null === e ||
                    ((e.contexts = { trace: (0, i.vn)(n), ...e.contexts }),
                    (e.sdkProcessingMetadata = {
                      dynamicSamplingContext: (0, c.ao)(this, n),
                      ...e.sdkProcessingMetadata,
                    })),
                  e
                ),
              )
            );
          }
          _captureEvent(e, t = {}, n) {
            return this._processEvent(e, t, n).then(
              (e) => e.event_id,
              (e) => {
                o.T &&
                  (e instanceof h.U && "log" === e.logLevel
                    ? m.vF.log(e.message)
                    : m.vF.warn(e));
              },
            );
          }
          _processEvent(e, t, n) {
            let r = this.getOptions(),
              { sampleRate: i } = r,
              o = k(e),
              s = E(e),
              a = e.type || "error",
              l = `before send for type \`${a}\``,
              c = void 0 === i ? void 0 : (0, v.i)(i);
            if (s && "number" == typeof c && Math.random() > c)
              return (
                this.recordDroppedEvent("sample_rate", "error", e),
                (0, _.xg)(
                  new h.U(
                    `Discarding event because it's not included in the random sample (sampling rate = ${i})`,
                    "log",
                  ),
                )
              );
            let u = "replay_event" === a ? "replay" : a,
              d = (e.sdkProcessingMetadata || {}).capturedSpanIsolationScope;
            return this._prepareEvent(e, t, n, d)
              .then((n) => {
                if (null === n)
                  throw (
                    (this.recordDroppedEvent("event_processor", u, e),
                    new h.U(
                      "An event processor returned `null`, will not send event.",
                      "log",
                    ))
                  );
                return t.data && !0 === t.data.__sentry__
                  ? n
                  : (function (e, t) {
                      let n = `${t} must return \`null\` or a valid event.`;
                      if ((0, f.Qg)(e))
                        return e.then(
                          (e) => {
                            if (!(0, f.Qd)(e) && null !== e) throw new h.U(n);
                            return e;
                          },
                          (e) => {
                            throw new h.U(`${t} rejected with ${e}`);
                          },
                        );
                      if (!(0, f.Qd)(e) && null !== e) throw new h.U(n);
                      return e;
                    })(
                      (function (e, t, n, r) {
                        let {
                          beforeSend: i,
                          beforeSendTransaction: o,
                          beforeSendSpan: s,
                        } = t;
                        if (E(n) && i) return i(n, r);
                        if (k(n)) {
                          if (n.spans && s) {
                            let t = [];
                            for (let r of n.spans) {
                              let n = s(r);
                              n
                                ? t.push(n)
                                : ((0, b.xl)(),
                                  e.recordDroppedEvent("before_send", "span"));
                            }
                            n.spans = t;
                          }
                          if (o) {
                            if (n.spans) {
                              let e = n.spans.length;
                              n.sdkProcessingMetadata = {
                                ...n.sdkProcessingMetadata,
                                spanCountBeforeProcessing: e,
                              };
                            }
                            return o(n, r);
                          }
                        }
                        return n;
                      })(this, r, n, t),
                      l,
                    );
              })
              .then((r) => {
                if (null === r) {
                  if ((this.recordDroppedEvent("before_send", u, e), o)) {
                    let t = 1 + (e.spans || []).length;
                    this.recordDroppedEvent("before_send", "span", t);
                  }
                  throw new h.U(
                    `${l} returned \`null\`, will not send event.`,
                    "log",
                  );
                }
                let i = n && n.getSession();
                if ((!o && i && this._updateSessionFromEvent(i, r), o)) {
                  let e =
                    ((r.sdkProcessingMetadata &&
                      r.sdkProcessingMetadata.spanCountBeforeProcessing) ||
                      0) - (r.spans ? r.spans.length : 0);
                  e > 0 && this.recordDroppedEvent("before_send", "span", e);
                }
                let s = r.transaction_info;
                return (
                  o &&
                    s &&
                    r.transaction !== e.transaction &&
                    (r.transaction_info = { ...s, source: "custom" }),
                  this.sendEvent(r, t),
                  r
                );
              })
              .then(null, (e) => {
                if (e instanceof h.U) throw e;
                throw (
                  (this.captureException(e, {
                    data: { __sentry__: !0 },
                    originalException: e,
                  }),
                  new h.U(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${e}`))
                );
              });
          }
          _process(e) {
            this._numProcessing++,
              e.then(
                (e) => (this._numProcessing--, e),
                (e) => (this._numProcessing--, e),
              );
          }
          _clearOutcomes() {
            let e = this._outcomes;
            return (
              (this._outcomes = {}),
              Object.entries(e).map(([e, t]) => {
                let [n, r] = e.split(":");
                return { reason: n, category: r, quantity: t };
              })
            );
          }
          _flushOutcomes() {
            o.T && m.vF.log("Flushing outcomes...");
            let e = this._clearOutcomes();
            if (0 === e.length) {
              o.T && m.vF.log("No outcomes to send");
              return;
            }
            if (!this._dsn) {
              o.T && m.vF.log("No dsn provided, will not send outcomes");
              return;
            }
            o.T && m.vF.log("Sending outcomes:", e);
            let t = (0, u.m)(e, this._options.tunnel && (0, d.SB)(this._dsn));
            this.sendEnvelope(t);
          }
        }
        function E(e) {
          return void 0 === e.type;
        }
        function k(e) {
          return "transaction" === e.type;
        }
      },
      984083(e, t, n) {
        "use strict";
        n.d(t, { Z: () => s });
        var r = n(630449),
          i = n(272469),
          o = n(83220);
        function s(e, t) {
          let n = (0, r.KU)(),
            s = (0, r.rm)();
          if (!n) return;
          let { beforeBreadcrumb: a = null, maxBreadcrumbs: l = 100 } =
            n.getOptions();
          if (l <= 0) return;
          let c = { timestamp: (0, o.lu)(), ...e },
            u = a ? (0, i.pq)(() => a(c, t)) : c;
          null !== u &&
            (n.emit && n.emit("beforeAddBreadcrumb", u, t),
            s.addBreadcrumb(u, l));
        }
      },
      75109(e, t, n) {
        "use strict";
        n.d(t, { E: () => i, S: () => o });
        var r = n(978862);
        function i() {
          return o(r.O), r.O;
        }
        function o(e) {
          let t = (e.__SENTRY__ = e.__SENTRY__ || {});
          return (
            (t.version = t.version || "8.55.0"),
            (t["8.55.0"] = t["8.55.0"] || {})
          );
        }
      },
      922248(e, t, n) {
        "use strict";
        n.d(t, { U: () => r });
        let r = "production";
      },
      630449(e, t, n) {
        "use strict";
        n.d(t, {
          KU: () => h,
          m6: () => u,
          o5: () => l,
          rB: () => p,
          rm: () => c,
          v4: () => d,
          vn: () => f,
        });
        var r = n(452681),
          i = n(75109),
          o = n(128377),
          s = n(690094),
          a = n(978862);
        function l() {
          let e = (0, i.E)();
          return (0, r.h)(e).getCurrentScope();
        }
        function c() {
          let e = (0, i.E)();
          return (0, r.h)(e).getIsolationScope();
        }
        function u() {
          return (0, a.B)("globalScope", () => new o.H());
        }
        function d(...e) {
          let t = (0, i.E)(),
            n = (0, r.h)(t);
          if (2 === e.length) {
            let [t, r] = e;
            return t ? n.withSetScope(t, r) : n.withScope(r);
          }
          return n.withScope(e[0]);
        }
        function p(...e) {
          let t = (0, i.E)(),
            n = (0, r.h)(t);
          if (2 === e.length) {
            let [t, r] = e;
            return t ? n.withSetIsolationScope(t, r) : n.withIsolationScope(r);
          }
          return n.withIsolationScope(e[0]);
        }
        function h() {
          return l().getClient();
        }
        function f(e) {
          let {
            traceId: t,
            spanId: n,
            parentSpanId: r,
          } = e.getPropagationContext();
          return (0, s.Ce)({ trace_id: t, span_id: n, parent_span_id: r });
        }
      },
      326447(e, t, n) {
        "use strict";
        n.d(t, { T: () => r });
        let r = "u" < typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
      },
      887525(e, t, n) {
        "use strict";
        n.d(t, { q: () => s, r: () => o });
        var r = n(128377),
          i = n(978862);
        function o() {
          return (0, i.B)("defaultCurrentScope", () => new r.H());
        }
        function s() {
          return (0, i.B)("defaultIsolationScope", () => new r.H());
        }
      },
      397805(e, t, n) {
        "use strict";
        n.d(t, { LE: () => a, V7: () => l, lu: () => c });
        var r = n(411361),
          i = n(608768),
          o = n(847745),
          s = n(582102);
        function a(e, t, n, r) {
          let s = (0, o.Cj)(n),
            a = {
              sent_at: new Date().toISOString(),
              ...(s && { sdk: s }),
              ...(!!r && t && { dsn: (0, i.SB)(t) }),
            },
            l =
              "aggregates" in e
                ? [{ type: "sessions" }, e]
                : [{ type: "session" }, e.toJSON()];
          return (0, o.h4)(a, [l]);
        }
        function l(e, t, n, r) {
          var i;
          let s = (0, o.Cj)(n),
            a = e.type && "replay_event" !== e.type ? e.type : "event";
          (i = n && n.sdk) &&
            ((e.sdk = e.sdk || {}),
            (e.sdk.name = e.sdk.name || i.name),
            (e.sdk.version = e.sdk.version || i.version),
            (e.sdk.integrations = [
              ...(e.sdk.integrations || []),
              ...(i.integrations || []),
            ]),
            (e.sdk.packages = [
              ...(e.sdk.packages || []),
              ...(i.packages || []),
            ]));
          let l = (0, o.n2)(e, s, r, t);
          delete e.sdkProcessingMetadata;
          let c = [{ type: a }, e];
          return (0, o.h4)(l, [c]);
        }
        function c(e, t) {
          let n = (0, r.k1)(e[0]),
            a = t && t.getDsn(),
            l = t && t.getOptions().tunnel,
            c = {
              sent_at: new Date().toISOString(),
              ...(!!n.trace_id && !!n.public_key && { trace: n }),
              ...(!!l && a && { dsn: (0, i.SB)(a) }),
            },
            u = t && t.getOptions().beforeSendSpan,
            d = u
              ? (e) => {
                  let t = u((0, s.et)(e));
                  return t || (0, s.xl)(), t;
                }
              : (e) => (0, s.et)(e),
            p = [];
          for (let t of e) {
            let e = d(t);
            e && p.push((0, o.y5)(e));
          }
          return (0, o.h4)(c, p);
        }
      },
      797824(e, t, n) {
        "use strict";
        n.d(t, {
          j: () =>
            function e(t, n, a, l = 0) {
              return new s.T2((s, c) => {
                let u = t[l];
                if (null === n || "function" != typeof u) s(n);
                else {
                  let d = u({ ...n }, a);
                  r.T &&
                    u.id &&
                    null === d &&
                    o.vF.log(`Event processor "${u.id}" dropped event`),
                    (0, i.Qg)(d)
                      ? d.then((n) => e(t, n, a, l + 1).then(s)).then(null, c)
                      : e(t, d, a, l + 1)
                          .then(s)
                          .then(null, c);
                }
              });
            },
        });
        var r = n(326447),
          i = n(875565),
          o = n(272469),
          s = n(835869);
      },
      871186(e, t, n) {
        "use strict";
        n.d(t, {
          Cp: () => u,
          Dp: () => w,
          J0: () => x,
          J5: () => I,
          NA: () => _,
          Ol: () => E,
          Q: () => y,
          SA: () => k,
          VN: () => S,
          Wt: () => g,
          bX: () => b,
          cx: () => f,
          gV: () => v,
          ky: () => C,
          l7: () => m,
          o: () => h,
          r: () => p,
          wd: () => d,
        });
        var r = n(922248),
          i = n(630449),
          o = n(326447),
          s = n(680753),
          a = n(272469),
          l = n(978862),
          c = n(299346);
        function u(e, t) {
          return (0, i.o5)().captureException(e, (0, c.li)(t));
        }
        function d(e, t) {
          let n = "string" == typeof t ? t : void 0,
            r = "string" != typeof t ? { captureContext: t } : void 0;
          return (0, i.o5)().captureMessage(e, n, r);
        }
        function p(e, t) {
          return (0, i.o5)().captureEvent(e, t);
        }
        function h(e, t) {
          (0, i.rm)().setContext(e, t);
        }
        function f(e) {
          (0, i.rm)().setExtras(e);
        }
        function m(e, t) {
          (0, i.rm)().setExtra(e, t);
        }
        function g(e) {
          (0, i.rm)().setTags(e);
        }
        function _(e, t) {
          (0, i.rm)().setTag(e, t);
        }
        function v(e) {
          (0, i.rm)().setUser(e);
        }
        function y() {
          return (0, i.rm)().lastEventId();
        }
        async function b(e) {
          let t = (0, i.KU)();
          return t
            ? t.flush(e)
            : (o.T && a.vF.warn("Cannot flush events. No client defined."),
              Promise.resolve(!1));
        }
        async function S(e) {
          let t = (0, i.KU)();
          return t
            ? t.close(e)
            : (o.T &&
                a.vF.warn(
                  "Cannot flush events and disable SDK. No client defined.",
                ),
              Promise.resolve(!1));
        }
        function w() {
          return !!(0, i.KU)();
        }
        function E() {
          let e = (0, i.KU)();
          return !!e && !1 !== e.getOptions().enabled && !!e.getTransport();
        }
        function k(e) {
          (0, i.rm)().addEventProcessor(e);
        }
        function x(e) {
          let t = (0, i.KU)(),
            n = (0, i.rm)(),
            o = (0, i.o5)(),
            { release: a, environment: c = r.U } = (t && t.getOptions()) || {},
            { userAgent: u } = l.O.navigator || {},
            d = (0, s.fj)({
              release: a,
              environment: c,
              user: o.getUser() || n.getUser(),
              ...(u && { userAgent: u }),
              ...e,
            }),
            p = n.getSession();
          return (
            p && "ok" === p.status && (0, s.qO)(p, { status: "exited" }),
            C(),
            n.setSession(d),
            o.setSession(d),
            d
          );
        }
        function C() {
          let e = (0, i.rm)(),
            t = (0, i.o5)(),
            n = t.getSession() || e.getSession();
          n && (0, s.Vu)(n), T(), e.setSession(), t.setSession();
        }
        function T() {
          let e = (0, i.rm)(),
            t = (0, i.o5)(),
            n = (0, i.KU)(),
            r = t.getSession() || e.getSession();
          r && n && n.captureSession(r);
        }
        function I(e = !1) {
          e ? C() : T();
        }
      },
      876194(e, t, n) {
        "use strict";
        n.d(t, { q: () => o });
        var r = n(630449),
          i = n(690094);
        function o(e, t = {}, n = (0, r.o5)()) {
          let {
              message: s,
              name: a,
              email: l,
              url: c,
              source: u,
              associatedEventId: d,
              tags: p,
            } = e,
            h = {
              contexts: {
                feedback: (0, i.Ce)({
                  contact_email: l,
                  name: a,
                  message: s,
                  url: c,
                  source: u,
                  associated_event_id: d,
                }),
              },
              type: "feedback",
              level: "info",
              tags: p,
            },
            f = (n && n.getClient()) || (0, r.KU)();
          return f && f.emit("beforeSendFeedback", h, t), n.captureEvent(h, t);
        }
      },
      346033(e, t, n) {
        "use strict";
        n.d(t, { v: () => h });
        var r = n(92332),
          i = n(875565),
          o = n(791132),
          s = n(435819),
          a = n(370932),
          l = n(582102),
          c = n(722571),
          u = n(855160),
          d = n(660161),
          p = n(657018);
        function h(e, t, n, s, m = "auto.http.browser") {
          if (!e.fetchData) return;
          let g = (0, a.w)() && t(e.fetchData.url);
          if (e.endTimestamp && g) {
            let t = e.fetchData.__span;
            if (!t) return;
            let n = s[t];
            n &&
              ((function (e, t) {
                if (t.response) {
                  (0, u.N)(e, t.response.status);
                  let n =
                    t.response &&
                    t.response.headers &&
                    t.response.headers.get("content-length");
                  if (n) {
                    let t = parseInt(n);
                    t > 0 && e.setAttribute("http.response_content_length", t);
                  }
                } else
                  t.error &&
                    e.setStatus({ code: 2, message: "internal_error" });
                e.end();
              })(n, e),
              delete s[t]);
            return;
          }
          let { method: _, url: v } = e.fetchData,
            y = (function (e) {
              try {
                return new URL(e).href;
              } catch (e) {
                return;
              }
            })(v),
            b = y ? (0, o.Dl)(y).host : void 0,
            S = !!(0, l.Bk)(),
            w =
              g && S
                ? (0, d.Uk)({
                    name: `${_} ${v}`,
                    attributes: {
                      url: v,
                      type: "fetch",
                      "http.method": _,
                      "http.url": y,
                      "server.address": b,
                      [r.JD]: m,
                      [r.uT]: "http.client",
                    },
                  })
                : new c.w();
          if (
            ((e.fetchData.__span = w.spanContext().spanId),
            (s[w.spanContext().spanId] = w),
            n(e.fetchData.url))
          ) {
            let t = e.args[0],
              n = e.args[1] || {},
              r = (function (e, t, n) {
                var r, o;
                let s = (0, p.i)({ span: n }),
                  a = s["sentry-trace"],
                  l = s.baggage;
                if (!a) return;
                let c =
                  t.headers ||
                  (((r = e), "u" > typeof Request && (0, i.tH)(r, Request))
                    ? e.headers
                    : void 0);
                if (!c) return { ...s };
                if (((o = c), "u" > typeof Headers && (0, i.tH)(o, Headers))) {
                  let e = new Headers(c);
                  if ((e.set("sentry-trace", a), l)) {
                    let t = e.get("baggage");
                    if (t) {
                      let n = f(t);
                      e.set("baggage", n ? `${n},${l}` : l);
                    } else e.set("baggage", l);
                  }
                  return e;
                }
                if (Array.isArray(c)) {
                  let e = [
                    ...c
                      .filter(
                        (e) => !(Array.isArray(e) && "sentry-trace" === e[0]),
                      )
                      .map((e) => {
                        if (
                          !Array.isArray(e) ||
                          "baggage" !== e[0] ||
                          "string" != typeof e[1]
                        )
                          return e;
                        {
                          let [t, n, ...r] = e;
                          return [t, f(n), ...r];
                        }
                      }),
                    ["sentry-trace", a],
                  ];
                  return l && e.push(["baggage", l]), e;
                }
                {
                  let e = "baggage" in c ? c.baggage : void 0,
                    t = [];
                  return (
                    Array.isArray(e)
                      ? (t = e
                          .map((e) => ("string" == typeof e ? f(e) : e))
                          .filter((e) => "" === e))
                      : e && t.push(f(e)),
                    l && t.push(l),
                    {
                      ...c,
                      "sentry-trace": a,
                      baggage: t.length > 0 ? t.join(",") : void 0,
                    }
                  );
                }
              })(t, n, (0, a.w)() && S ? w : void 0);
            r && ((e.args[1] = n), (n.headers = r));
          }
          return w;
        }
        function f(e) {
          return e
            .split(",")
            .filter((e) => !e.split("=")[0].startsWith(s.sv))
            .join(",");
        }
      },
      32616(e, t, n) {
        "use strict";
        n.d(t, { B: () => s });
        var r = n(984083),
          i = n(630449),
          o = n(871186);
        let s = function () {
          return {
            bindClient(e) {
              (0, i.o5)().setClient(e);
            },
            withScope: i.v4,
            getClient: () => (0, i.KU)(),
            getScope: i.o5,
            getIsolationScope: i.rm,
            captureException: (e, t) => (0, i.o5)().captureException(e, t),
            captureMessage: (e, t, n) => (0, i.o5)().captureMessage(e, t, n),
            captureEvent: o.r,
            addBreadcrumb: r.Z,
            setUser: o.gV,
            setTags: o.Wt,
            setTag: o.NA,
            setExtra: o.l7,
            setExtras: o.cx,
            setContext: o.o,
            getIntegration(e) {
              let t = (0, i.KU)();
              return (t && t.getIntegrationByName(e.id)) || null;
            },
            startSession: o.J0,
            endSession: o.ky,
            captureSession(e) {
              let t, n, r;
              if (e) return (0, o.ky)();
              (t = (0, i.o5)()),
                (n = (0, i.KU)()),
                (r = t.getSession()),
                n && r && n.captureSession(r);
            },
          };
        };
      },
      688331(e, t, n) {
        "use strict";
        n.d(t, {
          P$: () => l,
          Q8: () => d,
          _C: () => p,
          lc: () => c,
          mH: () => a,
          qm: () => u,
        });
        var r = n(630449),
          i = n(326447),
          o = n(272469);
        let s = [];
        function a(e) {
          let t,
            n,
            r = e.defaultIntegrations || [],
            i = e.integrations;
          if (
            (r.forEach((e) => {
              e.isDefaultInstance = !0;
            }),
            Array.isArray(i))
          )
            t = [...r, ...i];
          else if ("function" == typeof i) {
            let e = i(r);
            t = Array.isArray(e) ? e : [e];
          } else t = r;
          let o =
              ((n = {}),
              t.forEach((e) => {
                let { name: t } = e,
                  r = n[t];
                (r && !r.isDefaultInstance && e.isDefaultInstance) ||
                  (n[t] = e);
              }),
              Object.values(n)),
            s = o.findIndex((e) => "Debug" === e.name);
          if (s > -1) {
            let [e] = o.splice(s, 1);
            o.push(e);
          }
          return o;
        }
        function l(e, t) {
          let n = {};
          return (
            t.forEach((t) => {
              t && u(e, t, n);
            }),
            n
          );
        }
        function c(e, t) {
          for (let n of t) n && n.afterAllSetup && n.afterAllSetup(e);
        }
        function u(e, t, n) {
          if (n[t.name]) {
            i.T &&
              o.vF.log(
                `Integration skipped because it was already installed: ${t.name}`,
              );
            return;
          }
          if (
            ((n[t.name] = t),
            -1 === s.indexOf(t.name) &&
              "function" == typeof t.setupOnce &&
              (t.setupOnce(), s.push(t.name)),
            t.setup && "function" == typeof t.setup && t.setup(e),
            "function" == typeof t.preprocessEvent)
          ) {
            let n = t.preprocessEvent.bind(t);
            e.on("preprocessEvent", (t, r) => n(t, r, e));
          }
          if ("function" == typeof t.processEvent) {
            let n = t.processEvent.bind(t),
              r = Object.assign((t, r) => n(t, r, e), { id: t.name });
            e.addEventProcessor(r);
          }
          i.T && o.vF.log(`Integration installed: ${t.name}`);
        }
        function d(e) {
          let t = (0, r.KU)();
          if (!t) {
            i.T &&
              o.vF.warn(
                `Cannot add integration "${e.name}" because no SDK Client is available.`,
              );
            return;
          }
          t.addIntegration(e);
        }
        function p(e) {
          return e;
        }
      },
      899822(e, t, n) {
        "use strict";
        n.d(t, { q: () => p });
        var r = n(630449),
          i = n(871186),
          o = n(688331),
          s = n(933138),
          a = n(272469),
          l = n(231577),
          c = n(196010),
          u = n(826476),
          d = n(978862);
        let p = (0, o._C)((e = {}) => {
          let t = e.levels || a.Ow,
            n = !!e.handled;
          return {
            name: "CaptureConsole",
            setup(e) {
              "console" in d.O &&
                (0, s.P)(({ args: o, level: s }) => {
                  var a, d, p;
                  let h;
                  (0, r.KU)() === e &&
                    t.includes(s) &&
                    ((a = o),
                    (d = s),
                    (p = n),
                    (h = { level: (0, c.t)(d), extra: { arguments: a } }),
                    (0, r.v4)((e) => {
                      if (
                        (e.addEventProcessor(
                          (e) => (
                            (e.logger = "console"),
                            (0, l.M6)(e, { handled: p, type: "console" }),
                            e
                          ),
                        ),
                        "assert" === d)
                      ) {
                        if (!a[0]) {
                          let t = `Assertion failed: ${(0, u.gt)(a.slice(1), " ") || "console.assert"}`;
                          e.setExtra("arguments", a.slice(1)), (0, i.wd)(t, h);
                        }
                        return;
                      }
                      let t = a.find((e) => e instanceof Error);
                      if (t) return void (0, i.Cp)(t, h);
                      let n = (0, u.gt)(a, " ");
                      (0, i.wd)(n, h);
                    }));
                });
            },
          };
        });
      },
      417394(e, t, n) {
        "use strict";
        n.d(t, { _: () => o });
        var r = n(688331),
          i = n(272469);
        let o = (0, r._C)((e = {}) => {
          let t = { debugger: !1, stringify: !1, ...e };
          return {
            name: "Debug",
            setup(e) {
              e.on("beforeSendEvent", (e, n) => {
                t.debugger,
                  (0, i.pq)(() => {
                    t.stringify
                      ? (console.log(JSON.stringify(e, null, 2)),
                        n &&
                          Object.keys(n).length &&
                          console.log(JSON.stringify(n, null, 2)))
                      : (console.log(e),
                        n && Object.keys(n).length && console.log(n));
                  });
              });
            },
          };
        });
      },
      453614(e, t, n) {
        "use strict";
        n.d(t, { s: () => a });
        var r = n(688331),
          i = n(326447),
          o = n(272469),
          s = n(968072);
        let a = (0, r._C)(() => {
          let e;
          return {
            name: "Dedupe",
            processEvent(t) {
              if (t.type) return t;
              try {
                var n, r, s, a, d, p;
                let h, f, m, g;
                if (
                  ((n = t),
                  (r = e) &&
                    ((s = n),
                    (a = r),
                    (h = s.message),
                    (f = a.message),
                    ((h || f) &&
                      (!h || f) &&
                      (h || !f) &&
                      h === f &&
                      c(s, a) &&
                      l(s, a) &&
                      1) ||
                      ((d = n),
                      (p = r),
                      (m = u(p)),
                      (g = u(d)),
                      m &&
                        g &&
                        m.type === g.type &&
                        m.value === g.value &&
                        c(d, p) &&
                        l(d, p))))
                )
                  return (
                    i.T &&
                      o.vF.warn(
                        "Event dropped due to being a duplicate of previously captured event.",
                      ),
                    null
                  );
              } catch (e) {}
              return (e = t);
            },
          };
        });
        function l(e, t) {
          let n = (0, s.RV)(e),
            r = (0, s.RV)(t);
          if (!n && !r) return !0;
          if ((n && !r) || (!n && r) || r.length !== n.length) return !1;
          for (let e = 0; e < r.length; e++) {
            let t = r[e],
              i = n[e];
            if (
              t.filename !== i.filename ||
              t.lineno !== i.lineno ||
              t.colno !== i.colno ||
              t.function !== i.function
            )
              return !1;
          }
          return !0;
        }
        function c(e, t) {
          let n = e.fingerprint,
            r = t.fingerprint;
          if (!n && !r) return !0;
          if ((n && !r) || (!n && r)) return !1;
          try {
            return n.join("") === r.join("");
          } catch (e) {
            return !1;
          }
        }
        function u(e) {
          return e.exception && e.exception.values && e.exception.values[0];
        }
      },
      525501(e, t, n) {
        "use strict";
        n.d(t, { X: () => u });
        var r = n(688331),
          i = n(326447),
          o = n(875565),
          s = n(272469),
          a = n(86622),
          l = n(690094),
          c = n(826476);
        let u = (0, r._C)((e = {}) => {
          let { depth: t = 3, captureErrorCause: n = !0 } = e;
          return {
            name: "ExtraErrorData",
            processEvent(e, r, u) {
              let { maxValueLength: d = 250 } = u.getOptions();
              return (function (e, t = {}, n, r, u) {
                if (!t.originalException || !(0, o.bJ)(t.originalException))
                  return e;
                let d =
                    t.originalException.name ||
                    t.originalException.constructor.name,
                  p = (function (e, t, n) {
                    try {
                      let r = [
                          "name",
                          "message",
                          "stack",
                          "line",
                          "column",
                          "fileName",
                          "lineNumber",
                          "columnNumber",
                          "toJSON",
                        ],
                        i = {};
                      for (let t of Object.keys(e)) {
                        if (-1 !== r.indexOf(t)) continue;
                        let s = e[t];
                        i[t] =
                          (0, o.bJ)(s) || "string" == typeof s
                            ? (0, c.xv)(`${s}`, n)
                            : s;
                      }
                      if (
                        (t &&
                          void 0 !== e.cause &&
                          (i.cause = (0, o.bJ)(e.cause)
                            ? e.cause.toString()
                            : e.cause),
                        "function" == typeof e.toJSON)
                      ) {
                        let t = e.toJSON();
                        for (let e of Object.keys(t)) {
                          let n = t[e];
                          i[e] = (0, o.bJ)(n) ? n.toString() : n;
                        }
                      }
                      return i;
                    } catch (e) {
                      i.T &&
                        s.vF.error(
                          "Unable to extract extra data from the Error object:",
                          e,
                        );
                    }
                    return null;
                  })(t.originalException, r, u);
                if (p) {
                  let t = { ...e.contexts },
                    r = (0, a.S8)(p, n);
                  return (
                    (0, o.Qd)(r) &&
                      ((0, l.my)(r, "__sentry_skip_normalization__", !0),
                      (t[d] = r)),
                    { ...e, contexts: t }
                  );
                }
                return e;
              })(e, r, t, n, d);
            },
          };
        });
      },
      76005(e, t, n) {
        "use strict";
        let r;
        n.d(t, { Z: () => l });
        var i = n(630449),
          o = n(688331),
          s = n(690094);
        let a = new WeakMap(),
          l = (0, o._C)(() => ({
            name: "FunctionToString",
            setupOnce() {
              r = Function.prototype.toString;
              try {
                Function.prototype.toString = function (...e) {
                  let t = (0, s.sp)(this),
                    n = a.has((0, i.KU)()) && void 0 !== t ? t : this;
                  return r.apply(n, e);
                };
              } catch (e) {}
            },
            setup(e) {
              a.set(e, !0);
            },
          }));
      },
      550601(e, t, n) {
        "use strict";
        n.d(t, { D: () => c });
        var r = n(326447),
          i = n(688331),
          o = n(272469),
          s = n(231577),
          a = n(826476);
        let l = [
            /^Script error\.?$/,
            /^Javascript error: Script error\.? on line 0$/,
            /^ResizeObserver loop completed with undelivered notifications.$/,
            /^Cannot redefine property: googletag$/,
            "undefined is not an object (evaluating 'a.L')",
            'can\'t redefine non-configurable property "solana"',
            "vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)",
            "Can't find variable: _AutofillCallbackHandler",
            /^Non-Error promise rejection captured with value: Object Not Found Matching Id:\d+, MethodName:simulateEvent, ParamCount:\d+$/,
          ],
          c = (0, i._C)((e = {}) => ({
            name: "InboundFilters",
            processEvent: (t, n, i) => {
              var c, d, p, h, f;
              return ((c = t),
              (d = (function (e = {}, t = {}) {
                return {
                  allowUrls: [...(e.allowUrls || []), ...(t.allowUrls || [])],
                  denyUrls: [...(e.denyUrls || []), ...(t.denyUrls || [])],
                  ignoreErrors: [
                    ...(e.ignoreErrors || []),
                    ...(t.ignoreErrors || []),
                    ...(e.disableErrorDefaults ? [] : l),
                  ],
                  ignoreTransactions: [
                    ...(e.ignoreTransactions || []),
                    ...(t.ignoreTransactions || []),
                  ],
                  ignoreInternal:
                    void 0 === e.ignoreInternal || e.ignoreInternal,
                };
              })(e, i.getOptions())).ignoreInternal &&
              (function (e) {
                try {
                  return "SentryError" === e.exception.values[0].type;
                } catch (e) {}
                return !1;
              })(c)
                ? (r.T &&
                    o.vF.warn(`Event dropped due to being internal Sentry Error.
Event: ${(0, s.$X)(c)}`),
                  0)
                : ((p = c),
                    (h = d.ignoreErrors),
                    !p.type &&
                      h &&
                      h.length &&
                      (function (e) {
                        let t,
                          n = [];
                        e.message && n.push(e.message);
                        try {
                          t = e.exception.values[e.exception.values.length - 1];
                        } catch (e) {}
                        return (
                          t &&
                            t.value &&
                            (n.push(t.value),
                            t.type && n.push(`${t.type}: ${t.value}`)),
                          n
                        );
                      })(p).some((e) => (0, a.Xr)(e, h)))
                  ? (r.T &&
                      o.vF
                        .warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${(0, s.$X)(c)}`),
                    0)
                  : (f = c).type ||
                      !f.exception ||
                      !f.exception.values ||
                      0 === f.exception.values.length ||
                      f.message ||
                      f.exception.values.some(
                        (e) =>
                          e.stacktrace ||
                          (e.type && "Error" !== e.type) ||
                          e.value,
                      )
                    ? !(function (e, t) {
                        if ("transaction" !== e.type || !t || !t.length)
                          return !1;
                        let n = e.transaction;
                        return !!n && (0, a.Xr)(n, t);
                      })(c, d.ignoreTransactions)
                      ? !(function (e, t) {
                          if (!t || !t.length) return !1;
                          let n = u(e);
                          return !!n && (0, a.Xr)(n, t);
                        })(c, d.denyUrls)
                        ? (function (e, t) {
                            if (!t || !t.length) return !0;
                            let n = u(e);
                            return !n || (0, a.Xr)(n, t);
                          })(c, d.allowUrls) ||
                          (r.T &&
                            o.vF
                              .warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${(0, s.$X)(c)}.
Url: ${u(c)}`),
                          0)
                        : (r.T &&
                            o.vF
                              .warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${(0, s.$X)(c)}.
Url: ${u(c)}`),
                          0)
                      : (r.T &&
                          o.vF
                            .warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${(0, s.$X)(c)}`),
                        0)
                    : (r.T &&
                        o.vF
                          .warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${(0, s.$X)(c)}`),
                      0))
                ? t
                : null;
            },
          }));
        function u(e) {
          try {
            let t;
            try {
              t = e.exception.values[0].stacktrace.frames;
            } catch (e) {}
            return t
              ? (function (e = []) {
                  for (let t = e.length - 1; t >= 0; t--) {
                    let n = e[t];
                    if (
                      n &&
                      "<anonymous>" !== n.filename &&
                      "[native code]" !== n.filename
                    )
                      return n.filename || null;
                  }
                  return null;
                })(t)
              : null;
          } catch (t) {
            return (
              r.T && o.vF.error(`Cannot extract url for event ${(0, s.$X)(e)}`),
              null
            );
          }
        }
      },
      711392(e, t, n) {
        "use strict";
        n.d(t, { Q: () => s });
        var r = n(688331),
          i = n(171164),
          o = n(847745);
        let s = (0, r._C)(() => ({
          name: "ModuleMetadata",
          setup(e) {
            e.on("beforeEnvelope", (e) => {
              (0, o.yH)(e, (e, t) => {
                if ("event" === t) {
                  let t = Array.isArray(e) ? e[1] : void 0;
                  t && ((0, i.KT)(t), (e[1] = t));
                }
              });
            }),
              e.on("applyFrameMetadata", (t) => {
                if (t.type) return;
                let n = e.getOptions().stackParser;
                (0, i.Gr)(n, t);
              });
          },
        }));
      },
      926603(e, t, n) {
        "use strict";
        n.d(t, { D: () => s });
        var r = n(688331),
          i = n(416918),
          o = n(978862);
        let s = (0, r._C)((e = {}) => {
          let t = e.root,
            n = e.prefix || "app:///",
            r = "window" in o.O && void 0 !== o.O.window,
            s =
              e.iteratee ||
              (function ({ isBrowser: e, root: t, prefix: n }) {
                return (r) => {
                  if (!r.filename) return r;
                  let o =
                      /^[a-zA-Z]:\\/.test(r.filename) ||
                      (r.filename.includes("\\") && !r.filename.includes("/")),
                    s = /^\//.test(r.filename);
                  if (e) {
                    if (t) {
                      let e = r.filename;
                      0 === e.indexOf(t) && (r.filename = e.replace(t, n));
                    }
                  } else if (o || s) {
                    let e = o
                        ? r.filename
                            .replace(/^[a-zA-Z]:/, "")
                            .replace(/\\/g, "/")
                        : r.filename,
                      s = t ? (0, i.V8)(t, e) : (0, i.P8)(e);
                    r.filename = `${n}${s}`;
                  }
                  return r;
                };
              })({ isBrowser: r, root: t, prefix: n });
          return {
            name: "RewriteFrames",
            processEvent(e) {
              let t = e;
              return (
                e.exception &&
                  Array.isArray(e.exception.values) &&
                  (t = (function (e) {
                    try {
                      return {
                        ...e,
                        exception: {
                          ...e.exception,
                          values: e.exception.values.map((e) => {
                            var t;
                            return {
                              ...e,
                              ...(e.stacktrace && {
                                stacktrace: {
                                  ...(t = e.stacktrace),
                                  frames:
                                    t && t.frames && t.frames.map((e) => s(e)),
                                },
                              }),
                            };
                          }),
                        },
                      };
                    } catch (t) {
                      return e;
                    }
                  })(t)),
                t
              );
            },
          };
        });
      },
      143939(e, t, n) {
        "use strict";
        n.d(t, { Z: () => o });
        var r = n(688331),
          i = n(83220);
        let o = (0, r._C)(() => {
          let e = 1e3 * (0, i.zf)();
          return {
            name: "SessionTiming",
            processEvent(t) {
              let n = 1e3 * (0, i.zf)();
              return {
                ...t,
                extra: {
                  ...t.extra,
                  "session:start": e,
                  "session:duration": n - e,
                  "session:end": n,
                },
              };
            },
          };
        });
      },
      30216(e, t, n) {
        "use strict";
        n.d(t, { y: () => a });
        var r = n(688331),
          i = n(171164),
          o = n(847745),
          s = n(968072);
        let a = (0, r._C)((e) => ({
            name: "ThirdPartyErrorsFilter",
            setup(e) {
              e.on("beforeEnvelope", (e) => {
                (0, o.yH)(e, (e, t) => {
                  if ("event" === t) {
                    let t = Array.isArray(e) ? e[1] : void 0;
                    t && ((0, i.KT)(t), (e[1] = t));
                  }
                });
              }),
                e.on("applyFrameMetadata", (t) => {
                  if (t.type) return;
                  let n = e.getOptions().stackParser;
                  (0, i.Gr)(n, t);
                });
            },
            processEvent(t) {
              let n = (function (e) {
                let t = (0, s.RV)(e);
                if (t)
                  return t
                    .filter((e) => !!e.filename)
                    .map((e) =>
                      e.module_metadata
                        ? Object.keys(e.module_metadata)
                            .filter((e) => e.startsWith(l))
                            .map((e) => e.slice(l.length))
                        : [],
                    );
              })(t);
              if (
                n &&
                n[
                  "drop-error-if-contains-third-party-frames" === e.behaviour ||
                  "apply-tag-if-contains-third-party-frames" === e.behaviour
                    ? "some"
                    : "every"
                ]((t) => !t.some((t) => e.filterKeys.includes(t)))
              ) {
                if (
                  "drop-error-if-contains-third-party-frames" === e.behaviour ||
                  "drop-error-if-exclusively-contains-third-party-frames" ===
                    e.behaviour
                )
                  return null;
                t.tags = { ...t.tags, third_party_code: !0 };
              }
              return t;
            },
          })),
          l = "_sentryBundlerPluginAppKey:";
      },
      709139(e, t, n) {
        "use strict";
        n.d(t, { rB: () => a });
        var r = n(688331),
          i = n(875565),
          o = n(826476);
        function s(e) {
          return {
            ...e,
            path:
              "path" in e && Array.isArray(e.path) ? e.path.join(".") : void 0,
            keys: "keys" in e ? JSON.stringify(e.keys) : void 0,
            unionErrors:
              "unionErrors" in e ? JSON.stringify(e.unionErrors) : void 0,
          };
        }
        let a = (0, r._C)((e = {}) => {
          let t = void 0 === e.limit ? 10 : e.limit;
          return {
            name: "ZodErrors",
            processEvent: (n, r) =>
              (function (e, t = !1, n, r) {
                var a;
                if (
                  !n.exception ||
                  !n.exception.values ||
                  !r ||
                  !r.originalException ||
                  ((a = r.originalException),
                  !(
                    (0, i.bJ)(a) &&
                    "ZodError" === a.name &&
                    Array.isArray(a.issues)
                  )) ||
                  0 === r.originalException.issues.length
                )
                  return n;
                try {
                  let i = (
                    t
                      ? r.originalException.issues
                      : r.originalException.issues.slice(0, e)
                  ).map(s);
                  return (
                    t &&
                      (Array.isArray(r.attachments) || (r.attachments = []),
                      r.attachments.push({
                        filename: "zod_issues.json",
                        data: JSON.stringify({ issues: i }),
                      })),
                    {
                      ...n,
                      exception: {
                        ...n.exception,
                        values: [
                          {
                            ...n.exception.values[0],
                            value: (function (e) {
                              let t = new Set();
                              for (let n of e.issues) {
                                let e = n.path
                                  .map((e) =>
                                    "number" == typeof e ? "<array>" : e,
                                  )
                                  .join(".");
                                e.length > 0 && t.add(e);
                              }
                              let n = Array.from(t);
                              if (0 === n.length) {
                                let t = "variable";
                                if (e.issues.length > 0) {
                                  let n = e.issues[0];
                                  void 0 !== n &&
                                    "expected" in n &&
                                    "string" == typeof n.expected &&
                                    (t = n.expected);
                                }
                                return `Failed to validate ${t}`;
                              }
                              return `Failed to validate keys: ${(0, o.xv)(n.join(", "), 100)}`;
                            })(r.originalException),
                          },
                          ...n.exception.values.slice(1),
                        ],
                      },
                      extra: { ...n.extra, "zoderror.issues": i.slice(0, e) },
                    }
                  );
                } catch (e) {
                  return {
                    ...n,
                    extra: {
                      ...n.extra,
                      "zoderrors sentry integration parse error": {
                        message:
                          "an exception was thrown while processing ZodError within applyZodErrorsToEvent()",
                        error:
                          e instanceof Error
                            ? `${e.name}: ${e.message}
${e.stack}`
                            : "unknown",
                      },
                    },
                  };
                }
              })(t, e.saveZodIssuesAsAttachment, n, r),
          };
        });
      },
      171164(e, t, n) {
        "use strict";
        n.d(t, { Gr: () => s, KT: () => a });
        var r = n(978862);
        let i = new Map(),
          o = new Set();
        function s(e, t) {
          try {
            t.exception.values.forEach((t) => {
              if (t.stacktrace)
                for (let n of t.stacktrace.frames || []) {
                  if (!n.filename || n.module_metadata) continue;
                  let t = (function (e, t) {
                    if (r.O._sentryModuleMetadata)
                      for (let t of Object.keys(r.O._sentryModuleMetadata)) {
                        let n = r.O._sentryModuleMetadata[t];
                        if (!o.has(t)) {
                          for (let r of (o.add(t), e(t).reverse()))
                            if (r.filename) {
                              i.set(r.filename, n);
                              break;
                            }
                        }
                      }
                    return i.get(t);
                  })(e, n.filename);
                  t && (n.module_metadata = t);
                }
            });
          } catch (e) {}
        }
        function a(e) {
          try {
            e.exception.values.forEach((e) => {
              if (e.stacktrace)
                for (let t of e.stacktrace.frames || [])
                  delete t.module_metadata;
            });
          } catch (e) {}
        }
      },
      564289(e, t, n) {
        "use strict";
        n.d(t, { v: () => l });
        var r = n(83220),
          i = n(582102),
          o = n(77371),
          s = n(943984),
          a = n(773678);
        class l {
          constructor(e) {
            (this._client = e),
              (this._buckets = new Map()),
              (this._interval = setInterval(() => this.flush(), 5e3));
          }
          add(e, t, n, o = "none", l = {}, c = (0, r.zf)()) {
            let u = Math.floor(c),
              d = (0, a.T3)(t),
              p = (0, a.VZ)(l),
              h = (0, a.Mz)(o),
              f = (0, a.eG)(e, d, h, p),
              m = this._buckets.get(f),
              g = m && "s" === e ? m.metric.weight : 0;
            m
              ? (m.metric.add(n), m.timestamp < u && (m.timestamp = u))
              : ((m = {
                  metric: new s.wz[e](n),
                  timestamp: u,
                  metricType: e,
                  name: d,
                  unit: h,
                  tags: p,
                }),
                this._buckets.set(f, m));
            let _ = "string" == typeof n ? m.metric.weight - g : n;
            (0, i.r2)(e, d, _, h, l, f);
          }
          flush() {
            if (0 === this._buckets.size) return;
            let e = Array.from(this._buckets.values());
            (0, o.$)(this._client, e), this._buckets.clear();
          }
          close() {
            clearInterval(this._interval), this.flush();
          }
        }
      },
      77371(e, t, n) {
        "use strict";
        n.d(t, { $: () => a });
        var r = n(608768),
          i = n(847745),
          o = n(272469),
          s = n(773678);
        function a(e, t) {
          var n, a, l, c, u;
          let d, p, h;
          o.vF.log(
            `Flushing aggregated metrics, number of metrics: ${t.length}`,
          );
          let f = e.getDsn(),
            m = e.getSdkMetadata(),
            g =
              ((n = t),
              (a = f),
              (l = m),
              (c = e.getOptions().tunnel),
              (d = { sent_at: new Date().toISOString() }),
              l &&
                l.sdk &&
                (d.sdk = { name: l.sdk.name, version: l.sdk.version }),
              c && a && (d.dsn = (0, r.SB)(a)),
              (h =
                ((u = n),
                [{ type: "statsd", length: (p = (0, s.ik)(u)).length }, p])),
              (0, i.h4)(d, [h]));
          e.sendEnvelope(g);
        }
      },
      888700(e, t, n) {
        "use strict";
        n.d(t, { q: () => f });
        var r = n(630449),
          i = n(326447),
          o = n(978862),
          s = n(272469),
          a = n(83220),
          l = n(582102),
          c = n(660161),
          u = n(53837);
        function d(e, t) {
          let n = (0, o.B)("globalMetricsAggregators", () => new WeakMap()),
            r = n.get(e);
          if (r) return r;
          let i = new t(e);
          return (
            e.on("flush", () => i.flush()),
            e.on("close", () => i.close()),
            n.set(e, i),
            i
          );
        }
        function p(e, t, n, o, a = {}) {
          let c = a.client || (0, r.KU)();
          if (!c) return;
          let u = (0, l.Bk)(),
            h = u ? (0, l.zU)(u) : void 0,
            f = h && (0, l.et)(h).description,
            { unit: m, tags: g, timestamp: _ } = a,
            { release: v, environment: y } = c.getOptions(),
            b = {};
          v && (b.release = v),
            y && (b.environment = y),
            f && (b.transaction = f),
            i.T && s.vF.log(`Adding value of ${o} to ${t} metric ${n}`),
            d(c, e).add(t, n, o, m, { ...b, ...g }, _);
        }
        function h(e, t, n, r) {
          p(e, "d", t, m(n), r);
        }
        let f = {
          increment: function (e, t, n = 1, r) {
            p(e, "c", t, m(n), r);
          },
          distribution: h,
          set: function (e, t, n, r) {
            p(e, "s", t, n, r);
          },
          gauge: function (e, t, n, r) {
            p(e, "g", t, m(n), r);
          },
          timing: function (e, t, n, r = "second", i) {
            if ("function" == typeof n) {
              let r = (0, a.zf)();
              return (0, c.nV)(
                {
                  op: "metrics.timing",
                  name: t,
                  startTime: r,
                  onlyIfParent: !0,
                },
                (o) =>
                  (0, u.x)(
                    () => n(),
                    () => {},
                    () => {
                      let n = (0, a.zf)();
                      h(e, t, n - r, { ...i, unit: "second" }), o.end(n);
                    },
                  ),
              );
            }
            h(e, t, n, { ...i, unit: r });
          },
          getMetricsAggregatorForClient: d,
        };
        function m(e) {
          return "string" == typeof e ? parseInt(e) : e;
        }
      },
      943984(e, t, n) {
        "use strict";
        n.d(t, { wz: () => i });
        var r = n(773678);
        let i = {
          c: class {
            constructor(e) {
              this._value = e;
            }
            get weight() {
              return 1;
            }
            add(e) {
              this._value += e;
            }
            toString() {
              return `${this._value}`;
            }
          },
          g: class {
            constructor(e) {
              (this._last = e),
                (this._min = e),
                (this._max = e),
                (this._sum = e),
                (this._count = 1);
            }
            get weight() {
              return 5;
            }
            add(e) {
              (this._last = e),
                e < this._min && (this._min = e),
                e > this._max && (this._max = e),
                (this._sum += e),
                this._count++;
            }
            toString() {
              return `${this._last}:${this._min}:${this._max}:${this._sum}:${this._count}`;
            }
          },
          d: class {
            constructor(e) {
              this._value = [e];
            }
            get weight() {
              return this._value.length;
            }
            add(e) {
              this._value.push(e);
            }
            toString() {
              return this._value.join(":");
            }
          },
          s: class {
            constructor(e) {
              (this.first = e), (this._value = new Set([e]));
            }
            get weight() {
              return this._value.size;
            }
            add(e) {
              this._value.add(e);
            }
            toString() {
              return Array.from(this._value)
                .map((e) => ("string" == typeof e ? (0, r.tx)(e) : e))
                .join(":");
            }
          },
        };
      },
      991854(e, t, n) {
        "use strict";
        n.d(t, { X: () => s, g: () => o });
        var r = n(690094);
        let i = "_sentryMetrics";
        function o(e) {
          let t = e[i];
          if (!t) return;
          let n = {};
          for (let [, [e, i]] of t) (n[e] || (n[e] = [])).push((0, r.Ce)(i));
          return n;
        }
        function s(e, t, n, r, o, s, a) {
          let l = e[i] || (e[i] = new Map()),
            c = `${t}:${n}@${o}`,
            u = l.get(a);
          if (u) {
            let [, e] = u;
            l.set(a, [
              c,
              {
                min: Math.min(e.min, r),
                max: Math.max(e.max, r),
                count: (e.count += 1),
                sum: (e.sum += r),
                tags: e.tags,
              },
            ]);
          } else l.set(a, [c, { min: r, max: r, count: 1, sum: r, tags: s }]);
        }
      },
      773678(e, t, n) {
        "use strict";
        n.d(t, {
          Mz: () => a,
          T3: () => l,
          VZ: () => u,
          eG: () => i,
          ik: () => s,
          tx: () => o,
        });
        var r = n(690094);
        function i(e, t, n, i) {
          let o = Object.entries((0, r.Ce)(i)).sort((e, t) =>
            e[0].localeCompare(t[0]),
          );
          return `${e}${t}${n}${o}`;
        }
        function o(e) {
          let t = 0;
          for (let n = 0; n < e.length; n++)
            (t = (t << 5) - t + e.charCodeAt(n)), (t &= t);
          return t >>> 0;
        }
        function s(e) {
          let t = "";
          for (let n of e) {
            let e = Object.entries(n.tags),
              r =
                e.length > 0
                  ? `|#${e.map(([e, t]) => `${e}:${t}`).join(",")}`
                  : "";
            t += `${n.name}@${n.unit}:${n.metric}|${n.metricType}${r}|T${n.timestamp}
`;
          }
          return t;
        }
        function a(e) {
          return e.replace(/[^\w]+/gi, "_");
        }
        function l(e) {
          return e.replace(/[^\w\-.]+/gi, "_");
        }
        let c = [
          ["\n", "\\n"],
          ["\r", "\\r"],
          ["	", "\\t"],
          ["\\", "\\\\"],
          ["|", "\\u{7c}"],
          [",", "\\u{2c}"],
        ];
        function u(e) {
          let t = {};
          for (let n in e)
            Object.prototype.hasOwnProperty.call(e, n) &&
              (t[n.replace(/[^\w\-./]+/gi, "")] = [...String(e[n])].reduce(
                (e, t) =>
                  e +
                  (function (e) {
                    for (let [t, n] of c) if (e === t) return n;
                    return e;
                  })(t),
                "",
              ));
          return t;
        }
      },
      128377(e, t, n) {
        "use strict";
        n.d(t, { H: () => p });
        var r = n(680753),
          i = n(875565),
          o = n(272469),
          s = n(231577),
          a = n(834932),
          l = n(83220),
          c = n(487851),
          u = n(286788);
        class d {
          constructor() {
            (this._notifyingListeners = !1),
              (this._scopeListeners = []),
              (this._eventProcessors = []),
              (this._breadcrumbs = []),
              (this._attachments = []),
              (this._user = {}),
              (this._tags = {}),
              (this._extra = {}),
              (this._contexts = {}),
              (this._sdkProcessingMetadata = {}),
              (this._propagationContext = {
                traceId: (0, a.el)(),
                spanId: (0, a.ZF)(),
              });
          }
          clone() {
            let e = new d();
            return (
              (e._breadcrumbs = [...this._breadcrumbs]),
              (e._tags = { ...this._tags }),
              (e._extra = { ...this._extra }),
              (e._contexts = { ...this._contexts }),
              this._contexts.flags &&
                (e._contexts.flags = {
                  values: [...this._contexts.flags.values],
                }),
              (e._user = this._user),
              (e._level = this._level),
              (e._session = this._session),
              (e._transactionName = this._transactionName),
              (e._fingerprint = this._fingerprint),
              (e._eventProcessors = [...this._eventProcessors]),
              (e._requestSession = this._requestSession),
              (e._attachments = [...this._attachments]),
              (e._sdkProcessingMetadata = { ...this._sdkProcessingMetadata }),
              (e._propagationContext = { ...this._propagationContext }),
              (e._client = this._client),
              (e._lastEventId = this._lastEventId),
              (0, u.r)(e, (0, u.f)(this)),
              e
            );
          }
          setClient(e) {
            this._client = e;
          }
          setLastEventId(e) {
            this._lastEventId = e;
          }
          getClient() {
            return this._client;
          }
          lastEventId() {
            return this._lastEventId;
          }
          addScopeListener(e) {
            this._scopeListeners.push(e);
          }
          addEventProcessor(e) {
            return this._eventProcessors.push(e), this;
          }
          setUser(e) {
            return (
              (this._user = e || {
                email: void 0,
                id: void 0,
                ip_address: void 0,
                username: void 0,
              }),
              this._session && (0, r.qO)(this._session, { user: e }),
              this._notifyScopeListeners(),
              this
            );
          }
          getUser() {
            return this._user;
          }
          getRequestSession() {
            return this._requestSession;
          }
          setRequestSession(e) {
            return (this._requestSession = e), this;
          }
          setTags(e) {
            return (
              (this._tags = { ...this._tags, ...e }),
              this._notifyScopeListeners(),
              this
            );
          }
          setTag(e, t) {
            return (
              (this._tags = { ...this._tags, [e]: t }),
              this._notifyScopeListeners(),
              this
            );
          }
          setExtras(e) {
            return (
              (this._extra = { ...this._extra, ...e }),
              this._notifyScopeListeners(),
              this
            );
          }
          setExtra(e, t) {
            return (
              (this._extra = { ...this._extra, [e]: t }),
              this._notifyScopeListeners(),
              this
            );
          }
          setFingerprint(e) {
            return (this._fingerprint = e), this._notifyScopeListeners(), this;
          }
          setLevel(e) {
            return (this._level = e), this._notifyScopeListeners(), this;
          }
          setTransactionName(e) {
            return (
              (this._transactionName = e), this._notifyScopeListeners(), this
            );
          }
          setContext(e, t) {
            return (
              null === t ? delete this._contexts[e] : (this._contexts[e] = t),
              this._notifyScopeListeners(),
              this
            );
          }
          setSession(e) {
            return (
              e ? (this._session = e) : delete this._session,
              this._notifyScopeListeners(),
              this
            );
          }
          getSession() {
            return this._session;
          }
          update(e) {
            if (!e) return this;
            let t = "function" == typeof e ? e(this) : e,
              [n, r] =
                t instanceof p
                  ? [t.getScopeData(), t.getRequestSession()]
                  : (0, i.Qd)(t)
                    ? [e, e.requestSession]
                    : [],
              {
                tags: o,
                extra: s,
                user: a,
                contexts: l,
                level: c,
                fingerprint: u = [],
                propagationContext: d,
              } = n || {};
            return (
              (this._tags = { ...this._tags, ...o }),
              (this._extra = { ...this._extra, ...s }),
              (this._contexts = { ...this._contexts, ...l }),
              a && Object.keys(a).length && (this._user = a),
              c && (this._level = c),
              u.length && (this._fingerprint = u),
              d && (this._propagationContext = d),
              r && (this._requestSession = r),
              this
            );
          }
          clear() {
            return (
              (this._breadcrumbs = []),
              (this._tags = {}),
              (this._extra = {}),
              (this._user = {}),
              (this._contexts = {}),
              (this._level = void 0),
              (this._transactionName = void 0),
              (this._fingerprint = void 0),
              (this._requestSession = void 0),
              (this._session = void 0),
              (0, u.r)(this, void 0),
              (this._attachments = []),
              this.setPropagationContext({ traceId: (0, a.el)() }),
              this._notifyScopeListeners(),
              this
            );
          }
          addBreadcrumb(e, t) {
            let n = "number" == typeof t ? t : 100;
            if (n <= 0) return this;
            let r = { timestamp: (0, l.lu)(), ...e };
            return (
              this._breadcrumbs.push(r),
              this._breadcrumbs.length > n &&
                ((this._breadcrumbs = this._breadcrumbs.slice(-n)),
                this._client &&
                  this._client.recordDroppedEvent(
                    "buffer_overflow",
                    "log_item",
                  )),
              this._notifyScopeListeners(),
              this
            );
          }
          getLastBreadcrumb() {
            return this._breadcrumbs[this._breadcrumbs.length - 1];
          }
          clearBreadcrumbs() {
            return (this._breadcrumbs = []), this._notifyScopeListeners(), this;
          }
          addAttachment(e) {
            return this._attachments.push(e), this;
          }
          clearAttachments() {
            return (this._attachments = []), this;
          }
          getScopeData() {
            return {
              breadcrumbs: this._breadcrumbs,
              attachments: this._attachments,
              contexts: this._contexts,
              tags: this._tags,
              extra: this._extra,
              user: this._user,
              level: this._level,
              fingerprint: this._fingerprint || [],
              eventProcessors: this._eventProcessors,
              propagationContext: this._propagationContext,
              sdkProcessingMetadata: this._sdkProcessingMetadata,
              transactionName: this._transactionName,
              span: (0, u.f)(this),
            };
          }
          setSDKProcessingMetadata(e) {
            return (
              (this._sdkProcessingMetadata = (0, c.h)(
                this._sdkProcessingMetadata,
                e,
                2,
              )),
              this
            );
          }
          setPropagationContext(e) {
            return (
              (this._propagationContext = { spanId: (0, a.ZF)(), ...e }), this
            );
          }
          getPropagationContext() {
            return this._propagationContext;
          }
          captureException(e, t) {
            let n = t && t.event_id ? t.event_id : (0, s.eJ)();
            if (!this._client)
              return (
                o.vF.warn(
                  "No client configured on scope - will not capture exception!",
                ),
                n
              );
            let r = Error("Sentry syntheticException");
            return (
              this._client.captureException(
                e,
                {
                  originalException: e,
                  syntheticException: r,
                  ...t,
                  event_id: n,
                },
                this,
              ),
              n
            );
          }
          captureMessage(e, t, n) {
            let r = n && n.event_id ? n.event_id : (0, s.eJ)();
            if (!this._client)
              return (
                o.vF.warn(
                  "No client configured on scope - will not capture message!",
                ),
                r
              );
            let i = Error(e);
            return (
              this._client.captureMessage(
                e,
                t,
                {
                  originalException: e,
                  syntheticException: i,
                  ...n,
                  event_id: r,
                },
                this,
              ),
              r
            );
          }
          captureEvent(e, t) {
            let n = t && t.event_id ? t.event_id : (0, s.eJ)();
            return (
              this._client
                ? this._client.captureEvent(e, { ...t, event_id: n }, this)
                : o.vF.warn(
                    "No client configured on scope - will not capture event!",
                  ),
              n
            );
          }
          _notifyScopeListeners() {
            this._notifyingListeners ||
              ((this._notifyingListeners = !0),
              this._scopeListeners.forEach((e) => {
                e(this);
              }),
              (this._notifyingListeners = !1));
          }
        }
        let p = d;
      },
      779949(e, t, n) {
        "use strict";
        n.d(t, { B: () => a, J: () => s });
        var r = n(630449),
          i = n(326447),
          o = n(272469);
        function s(e, t) {
          !0 === t.debug &&
            (i.T
              ? o.vF.enable()
              : (0, o.pq)(() => {
                  console.warn(
                    "[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.",
                  );
                })),
            (0, r.o5)().update(t.initialScope);
          let n = new e(t);
          return a(n), n.init(), n;
        }
        function a(e) {
          (0, r.o5)().setClient(e);
        }
      },
      92332(e, t, n) {
        "use strict";
        n.d(t, {
          E1: () => d,
          JD: () => s,
          Le: () => u,
          Sn: () => l,
          fs: () => a,
          i_: () => r,
          jG: () => p,
          sy: () => i,
          uT: () => o,
          xc: () => c,
        });
        let r = "sentry.source",
          i = "sentry.sample_rate",
          o = "sentry.op",
          s = "sentry.origin",
          a = "sentry.idle_span_finish_reason",
          l = "sentry.measurement_unit",
          c = "sentry.measurement_value",
          u = "sentry.custom_span_name",
          d = "sentry.profile_id",
          p = "sentry.exclusive_time";
      },
      680753(e, t, n) {
        "use strict";
        n.d(t, { Vu: () => l, fj: () => s, qO: () => a });
        var r = n(690094),
          i = n(83220),
          o = n(231577);
        function s(e) {
          let t = (0, i.zf)(),
            n = {
              sid: (0, o.eJ)(),
              init: !0,
              timestamp: t,
              started: t,
              duration: 0,
              status: "ok",
              errors: 0,
              ignoreDuration: !1,
              toJSON: () => {
                var e;
                return (
                  (e = n),
                  (0, r.Ce)({
                    sid: `${e.sid}`,
                    init: e.init,
                    started: new Date(1e3 * e.started).toISOString(),
                    timestamp: new Date(1e3 * e.timestamp).toISOString(),
                    status: e.status,
                    errors: e.errors,
                    did:
                      "number" == typeof e.did || "string" == typeof e.did
                        ? `${e.did}`
                        : void 0,
                    duration: e.duration,
                    abnormal_mechanism: e.abnormal_mechanism,
                    attrs: {
                      release: e.release,
                      environment: e.environment,
                      ip_address: e.ipAddress,
                      user_agent: e.userAgent,
                    },
                  })
                );
              },
            };
          return e && a(n, e), n;
        }
        function a(e, t = {}) {
          if (
            (t.user &&
              (!e.ipAddress &&
                t.user.ip_address &&
                (e.ipAddress = t.user.ip_address),
              e.did ||
                t.did ||
                (e.did = t.user.id || t.user.email || t.user.username)),
            (e.timestamp = t.timestamp || (0, i.zf)()),
            t.abnormal_mechanism &&
              (e.abnormal_mechanism = t.abnormal_mechanism),
            t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration),
            t.sid && (e.sid = 32 === t.sid.length ? t.sid : (0, o.eJ)()),
            void 0 !== t.init && (e.init = t.init),
            !e.did && t.did && (e.did = `${t.did}`),
            "number" == typeof t.started && (e.started = t.started),
            e.ignoreDuration)
          )
            e.duration = void 0;
          else if ("number" == typeof t.duration) e.duration = t.duration;
          else {
            let t = e.timestamp - e.started;
            e.duration = t >= 0 ? t : 0;
          }
          t.release && (e.release = t.release),
            t.environment && (e.environment = t.environment),
            !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress),
            !e.userAgent && t.userAgent && (e.userAgent = t.userAgent),
            "number" == typeof t.errors && (e.errors = t.errors),
            t.status && (e.status = t.status);
        }
        function l(e, t) {
          let n = {};
          t
            ? (n = { status: t })
            : "ok" === e.status && (n = { status: "exited" }),
            a(e, n);
        }
      },
      411361(e, t, n) {
        "use strict";
        n.d(t, { HW: () => m, LZ: () => d, ao: () => h, k1: () => f });
        var r = n(922248),
          i = n(630449),
          o = n(92332),
          s = n(435819),
          a = n(690094),
          l = n(370932),
          c = n(582102);
        let u = "_frozenDsc";
        function d(e, t) {
          (0, a.my)(e, u, t);
        }
        function p(e, t) {
          let n = t.getOptions(),
            { publicKey: i } = t.getDsn() || {},
            o = (0, a.Ce)({
              environment: n.environment || r.U,
              release: n.release,
              public_key: i,
              trace_id: e,
            });
          return t.emit("createDsc", o), o;
        }
        function h(e, t) {
          let n = t.getPropagationContext();
          return n.dsc || p(n.traceId, e);
        }
        function f(e) {
          let t = (0, i.KU)();
          if (!t) return {};
          let n = (0, c.zU)(e),
            r = n[u];
          if (r) return r;
          let a = n.spanContext().traceState,
            d = a && a.get("sentry.dsc"),
            h = d && (0, s.yD)(d);
          if (h) return h;
          let f = p(e.spanContext().traceId, t),
            m = (0, c.et)(n),
            g = m.data || {},
            _ = g[o.sy];
          null != _ && (f.sample_rate = `${_}`);
          let v = g[o.i_],
            y = m.description;
          return (
            "url" !== v && y && (f.transaction = y),
            (0, l.w)() && (f.sampled = String((0, c.pK)(n))),
            t.emit("createDsc", f, n),
            f
          );
        }
        function m(e) {
          let t = f(e);
          return (0, s.De)(t);
        }
      },
      439057(e, t, n) {
        "use strict";
        n.d(t, { s: () => c });
        var r = n(326447),
          i = n(469052),
          o = n(291686),
          s = n(272469),
          a = n(582102);
        let l = !1;
        function c() {
          l || ((l = !0), (0, i.L)(u), (0, o.r)(u));
        }
        function u() {
          let e = (0, a.Bk)(),
            t = e && (0, a.zU)(e);
          if (t) {
            let e = "internal_error";
            r.T &&
              s.vF.log(`[Tracing] Root span: ${e} -> Global error occurred`),
              t.setStatus({ code: 2, message: e });
          }
        }
        u.tag = "sentry_tracingErrorCallback";
      },
      556929(e, t, n) {
        "use strict";
        n.d(t, { U: () => i });
        var r = n(439057);
        function i() {
          (0, r.s)();
        }
      },
      925012(e, t, n) {
        "use strict";
        n.d(t, { C: () => h, D: () => f });
        var r = n(630449),
          i = n(326447),
          o = n(92332),
          s = n(272469),
          a = n(83220),
          l = n(370932),
          c = n(286788),
          u = n(582102),
          d = n(722571),
          p = n(660161);
        let h = { idleTimeout: 1e3, finalTimeout: 3e4, childSpanTimeout: 15e3 };
        function f(e, t = {}) {
          var n;
          let m,
            g,
            _ = new Map(),
            v = !1,
            y = "externalFinish",
            b = !t.disableAutoFinish,
            S = [],
            {
              idleTimeout: w = h.idleTimeout,
              finalTimeout: E = h.finalTimeout,
              childSpanTimeout: k = h.childSpanTimeout,
              beforeSpanEnd: x,
            } = t,
            C = (0, r.KU)();
          if (!C || !(0, l.w)()) return new d.w();
          let T = (0, r.o5)(),
            I = (0, u.Bk)(),
            M =
              ((n = e),
              (m = (0, p.Uk)(n)),
              (0, c.r)((0, r.o5)(), m),
              i.T && s.vF.log("[Tracing] Started span is an idle span"),
              m);
          function O() {
            g && (clearTimeout(g), (g = void 0));
          }
          function D(e) {
            O(),
              (g = setTimeout(() => {
                !v && 0 === _.size && b && ((y = "idleTimeout"), M.end(e));
              }, w));
          }
          function R(e) {
            g = setTimeout(() => {
              !v && b && ((y = "heartbeatFailed"), M.end(e));
            }, k);
          }
          function A(e) {
            (v = !0), _.clear(), S.forEach((e) => e()), (0, c.r)(T, I);
            let t = (0, u.et)(M),
              { start_timestamp: n } = t;
            if (!n) return;
            (t.data || {})[o.fs] || M.setAttribute(o.fs, y),
              s.vF.log(`[Tracing] Idle span "${t.op}" finished`);
            let r = (0, u.xO)(M).filter((e) => e !== M),
              a = 0;
            r.forEach((t) => {
              t.isRecording() &&
                (t.setStatus({ code: 2, message: "cancelled" }),
                t.end(e),
                i.T &&
                  s.vF.log(
                    "[Tracing] Cancelling span since span ended early",
                    JSON.stringify(t, void 0, 2),
                  ));
              let { timestamp: n = 0, start_timestamp: r = 0 } = (0, u.et)(t),
                o = r <= e,
                l = n - r <= (E + w) / 1e3;
              if (i.T) {
                let e = JSON.stringify(t, void 0, 2);
                o
                  ? l ||
                    s.vF.log(
                      "[Tracing] Discarding span since it finished after idle span final timeout",
                      e,
                    )
                  : s.vF.log(
                      "[Tracing] Discarding span since it happened after idle span was finished",
                      e,
                    );
              }
              (!l || !o) && ((0, u.VS)(M, t), a++);
            }),
              a > 0 && M.setAttribute("sentry.idle_span_discarded_spans", a);
          }
          return (
            (M.end = new Proxy(M.end, {
              apply(e, t, n) {
                x && x(M);
                let [r, ...i] = n,
                  o = r || (0, a.zf)(),
                  s = (0, u.cI)(o),
                  l = (0, u.xO)(M).filter((e) => e !== M);
                if (!l.length) return A(s), Reflect.apply(e, t, [s, ...i]);
                let c = l.map((e) => (0, u.et)(e).timestamp).filter((e) => !!e),
                  d = c.length ? Math.max(...c) : void 0,
                  p = (0, u.et)(M).start_timestamp,
                  h = Math.min(
                    p ? p + E / 1e3 : 1 / 0,
                    Math.max(p || -1 / 0, Math.min(s, d || 1 / 0)),
                  );
                return A(h), Reflect.apply(e, t, [h, ...i]);
              },
            })),
            S.push(
              C.on("spanStart", (e) => {
                var t;
                v ||
                  e === M ||
                  (0, u.et)(e).timestamp ||
                  ((0, u.xO)(M).includes(e) &&
                    ((t = e.spanContext().spanId),
                    O(),
                    _.set(t, !0),
                    R((0, a.zf)() + k / 1e3)));
              }),
            ),
            S.push(
              C.on("spanEnd", (e) => {
                if (!v) {
                  var t;
                  (t = e.spanContext().spanId),
                    _.has(t) && _.delete(t),
                    0 === _.size && D((0, a.zf)() + w / 1e3);
                }
              }),
            ),
            S.push(
              C.on("idleSpanEnableAutoFinish", (e) => {
                e === M && ((b = !0), D(), _.size && R());
              }),
            ),
            t.disableAutoFinish || D(),
            setTimeout(() => {
              v ||
                (M.setStatus({ code: 2, message: "deadline_exceeded" }),
                (y = "finalTimeout"),
                M.end());
            }, E),
            M
          );
        }
      },
      775525(e, t, n) {
        "use strict";
        n.d(t, { U: () => a, z: () => s });
        var r = n(326447),
          i = n(272469),
          o = n(582102);
        function s(e) {
          if (!r.T) return;
          let {
              description: t = "< unknown name >",
              op: n = "< unknown op >",
              parent_span_id: s,
            } = (0, o.et)(e),
            { spanId: a } = e.spanContext(),
            l = (0, o.pK)(e),
            c = (0, o.zU)(e),
            u = c === e,
            d = `[Tracing] Starting ${l ? "sampled" : "unsampled"} ${u ? "root " : ""}span`,
            p = [`op: ${n}`, `name: ${t}`, `ID: ${a}`];
          if ((s && p.push(`parent ID: ${s}`), !u)) {
            let { op: e, description: t } = (0, o.et)(c);
            p.push(`root ID: ${c.spanContext().spanId}`),
              e && p.push(`root op: ${e}`),
              t && p.push(`root description: ${t}`);
          }
          i.vF.log(`${d}
  ${p.join("\n  ")}`);
        }
        function a(e) {
          if (!r.T) return;
          let {
              description: t = "< unknown name >",
              op: n = "< unknown op >",
            } = (0, o.et)(e),
            { spanId: s } = e.spanContext(),
            a = (0, o.zU)(e) === e,
            l = `[Tracing] Finishing "${n}" ${a ? "root " : ""}span "${t}" with ID ${s}`;
          i.vF.log(l);
        }
      },
      142080(e, t, n) {
        "use strict";
        n.d(t, { $: () => l, X: () => a });
        var r = n(326447),
          i = n(92332),
          o = n(272469),
          s = n(582102);
        function a(e, t, n, l = (0, s.Bk)()) {
          let c = l && (0, s.zU)(l);
          c &&
            (r.T &&
              o.vF.log(
                `[Measurement] Setting measurement on root span: ${e} = ${t} ${n}`,
              ),
            c.addEvent(e, { [i.xc]: t, [i.Sn]: n }));
        }
        function l(e) {
          if (!e || 0 === e.length) return;
          let t = {};
          return (
            e.forEach((e) => {
              let n = e.attributes || {},
                r = n[i.Sn],
                o = n[i.xc];
              "string" == typeof r &&
                "number" == typeof o &&
                (t[e.name] = { value: o, unit: r });
            }),
            t
          );
        }
      },
      239967(e, t, n) {
        "use strict";
        n.d(t, { Z: () => l });
        var r = n(630449),
          i = n(326447),
          o = n(272469),
          s = n(370932),
          a = n(838596);
        function l(e, t) {
          let n;
          if (!(0, s.w)(e)) return [!1];
          let l = (0, r.rm)().getScopeData().sdkProcessingMetadata
              .normalizedRequest,
            c = { ...t, normalizedRequest: t.normalizedRequest || l };
          n =
            "function" == typeof e.tracesSampler
              ? e.tracesSampler(c)
              : void 0 !== c.parentSampled
                ? c.parentSampled
                : void 0 !== e.tracesSampleRate
                  ? e.tracesSampleRate
                  : 1;
          let u = (0, a.i)(n);
          return void 0 === u
            ? (i.T &&
                o.vF.warn(
                  "[Tracing] Discarding transaction because of invalid sample rate.",
                ),
              [!1])
            : u
              ? Math.random() < u
                ? [!0, u]
                : (i.T &&
                    o.vF.log(
                      `[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(n)})`,
                    ),
                  [!1, u])
              : (i.T &&
                  o.vF.log(
                    `[Tracing] Discarding transaction because ${"function" == typeof e.tracesSampler ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0"}`,
                  ),
                [!1, u]);
        }
      },
      722571(e, t, n) {
        "use strict";
        n.d(t, { w: () => o });
        var r = n(834932),
          i = n(582102);
        class o {
          constructor(e = {}) {
            (this._traceId = e.traceId || (0, r.el)()),
              (this._spanId = e.spanId || (0, r.ZF)());
          }
          spanContext() {
            return {
              spanId: this._spanId,
              traceId: this._traceId,
              traceFlags: i.CC,
            };
          }
          end(e) {}
          setAttribute(e, t) {
            return this;
          }
          setAttributes(e) {
            return this;
          }
          setStatus(e) {
            return this;
          }
          updateName(e) {
            return this;
          }
          isRecording() {
            return !1;
          }
          addEvent(e, t, n) {
            return this;
          }
          addLink(e) {
            return this;
          }
          addLinks(e) {
            return this;
          }
          recordException(e, t) {}
        }
      },
      415917(e, t, n) {
        "use strict";
        n.d(t, { W: () => _ });
        var r = n(630449),
          i = n(326447),
          o = n(397805),
          s = n(991854),
          a = n(92332),
          l = n(272469),
          c = n(690094),
          u = n(834932),
          d = n(83220),
          p = n(582102),
          h = n(411361),
          f = n(775525),
          m = n(142080),
          g = n(86361);
        class _ {
          constructor(e = {}) {
            (this._traceId = e.traceId || (0, u.el)()),
              (this._spanId = e.spanId || (0, u.ZF)()),
              (this._startTime = e.startTimestamp || (0, d.zf)()),
              (this._attributes = {}),
              this.setAttributes({
                [a.JD]: "manual",
                [a.uT]: e.op,
                ...e.attributes,
              }),
              (this._name = e.name),
              e.parentSpanId && (this._parentSpanId = e.parentSpanId),
              "sampled" in e && (this._sampled = e.sampled),
              e.endTimestamp && (this._endTime = e.endTimestamp),
              (this._events = []),
              (this._isStandaloneSpan = e.isStandalone),
              this._endTime && this._onSpanEnded();
          }
          addLink(e) {
            return this;
          }
          addLinks(e) {
            return this;
          }
          recordException(e, t) {}
          spanContext() {
            let { _spanId: e, _traceId: t, _sampled: n } = this;
            return { spanId: e, traceId: t, traceFlags: n ? p.aO : p.CC };
          }
          setAttribute(e, t) {
            return (
              void 0 === t
                ? delete this._attributes[e]
                : (this._attributes[e] = t),
              this
            );
          }
          setAttributes(e) {
            return (
              Object.keys(e).forEach((t) => this.setAttribute(t, e[t])), this
            );
          }
          updateStartTime(e) {
            this._startTime = (0, p.cI)(e);
          }
          setStatus(e) {
            return (this._status = e), this;
          }
          updateName(e) {
            return (this._name = e), this.setAttribute(a.i_, "custom"), this;
          }
          end(e) {
            this._endTime ||
              ((this._endTime = (0, p.cI)(e)),
              (0, f.U)(this),
              this._onSpanEnded());
          }
          getSpanJSON() {
            return (0, c.Ce)({
              data: this._attributes,
              description: this._name,
              op: this._attributes[a.uT],
              parent_span_id: this._parentSpanId,
              span_id: this._spanId,
              start_timestamp: this._startTime,
              status: (0, p.yW)(this._status),
              timestamp: this._endTime,
              trace_id: this._traceId,
              origin: this._attributes[a.JD],
              _metrics_summary: (0, s.g)(this),
              profile_id: this._attributes[a.E1],
              exclusive_time: this._attributes[a.jG],
              measurements: (0, m.$)(this._events),
              is_segment:
                (this._isStandaloneSpan && (0, p.zU)(this) === this) || void 0,
              segment_id: this._isStandaloneSpan
                ? (0, p.zU)(this).spanContext().spanId
                : void 0,
            });
          }
          isRecording() {
            return !this._endTime && !!this._sampled;
          }
          addEvent(e, t, n) {
            i.T && l.vF.log("[Tracing] Adding an event to span:", e);
            let r = v(t) ? t : n || (0, d.zf)(),
              o = v(t) ? {} : t || {},
              s = { name: e, time: (0, p.cI)(r), attributes: o };
            return this._events.push(s), this;
          }
          isStandaloneSpan() {
            return !!this._isStandaloneSpan;
          }
          _onSpanEnded() {
            let e = (0, r.KU)();
            if (
              (e && e.emit("spanEnd", this),
              !(this._isStandaloneSpan || this === (0, p.zU)(this)))
            )
              return;
            if (this._isStandaloneSpan)
              return void (this._sampled
                ? (function (e) {
                    let t = (0, r.KU)();
                    if (!t) return;
                    let n = e[1];
                    n && 0 !== n.length
                      ? t.sendEnvelope(e)
                      : t.recordDroppedEvent("before_send", "span");
                  })((0, o.lu)([this], e))
                : (i.T &&
                    l.vF.log(
                      "[Tracing] Discarding standalone span because its trace was not chosen to be sampled.",
                    ),
                  e && e.recordDroppedEvent("sample_rate", "span")));
            let t = this._convertSpanToTransaction();
            t && ((0, g.L)(this).scope || (0, r.o5)()).captureEvent(t);
          }
          _convertSpanToTransaction() {
            if (!y((0, p.et)(this))) return;
            this._name ||
              (i.T &&
                l.vF.warn(
                  "Transaction has no name, falling back to `<unlabeled transaction>`.",
                ),
              (this._name = "<unlabeled transaction>"));
            let { scope: e, isolationScope: t } = (0, g.L)(this),
              n = (e || (0, r.o5)()).getClient() || (0, r.KU)();
            if (!0 !== this._sampled) {
              i.T &&
                l.vF.log(
                  "[Tracing] Discarding transaction because its trace was not chosen to be sampled.",
                ),
                n && n.recordDroppedEvent("sample_rate", "transaction");
              return;
            }
            let o = (0, p.xO)(this)
                .filter((e) => {
                  var t;
                  return (
                    e !== this &&
                    !((t = e) instanceof _ && t.isStandaloneSpan())
                  );
                })
                .map((e) => (0, p.et)(e))
                .filter(y),
              u = this._attributes[a.i_];
            delete this._attributes[a.Le],
              o.forEach((e) => {
                e.data && delete e.data[a.Le];
              });
            let d = {
                contexts: { trace: (0, p.Ck)(this) },
                spans:
                  o.length > 1e3
                    ? o
                        .sort((e, t) => e.start_timestamp - t.start_timestamp)
                        .slice(0, 1e3)
                    : o,
                start_timestamp: this._startTime,
                timestamp: this._endTime,
                transaction: this._name,
                type: "transaction",
                sdkProcessingMetadata: {
                  capturedSpanScope: e,
                  capturedSpanIsolationScope: t,
                  ...(0, c.Ce)({ dynamicSamplingContext: (0, h.k1)(this) }),
                },
                _metrics_summary: (0, s.g)(this),
                ...(u && { transaction_info: { source: u } }),
              },
              f = (0, m.$)(this._events);
            return (
              f &&
                Object.keys(f).length &&
                (i.T &&
                  l.vF.log(
                    "[Measurements] Adding measurements to transaction event",
                    JSON.stringify(f, void 0, 2),
                  ),
                (d.measurements = f)),
              d
            );
          }
        }
        function v(e) {
          return (
            (e && "number" == typeof e) || e instanceof Date || Array.isArray(e)
          );
        }
        function y(e) {
          return (
            !!e.start_timestamp && !!e.timestamp && !!e.span_id && !!e.trace_id
          );
        }
      },
      855160(e, t, n) {
        "use strict";
        function r(e) {
          if (e < 400 && e >= 100) return { code: 1 };
          if (e >= 400 && e < 500)
            switch (e) {
              case 401:
                return { code: 2, message: "unauthenticated" };
              case 403:
                return { code: 2, message: "permission_denied" };
              case 404:
                return { code: 2, message: "not_found" };
              case 409:
                return { code: 2, message: "already_exists" };
              case 413:
                return { code: 2, message: "failed_precondition" };
              case 429:
                return { code: 2, message: "resource_exhausted" };
              case 499:
                return { code: 2, message: "cancelled" };
              default:
                return { code: 2, message: "invalid_argument" };
            }
          if (e >= 500 && e < 600)
            switch (e) {
              case 501:
                return { code: 2, message: "unimplemented" };
              case 503:
                return { code: 2, message: "unavailable" };
              case 504:
                return { code: 2, message: "deadline_exceeded" };
              default:
                return { code: 2, message: "internal_error" };
            }
          return { code: 2, message: "unknown_error" };
        }
        function i(e, t) {
          e.setAttribute("http.response.status_code", t);
          let n = r(t);
          "unknown_error" !== n.message && e.setStatus(n);
        }
        n.d(t, { A: () => r, N: () => i });
      },
      660161(e, t, n) {
        "use strict";
        n.d(t, {
          Lk: () => w,
          M1: () => T,
          Uk: () => k,
          V4: () => x,
          Y7: () => I,
          hb: () => C,
          nV: () => E,
        });
        var r = n(75109),
          i = n(630449),
          o = n(452681),
          s = n(326447),
          a = n(92332),
          l = n(272469),
          c = n(834932),
          u = n(697043),
          d = n(53837),
          p = n(370932),
          h = n(286788),
          f = n(582102),
          m = n(411361),
          g = n(775525),
          _ = n(239967),
          v = n(722571),
          y = n(415917),
          b = n(86361);
        let S = "__SENTRY_SUPPRESS_TRACING__";
        function w(e, t) {
          let n = D();
          if (n.startSpan) return n.startSpan(e, t);
          let r = O(e),
            { forceTransaction: o, parentSpan: s } = e;
          return (0, i.v4)(e.scope, () =>
            N(s)(() => {
              let n = (0, i.o5)(),
                s = A(n),
                a =
                  e.onlyIfParent && !s
                    ? new v.w()
                    : M({
                        parentSpan: s,
                        spanArguments: r,
                        forceTransaction: o,
                        scope: n,
                      });
              return (
                (0, h.r)(n, a),
                (0, d.x)(
                  () => t(a),
                  () => {
                    let { status: e } = (0, f.et)(a);
                    a.isRecording() &&
                      (!e || "ok" === e) &&
                      a.setStatus({ code: 2, message: "internal_error" });
                  },
                  () => a.end(),
                )
              );
            }),
          );
        }
        function E(e, t) {
          let n = D();
          if (n.startSpanManual) return n.startSpanManual(e, t);
          let r = O(e),
            { forceTransaction: o, parentSpan: s } = e;
          return (0, i.v4)(e.scope, () =>
            N(s)(() => {
              let n = (0, i.o5)(),
                s = A(n),
                a =
                  e.onlyIfParent && !s
                    ? new v.w()
                    : M({
                        parentSpan: s,
                        spanArguments: r,
                        forceTransaction: o,
                        scope: n,
                      });
              function l() {
                a.end();
              }
              return (
                (0, h.r)(n, a),
                (0, d.x)(
                  () => t(a, l),
                  () => {
                    let { status: e } = (0, f.et)(a);
                    a.isRecording() &&
                      (!e || "ok" === e) &&
                      a.setStatus({ code: 2, message: "internal_error" });
                  },
                )
              );
            }),
          );
        }
        function k(e) {
          let t = D();
          if (t.startInactiveSpan) return t.startInactiveSpan(e);
          let n = O(e),
            { forceTransaction: r, parentSpan: o } = e;
          return (
            e.scope
              ? (t) => (0, i.v4)(e.scope, t)
              : void 0 !== o
                ? (e) => C(o, e)
                : (e) => e()
          )(() => {
            let t = (0, i.o5)(),
              o = A(t);
            return e.onlyIfParent && !o
              ? new v.w()
              : M({
                  parentSpan: o,
                  spanArguments: n,
                  forceTransaction: r,
                  scope: t,
                });
          });
        }
        let x = (e, t) => {
          let n = (0, r.E)(),
            s = (0, o.h)(n);
          if (s.continueTrace) return s.continueTrace(e, t);
          let { sentryTrace: a, baggage: l } = e;
          return (0, i.v4)((e) => {
            let n = (0, u.kM)(a, l);
            return e.setPropagationContext(n), t();
          });
        };
        function C(e, t) {
          let n = D();
          return n.withActiveSpan
            ? n.withActiveSpan(e, t)
            : (0, i.v4)((n) => ((0, h.r)(n, e || void 0), t(n)));
        }
        function T(e) {
          let t = D();
          return t.suppressTracing
            ? t.suppressTracing(e)
            : (0, i.v4)((t) => (t.setSDKProcessingMetadata({ [S]: !0 }), e()));
        }
        function I(e) {
          return (0, i.v4)(
            (t) => (
              t.setPropagationContext({ traceId: (0, c.el)() }),
              s.T &&
                l.vF.info(
                  `Starting a new trace with id ${t.getPropagationContext().traceId}`,
                ),
              C(null, e)
            ),
          );
        }
        function M({
          parentSpan: e,
          spanArguments: t,
          forceTransaction: n,
          scope: r,
        }) {
          let o;
          if (!(0, p.w)()) return new v.w();
          let s = (0, i.rm)();
          if (e && !n)
            (o = (function (e, t, n) {
              let { spanId: r, traceId: o } = e.spanContext(),
                s = !t.getScopeData().sdkProcessingMetadata[S] && (0, f.pK)(e),
                a = s
                  ? new y.W({ ...n, parentSpanId: r, traceId: o, sampled: s })
                  : new v.w({ traceId: o });
              (0, f.Hu)(e, a);
              let l = (0, i.KU)();
              return (
                l &&
                  (l.emit("spanStart", a),
                  n.endTimestamp && l.emit("spanEnd", a)),
                a
              );
            })(e, r, t)),
              (0, f.Hu)(e, o);
          else if (e) {
            let n = (0, m.k1)(e),
              { traceId: i, spanId: s } = e.spanContext(),
              a = (0, f.pK)(e);
            (o = R({ traceId: i, parentSpanId: s, ...t }, r, a)),
              (0, m.LZ)(o, n);
          } else {
            let {
              traceId: e,
              dsc: n,
              parentSpanId: i,
              sampled: a,
            } = { ...s.getPropagationContext(), ...r.getPropagationContext() };
            (o = R({ traceId: e, parentSpanId: i, ...t }, r, a)),
              n && (0, m.LZ)(o, n);
          }
          return (0, g.z)(o), (0, b.d)(o, r, s), o;
        }
        function O(e) {
          let t = { isStandalone: (e.experimental || {}).standalone, ...e };
          if (e.startTime) {
            let n = { ...t };
            return (
              (n.startTimestamp = (0, f.cI)(e.startTime)), delete n.startTime, n
            );
          }
          return t;
        }
        function D() {
          let e = (0, r.E)();
          return (0, o.h)(e);
        }
        function R(e, t, n) {
          let r = (0, i.KU)(),
            o = (r && r.getOptions()) || {},
            { name: s = "", attributes: l } = e,
            [c, u] = t.getScopeData().sdkProcessingMetadata[S]
              ? [!1]
              : (0, _.Z)(o, {
                  name: s,
                  parentSampled: n,
                  attributes: l,
                  transactionContext: { name: s, parentSampled: n },
                }),
            d = new y.W({
              ...e,
              attributes: { [a.i_]: "custom", ...e.attributes },
              sampled: c,
            });
          return (
            void 0 !== u && d.setAttribute(a.sy, u),
            r && r.emit("spanStart", d),
            d
          );
        }
        function A(e) {
          let t = (0, h.f)(e);
          if (!t) return;
          let n = (0, i.KU)();
          return (n ? n.getOptions() : {}).parentSpanIsAlwaysRootSpan
            ? (0, f.zU)(t)
            : t;
        }
        function N(e) {
          return void 0 !== e ? (t) => C(e, t) : (e) => e();
        }
      },
      86361(e, t, n) {
        "use strict";
        n.d(t, { L: () => a, d: () => s });
        var r = n(690094);
        let i = "_sentryScope",
          o = "_sentryIsolationScope";
        function s(e, t, n) {
          e && ((0, r.my)(e, o, n), (0, r.my)(e, i, t));
        }
        function a(e) {
          return { scope: e[i], isolationScope: e[o] };
        }
      },
      47363(e, t, n) {
        "use strict";
        n.d(t, { o: () => u });
        var r = n(326447),
          i = n(847745),
          o = n(33735),
          s = n(272469),
          a = n(756846),
          l = n(157444),
          c = n(835869);
        function u(e, t, n = (0, a.C)(e.bufferSize || 64)) {
          let p = {};
          return {
            send: function (a) {
              let u = [];
              if (
                ((0, i.yH)(a, (t, n) => {
                  let r = (0, i.zk)(n);
                  if ((0, l.Jz)(p, r)) {
                    let i = d(t, n);
                    e.recordDroppedEvent("ratelimit_backoff", r, i);
                  } else u.push(t);
                }),
                0 === u.length)
              )
                return (0, c.XW)({});
              let h = (0, i.h4)(a[0], u),
                f = (t) => {
                  (0, i.yH)(h, (n, r) => {
                    let o = d(n, r);
                    e.recordDroppedEvent(t, (0, i.zk)(r), o);
                  });
                };
              return n
                .add(() =>
                  t({ body: (0, i.bN)(h) }).then(
                    (e) => (
                      void 0 !== e.statusCode &&
                        (e.statusCode < 200 || e.statusCode >= 300) &&
                        r.T &&
                        s.vF.warn(
                          `Sentry responded with status code ${e.statusCode} to sent event.`,
                        ),
                      (p = (0, l.wq)(p, e)),
                      e
                    ),
                    (e) => {
                      throw (f("network_error"), e);
                    },
                  ),
                )
                .then(
                  (e) => e,
                  (e) => {
                    if (e instanceof o.U)
                      return (
                        r.T &&
                          s.vF.error(
                            "Skipped sending event because buffer is full.",
                          ),
                        f("queue_overflow"),
                        (0, c.XW)({})
                      );
                    throw e;
                  },
                );
            },
            flush: (e) => n.drain(e),
          };
        }
        function d(e, t) {
          if ("event" === t || "transaction" === t)
            return Array.isArray(e) ? e[1] : void 0;
        }
      },
      477657(e, t, n) {
        "use strict";
        n.d(t, { N: () => a });
        var r = n(555625),
          i = n(608768),
          o = n(847745);
        function s(e, t) {
          let n;
          return (
            (0, o.yH)(
              e,
              (e, r) => (
                t.includes(r) && (n = Array.isArray(e) ? e[1] : void 0), !!n
              ),
            ),
            n
          );
        }
        function a(e, t) {
          return (n) => {
            let a = e(n),
              l = new Map();
            function c(t, o) {
              let a = o ? `${t}:${o}` : t,
                c = l.get(a);
              if (!c) {
                let u = (0, i.hH)(t);
                if (!u) return;
                let d = (0, r.Z)(u, n.tunnel);
                (c = o
                  ? ((t) => {
                      let n = e(t);
                      return {
                        ...n,
                        send: async (e) => {
                          let t = s(e, [
                            "event",
                            "transaction",
                            "profile",
                            "replay_event",
                          ]);
                          return t && (t.release = o), n.send(e);
                        },
                      };
                    })({ ...n, url: d })
                  : e({ ...n, url: d })),
                  l.set(a, c);
              }
              return [t, c];
            }
            return {
              send: async function (e) {
                let n = t({
                    envelope: e,
                    getEvent: function (t) {
                      return s(e, t && t.length ? t : ["event"]);
                    },
                  })
                    .map((e) =>
                      "string" == typeof e ? c(e, void 0) : c(e.dsn, e.release),
                    )
                    .filter((e) => !!e),
                  r = n.length ? n : [["", a]];
                return (
                  await Promise.all(
                    r.map(([t, n]) =>
                      n.send((0, o.h4)(t ? { ...e[0], dsn: t } : e[0], e[1])),
                    ),
                  )
                )[0];
              },
              flush: async function (e) {
                let t = [...l.values(), a];
                return (await Promise.all(t.map((t) => t.flush(e)))).every(
                  (e) => e,
                );
              },
            };
          };
        }
      },
      543507(e, t, n) {
        "use strict";
        n.d(t, { BP: () => a });
        var r = n(326447),
          i = n(847745),
          o = n(272469),
          s = n(157444);
        function a(e) {
          function t(...e) {
            r.T && o.vF.info("[Offline]:", ...e);
          }
          return (n) => {
            let r,
              o = e(n);
            if (!n.createStore)
              throw Error("No `createStore` function was provided");
            let a = n.createStore(n),
              l = 5e3;
            function c(e) {
              r && clearTimeout(r),
                "number" !=
                  typeof (r = setTimeout(async () => {
                    r = void 0;
                    let e = await a.shift();
                    e &&
                      (t("Attempting to send previously queued event"),
                      (e[0].sent_at = new Date().toISOString()),
                      d(e, !0).catch((e) => {
                        t("Failed to retry sending", e);
                      }));
                  }, e)) &&
                  r.unref &&
                  r.unref();
            }
            function u() {
              r || (c(l), (l = Math.min(2 * l, 36e5)));
            }
            async function d(e, r = !1) {
              if (!r && (0, i.hP)(e, ["replay_event", "replay_recording"]))
                return await a.push(e), c(100), {};
              try {
                let t = await o.send(e),
                  n = 100;
                if (t) {
                  if (t.headers && t.headers["retry-after"])
                    n = (0, s.FA)(t.headers["retry-after"]);
                  else if (t.headers && t.headers["x-sentry-rate-limits"])
                    n = 6e4;
                  else if ((t.statusCode || 0) >= 400) return t;
                }
                return c(n), (l = 5e3), t;
              } catch (o) {
                var p;
                if (
                  await ((p = l),
                  !(0, i.hP)(e, ["client_report"]) &&
                    (!n.shouldStore || n.shouldStore(e, o, p)))
                )
                  return (
                    r ? await a.unshift(e) : await a.push(e),
                    u(),
                    t("Error sending. Event queued.", o),
                    {}
                  );
                throw o;
              }
            }
            return (
              n.flushAtStartup && u(),
              {
                send: d,
                flush: (e) => (void 0 === e && ((l = 5e3), c(100)), o.flush(e)),
              }
            );
          };
        }
      },
      391316(e, t, n) {
        "use strict";
        n.d(t, { Q: () => o });
        var r = n(875565),
          i = n(826476);
        function o(e, t, n = 250, l, c, u, d) {
          var p, h;
          if (
            !u.exception ||
            !u.exception.values ||
            !d ||
            !(0, r.tH)(d.originalException, Error)
          )
            return;
          let f =
            u.exception.values.length > 0
              ? u.exception.values[u.exception.values.length - 1]
              : void 0;
          f &&
            (u.exception.values =
              ((p = (function e(t, n, i, o, l, c, u, d) {
                if (c.length >= i + 1) return c;
                let p = [...c];
                if ((0, r.tH)(o[l], Error)) {
                  s(u, d);
                  let r = t(n, o[l]),
                    c = p.length;
                  a(r, l, c, d), (p = e(t, n, i, o[l], l, [r, ...p], r, c));
                }
                return (
                  Array.isArray(o.errors) &&
                    o.errors.forEach((o, c) => {
                      if ((0, r.tH)(o, Error)) {
                        s(u, d);
                        let r = t(n, o),
                          h = p.length;
                        a(r, `errors[${c}]`, h, d),
                          (p = e(t, n, i, o, l, [r, ...p], r, h));
                      }
                    }),
                  p
                );
              })(e, t, c, d.originalException, l, u.exception.values, f, 0)),
              (h = n),
              p.map((e) => (e.value && (e.value = (0, i.xv)(e.value, h)), e))));
        }
        function s(e, t) {
          (e.mechanism = e.mechanism || { type: "generic", handled: !0 }),
            (e.mechanism = {
              ...e.mechanism,
              ...("AggregateError" === e.type && { is_exception_group: !0 }),
              exception_id: t,
            });
        }
        function a(e, t, n, r) {
          (e.mechanism = e.mechanism || { type: "generic", handled: !0 }),
            (e.mechanism = {
              ...e.mechanism,
              type: "chained",
              source: t,
              exception_id: n,
              parent_id: r,
            });
        }
      },
      435819(e, t, n) {
        "use strict";
        n.d(t, { De: () => c, sv: () => s, yD: () => l });
        var r = n(780755),
          i = n(875565),
          o = n(272469);
        let s = "sentry-",
          a = /^sentry-/;
        function l(e) {
          let t = (function (e) {
            if (e && ((0, i.Kg)(e) || Array.isArray(e)))
              return Array.isArray(e)
                ? e.reduce(
                    (e, t) => (
                      Object.entries(u(t)).forEach(([t, n]) => {
                        e[t] = n;
                      }),
                      e
                    ),
                    {},
                  )
                : u(e);
          })(e);
          if (!t) return;
          let n = Object.entries(t).reduce(
            (e, [t, n]) => (t.match(a) && (e[t.slice(s.length)] = n), e),
            {},
          );
          return Object.keys(n).length > 0 ? n : void 0;
        }
        function c(e) {
          if (e) {
            var t = Object.entries(e).reduce(
              (e, [t, n]) => (n && (e[`${s}${t}`] = n), e),
              {},
            );
            return 0 !== Object.keys(t).length
              ? Object.entries(t).reduce((e, [t, n], i) => {
                  let s = `${encodeURIComponent(t)}=${encodeURIComponent(n)}`,
                    a = 0 === i ? s : `${e},${s}`;
                  return a.length > 8192
                    ? (r.T &&
                        o.vF.warn(
                          `Not adding key: ${t} with val: ${n} to baggage header due to exceeding baggage size limits.`,
                        ),
                      e)
                    : a;
                }, "")
              : void 0;
          }
        }
        function u(e) {
          return e
            .split(",")
            .map((e) => e.split("=").map((e) => decodeURIComponent(e.trim())))
            .reduce((e, [t, n]) => (t && n && (e[t] = n), e), {});
        }
      },
      592388(e, t, n) {
        "use strict";
        function r(e) {
          if (void 0 !== e)
            return e >= 400 && e < 500
              ? "warning"
              : e >= 500
                ? "error"
                : void 0;
        }
        n.d(t, { X: () => r });
      },
      693037(e, t, n) {
        "use strict";
        n.d(t, { $N: () => s, Hd: () => o, NX: () => a, xE: () => l });
        var r = n(875565);
        let i = n(978862).O;
        function o(e, t = {}) {
          if (!e) return "<unknown>";
          try {
            let n,
              o = e,
              s = [],
              a = 0,
              l = 0,
              c = Array.isArray(t) ? t : t.keyAttrs,
              u = (!Array.isArray(t) && t.maxStringLength) || 80;
            for (
              ;
              o &&
              a++ < 5 &&
              ((n = (function (e, t) {
                let n = [];
                if (!e || !e.tagName) return "";
                if (i.HTMLElement && e instanceof HTMLElement && e.dataset) {
                  if (e.dataset.sentryComponent)
                    return e.dataset.sentryComponent;
                  if (e.dataset.sentryElement) return e.dataset.sentryElement;
                }
                n.push(e.tagName.toLowerCase());
                let o =
                  t && t.length
                    ? t
                        .filter((t) => e.getAttribute(t))
                        .map((t) => [t, e.getAttribute(t)])
                    : null;
                if (o && o.length)
                  o.forEach((e) => {
                    n.push(`[${e[0]}="${e[1]}"]`);
                  });
                else {
                  e.id && n.push(`#${e.id}`);
                  let t = e.className;
                  if (t && (0, r.Kg)(t))
                    for (let e of t.split(/\s+/)) n.push(`.${e}`);
                }
                for (let t of ["aria-label", "type", "name", "title", "alt"]) {
                  let r = e.getAttribute(t);
                  r && n.push(`[${t}="${r}"]`);
                }
                return n.join("");
              })(o, c)),
              "html" !== n &&
                (!(a > 1) || !(l + 3 * s.length + n.length >= u)));

            )
              s.push(n), (l += n.length), (o = o.parentNode);
            return s.reverse().join(" > ");
          } catch (e) {
            return "<unknown>";
          }
        }
        function s() {
          try {
            return i.document.location.href;
          } catch (e) {
            return "";
          }
        }
        function a(e) {
          return i.document && i.document.querySelector
            ? i.document.querySelector(e)
            : null;
        }
        function l(e) {
          if (!i.HTMLElement) return null;
          let t = e;
          for (let e = 0; e < 5 && t; e++) {
            if (t instanceof HTMLElement) {
              if (t.dataset.sentryComponent) return t.dataset.sentryComponent;
              if (t.dataset.sentryElement) return t.dataset.sentryElement;
            }
            t = t.parentNode;
          }
          return null;
        }
      },
      718367(e, t, n) {
        "use strict";
        function r(e, t) {
          return null != e ? e : t();
        }
        n.d(t, { S: () => r });
      },
      397322(e, t, n) {
        "use strict";
        function r(e) {
          let t,
            n = e[0],
            r = 1;
          for (; r < e.length; ) {
            let i = e[r],
              o = e[r + 1];
            if (
              ((r += 2),
              ("optionalAccess" === i || "optionalCall" === i) && null == n)
            )
              return;
            "access" === i || "optionalAccess" === i
              ? ((t = n), (n = o(n)))
              : ("call" === i || "optionalCall" === i) &&
                ((n = o((...e) => n.call(t, ...e))), (t = void 0));
          }
          return n;
        }
        n.d(t, { z: () => r });
      },
      500216(e, t, n) {
        "use strict";
        n.d(t, { m: () => o });
        var r = n(847745),
          i = n(83220);
        function o(e, t, n) {
          let o = [
            { type: "client_report" },
            { timestamp: n || (0, i.lu)(), discarded_events: e },
          ];
          return (0, r.h4)(t ? { dsn: t } : {}, [o]);
        }
      },
      780755(e, t, n) {
        "use strict";
        n.d(t, { T: () => r });
        let r = "u" < typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
      },
      754433(e, t, n) {
        "use strict";
        let r, i, o;
        n.d(t, { i: () => l, z: () => a });
        var s = n(978862);
        function a(e) {
          let t = s.O._sentryDebugIds;
          if (!t) return {};
          let n = Object.keys(t);
          return o && n.length === i
            ? o
            : ((i = n.length),
              (o = n.reduce((n, i) => {
                r || (r = {});
                let o = r[i];
                if (o) n[o[0]] = o[1];
                else {
                  let o = e(i);
                  for (let e = o.length - 1; e >= 0; e--) {
                    let s = o[e],
                      a = s && s.filename,
                      l = t[i];
                    if (a && l) {
                      (n[a] = l), (r[i] = [a, l]);
                      break;
                    }
                  }
                }
                return n;
              }, {})));
        }
        function l(e, t) {
          let n = a(e);
          if (!n) return [];
          let r = [];
          for (let e of t)
            e &&
              n[e] &&
              r.push({ type: "sourcemap", code_file: e, debug_id: n[e] });
          return r;
        }
      },
      608768(e, t, n) {
        "use strict";
        n.d(t, { AD: () => c, SB: () => s, hH: () => a });
        var r = n(780755),
          i = n(272469);
        let o =
          /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
        function s(e, t = !1) {
          let {
            host: n,
            path: r,
            pass: i,
            port: o,
            projectId: a,
            protocol: l,
            publicKey: c,
          } = e;
          return `${l}://${c}${t && i ? `:${i}` : ""}@${n}${o ? `:${o}` : ""}/${r ? `${r}/` : r}${a}`;
        }
        function a(e) {
          let t = o.exec(e);
          if (!t)
            return void (0, i.pq)(() => {
              console.error(`Invalid Sentry Dsn: ${e}`);
            });
          let [n, r, s = "", a = "", c = "", u = ""] = t.slice(1),
            d = "",
            p = u,
            h = p.split("/");
          if (
            (h.length > 1 && ((d = h.slice(0, -1).join("/")), (p = h.pop())), p)
          ) {
            let e = p.match(/^\d+/);
            e && (p = e[0]);
          }
          return l({
            host: a,
            pass: s,
            path: d,
            projectId: p,
            port: c,
            protocol: n,
            publicKey: r,
          });
        }
        function l(e) {
          return {
            protocol: e.protocol,
            publicKey: e.publicKey || "",
            pass: e.pass || "",
            host: e.host,
            port: e.port || "",
            path: e.path || "",
            projectId: e.projectId,
          };
        }
        function c(e) {
          let t = "string" == typeof e ? a(e) : l(e);
          if (
            t &&
            (function (e) {
              if (!r.T) return !0;
              let { port: t, projectId: n, protocol: o } = e;
              return (
                !["protocol", "publicKey", "host", "projectId"].find(
                  (t) =>
                    !e[t] &&
                    (i.vF.error(`Invalid Sentry Dsn: ${t} missing`), !0),
                ) &&
                (n.match(/^\d+$/)
                  ? "http" !== o && "https" !== o
                    ? (i.vF.error(`Invalid Sentry Dsn: Invalid protocol ${o}`),
                      !1)
                    : !(t && isNaN(parseInt(t, 10))) ||
                      (i.vF.error(`Invalid Sentry Dsn: Invalid port ${t}`), !1)
                  : (i.vF.error(`Invalid Sentry Dsn: Invalid projectId ${n}`),
                    !1))
              );
            })(t)
          )
            return t;
        }
      },
      588130(e, t, n) {
        "use strict";
        function r() {
          return (
            "u" > typeof __SENTRY_BROWSER_BUNDLE__ &&
            !!__SENTRY_BROWSER_BUNDLE__
          );
        }
        function i() {
          return "npm";
        }
        n.d(t, { Z: () => r, e: () => i });
      },
      847745(e, t, n) {
        "use strict";
        n.d(t, {
          Cj: () => v,
          W3: () => l,
          bN: () => p,
          bm: () => m,
          h4: () => a,
          hP: () => u,
          mE: () => h,
          n2: () => y,
          y5: () => f,
          yH: () => c,
          zk: () => _,
        });
        var r = n(608768),
          i = n(86622),
          o = n(690094),
          s = n(978862);
        function a(e, t = []) {
          return [e, t];
        }
        function l(e, t) {
          let [n, r] = e;
          return [n, [...r, t]];
        }
        function c(e, t) {
          for (let n of e[1]) {
            let e = n[0].type;
            if (t(n, e)) return !0;
          }
          return !1;
        }
        function u(e, t) {
          return c(e, (e, n) => t.includes(n));
        }
        function d(e) {
          return s.O.__SENTRY__ && s.O.__SENTRY__.encodePolyfill
            ? s.O.__SENTRY__.encodePolyfill(e)
            : new TextEncoder().encode(e);
        }
        function p(e) {
          let [t, n] = e,
            r = JSON.stringify(t);
          function o(e) {
            "string" == typeof r
              ? (r = "string" == typeof e ? r + e : [d(r), e])
              : r.push("string" == typeof e ? d(e) : e);
          }
          for (let e of n) {
            let [t, n] = e;
            if (
              (o(`
${JSON.stringify(t)}
`),
              "string" == typeof n || n instanceof Uint8Array)
            )
              o(n);
            else {
              let e;
              try {
                e = JSON.stringify(n);
              } catch (t) {
                e = JSON.stringify((0, i.S8)(n));
              }
              o(e);
            }
          }
          return "string" == typeof r
            ? r
            : (function (e) {
                let t = new Uint8Array(e.reduce((e, t) => e + t.length, 0)),
                  n = 0;
                for (let r of e) t.set(r, n), (n += r.length);
                return t;
              })(r);
        }
        function h(e) {
          let t = "string" == typeof e ? d(e) : e;
          function n(e) {
            let n = t.subarray(0, e);
            return (t = t.subarray(e + 1)), n;
          }
          function r() {
            var e;
            let r = t.indexOf(10);
            return (
              r < 0 && (r = t.length),
              JSON.parse(
                ((e = n(r)),
                s.O.__SENTRY__ && s.O.__SENTRY__.decodePolyfill
                  ? s.O.__SENTRY__.decodePolyfill(e)
                  : new TextDecoder().decode(e)),
              )
            );
          }
          let i = r(),
            o = [];
          for (; t.length; ) {
            let e = r(),
              t = "number" == typeof e.length ? e.length : void 0;
            o.push([e, t ? n(t) : r()]);
          }
          return [i, o];
        }
        function f(e) {
          return [{ type: "span" }, e];
        }
        function m(e) {
          let t = "string" == typeof e.data ? d(e.data) : e.data;
          return [
            (0, o.Ce)({
              type: "attachment",
              length: t.length,
              filename: e.filename,
              content_type: e.contentType,
              attachment_type: e.attachmentType,
            }),
            t,
          ];
        }
        let g = {
          session: "session",
          sessions: "session",
          attachment: "attachment",
          transaction: "transaction",
          event: "error",
          client_report: "internal",
          user_report: "default",
          profile: "profile",
          profile_chunk: "profile",
          replay_event: "replay",
          replay_recording: "replay",
          check_in: "monitor",
          feedback: "feedback",
          span: "span",
          statsd: "metric_bucket",
          raw_security: "security",
        };
        function _(e) {
          return g[e];
        }
        function v(e) {
          if (!e || !e.sdk) return;
          let { name: t, version: n } = e.sdk;
          return { name: t, version: n };
        }
        function y(e, t, n, i) {
          let s =
            e.sdkProcessingMetadata &&
            e.sdkProcessingMetadata.dynamicSamplingContext;
          return {
            event_id: e.event_id,
            sent_at: new Date().toISOString(),
            ...(t && { sdk: t }),
            ...(!!n && i && { dsn: (0, r.SB)(i) }),
            ...(s && { trace: (0, o.Ce)({ ...s }) }),
          };
        }
      },
      33735(e, t, n) {
        "use strict";
        n.d(t, { U: () => r });
        class r extends Error {
          constructor(e, t = "warn") {
            super(e), (this.message = e), (this.logLevel = t);
          }
        }
      },
      933138(e, t, n) {
        "use strict";
        n.d(t, { P: () => a });
        var r = n(272469),
          i = n(690094),
          o = n(978862),
          s = n(873326);
        function a(e) {
          let t = "console";
          (0, s.s5)(t, e), (0, s.AS)(t, l);
        }
        function l() {
          "console" in o.O &&
            r.Ow.forEach(function (e) {
              e in o.O.console &&
                (0, i.GS)(o.O.console, e, function (t) {
                  return (
                    (r.Z9[e] = t),
                    function (...t) {
                      (0, s.aj)("console", { args: t, level: e });
                      let n = r.Z9[e];
                      n && n.apply(o.O.console, t);
                    }
                  );
                });
            });
        }
      },
      823783(e, t, n) {
        "use strict";
        n.d(t, { B$: () => u, ur: () => c });
        var r = n(875565),
          i = n(690094),
          o = n(366781),
          s = n(83220),
          a = n(978862),
          l = n(873326);
        function c(e, t) {
          let n = "fetch";
          (0, l.s5)(n, e), (0, l.AS)(n, () => d(void 0, t));
        }
        function u(e) {
          let t = "fetch-body-resolved";
          (0, l.s5)(t, e), (0, l.AS)(t, () => d(h));
        }
        function d(e, t = !1) {
          (!t || (0, o.m7)()) &&
            (0, i.GS)(a.O, "fetch", function (t) {
              return function (...n) {
                let o = Error(),
                  { method: c, url: u } = (function (e) {
                    if (0 === e.length) return { method: "GET", url: "" };
                    if (2 === e.length) {
                      let [t, n] = e;
                      return {
                        url: m(t),
                        method: f(n, "method")
                          ? String(n.method).toUpperCase()
                          : "GET",
                      };
                    }
                    let t = e[0];
                    return {
                      url: m(t),
                      method: f(t, "method")
                        ? String(t.method).toUpperCase()
                        : "GET",
                    };
                  })(n),
                  d = {
                    args: n,
                    fetchData: { method: c, url: u },
                    startTimestamp: 1e3 * (0, s.zf)(),
                    virtualError: o,
                  };
                return (
                  e || (0, l.aj)("fetch", { ...d }),
                  t.apply(a.O, n).then(
                    async (t) => (
                      e
                        ? e(t)
                        : (0, l.aj)("fetch", {
                            ...d,
                            endTimestamp: 1e3 * (0, s.zf)(),
                            response: t,
                          }),
                      t
                    ),
                    (e) => {
                      throw (
                        ((0, l.aj)("fetch", {
                          ...d,
                          endTimestamp: 1e3 * (0, s.zf)(),
                          error: e,
                        }),
                        (0, r.bJ)(e) &&
                          void 0 === e.stack &&
                          ((e.stack = o.stack), (0, i.my)(e, "framesToPop", 1)),
                        e)
                      );
                    },
                  )
                );
              };
            });
        }
        async function p(e, t) {
          if (e && e.body) {
            let n = e.body,
              r = n.getReader(),
              i = setTimeout(() => {
                n.cancel().then(null, () => {});
              }, 9e4),
              o = !0;
            for (; o; ) {
              let e;
              try {
                e = setTimeout(() => {
                  n.cancel().then(null, () => {});
                }, 5e3);
                let { done: i } = await r.read();
                clearTimeout(e), i && (t(), (o = !1));
              } catch (e) {
                o = !1;
              } finally {
                clearTimeout(e);
              }
            }
            clearTimeout(i), r.releaseLock(), n.cancel().then(null, () => {});
          }
        }
        function h(e) {
          let t;
          try {
            t = e.clone();
          } catch (e) {
            return;
          }
          p(t, () => {
            (0, l.aj)("fetch-body-resolved", {
              endTimestamp: 1e3 * (0, s.zf)(),
              response: e,
            });
          });
        }
        function f(e, t) {
          return !!e && "object" == typeof e && !!e[t];
        }
        function m(e) {
          return "string" == typeof e
            ? e
            : e
              ? f(e, "url")
                ? e.url
                : e.toString
                  ? e.toString()
                  : ""
              : "";
        }
      },
      469052(e, t, n) {
        "use strict";
        n.d(t, { L: () => s });
        var r = n(978862),
          i = n(873326);
        let o = null;
        function s(e) {
          let t = "error";
          (0, i.s5)(t, e), (0, i.AS)(t, a);
        }
        function a() {
          (o = r.O.onerror),
            (r.O.onerror = function (e, t, n, r, s) {
              return (
                (0, i.aj)("error", {
                  column: r,
                  error: s,
                  line: n,
                  msg: e,
                  url: t,
                }),
                !!o && o.apply(this, arguments)
              );
            }),
            (r.O.onerror.__SENTRY_INSTRUMENTED__ = !0);
        }
      },
      291686(e, t, n) {
        "use strict";
        n.d(t, { r: () => s });
        var r = n(978862),
          i = n(873326);
        let o = null;
        function s(e) {
          let t = "unhandledrejection";
          (0, i.s5)(t, e), (0, i.AS)(t, a);
        }
        function a() {
          (o = r.O.onunhandledrejection),
            (r.O.onunhandledrejection = function (e) {
              return (
                (0, i.aj)("unhandledrejection", e),
                !o || o.apply(this, arguments)
              );
            }),
            (r.O.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0);
        }
      },
      873326(e, t, n) {
        "use strict";
        n.d(t, { AS: () => c, aj: () => u, s5: () => l });
        var r = n(780755),
          i = n(272469),
          o = n(968072);
        let s = {},
          a = {};
        function l(e, t) {
          (s[e] = s[e] || []), s[e].push(t);
        }
        function c(e, t) {
          if (!a[e]) {
            a[e] = !0;
            try {
              t();
            } catch (t) {
              r.T && i.vF.error(`Error while instrumenting ${e}`, t);
            }
          }
        }
        function u(e, t) {
          let n = e && s[e];
          if (n)
            for (let s of n)
              try {
                s(t);
              } catch (t) {
                r.T &&
                  i.vF.error(
                    `Error while triggering instrumentation handler.
Type: ${e}
Name: ${(0, o.qQ)(s)}
Error:`,
                    t,
                  );
              }
        }
      },
      875565(e, t, n) {
        "use strict";
        n.d(t, {
          BD: () => a,
          Kg: () => c,
          L2: () => y,
          NF: () => u,
          Qd: () => p,
          Qg: () => g,
          T2: () => s,
          W6: () => l,
          bJ: () => i,
          gd: () => m,
          mE: () => _,
          sO: () => d,
          tH: () => v,
          vq: () => f,
          xH: () => h,
        });
        let r = Object.prototype.toString;
        function i(e) {
          switch (r.call(e)) {
            case "[object Error]":
            case "[object Exception]":
            case "[object DOMException]":
            case "[object WebAssembly.Exception]":
              return !0;
            default:
              return v(e, Error);
          }
        }
        function o(e, t) {
          return r.call(e) === `[object ${t}]`;
        }
        function s(e) {
          return o(e, "ErrorEvent");
        }
        function a(e) {
          return o(e, "DOMError");
        }
        function l(e) {
          return o(e, "DOMException");
        }
        function c(e) {
          return o(e, "String");
        }
        function u(e) {
          return (
            "object" == typeof e &&
            null !== e &&
            "__sentry_template_string__" in e &&
            "__sentry_template_values__" in e
          );
        }
        function d(e) {
          return (
            null === e ||
            u(e) ||
            ("object" != typeof e && "function" != typeof e)
          );
        }
        function p(e) {
          return o(e, "Object");
        }
        function h(e) {
          return "u" > typeof Event && v(e, Event);
        }
        function f(e) {
          return "u" > typeof Element && v(e, Element);
        }
        function m(e) {
          return o(e, "RegExp");
        }
        function g(e) {
          return !!(e && e.then && "function" == typeof e.then);
        }
        function _(e) {
          return (
            p(e) &&
            "nativeEvent" in e &&
            "preventDefault" in e &&
            "stopPropagation" in e
          );
        }
        function v(e, t) {
          try {
            return e instanceof t;
          } catch (e) {
            return !1;
          }
        }
        function y(e) {
          return !!(
            "object" == typeof e &&
            null !== e &&
            (e.__isVue || e._isVue)
          );
        }
      },
      967193(e, t, n) {
        "use strict";
        n.d(t, { B: () => o });
        var r = n(772197),
          i = n(978862);
        function o() {
          let e;
          return (
            "u" > typeof window &&
            (!(0, r.wD)() || (!!(e = i.O.process) && "renderer" === e.type))
          );
        }
      },
      272469(e, t, n) {
        "use strict";
        n.d(t, { Ow: () => o, Z9: () => s, pq: () => a, vF: () => l });
        var r = n(780755),
          i = n(978862);
        let o = ["debug", "info", "warn", "error", "log", "assert", "trace"],
          s = {};
        function a(e) {
          if (!("console" in i.O)) return e();
          let t = i.O.console,
            n = {},
            r = Object.keys(s);
          r.forEach((e) => {
            let r = s[e];
            (n[e] = t[e]), (t[e] = r);
          });
          try {
            return e();
          } finally {
            r.forEach((e) => {
              t[e] = n[e];
            });
          }
        }
        let l = (0, i.B)("logger", function () {
          let e = !1,
            t = {
              enable: () => {
                e = !0;
              },
              disable: () => {
                e = !1;
              },
              isEnabled: () => e,
            };
          return (
            r.T
              ? o.forEach((n) => {
                  t[n] = (...t) => {
                    e &&
                      a(() => {
                        i.O.console[n](`Sentry Logger [${n}]:`, ...t);
                      });
                  };
                })
              : o.forEach((e) => {
                  t[e] = () => void 0;
                }),
            t
          );
        });
      },
      314875(e, t, n) {
        "use strict";
        function r() {
          let e = "function" == typeof WeakSet,
            t = e ? new WeakSet() : [];
          return [
            function (n) {
              if (e) return !!t.has(n) || (t.add(n), !1);
              for (let e = 0; e < t.length; e++) if (t[e] === n) return !0;
              return t.push(n), !1;
            },
            function (n) {
              if (e) t.delete(n);
              else
                for (let e = 0; e < t.length; e++)
                  if (t[e] === n) {
                    t.splice(e, 1);
                    break;
                  }
            },
          ];
        }
        n.d(t, { s: () => r });
      },
      231577(e, t, n) {
        "use strict";
        n.d(t, {
          $X: () => l,
          GR: () => p,
          M6: () => u,
          db: () => d,
          eJ: () => s,
          gO: () => c,
        });
        var r = n(690094),
          i = n(826476),
          o = n(978862);
        function s() {
          let e = o.O,
            t = e.crypto || e.msCrypto,
            n = () => 16 * Math.random();
          try {
            if (t && t.randomUUID) return t.randomUUID().replace(/-/g, "");
            t &&
              t.getRandomValues &&
              (n = () => {
                let e = new Uint8Array(1);
                return t.getRandomValues(e), e[0];
              });
          } catch (e) {}
          return "10000000100040008000100000000000".replace(/[018]/g, (e) =>
            (e ^ ((15 & n()) >> (e / 4))).toString(16),
          );
        }
        function a(e) {
          return e.exception && e.exception.values
            ? e.exception.values[0]
            : void 0;
        }
        function l(e) {
          let { message: t, event_id: n } = e;
          if (t) return t;
          let r = a(e);
          return r
            ? r.type && r.value
              ? `${r.type}: ${r.value}`
              : r.type || r.value || n || "<unknown>"
            : n || "<unknown>";
        }
        function c(e, t, n) {
          let r = (e.exception = e.exception || {}),
            i = (r.values = r.values || []),
            o = (i[0] = i[0] || {});
          o.value || (o.value = t || ""), o.type || (o.type = n || "Error");
        }
        function u(e, t) {
          let n = a(e);
          if (!n) return;
          let r = n.mechanism;
          if (
            ((n.mechanism = { type: "generic", handled: !0, ...r, ...t }),
            t && "data" in t)
          ) {
            let e = { ...(r && r.data), ...t.data };
            n.mechanism.data = e;
          }
        }
        function d(e, t, n = 5) {
          if (void 0 === t.lineno) return;
          let r = e.length,
            o = Math.max(Math.min(r - 1, t.lineno - 1), 0);
          t.pre_context = e
            .slice(Math.max(0, o - n), o)
            .map((e) => (0, i.nC)(e, 0));
          let s = Math.min(r - 1, o);
          (t.context_line = (0, i.nC)(e[s], t.colno || 0)),
            (t.post_context = e
              .slice(Math.min(o + 1, r), o + 1 + n)
              .map((e) => (0, i.nC)(e, 0)));
        }
        function p(e) {
          if (
            (function (e) {
              try {
                return e.__sentry_captured__;
              } catch (e) {}
            })(e)
          )
            return !0;
          try {
            (0, r.my)(e, "__sentry_captured__", !0);
          } catch (e) {}
          return !1;
        }
      },
      772197(e, t, n) {
        "use strict";
        n.d(t, { wD: () => o });
        var r = n(588130),
          i = n(72290);
        function o() {
          return (
            !(0, r.Z)() &&
            "[object process]" ===
              Object.prototype.toString.call(void 0 !== i ? i : 0)
          );
        }
      },
      86622(e, t, n) {
        "use strict";
        n.d(t, {
          S8: () => a,
          cd: () =>
            function e(t, n = 3, r = 102400) {
              let i = a(t, n);
              return ~-encodeURI(JSON.stringify(i)).split(/%..|./).length > r
                ? e(t, n - 1, r)
                : i;
            },
        });
        var r = n(875565),
          i = n(314875),
          o = n(690094),
          s = n(968072);
        function a(e, t = 100, n = Infinity) {
          try {
            return (function e(
              t,
              n,
              a = Infinity,
              l = Infinity,
              c = (0, i.s)(),
            ) {
              let [u, d] = c;
              if (
                null == n ||
                ["boolean", "string"].includes(typeof n) ||
                ("number" == typeof n && Number.isFinite(n))
              )
                return n;
              let p = (function (e, t) {
                try {
                  var n;
                  let i;
                  if ("domain" === e && t && "object" == typeof t && t._events)
                    return "[Domain]";
                  if ("domainEmitter" === e) return "[DomainEmitter]";
                  if ("u" > typeof global && t === global) return "[Global]";
                  if ("u" > typeof window && t === window) return "[Window]";
                  if ("u" > typeof document && t === document)
                    return "[Document]";
                  if ((0, r.L2)(t)) return "[VueViewModel]";
                  if ((0, r.mE)(t)) return "[SyntheticEvent]";
                  if ("number" == typeof t && !Number.isFinite(t))
                    return `[${t}]`;
                  if ("function" == typeof t)
                    return `[Function: ${(0, s.qQ)(t)}]`;
                  if ("symbol" == typeof t) return `[${String(t)}]`;
                  if ("bigint" == typeof t) return `[BigInt: ${String(t)}]`;
                  let o =
                    ((n = t),
                    (i = Object.getPrototypeOf(n))
                      ? i.constructor.name
                      : "null prototype");
                  if (/^HTML(\w*)Element$/.test(o))
                    return `[HTMLElement: ${o}]`;
                  return `[object ${o}]`;
                } catch (e) {
                  return `**non-serializable** (${e})`;
                }
              })(t, n);
              if (!p.startsWith("[object ")) return p;
              if (n.__sentry_skip_normalization__) return n;
              let h =
                "number" == typeof n.__sentry_override_normalization_depth__
                  ? n.__sentry_override_normalization_depth__
                  : a;
              if (0 === h) return p.replace("object ", "");
              if (u(n)) return "[Circular ~]";
              if (n && "function" == typeof n.toJSON)
                try {
                  let t = n.toJSON();
                  return e("", t, h - 1, l, c);
                } catch (e) {}
              let f = Array.isArray(n) ? [] : {},
                m = 0,
                g = (0, o.W4)(n);
              for (let t in g) {
                if (!Object.prototype.hasOwnProperty.call(g, t)) continue;
                if (m >= l) {
                  f[t] = "[MaxProperties ~]";
                  break;
                }
                let n = g[t];
                (f[t] = e(t, n, h - 1, l, c)), m++;
              }
              return d(n), f;
            })("", e, t, n);
          } catch (e) {
            return { ERROR: `**non-serializable** (${e})` };
          }
        }
      },
      690094(e, t, n) {
        "use strict";
        n.d(t, {
          Ce: () => g,
          GS: () => l,
          HF: () => m,
          W4: () => p,
          my: () => c,
          pO: () => u,
          sp: () => d,
        });
        var r = n(693037),
          i = n(780755),
          o = n(875565),
          s = n(272469),
          a = n(826476);
        function l(e, t, n) {
          if (!(t in e)) return;
          let r = e[t],
            o = n(r);
          "function" == typeof o && u(o, r);
          try {
            e[t] = o;
          } catch (n) {
            i.T && s.vF.log(`Failed to replace method "${t}" in object`, e);
          }
        }
        function c(e, t, n) {
          try {
            Object.defineProperty(e, t, {
              value: n,
              writable: !0,
              configurable: !0,
            });
          } catch (n) {
            i.T &&
              s.vF.log(
                `Failed to add non-enumerable property "${t}" to object`,
                e,
              );
          }
        }
        function u(e, t) {
          try {
            let n = t.prototype || {};
            (e.prototype = t.prototype = n), c(e, "__sentry_original__", t);
          } catch (e) {}
        }
        function d(e) {
          return e.__sentry_original__;
        }
        function p(e) {
          if ((0, o.bJ)(e))
            return {
              message: e.message,
              name: e.name,
              stack: e.stack,
              ...f(e),
            };
          if (!(0, o.xH)(e)) return e;
          {
            let t = {
              type: e.type,
              target: h(e.target),
              currentTarget: h(e.currentTarget),
              ...f(e),
            };
            return (
              "u" > typeof CustomEvent &&
                (0, o.tH)(e, CustomEvent) &&
                (t.detail = e.detail),
              t
            );
          }
        }
        function h(e) {
          try {
            return (0, o.vq)(e)
              ? (0, r.Hd)(e)
              : Object.prototype.toString.call(e);
          } catch (e) {
            return "<unknown>";
          }
        }
        function f(e) {
          if ("object" != typeof e || null === e) return {};
          {
            let t = {};
            for (let n in e)
              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t;
          }
        }
        function m(e, t = 40) {
          let n = Object.keys(p(e));
          n.sort();
          let r = n[0];
          if (!r) return "[object has no keys]";
          if (r.length >= t) return (0, a.xv)(r, t);
          for (let e = n.length; e > 0; e--) {
            let r = n.slice(0, e).join(", ");
            if (!(r.length > t)) {
              if (e === n.length) return r;
              return (0, a.xv)(r, t);
            }
          }
          return "";
        }
        function g(e) {
          return (function e(t, n) {
            if (
              (function (e) {
                if (!(0, o.Qd)(e)) return !1;
                try {
                  let t = Object.getPrototypeOf(e).constructor.name;
                  return !t || "Object" === t;
                } catch (e) {
                  return !0;
                }
              })(t)
            ) {
              let r = n.get(t);
              if (void 0 !== r) return r;
              let i = {};
              for (let r of (n.set(t, i), Object.getOwnPropertyNames(t)))
                void 0 !== t[r] && (i[r] = e(t[r], n));
              return i;
            }
            if (Array.isArray(t)) {
              let r = n.get(t);
              if (void 0 !== r) return r;
              let i = [];
              return (
                n.set(t, i),
                t.forEach((t) => {
                  i.push(e(t, n));
                }),
                i
              );
            }
            return t;
          })(e, new Map());
        }
      },
      416918(e, t, n) {
        "use strict";
        n.d(t, { P8: () => a, V8: () => s });
        let r =
          /^(\S+:\\|\/?)([\s\S]*?)((?:\.{1,2}|[^/\\]+?|)(\.[^./\\]*|))(?:[/\\]*)$/;
        function i(...e) {
          let t = "",
            n = !1;
          for (let r = e.length - 1; r >= -1 && !n; r--) {
            let i = r >= 0 ? e[r] : "/";
            i && ((t = `${i}/${t}`), (n = "/" === i.charAt(0)));
          }
          return (
            (t = (function (e, t) {
              let n = 0;
              for (let t = e.length - 1; t >= 0; t--) {
                let r = e[t];
                "." === r
                  ? e.splice(t, 1)
                  : ".." === r
                    ? (e.splice(t, 1), n++)
                    : n && (e.splice(t, 1), n--);
              }
              if (t) for (; n--; ) e.unshift("..");
              return e;
            })(
              t.split("/").filter((e) => !!e),
              !n,
            ).join("/")),
            (n ? "/" : "") + t || "."
          );
        }
        function o(e) {
          let t = 0;
          for (; t < e.length && "" === e[t]; t++);
          let n = e.length - 1;
          for (; n >= 0 && "" === e[n]; n--);
          return t > n ? [] : e.slice(t, n - t + 1);
        }
        function s(e, t) {
          (e = i(e).slice(1)), (t = i(t).slice(1));
          let n = o(e.split("/")),
            r = o(t.split("/")),
            s = Math.min(n.length, r.length),
            a = s;
          for (let e = 0; e < s; e++)
            if (n[e] !== r[e]) {
              a = e;
              break;
            }
          let l = [];
          for (let e = a; e < n.length; e++) l.push("..");
          return (l = l.concat(r.slice(a))).join("/");
        }
        function a(e, t) {
          let n,
            i,
            o =
              ((n = e.length > 1024 ? `<truncated>${e.slice(-1024)}` : e),
              (i = r.exec(n)) ? i.slice(1) : [])[2] || "";
          return (
            t &&
              o.slice(-1 * t.length) === t &&
              (o = o.slice(0, o.length - t.length)),
            o
          );
        }
      },
      756846(e, t, n) {
        "use strict";
        n.d(t, { C: () => o });
        var r = n(33735),
          i = n(835869);
        function o(e) {
          let t = [];
          function n(e) {
            return t.splice(t.indexOf(e), 1)[0] || Promise.resolve(void 0);
          }
          return {
            $: t,
            add: function (o) {
              if (!(void 0 === e || t.length < e))
                return (0, i.xg)(
                  new r.U(
                    "Not adding Promise because buffer limit was reached.",
                  ),
                );
              let s = o();
              return (
                -1 === t.indexOf(s) && t.push(s),
                s.then(() => n(s)).then(null, () => n(s).then(null, () => {})),
                s
              );
            },
            drain: function (e) {
              return new i.T2((n, r) => {
                let o = t.length;
                if (!o) return n(!0);
                let s = setTimeout(() => {
                  e && e > 0 && n(!1);
                }, e);
                t.forEach((e) => {
                  (0, i.XW)(e).then(() => {
                    --o || (clearTimeout(s), n(!0));
                  }, r);
                });
              });
            },
          };
        }
      },
      834932(e, t, n) {
        "use strict";
        n.d(t, { ZF: () => o, el: () => i });
        var r = n(231577);
        function i() {
          return (0, r.eJ)();
        }
        function o() {
          return (0, r.eJ)().substring(16);
        }
      },
      157444(e, t, n) {
        "use strict";
        function r(e, t = Date.now()) {
          let n = parseInt(`${e}`, 10);
          if (!isNaN(n)) return 1e3 * n;
          let i = Date.parse(`${e}`);
          return isNaN(i) ? 6e4 : i - t;
        }
        function i(e, t, n = Date.now()) {
          return (e[t] || e.all || 0) > n;
        }
        function o(e, { statusCode: t, headers: n }, i = Date.now()) {
          let s = { ...e },
            a = n && n["x-sentry-rate-limits"],
            l = n && n["retry-after"];
          if (a)
            for (let e of a.trim().split(",")) {
              let [t, n, , , r] = e.split(":", 5),
                o = parseInt(t, 10),
                a = (isNaN(o) ? 60 : o) * 1e3;
              if (n)
                for (let e of n.split(";"))
                  "metric_bucket" === e
                    ? (!r || r.split(";").includes("custom")) && (s[e] = i + a)
                    : (s[e] = i + a);
              else s.all = i + a;
            }
          else l ? (s.all = i + r(l, i)) : 429 === t && (s.all = i + 6e4);
          return s;
        }
        n.d(t, { FA: () => r, Jz: () => i, wq: () => o });
      },
      196010(e, t, n) {
        "use strict";
        function r(e) {
          return "warn" === e
            ? "warning"
            : ["fatal", "error", "warning", "log", "info", "debug"].includes(e)
              ? e
              : "log";
        }
        n.d(t, { t: () => r });
      },
      968072(e, t, n) {
        "use strict";
        n.d(t, { RV: () => u, gd: () => o, qQ: () => c, vk: () => s });
        let r = /\(error: (.*)\)/,
          i = /captureMessage|captureException/;
        function o(...e) {
          let t = e.sort((e, t) => e[0] - t[0]).map((e) => e[1]);
          return (e, n = 0, o = 0) => {
            let s = [],
              l = e.split("\n");
            for (let e = n; e < l.length; e++) {
              let n = l[e];
              if (n.length > 1024) continue;
              let i = r.test(n) ? n.replace(r, "$1") : n;
              if (!i.match(/\S*Error: /)) {
                for (let e of t) {
                  let t = e(i);
                  if (t) {
                    s.push(t);
                    break;
                  }
                }
                if (s.length >= 50 + o) break;
              }
            }
            var c = s.slice(o);
            if (!c.length) return [];
            let u = Array.from(c);
            return (
              /sentryWrapped/.test(a(u).function || "") && u.pop(),
              u.reverse(),
              i.test(a(u).function || "") &&
                (u.pop(), i.test(a(u).function || "") && u.pop()),
              u
                .slice(0, 50)
                .map((e) => ({
                  ...e,
                  filename: e.filename || a(u).filename,
                  function: e.function || "?",
                }))
            );
          };
        }
        function s(e) {
          return Array.isArray(e) ? o(...e) : e;
        }
        function a(e) {
          return e[e.length - 1] || {};
        }
        let l = "<anonymous>";
        function c(e) {
          try {
            if (!e || "function" != typeof e) return l;
            return e.name || l;
          } catch (e) {
            return l;
          }
        }
        function u(e) {
          let t = e.exception;
          if (t) {
            let e = [];
            try {
              return (
                t.values.forEach((t) => {
                  t.stacktrace.frames && e.push(...t.stacktrace.frames);
                }),
                e
              );
            } catch (e) {}
          }
        }
      },
      826476(e, t, n) {
        "use strict";
        n.d(t, { Xr: () => a, gt: () => s, nC: () => o, xv: () => i });
        var r = n(875565);
        function i(e, t = 0) {
          return "string" != typeof e || 0 === t || e.length <= t
            ? e
            : `${e.slice(0, t)}...`;
        }
        function o(e, t) {
          let n = e,
            r = n.length;
          if (r <= 150) return n;
          t > r && (t = r);
          let i = Math.max(t - 60, 0);
          i < 5 && (i = 0);
          let o = Math.min(i + 140, r);
          return (
            o > r - 5 && (o = r),
            o === r && (i = Math.max(o - 140, 0)),
            (n = n.slice(i, o)),
            i > 0 && (n = `'{snip} ${n}`),
            o < r && (n += " {snip}"),
            n
          );
        }
        function s(e, t) {
          if (!Array.isArray(e)) return "";
          let n = [];
          for (let t = 0; t < e.length; t++) {
            let i = e[t];
            try {
              (0, r.L2)(i) ? n.push("[VueViewModel]") : n.push(String(i));
            } catch (e) {
              n.push("[value cannot be serialized]");
            }
          }
          return n.join(t);
        }
        function a(e, t = [], n = !1) {
          return t.some((t) =>
            (function (e, t, n = !1) {
              return (
                !!(0, r.Kg)(e) &&
                ((0, r.gd)(t)
                  ? t.test(e)
                  : !!(0, r.Kg)(t) && (n ? e === t : e.includes(t)))
              );
            })(e, t, n),
          );
        }
      },
      366781(e, t, n) {
        "use strict";
        n.d(t, { a3: () => a, m7: () => l, vQ: () => c, vm: () => s });
        var r = n(780755),
          i = n(272469);
        let o = n(978862).O;
        function s() {
          if (!("fetch" in o)) return !1;
          try {
            return (
              new Headers(),
              new Request("http://www.example.com"),
              new Response(),
              !0
            );
          } catch (e) {
            return !1;
          }
        }
        function a(e) {
          return (
            e &&
            /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(
              e.toString(),
            )
          );
        }
        function l() {
          if ("string" == typeof EdgeRuntime) return !0;
          if (!s()) return !1;
          if (a(o.fetch)) return !0;
          let e = !1,
            t = o.document;
          if (t && "function" == typeof t.createElement)
            try {
              let n = t.createElement("iframe");
              (n.hidden = !0),
                t.head.appendChild(n),
                n.contentWindow &&
                  n.contentWindow.fetch &&
                  (e = a(n.contentWindow.fetch)),
                t.head.removeChild(n);
            } catch (e) {
              r.T &&
                i.vF.warn(
                  "Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
                  e,
                );
            }
          return e;
        }
        function c() {
          return "ReportingObserver" in o;
        }
      },
      835869(e, t, n) {
        "use strict";
        n.d(t, { T2: () => l, XW: () => s, xg: () => a });
        var r,
          i,
          o = n(875565);
        function s(e) {
          return new l((t) => {
            t(e);
          });
        }
        function a(e) {
          return new l((t, n) => {
            n(e);
          });
        }
        ((r = i || (i = {}))[(r.PENDING = 0)] = "PENDING"),
          (r[(r.RESOLVED = 1)] = "RESOLVED"),
          (r[(r.REJECTED = 2)] = "REJECTED");
        class l {
          constructor(e) {
            l.prototype.__init.call(this),
              l.prototype.__init2.call(this),
              l.prototype.__init3.call(this),
              l.prototype.__init4.call(this),
              (this._state = i.PENDING),
              (this._handlers = []);
            try {
              e(this._resolve, this._reject);
            } catch (e) {
              this._reject(e);
            }
          }
          then(e, t) {
            return new l((n, r) => {
              this._handlers.push([
                !1,
                (t) => {
                  if (e)
                    try {
                      n(e(t));
                    } catch (e) {
                      r(e);
                    }
                  else n(t);
                },
                (e) => {
                  if (t)
                    try {
                      n(t(e));
                    } catch (e) {
                      r(e);
                    }
                  else r(e);
                },
              ]),
                this._executeHandlers();
            });
          }
          catch(e) {
            return this.then((e) => e, e);
          }
          finally(e) {
            return new l((t, n) => {
              let r, i;
              return this.then(
                (t) => {
                  (i = !1), (r = t), e && e();
                },
                (t) => {
                  (i = !0), (r = t), e && e();
                },
              ).then(() => {
                i ? n(r) : t(r);
              });
            });
          }
          __init() {
            this._resolve = (e) => {
              this._setResult(i.RESOLVED, e);
            };
          }
          __init2() {
            this._reject = (e) => {
              this._setResult(i.REJECTED, e);
            };
          }
          __init3() {
            this._setResult = (e, t) => {
              if (this._state === i.PENDING) {
                if ((0, o.Qg)(t))
                  return void t.then(this._resolve, this._reject);
                (this._state = e), (this._value = t), this._executeHandlers();
              }
            };
          }
          __init4() {
            this._executeHandlers = () => {
              if (this._state === i.PENDING) return;
              let e = this._handlers.slice();
              (this._handlers = []),
                e.forEach((e) => {
                  e[0] ||
                    (this._state === i.RESOLVED && e[1](this._value),
                    this._state === i.REJECTED && e[2](this._value),
                    (e[0] = !0));
                });
            };
          }
        }
      },
      83220(e, t, n) {
        "use strict";
        n.d(t, { k3: () => s, lu: () => i, zf: () => o });
        var r = n(978862);
        function i() {
          return Date.now() / 1e3;
        }
        let o = (function () {
            let { performance: e } = r.O;
            if (!e || !e.now) return i;
            let t = Date.now() - e.now(),
              n = void 0 == e.timeOrigin ? t : e.timeOrigin;
            return () => (n + e.now()) / 1e3;
          })(),
          s = (() => {
            let { performance: e } = r.O;
            if (!e || !e.now) return;
            let t = e.now(),
              n = Date.now(),
              i = e.timeOrigin ? Math.abs(e.timeOrigin + t - n) : 36e5,
              o = e.timing && e.timing.navigationStart,
              s = "number" == typeof o ? Math.abs(o + t - n) : 36e5;
            if (i < 36e5 || s < 36e5)
              if (i <= s) return e.timeOrigin;
              else return o;
            return n;
          })();
      },
      697043(e, t, n) {
        "use strict";
        n.d(t, { MI: () => o, TC: () => a, kM: () => s });
        var r = n(435819),
          i = n(834932);
        let o = RegExp(
          "^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$",
        );
        function s(e, t) {
          let n = (function (e) {
              let t;
              if (!e) return;
              let n = e.match(o);
              if (n)
                return (
                  "1" === n[3] ? (t = !0) : "0" === n[3] && (t = !1),
                  { traceId: n[1], parentSampled: t, parentSpanId: n[2] }
                );
            })(e),
            s = (0, r.yD)(t);
          if (!n || !n.traceId)
            return { traceId: (0, i.el)(), spanId: (0, i.ZF)() };
          let { traceId: a, parentSpanId: l, parentSampled: c } = n;
          return {
            traceId: a,
            parentSpanId: l,
            spanId: (0, i.ZF)(),
            sampled: c,
            dsc: s || {},
          };
        }
        function a(e = (0, i.el)(), t = (0, i.ZF)(), n) {
          let r = "";
          return void 0 !== n && (r = n ? "-1" : "-0"), `${e}-${t}${r}`;
        }
      },
      791132(e, t, n) {
        "use strict";
        function r(e) {
          if (!e) return {};
          let t = e.match(
            /^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/,
          );
          if (!t) return {};
          let n = t[6] || "",
            r = t[8] || "";
          return {
            host: t[4],
            path: t[5],
            protocol: t[2],
            search: n,
            hash: r,
            relative: t[5] + n + r,
          };
        }
        function i(e) {
          return e.split(/[?#]/, 1)[0];
        }
        n.d(t, { Dl: () => r, f: () => i });
      },
      127172(e, t, n) {
        "use strict";
        n.d(t, { N: () => i });
        let r = n(978862).O;
        function i() {
          let e = r.chrome,
            t = e && e.app && e.app.runtime,
            n =
              "history" in r &&
              !!r.history.pushState &&
              !!r.history.replaceState;
          return !t && n;
        }
      },
      978862(e, t, n) {
        "use strict";
        n.d(t, { B: () => i, O: () => r });
        let r = globalThis;
        function i(e, t, n) {
          let i = n || r,
            o = (i.__SENTRY__ = i.__SENTRY__ || {}),
            s = (o["8.55.0"] = o["8.55.0"] || {});
          return s[e] || (s[e] = t());
        }
      },
      993128(e, t, n) {
        "use strict";
        n.d(t, { Rg: () => l, e2: () => a });
        var r = n(411361),
          i = n(690094),
          o = n(487851),
          s = n(582102);
        function a(e, t) {
          var n, o, a, l, c, u, d, p;
          let h,
            f,
            m,
            {
              fingerprint: g,
              span: _,
              breadcrumbs: v,
              sdkProcessingMetadata: y,
            } = t;
          (function (e, t) {
            let {
                extra: n,
                tags: r,
                user: o,
                contexts: s,
                level: a,
                transactionName: l,
              } = t,
              c = (0, i.Ce)(n);
            c && Object.keys(c).length && (e.extra = { ...c, ...e.extra });
            let u = (0, i.Ce)(r);
            u && Object.keys(u).length && (e.tags = { ...u, ...e.tags });
            let d = (0, i.Ce)(o);
            d && Object.keys(d).length && (e.user = { ...d, ...e.user });
            let p = (0, i.Ce)(s);
            p &&
              Object.keys(p).length &&
              (e.contexts = { ...p, ...e.contexts }),
              a && (e.level = a),
              l && "transaction" !== e.type && (e.transaction = l);
          })(e, t),
            _ &&
              ((n = e),
              (o = _),
              (n.contexts = { trace: (0, s.kX)(o), ...n.contexts }),
              (n.sdkProcessingMetadata = {
                dynamicSamplingContext: (0, r.k1)(o),
                ...n.sdkProcessingMetadata,
              }),
              (h = (0, s.zU)(o)),
              (f = (0, s.et)(h).description) &&
                !n.transaction &&
                "transaction" === n.type &&
                (n.transaction = f)),
            (a = e),
            (l = g),
            (a.fingerprint = a.fingerprint
              ? Array.isArray(a.fingerprint)
                ? a.fingerprint
                : [a.fingerprint]
              : []),
            l && (a.fingerprint = a.fingerprint.concat(l)),
            a.fingerprint && !a.fingerprint.length && delete a.fingerprint,
            (c = e),
            (u = v),
            (m = [...(c.breadcrumbs || []), ...u]),
            (c.breadcrumbs = m.length ? m : void 0),
            (d = e),
            (p = y),
            (d.sdkProcessingMetadata = { ...d.sdkProcessingMetadata, ...p });
        }
        function l(e, t) {
          let {
            extra: n,
            tags: r,
            user: i,
            contexts: s,
            level: a,
            sdkProcessingMetadata: l,
            breadcrumbs: u,
            fingerprint: d,
            eventProcessors: p,
            attachments: h,
            propagationContext: f,
            transactionName: m,
            span: g,
          } = t;
          c(e, "extra", n),
            c(e, "tags", r),
            c(e, "user", i),
            c(e, "contexts", s),
            (e.sdkProcessingMetadata = (0, o.h)(e.sdkProcessingMetadata, l, 2)),
            a && (e.level = a),
            m && (e.transactionName = m),
            g && (e.span = g),
            u.length && (e.breadcrumbs = [...e.breadcrumbs, ...u]),
            d.length && (e.fingerprint = [...e.fingerprint, ...d]),
            p.length && (e.eventProcessors = [...e.eventProcessors, ...p]),
            h.length && (e.attachments = [...e.attachments, ...h]),
            (e.propagationContext = { ...e.propagationContext, ...f });
        }
        function c(e, t, n) {
          e[t] = (0, o.h)(e[t], n, 1);
        }
      },
      53837(e, t, n) {
        "use strict";
        n.d(t, { x: () => i });
        var r = n(875565);
        function i(e, t, n = () => {}) {
          var o, s, a;
          let l;
          try {
            l = e();
          } catch (e) {
            throw (t(e), n(), e);
          }
          return (
            (o = l),
            (s = t),
            (a = n),
            (0, r.Qg)(o)
              ? o.then(
                  (e) => (a(), e),
                  (e) => {
                    throw (s(e), a(), e);
                  },
                )
              : (a(), o)
          );
        }
      },
      370932(e, t, n) {
        "use strict";
        n.d(t, { w: () => i });
        var r = n(630449);
        function i(e) {
          if ("boolean" == typeof __SENTRY_TRACING__ && !__SENTRY_TRACING__)
            return !1;
          let t = (0, r.KU)(),
            n = e || (t && t.getOptions());
          return (
            !!n &&
            (n.enableTracing || "tracesSampleRate" in n || "tracesSampler" in n)
          );
        }
      },
      509474(e, t, n) {
        "use strict";
        function r(e, t) {
          var n, r, o, s;
          let a = t && t.getDsn(),
            l = t && t.getOptions().tunnel;
          return (
            (n = e),
            (!!(r = a) && n.includes(r.host)) ||
              ((o = e), !!(s = l) && i(o) === i(s))
          );
        }
        function i(e) {
          return "/" === e[e.length - 1] ? e.slice(0, -1) : e;
        }
        n.d(t, { A: () => r });
      },
      487851(e, t, n) {
        "use strict";
        n.d(t, {
          h: () =>
            function e(t, n, r = 2) {
              if (!n || "object" != typeof n || r <= 0) return n;
              if (t && n && 0 === Object.keys(n).length) return t;
              let i = { ...t };
              for (let t in n)
                Object.prototype.hasOwnProperty.call(n, t) &&
                  (i[t] = e(i[t], n[t], r - 1));
              return i;
            },
        });
      },
      616700(e, t, n) {
        "use strict";
        function r(e, ...t) {
          let n = new String(String.raw(e, ...t));
          return (
            (n.__sentry_template_string__ = e
              .join("\0")
              .replace(/%/g, "%%")
              .replace(/\0/g, "%s")),
            (n.__sentry_template_values__ = t),
            n
          );
        }
        n.d(t, { y: () => r });
      },
      838596(e, t, n) {
        "use strict";
        n.d(t, { i: () => o });
        var r = n(326447),
          i = n(272469);
        function o(e) {
          if ("boolean" == typeof e) return Number(e);
          let t = "string" == typeof e ? parseFloat(e) : e;
          if ("number" != typeof t || isNaN(t) || t < 0 || t > 1) {
            r.T &&
              i.vF.warn(
                `[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(e)} of type ${JSON.stringify(typeof e)}.`,
              );
            return;
          }
          return t;
        }
      },
      299346(e, t, n) {
        "use strict";
        n.d(t, { li: () => f, mG: () => h });
        var r = n(922248),
          i = n(630449),
          o = n(797824),
          s = n(128377),
          a = n(754433),
          l = n(231577),
          c = n(86622),
          u = n(826476),
          d = n(83220),
          p = n(993128);
        function h(e, t, n, h, f, m) {
          var g, _;
          let { normalizeDepth: v = 3, normalizeMaxBreadth: y = 1e3 } = e,
            b = {
              ...t,
              event_id: t.event_id || n.event_id || (0, l.eJ)(),
              timestamp: t.timestamp || (0, d.lu)(),
            },
            S = n.integrations || e.integrations.map((e) => e.name);
          (function (e, t) {
            let {
              environment: n,
              release: i,
              dist: o,
              maxValueLength: s = 250,
            } = t;
            (e.environment = e.environment || n || r.U),
              !e.release && i && (e.release = i),
              !e.dist && o && (e.dist = o),
              e.message && (e.message = (0, u.xv)(e.message, s));
            let a = e.exception && e.exception.values && e.exception.values[0];
            a && a.value && (a.value = (0, u.xv)(a.value, s));
            let l = e.request;
            l && l.url && (l.url = (0, u.xv)(l.url, s));
          })(b, e),
            (g = b),
            (_ = S).length > 0 &&
              ((g.sdk = g.sdk || {}),
              (g.sdk.integrations = [...(g.sdk.integrations || []), ..._])),
            f && f.emit("applyFrameMetadata", t),
            void 0 === t.type &&
              (function (e, t) {
                let n = (0, a.z)(t);
                try {
                  e.exception.values.forEach((e) => {
                    e.stacktrace.frames.forEach((e) => {
                      n && e.filename && (e.debug_id = n[e.filename]);
                    });
                  });
                } catch (e) {}
              })(b, e.stackParser);
          let w = (function (e, t) {
            if (!t) return e;
            let n = e ? e.clone() : new s.H();
            return n.update(t), n;
          })(h, n.captureContext);
          n.mechanism && (0, l.M6)(b, n.mechanism);
          let E = f ? f.getEventProcessors() : [],
            k = (0, i.m6)().getScopeData();
          if (m) {
            let e = m.getScopeData();
            (0, p.Rg)(k, e);
          }
          if (w) {
            let e = w.getScopeData();
            (0, p.Rg)(k, e);
          }
          let x = [...(n.attachments || []), ...k.attachments];
          x.length && (n.attachments = x), (0, p.e2)(b, k);
          let C = [...E, ...k.eventProcessors];
          return (0, o.j)(C, b, n).then((e) =>
            (e &&
              (function (e) {
                let t = {};
                try {
                  e.exception.values.forEach((e) => {
                    e.stacktrace.frames.forEach((e) => {
                      e.debug_id &&
                        (e.abs_path
                          ? (t[e.abs_path] = e.debug_id)
                          : e.filename && (t[e.filename] = e.debug_id),
                        delete e.debug_id);
                    });
                  });
                } catch (e) {}
                if (0 === Object.keys(t).length) return;
                (e.debug_meta = e.debug_meta || {}),
                  (e.debug_meta.images = e.debug_meta.images || []);
                let n = e.debug_meta.images;
                Object.entries(t).forEach(([e, t]) => {
                  n.push({ type: "sourcemap", code_file: e, debug_id: t });
                });
              })(e),
            "number" == typeof v && v > 0)
              ? (function (e, t, n) {
                  if (!e) return null;
                  let r = {
                    ...e,
                    ...(e.breadcrumbs && {
                      breadcrumbs: e.breadcrumbs.map((e) => ({
                        ...e,
                        ...(e.data && { data: (0, c.S8)(e.data, t, n) }),
                      })),
                    }),
                    ...(e.user && { user: (0, c.S8)(e.user, t, n) }),
                    ...(e.contexts && {
                      contexts: (0, c.S8)(e.contexts, t, n),
                    }),
                    ...(e.extra && { extra: (0, c.S8)(e.extra, t, n) }),
                  };
                  return (
                    e.contexts &&
                      e.contexts.trace &&
                      r.contexts &&
                      ((r.contexts.trace = e.contexts.trace),
                      e.contexts.trace.data &&
                        (r.contexts.trace.data = (0, c.S8)(
                          e.contexts.trace.data,
                          t,
                          n,
                        ))),
                    e.spans &&
                      (r.spans = e.spans.map((e) => ({
                        ...e,
                        ...(e.data && { data: (0, c.S8)(e.data, t, n) }),
                      }))),
                    e.contexts &&
                      e.contexts.flags &&
                      r.contexts &&
                      (r.contexts.flags = (0, c.S8)(e.contexts.flags, 3, n)),
                    r
                  );
                })(e, v, y)
              : e,
          );
        }
        function f(e) {
          if (e) {
            var t;
            return (t = e) instanceof s.H ||
              "function" == typeof t ||
              Object.keys(e).some((e) => m.includes(e))
              ? { captureContext: e }
              : e;
          }
        }
        let m = [
          "user",
          "level",
          "extra",
          "contexts",
          "tags",
          "fingerprint",
          "requestSession",
          "propagationContext",
        ];
      },
      472882(e, t, n) {
        "use strict";
        function r(e, t, n = [t], i = "npm") {
          let o = e._metadata || {};
          o.sdk ||
            (o.sdk = {
              name: `sentry.javascript.${t}`,
              packages: n.map((e) => ({
                name: `${i}:@sentry/${e}`,
                version: "8.55.0",
              })),
              version: "8.55.0",
            }),
            (e._metadata = o);
        }
        n.d(t, { K: () => r });
      },
      286788(e, t, n) {
        "use strict";
        n.d(t, { f: () => s, r: () => o });
        var r = n(690094);
        let i = "_sentrySpan";
        function o(e, t) {
          t ? (0, r.my)(e, i, t) : delete e[i];
        }
        function s(e) {
          return e[i];
        }
      },
      582102(e, t, n) {
        "use strict";
        n.d(t, {
          Bk: () => D,
          CC: () => f,
          Ck: () => _,
          Hu: () => T,
          Qh: () => y,
          VS: () => I,
          aO: () => m,
          cI: () => b,
          et: () => w,
          kX: () => v,
          pK: () => E,
          r2: () => R,
          xO: () => M,
          xl: () => A,
          yW: () => k,
          zQ: () => N,
          zU: () => O,
        });
        var r = n(452681),
          i = n(75109),
          o = n(630449),
          s = n(991854),
          a = n(92332),
          l = n(272469),
          c = n(690094),
          u = n(834932),
          d = n(83220),
          p = n(697043),
          h = n(286788);
        let f = 0,
          m = 1,
          g = !1;
        function _(e) {
          let { spanId: t, traceId: n } = e.spanContext(),
            { data: r, op: i, parent_span_id: o, status: s, origin: a } = w(e);
          return (0, c.Ce)({
            parent_span_id: o,
            span_id: t,
            trace_id: n,
            data: r,
            op: i,
            status: s,
            origin: a,
          });
        }
        function v(e) {
          let { spanId: t, traceId: n, isRemote: r } = e.spanContext(),
            i = r ? t : w(e).parent_span_id,
            o = r ? (0, u.ZF)() : t;
          return (0, c.Ce)({ parent_span_id: i, span_id: o, trace_id: n });
        }
        function y(e) {
          let { traceId: t, spanId: n } = e.spanContext(),
            r = E(e);
          return (0, p.TC)(t, n, r);
        }
        function b(e) {
          return "number" == typeof e
            ? S(e)
            : Array.isArray(e)
              ? e[0] + e[1] / 1e9
              : e instanceof Date
                ? S(e.getTime())
                : (0, d.zf)();
        }
        function S(e) {
          return e > 0x2540be3ff ? e / 1e3 : e;
        }
        function w(e) {
          if ("function" == typeof e.getSpanJSON) return e.getSpanJSON();
          try {
            var t;
            let { spanId: n, traceId: r } = e.spanContext();
            if (
              (t = e).attributes &&
              t.startTime &&
              t.name &&
              t.endTime &&
              t.status
            ) {
              let {
                attributes: t,
                startTime: i,
                name: o,
                endTime: l,
                parentSpanId: u,
                status: d,
              } = e;
              return (0, c.Ce)({
                span_id: n,
                trace_id: r,
                data: t,
                description: o,
                parent_span_id: u,
                start_timestamp: b(i),
                timestamp: b(l) || void 0,
                status: k(d),
                op: t[a.uT],
                origin: t[a.JD],
                _metrics_summary: (0, s.g)(e),
              });
            }
            return { span_id: n, trace_id: r };
          } catch (e) {
            return {};
          }
        }
        function E(e) {
          let { traceFlags: t } = e.spanContext();
          return t === m;
        }
        function k(e) {
          if (e && 0 !== e.code)
            return 1 === e.code ? "ok" : e.message || "unknown_error";
        }
        let x = "_sentryChildSpans",
          C = "_sentryRootSpan";
        function T(e, t) {
          let n = e[C] || e;
          (0, c.my)(t, C, n),
            e[x] ? e[x].add(t) : (0, c.my)(e, x, new Set([t]));
        }
        function I(e, t) {
          e[x] && e[x].delete(t);
        }
        function M(e) {
          let t = new Set();
          return (
            !(function e(n) {
              if (!t.has(n) && E(n))
                for (let r of (t.add(n), n[x] ? Array.from(n[x]) : [])) e(r);
            })(e),
            Array.from(t)
          );
        }
        function O(e) {
          return e[C] || e;
        }
        function D() {
          let e = (0, i.E)(),
            t = (0, r.h)(e);
          return t.getActiveSpan ? t.getActiveSpan() : (0, h.f)((0, o.o5)());
        }
        function R(e, t, n, r, i, o) {
          let a = D();
          a && (0, s.X)(a, e, t, n, r, i, o);
        }
        function A() {
          g ||
            ((0, l.pq)(() => {
              console.warn(
                "[Sentry] Deprecation warning: Returning null from `beforeSendSpan` will be disallowed from SDK version 9.0.0 onwards. The callback will only support mutating spans. To drop certain spans, configure the respective integrations directly.",
              );
            }),
            (g = !0));
        }
        function N(e, t) {
          e.updateName(t), e.setAttributes({ [a.i_]: "custom", [a.Le]: t });
        }
      },
      657018(e, t, n) {
        "use strict";
        n.d(t, { i: () => p });
        var r = n(452681),
          i = n(75109),
          o = n(630449),
          s = n(871186),
          a = n(272469),
          l = n(582102),
          c = n(697043),
          u = n(411361),
          d = n(435819);
        function p(e = {}) {
          let t = (0, o.KU)();
          if (!(0, s.Ol)() || !t) return {};
          let n = (0, i.E)(),
            h = (0, r.h)(n);
          if (h.getTraceData) return h.getTraceData(e);
          let f = (0, o.o5)(),
            m = e.span || (0, l.Bk)(),
            g = m
              ? (0, l.Qh)(m)
              : (function (e) {
                  let {
                    traceId: t,
                    sampled: n,
                    spanId: r,
                  } = e.getPropagationContext();
                  return (0, c.TC)(t, r, n);
                })(f),
            _ = m ? (0, u.k1)(m) : (0, u.ao)(t, f),
            v = (0, d.De)(_);
          return c.MI.test(g)
            ? { "sentry-trace": g, baggage: v }
            : (a.vF.warn(
                "Invalid sentry-trace data. Cannot generate trace data",
              ),
              {});
        }
      },
      21453(e, t, n) {
        "use strict";
        n.d(t, { T: () => r });
        let r = "u" < typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
      },
      743154(e, t, n) {
        "use strict";
        n.d(t, { qd: () => l, wg: () => u, y7: () => c });
        var r = n(366781),
          i = n(272469),
          o = n(21453),
          s = n(296438);
        let a = {};
        function l(e) {
          let t = a[e];
          if (t) return t;
          let n = s.j[e];
          if ((0, r.a3)(n)) return (a[e] = n.bind(s.j));
          let l = s.j.document;
          if (l && "function" == typeof l.createElement)
            try {
              let t = l.createElement("iframe");
              (t.hidden = !0), l.head.appendChild(t);
              let r = t.contentWindow;
              r && r[e] && (n = r[e]), l.head.removeChild(t);
            } catch (t) {
              o.T &&
                i.vF.warn(
                  `Could not create sandbox iframe for ${e} check, bailing to window.${e}: `,
                  t,
                );
            }
          return n ? (a[e] = n.bind(s.j)) : n;
        }
        function c(e) {
          a[e] = void 0;
        }
        function u(...e) {
          return l("setTimeout")(...e);
        }
      },
      756813(e, t, n) {
        "use strict";
        let r, i, o;
        n.d(t, { i: () => u });
        var s = n(873326),
          a = n(690094),
          l = n(231577),
          c = n(296438);
        function u(e) {
          (0, s.s5)("dom", e), (0, s.AS)("dom", d);
        }
        function d() {
          if (!c.j.document) return;
          let e = s.aj.bind(null, "dom"),
            t = p(e, !0);
          c.j.document.addEventListener("click", t, !1),
            c.j.document.addEventListener("keypress", t, !1),
            ["EventTarget", "Node"].forEach((t) => {
              let n = c.j[t],
                r = n && n.prototype;
              r &&
                r.hasOwnProperty &&
                r.hasOwnProperty("addEventListener") &&
                ((0, a.GS)(r, "addEventListener", function (t) {
                  return function (n, r, i) {
                    if ("click" === n || "keypress" == n)
                      try {
                        let r = (this.__sentry_instrumentation_handlers__ =
                            this.__sentry_instrumentation_handlers__ || {}),
                          o = (r[n] = r[n] || { refCount: 0 });
                        if (!o.handler) {
                          let r = p(e);
                          (o.handler = r), t.call(this, n, r, i);
                        }
                        o.refCount++;
                      } catch (e) {}
                    return t.call(this, n, r, i);
                  };
                }),
                (0, a.GS)(r, "removeEventListener", function (e) {
                  return function (t, n, r) {
                    if ("click" === t || "keypress" == t)
                      try {
                        let n = this.__sentry_instrumentation_handlers__ || {},
                          i = n[t];
                        i &&
                          (i.refCount--,
                          i.refCount <= 0 &&
                            (e.call(this, t, i.handler, r),
                            (i.handler = void 0),
                            delete n[t]),
                          0 === Object.keys(n).length &&
                            delete this.__sentry_instrumentation_handlers__);
                      } catch (e) {}
                    return e.call(this, t, n, r);
                  };
                }));
            });
        }
        function p(e, t = !1) {
          return (n) => {
            var s;
            if (!n || n._sentryCaptured) return;
            let u = (function (e) {
              try {
                return e.target;
              } catch (e) {
                return null;
              }
            })(n);
            if (
              ((s = n.type),
              "keypress" === s &&
                (!u ||
                  !u.tagName ||
                  ("INPUT" !== u.tagName &&
                    "TEXTAREA" !== u.tagName &&
                    !u.isContentEditable &&
                    1)))
            )
              return;
            (0, a.my)(n, "_sentryCaptured", !0),
              u && !u._sentryId && (0, a.my)(u, "_sentryId", (0, l.eJ)());
            let d = "keypress" === n.type ? "input" : n.type;
            !(function (e) {
              if (e.type !== i) return !1;
              try {
                if (!e.target || e.target._sentryId !== o) return !1;
              } catch (e) {}
              return !0;
            })(n) &&
              (e({ event: n, name: d, global: t }),
              (i = n.type),
              (o = u ? u._sentryId : void 0)),
              clearTimeout(r),
              (r = c.j.setTimeout(() => {
                (o = void 0), (i = void 0);
              }, 1e3));
          };
        }
      },
      300297(e, t, n) {
        "use strict";
        let r;
        n.d(t, { _: () => l });
        var i = n(873326),
          o = n(127172),
          s = n(690094),
          a = n(296438);
        function l(e) {
          let t = "history";
          (0, i.s5)(t, e), (0, i.AS)(t, c);
        }
        function c() {
          if (!(0, o.N)()) return;
          let e = a.j.onpopstate;
          function t(e) {
            return function (...t) {
              let n = t.length > 2 ? t[2] : void 0;
              if (n) {
                let e = r,
                  t = String(n);
                (r = t), (0, i.aj)("history", { from: e, to: t });
              }
              return e.apply(this, t);
            };
          }
          (a.j.onpopstate = function (...t) {
            let n = a.j.location.href,
              o = r;
            if (((r = n), (0, i.aj)("history", { from: o, to: n }), e))
              try {
                return e.apply(this, t);
              } catch (e) {}
          }),
            (0, s.GS)(a.j.history, "pushState", t),
            (0, s.GS)(a.j.history, "replaceState", t);
        }
      },
      69171(e, t, n) {
        "use strict";
        n.d(t, { Er: () => a, Mn: () => l });
        var r = n(873326),
          i = n(83220),
          o = n(875565),
          s = n(296438);
        let a = "__sentry_xhr_v3__";
        function l(e) {
          (0, r.s5)("xhr", e), (0, r.AS)("xhr", c);
        }
        function c() {
          if (!s.j.XMLHttpRequest) return;
          let e = XMLHttpRequest.prototype;
          (e.open = new Proxy(e.open, {
            apply(e, t, n) {
              let s = Error(),
                l = 1e3 * (0, i.zf)(),
                c = (0, o.Kg)(n[0]) ? n[0].toUpperCase() : void 0,
                u = (function (e) {
                  if ((0, o.Kg)(e)) return e;
                  try {
                    return e.toString();
                  } catch (e) {}
                })(n[1]);
              if (!c || !u) return e.apply(t, n);
              (t[a] = { method: c, url: u, request_headers: {} }),
                "POST" === c &&
                  u.match(/sentry_key/) &&
                  (t.__sentry_own_request__ = !0);
              let d = () => {
                let e = t[a];
                if (e && 4 === t.readyState) {
                  try {
                    e.status_code = t.status;
                  } catch (e) {}
                  let n = {
                    endTimestamp: 1e3 * (0, i.zf)(),
                    startTimestamp: l,
                    xhr: t,
                    virtualError: s,
                  };
                  (0, r.aj)("xhr", n);
                }
              };
              return (
                "onreadystatechange" in t &&
                "function" == typeof t.onreadystatechange
                  ? (t.onreadystatechange = new Proxy(t.onreadystatechange, {
                      apply: (e, t, n) => (d(), e.apply(t, n)),
                    }))
                  : t.addEventListener("readystatechange", d),
                (t.setRequestHeader = new Proxy(t.setRequestHeader, {
                  apply(e, t, n) {
                    let [r, i] = n,
                      s = t[a];
                    return (
                      s &&
                        (0, o.Kg)(r) &&
                        (0, o.Kg)(i) &&
                        (s.request_headers[r.toLowerCase()] = i),
                      e.apply(t, n)
                    );
                  },
                })),
                e.apply(t, n)
              );
            },
          })),
            (e.send = new Proxy(e.send, {
              apply(e, t, n) {
                let o = t[a];
                if (!o) return e.apply(t, n);
                void 0 !== n[0] && (o.body = n[0]);
                let s = { startTimestamp: 1e3 * (0, i.zf)(), xhr: t };
                return (0, r.aj)("xhr", s), e.apply(t, n);
              },
            }));
        }
      },
      208232(e, t, n) {
        "use strict";
        let r, i;
        n.d(t, {
          DI: () => E,
          QU: () => k,
          U$: () => w,
          bk: () => b,
          c8: () => S,
        });
        var o = n(83220),
          s = n(582102),
          a = n(92332),
          l = n(693037),
          c = n(142080),
          u = n(791132),
          d = n(296438),
          p = n(328957),
          h = n(505880),
          f = n(229148),
          m = n(328150),
          g = n(213900),
          _ = n(173350);
        let v = 0,
          y = {};
        function b({ recordClsStandaloneSpans: e }) {
          let t = (0, f.D)();
          if (t && o.k3) {
            t.mark && d.j.performance.mark("sentry-tracing-init");
            let n = (0, h.T5)(({ metric: e }) => {
                let t = e.entries[e.entries.length - 1];
                if (!t) return;
                let n = (0, f.rv)(o.k3),
                  r = (0, f.rv)(t.startTime);
                (y.fid = { value: e.value, unit: "millisecond" }),
                  (y["mark.fid"] = { value: n + r, unit: "second" });
              }),
              s = (0, h.Pt)(({ metric: e }) => {
                let t = e.entries[e.entries.length - 1];
                t &&
                  ((y.lcp = { value: e.value, unit: "millisecond" }), (r = t));
              }, !0),
              a = (0, h.YG)(({ metric: e }) => {
                e.entries[e.entries.length - 1] &&
                  (y.ttfb = { value: e.value, unit: "millisecond" });
              }),
              l = e
                ? (0, p.D)()
                : (0, h.a9)(({ metric: e }) => {
                    let t = e.entries[e.entries.length - 1];
                    t && ((y.cls = { value: e.value, unit: "" }), (i = t));
                  }, !0);
            return () => {
              n(), s(), a(), l && l();
            };
          }
          return () => void 0;
        }
        function S() {
          (0, h.wv)("longtask", ({ entries: e }) => {
            let t = (0, s.Bk)();
            if (!t) return;
            let { op: n, start_timestamp: r } = (0, s.et)(t);
            for (let i of e) {
              let e = (0, f.rv)(o.k3 + i.startTime),
                s = (0, f.rv)(i.duration);
              ("navigation" === n && r && e < r) ||
                (0, f.Tn)(t, e, e + s, {
                  name: "Main UI thread blocked",
                  op: "ui.long-task",
                  attributes: { [a.JD]: "auto.ui.browser.metrics" },
                });
            }
          });
        }
        function w() {
          new PerformanceObserver((e) => {
            let t = (0, s.Bk)();
            if (t)
              for (let n of e.getEntries()) {
                if (!n.scripts[0]) continue;
                let e = (0, f.rv)(o.k3 + n.startTime),
                  { start_timestamp: r, op: i } = (0, s.et)(t);
                if ("navigation" === i && r && e < r) continue;
                let l = (0, f.rv)(n.duration),
                  c = { [a.JD]: "auto.ui.browser.metrics" },
                  {
                    invoker: u,
                    invokerType: d,
                    sourceURL: p,
                    sourceFunctionName: h,
                    sourceCharPosition: m,
                  } = n.scripts[0];
                (c["browser.script.invoker"] = u),
                  (c["browser.script.invoker_type"] = d),
                  p && (c["code.filepath"] = p),
                  h && (c["code.function"] = h),
                  -1 !== m && (c["browser.script.source_char_position"] = m),
                  (0, f.Tn)(t, e, e + l, {
                    name: "Main UI thread blocked",
                    op: "ui.long-animation-frame",
                    attributes: c,
                  });
              }
          }).observe({ type: "long-animation-frame", buffered: !0 });
        }
        function E() {
          (0, h.wv)("event", ({ entries: e }) => {
            let t = (0, s.Bk)();
            if (t) {
              for (let n of e)
                if ("click" === n.name) {
                  let e = (0, f.rv)(o.k3 + n.startTime),
                    r = (0, f.rv)(n.duration),
                    i = {
                      name: (0, l.Hd)(n.target),
                      op: `ui.interaction.${n.name}`,
                      startTime: e,
                      attributes: { [a.JD]: "auto.ui.browser.metrics" },
                    },
                    s = (0, l.xE)(n.target);
                  s && (i.attributes["ui.component_name"] = s),
                    (0, f.Tn)(t, e, e + r, i);
                }
            }
          });
        }
        function k(e, t) {
          let n = (0, f.D)();
          if (!n || !n.getEntries || !o.k3) return;
          let p = (0, f.rv)(o.k3),
            h = n.getEntries(),
            { op: b, start_timestamp: S } = (0, s.et)(e);
          if (
            (h.slice(v).forEach((t) => {
              var n, r, i, o, s, l, c, h, m, v, w;
              let E = (0, f.rv)(t.startTime),
                k = (0, f.rv)(Math.max(0, t.duration));
              if ("navigation" !== b || !S || !(p + E < S))
                switch (t.entryType) {
                  case "navigation":
                    let T, I, M;
                    (n = e),
                      (r = t),
                      (i = p),
                      [
                        "unloadEvent",
                        "redirect",
                        "domContentLoadedEvent",
                        "loadEvent",
                        "connect",
                      ].forEach((e) => {
                        x(n, r, e, i);
                      }),
                      x(n, r, "secureConnection", i, "TLS/SSL"),
                      x(n, r, "fetch", i, "cache"),
                      x(n, r, "domainLookup", i, "DNS"),
                      (o = n),
                      (s = r),
                      (T = (l = i) + (0, f.rv)(s.requestStart)),
                      (I = l + (0, f.rv)(s.responseEnd)),
                      (M = l + (0, f.rv)(s.responseStart)),
                      s.responseEnd &&
                        ((0, f.Tn)(o, T, I, {
                          op: "browser.request",
                          name: s.name,
                          attributes: { [a.JD]: "auto.ui.browser.metrics" },
                        }),
                        (0, f.Tn)(o, M, I, {
                          op: "browser.response",
                          name: s.name,
                          attributes: { [a.JD]: "auto.ui.browser.metrics" },
                        }));
                    break;
                  case "mark":
                  case "paint":
                  case "measure": {
                    let n, r, i, o;
                    (c = e),
                      (h = t),
                      (m = E),
                      (v = k),
                      (w = p),
                      (n = (0, g.z)(!1)),
                      (r = w + Math.max(m, (0, f.rv)(n ? n.requestStart : 0))),
                      (i = w + m),
                      (o = { [a.JD]: "auto.resource.browser.metrics" }),
                      r !== i &&
                        ((o["sentry.browser.measure_happened_before_request"] =
                          !0),
                        (o["sentry.browser.measure_start_time"] = r)),
                      (0, f.Tn)(c, r, i + v, {
                        name: h.name,
                        op: h.entryType,
                        attributes: o,
                      });
                    let s = (0, _.N)(),
                      l = t.startTime < s.firstHiddenTime;
                    "first-paint" === t.name &&
                      l &&
                      (y.fp = { value: t.startTime, unit: "millisecond" }),
                      "first-contentful-paint" === t.name &&
                        l &&
                        (y.fcp = { value: t.startTime, unit: "millisecond" });
                    break;
                  }
                  case "resource":
                    !(function (e, t, n, r, i, o) {
                      if (
                        "xmlhttprequest" === t.initiatorType ||
                        "fetch" === t.initiatorType
                      )
                        return;
                      let s = (0, u.Dl)(n),
                        l = { [a.JD]: "auto.resource.browser.metrics" };
                      C(l, t, "transferSize", "http.response_transfer_size"),
                        C(
                          l,
                          t,
                          "encodedBodySize",
                          "http.response_content_length",
                        ),
                        C(
                          l,
                          t,
                          "decodedBodySize",
                          "http.decoded_response_content_length",
                        );
                      let c = t.deliveryType;
                      null != c && (l["http.response_delivery_type"] = c);
                      let p = t.renderBlockingStatus;
                      p && (l["resource.render_blocking_status"] = p),
                        s.protocol &&
                          (l["url.scheme"] = s.protocol.split(":").pop()),
                        s.host && (l["server.address"] = s.host),
                        (l["url.same_origin"] = n.includes(
                          d.j.location.origin,
                        ));
                      let { name: h, version: m } = (0, f.Ep)(
                        t.nextHopProtocol,
                      );
                      (l["network.protocol.name"] = h),
                        (l["network.protocol.version"] = m);
                      let g = o + r;
                      (0, f.Tn)(e, g, g + i, {
                        name: n.replace(d.j.location.origin, ""),
                        op: t.initiatorType
                          ? `resource.${t.initiatorType}`
                          : "resource.other",
                        attributes: l,
                      });
                    })(e, t, t.name, E, k, p);
                }
            }),
            (v = Math.max(h.length - 1, 0)),
            (function (e) {
              let t = d.j.navigator;
              if (!t) return;
              let n = t.connection;
              n &&
                (n.effectiveType &&
                  e.setAttribute("effectiveConnectionType", n.effectiveType),
                n.type && e.setAttribute("connectionType", n.type),
                (0, f.Kk)(n.rtt) &&
                  (y["connection.rtt"] = {
                    value: n.rtt,
                    unit: "millisecond",
                  })),
                (0, f.Kk)(t.deviceMemory) &&
                  e.setAttribute("deviceMemory", `${t.deviceMemory} GB`),
                (0, f.Kk)(t.hardwareConcurrency) &&
                  e.setAttribute(
                    "hardwareConcurrency",
                    String(t.hardwareConcurrency),
                  );
            })(e),
            "pageload" === b)
          ) {
            var w;
            !(function (e) {
              let t = (0, g.z)(!1);
              if (!t) return;
              let { responseStart: n, requestStart: r } = t;
              r <= n &&
                (e["ttfb.requestTime"] = { value: n - r, unit: "millisecond" });
            })(y);
            let n = y["mark.fid"];
            n &&
              y.fid &&
              ((0, f.Tn)(e, n.value, n.value + (0, f.rv)(y.fid.value), {
                name: "first input delay",
                op: "ui.action",
                attributes: { [a.JD]: "auto.ui.browser.metrics" },
              }),
              delete y["mark.fid"]),
              ("fcp" in y && t.recordClsOnPageloadSpan) || delete y.cls,
              Object.entries(y).forEach(([e, t]) => {
                (0, c.X)(e, t.value, t.unit);
              }),
              e.setAttribute("performance.timeOrigin", p),
              e.setAttribute("performance.activationStart", (0, m.b)()),
              (w = e),
              r &&
                (r.element &&
                  w.setAttribute("lcp.element", (0, l.Hd)(r.element)),
                r.id && w.setAttribute("lcp.id", r.id),
                r.url && w.setAttribute("lcp.url", r.url.trim().slice(0, 200)),
                null != r.loadTime &&
                  w.setAttribute("lcp.loadTime", r.loadTime),
                null != r.renderTime &&
                  w.setAttribute("lcp.renderTime", r.renderTime),
                w.setAttribute("lcp.size", r.size)),
              i &&
                i.sources &&
                i.sources.forEach((e, t) =>
                  w.setAttribute(`cls.source.${t + 1}`, (0, l.Hd)(e.node)),
                );
          }
          (r = void 0), (i = void 0), (y = {});
        }
        function x(e, t, n, r, i = n) {
          var o;
          let s =
              t[
                "secureConnection" === (o = n)
                  ? "connectEnd"
                  : "fetch" === o
                    ? "domainLookupStart"
                    : `${o}End`
              ],
            l = t[`${n}Start`];
          l &&
            s &&
            (0, f.Tn)(e, r + (0, f.rv)(l), r + (0, f.rv)(s), {
              op: `browser.${i}`,
              name: t.name,
              attributes: { [a.JD]: "auto.ui.browser.metrics" },
            });
        }
        function C(e, t, n, r) {
          let i = t[n];
          null != i && i < 0x7fffffff && (e[r] = i);
        }
      },
      328957(e, t, n) {
        "use strict";
        n.d(t, { D: () => f });
        var r = n(630449),
          i = n(582102),
          o = n(272469),
          s = n(83220),
          a = n(693037),
          l = n(690094),
          c = n(92332),
          u = n(21453),
          d = n(505880),
          p = n(229148),
          h = n(603171);
        function f() {
          let e,
            t,
            n = 0;
          if (
            !(function () {
              try {
                return PerformanceObserver.supportedEntryTypes.includes(
                  "layout-shift",
                );
              } catch (e) {
                return !1;
              }
            })()
          )
            return;
          let f = !1;
          function m() {
            var i, d, h;
            let m, _, v, y, b;
            f ||
              ((f = !0),
              t &&
                ((i = n),
                (d = e),
                (h = t),
                u.T && o.vF.log(`Sending CLS span (${i})`),
                (m = (0, p.rv)((s.k3 || 0) + ((d && d.startTime) || 0))),
                (_ = (0, r.o5)().getScopeData().transactionName),
                (v = d
                  ? (0, a.Hd)(d.sources[0] && d.sources[0].node)
                  : "Layout shift"),
                (y = (0, l.Ce)({
                  [c.JD]: "auto.http.browser.cls",
                  [c.uT]: "ui.webvital.cls",
                  [c.jG]: (d && d.duration) || 0,
                  "sentry.pageload.span_id": h,
                })),
                (b = (0, p.kD)({
                  name: v,
                  transaction: _,
                  attributes: y,
                  startTime: m,
                })) &&
                  (b.addEvent("cls", { [c.Sn]: "", [c.xc]: i }), b.end(m))),
              g());
          }
          let g = (0, d.a9)(({ metric: t }) => {
            let r = t.entries[t.entries.length - 1];
            r && ((n = t.value), (e = r));
          }, !0);
          (0, h.Q)(() => {
            m();
          }),
            setTimeout(() => {
              let e = (0, r.KU)();
              if (!e) return;
              let n = e.on("startNavigationSpan", () => {
                  m(), n && n();
                }),
                o = (0, i.Bk)(),
                s = o && (0, i.zU)(o),
                a = s && (0, i.et)(s);
              a && "pageload" === a.op && (t = s.spanContext().spanId);
            }, 0);
        }
      },
      673604(e, t, n) {
        "use strict";
        n.d(t, { B: () => m, Z: () => h });
        var r = n(83220),
          i = n(582102),
          o = n(630449),
          s = n(693037),
          a = n(690094),
          l = n(92332),
          c = n(505880),
          u = n(229148);
        let d = [],
          p = new Map();
        function h() {
          if ((0, u.D)() && r.k3) {
            let e = (0, c.hT)(({ metric: e }) => {
              if (void 0 == e.value) return;
              let t = e.entries.find(
                (t) => t.duration === e.value && f[t.name],
              );
              if (!t) return;
              let { interactionId: n } = t,
                c = f[t.name],
                d = (0, u.rv)(r.k3 + t.startTime),
                h = (0, u.rv)(e.value),
                m = (0, i.Bk)(),
                g = m ? (0, i.zU)(m) : void 0,
                _ = (null != n ? p.get(n) : void 0) || g,
                v = _
                  ? (0, i.et)(_).description
                  : (0, o.o5)().getScopeData().transactionName,
                y = (0, s.Hd)(t.target),
                b = (0, a.Ce)({
                  [l.JD]: "auto.http.browser.inp",
                  [l.uT]: `ui.interaction.${c}`,
                  [l.jG]: t.duration,
                }),
                S = (0, u.kD)({
                  name: y,
                  transaction: v,
                  attributes: b,
                  startTime: d,
                });
              S &&
                (S.addEvent("inp", { [l.Sn]: "millisecond", [l.xc]: e.value }),
                S.end(d + h));
            });
            return () => {
              e();
            };
          }
          return () => void 0;
        }
        let f = {
          click: "click",
          pointerdown: "click",
          pointerup: "click",
          mousedown: "click",
          mouseup: "click",
          touchstart: "click",
          touchend: "click",
          mouseover: "hover",
          mouseout: "hover",
          mouseenter: "hover",
          mouseleave: "hover",
          pointerover: "hover",
          pointerout: "hover",
          pointerenter: "hover",
          pointerleave: "hover",
          dragstart: "drag",
          dragend: "drag",
          drag: "drag",
          dragenter: "drag",
          dragleave: "drag",
          dragover: "drag",
          drop: "drag",
          keydown: "press",
          keyup: "press",
          keypress: "press",
          input: "press",
        };
        function m(e) {
          let t = ({ entries: e }) => {
            let t = (0, i.Bk)(),
              n = t && (0, i.zU)(t);
            e.forEach((e) => {
              if (!(0, c.tC)(e) || !n) return;
              let t = e.interactionId;
              if (null != t && !p.has(t)) {
                if (d.length > 10) {
                  let e = d.shift();
                  p.delete(e);
                }
                d.push(t), p.set(t, n);
              }
            });
          };
          (0, c.wv)("event", t), (0, c.wv)("first-input", t);
        }
      },
      505880(e, t, n) {
        "use strict";
        let r, i, o, s, a;
        n.d(t, {
          Pt: () => b,
          T5: () => S,
          YG: () => w,
          a9: () => y,
          hT: () => E,
          tC: () => N,
          wv: () => k,
        });
        var l = n(272469),
          c = n(968072),
          u = n(21453),
          d = n(733022),
          p = n(272773),
          h = n(671255),
          f = n(679665),
          m = n(187644),
          g = n(812659);
        let _ = {},
          v = {};
        function y(e, t = !1) {
          return D("cls", e, C, r, t);
        }
        function b(e, t = !1) {
          return D("lcp", e, I, o, t);
        }
        function S(e) {
          return D("fid", e, T, i);
        }
        function w(e) {
          return D("ttfb", e, M, s);
        }
        function E(e) {
          return D("inp", e, O, a);
        }
        function k(e, t) {
          var n;
          let r;
          return (
            R(e, t),
            v[e] ||
              ((r = {}),
              "event" === (n = e) && (r.durationThreshold = 0),
              (0, m.l)(
                n,
                (e) => {
                  x(n, { entries: e });
                },
                r,
              ),
              (v[e] = !0)),
            A(e, t)
          );
        }
        function x(e, t) {
          let n = _[e];
          if (n && n.length)
            for (let r of n)
              try {
                r(t);
              } catch (t) {
                u.T &&
                  l.vF.error(
                    `Error while triggering instrumentation handler.
Type: ${e}
Name: ${(0, c.qQ)(r)}
Error:`,
                    t,
                  );
              }
        }
        function C() {
          return (0, d.I)(
            (e) => {
              x("cls", { metric: e }), (r = e);
            },
            { reportAllChanges: !0 },
          );
        }
        function T() {
          return (0, p.l)((e) => {
            x("fid", { metric: e }), (i = e);
          });
        }
        function I() {
          return (0, f.f)(
            (e) => {
              x("lcp", { metric: e }), (o = e);
            },
            { reportAllChanges: !0 },
          );
        }
        function M() {
          return (0, g.C)((e) => {
            x("ttfb", { metric: e }), (s = e);
          });
        }
        function O() {
          return (0, h.r)((e) => {
            x("inp", { metric: e }), (a = e);
          });
        }
        function D(e, t, n, r, i = !1) {
          let o;
          return (
            R(e, t),
            v[e] || ((o = n()), (v[e] = !0)),
            r && t({ metric: r }),
            A(e, t, i ? o : void 0)
          );
        }
        function R(e, t) {
          (_[e] = _[e] || []), _[e].push(t);
        }
        function A(e, t, n) {
          return () => {
            n && n();
            let r = _[e];
            if (!r) return;
            let i = r.indexOf(t);
            -1 !== i && r.splice(i, 1);
          };
        }
        function N(e) {
          return "duration" in e;
        }
      },
      229148(e, t, n) {
        "use strict";
        n.d(t, {
          D: () => u,
          Ep: () => p,
          Kk: () => a,
          Tn: () => l,
          kD: () => c,
          rv: () => d,
        });
        var r = n(582102),
          i = n(660161),
          o = n(630449),
          s = n(296438);
        function a(e) {
          return "number" == typeof e && isFinite(e);
        }
        function l(e, t, n, { ...o }) {
          let s = (0, r.et)(e).start_timestamp;
          return (
            s &&
              s > t &&
              "function" == typeof e.updateStartTime &&
              e.updateStartTime(t),
            (0, i.hb)(e, () => {
              let e = (0, i.Uk)({ startTime: t, ...o });
              return e && e.end(n), e;
            })
          );
        }
        function c(e) {
          let t,
            n = (0, o.KU)();
          if (!n) return;
          let { name: r, transaction: a, attributes: l, startTime: c } = e,
            { release: u, environment: d } = n.getOptions(),
            p = n.getIntegrationByName("Replay"),
            h = p && p.getReplayId(),
            f = (0, o.o5)(),
            m = f.getUser(),
            g = void 0 !== m ? m.email || m.id || m.ip_address : void 0;
          try {
            t = f.getScopeData().contexts.profile.profile_id;
          } catch (e) {}
          let _ = {
            release: u,
            environment: d,
            user: g || void 0,
            profile_id: t || void 0,
            replay_id: h || void 0,
            transaction: a,
            "user_agent.original": s.j.navigator && s.j.navigator.userAgent,
            ...l,
          };
          return (0, i.Uk)({
            name: r,
            attributes: _,
            startTime: c,
            experimental: { standalone: !0 },
          });
        }
        function u() {
          return s.j && s.j.addEventListener && s.j.performance;
        }
        function d(e) {
          return e / 1e3;
        }
        function p(e) {
          let t = "unknown",
            n = "unknown",
            r = "";
          for (let i of e) {
            if ("/" === i) {
              [t, n] = e.split("/");
              break;
            }
            if (!isNaN(Number(i))) {
              (t = "h" === r ? "http" : r), (n = e.split(r)[1]);
              break;
            }
            r += i;
          }
          return r === e && (t = r), { name: t, version: n };
        }
      },
      733022(e, t, n) {
        "use strict";
        n.d(t, { I: () => u });
        var r = n(388808),
          i = n(660524),
          o = n(187644),
          s = n(603171),
          a = n(159204),
          l = n(309886);
        let c = [0.1, 0.25],
          u = (e, t = {}) => {
            (0, l.z)(
              (0, a.J)(() => {
                let n,
                  a = (0, i.X)("CLS", 0),
                  l = 0,
                  u = [],
                  d = (e) => {
                    e.forEach((e) => {
                      if (!e.hadRecentInput) {
                        let t = u[0],
                          n = u[u.length - 1];
                        l &&
                        t &&
                        n &&
                        e.startTime - n.startTime < 1e3 &&
                        e.startTime - t.startTime < 5e3
                          ? ((l += e.value), u.push(e))
                          : ((l = e.value), (u = [e]));
                      }
                    }),
                      l > a.value && ((a.value = l), (a.entries = u), n());
                  },
                  p = (0, o.l)("layout-shift", d);
                p &&
                  ((n = (0, r.R)(e, a, c, t.reportAllChanges)),
                  (0, s.Q)(() => {
                    d(p.takeRecords()), n(!0);
                  }),
                  setTimeout(n, 0));
              }),
            );
          };
      },
      272773(e, t, n) {
        "use strict";
        n.d(t, { l: () => d });
        var r = n(388808),
          i = n(173350),
          o = n(660524),
          s = n(187644),
          a = n(603171),
          l = n(159204),
          c = n(644319);
        let u = [100, 300],
          d = (e, t = {}) => {
            (0, c.I)(() => {
              let n,
                c = (0, i.N)(),
                d = (0, o.X)("FID"),
                p = (e) => {
                  e.startTime < c.firstHiddenTime &&
                    ((d.value = e.processingStart - e.startTime),
                    d.entries.push(e),
                    n(!0));
                },
                h = (e) => {
                  e.forEach(p);
                },
                f = (0, s.l)("first-input", h);
              (n = (0, r.R)(e, d, u, t.reportAllChanges)),
                f &&
                  (0, a.Q)(
                    (0, l.J)(() => {
                      h(f.takeRecords()), f.disconnect();
                    }),
                  );
            });
          };
      },
      671255(e, t, n) {
        "use strict";
        n.d(t, { r: () => h });
        var r = n(296438),
          i = n(388808),
          o = n(660524),
          s = n(715183),
          a = n(187644),
          l = n(603171),
          c = n(686663),
          u = n(644319),
          d = n(666372);
        let p = [200, 500],
          h = (e, t = {}) => {
            "PerformanceEventTiming" in r.j &&
              "interactionId" in PerformanceEventTiming.prototype &&
              (0, u.I)(() => {
                let n;
                (0, c.D)();
                let r = (0, o.X)("INP"),
                  u = (e) => {
                    (0, d.d)(() => {
                      e.forEach(s.M);
                      let t = (0, s.cg)();
                      t &&
                        t.latency !== r.value &&
                        ((r.value = t.latency), (r.entries = t.entries), n());
                    });
                  },
                  h = (0, a.l)("event", u, {
                    durationThreshold:
                      null != t.durationThreshold ? t.durationThreshold : s.pl,
                  });
                (n = (0, i.R)(e, r, p, t.reportAllChanges)),
                  h &&
                    (h.observe({ type: "first-input", buffered: !0 }),
                    (0, l.Q)(() => {
                      u(h.takeRecords()), n(!0);
                    }));
              });
          };
      },
      679665(e, t, n) {
        "use strict";
        n.d(t, { f: () => m });
        var r = n(296438),
          i = n(388808),
          o = n(328150),
          s = n(173350),
          a = n(660524),
          l = n(187644),
          c = n(603171),
          u = n(159204),
          d = n(644319),
          p = n(666372);
        let h = [2500, 4e3],
          f = {},
          m = (e, t = {}) => {
            (0, d.I)(() => {
              let n,
                d = (0, s.N)(),
                m = (0, a.X)("LCP"),
                g = (e) => {
                  t.reportAllChanges || (e = e.slice(-1)),
                    e.forEach((e) => {
                      e.startTime < d.firstHiddenTime &&
                        ((m.value = Math.max(e.startTime - (0, o.b)(), 0)),
                        (m.entries = [e]),
                        n());
                    });
                },
                _ = (0, l.l)("largest-contentful-paint", g);
              if (_) {
                n = (0, i.R)(e, m, h, t.reportAllChanges);
                let o = (0, u.J)(() => {
                  f[m.id] ||
                    (g(_.takeRecords()), _.disconnect(), (f[m.id] = !0), n(!0));
                });
                ["keydown", "click"].forEach((e) => {
                  r.j.document &&
                    addEventListener(e, () => (0, p.d)(o), {
                      once: !0,
                      capture: !0,
                    });
                }),
                  (0, c.Q)(o);
              }
            });
          };
      },
      388808(e, t, n) {
        "use strict";
        n.d(t, { R: () => r });
        let r = (e, t, n, r) => {
          let i, o;
          return (s) => {
            if (
              t.value >= 0 &&
              (s || r) &&
              ((o = t.value - (i || 0)) || void 0 === i)
            ) {
              var a;
              (i = t.value),
                (t.delta = o),
                (a = t.value),
                (t.rating =
                  a > n[1] ? "poor" : a > n[0] ? "needs-improvement" : "good"),
                e(t);
            }
          };
        };
      },
      347959(e, t, n) {
        "use strict";
        n.d(t, { W: () => r });
        let r = () =>
          `v4-${Date.now()}-${Math.floor(Math.random() * (9e12 - 1)) + 1e12}`;
      },
      328150(e, t, n) {
        "use strict";
        n.d(t, { b: () => i });
        var r = n(213900);
        let i = () => {
          let e = (0, r.z)();
          return (e && e.activationStart) || 0;
        };
      },
      213900(e, t, n) {
        "use strict";
        n.d(t, { z: () => i });
        var r = n(296438);
        let i = (e = !0) => {
          let t =
            r.j.performance &&
            r.j.performance.getEntriesByType &&
            r.j.performance.getEntriesByType("navigation")[0];
          if (
            !e ||
            (t && t.responseStart > 0 && t.responseStart < performance.now())
          )
            return t;
        };
      },
      173350(e, t, n) {
        "use strict";
        n.d(t, { N: () => a });
        var r = n(296438);
        let i = -1,
          o = (e) => {
            "hidden" === r.j.document.visibilityState &&
              i > -1 &&
              ((i = "visibilitychange" === e.type ? e.timeStamp : 0), s());
          },
          s = () => {
            removeEventListener("visibilitychange", o, !0),
              removeEventListener("prerenderingchange", o, !0);
          },
          a = () => (
            r.j.document &&
              i < 0 &&
              ((i =
                "hidden" !== r.j.document.visibilityState ||
                r.j.document.prerendering
                  ? 1 / 0
                  : 0),
              addEventListener("visibilitychange", o, !0),
              addEventListener("prerenderingchange", o, !0)),
            {
              get firstHiddenTime() {
                return i;
              },
            }
          );
      },
      660524(e, t, n) {
        "use strict";
        n.d(t, { X: () => a });
        var r = n(296438),
          i = n(347959),
          o = n(328150),
          s = n(213900);
        let a = (e, t) => {
          let n = (0, s.z)(),
            a = "navigate";
          return (
            n &&
              ((r.j.document && r.j.document.prerendering) || (0, o.b)() > 0
                ? (a = "prerender")
                : r.j.document && r.j.document.wasDiscarded
                  ? (a = "restore")
                  : n.type && (a = n.type.replace(/_/g, "-"))),
            {
              name: e,
              value: void 0 === t ? -1 : t,
              rating: "good",
              delta: 0,
              entries: [],
              id: (0, i.W)(),
              navigationType: a,
            }
          );
        };
      },
      715183(e, t, n) {
        "use strict";
        n.d(t, { M: () => c, cg: () => a, pl: () => s });
        var r = n(686663);
        let i = [],
          o = new Map(),
          s = 40,
          a = () => {
            let e = Math.min(i.length - 1, Math.floor(((0, r.O)() - 0) / 50));
            return i[e];
          },
          l = [],
          c = (e) => {
            if (
              (l.forEach((t) => t(e)),
              !(e.interactionId || "first-input" === e.entryType))
            )
              return;
            let t = i[i.length - 1],
              n = o.get(e.interactionId);
            if (n || i.length < 10 || (t && e.duration > t.latency)) {
              if (n)
                e.duration > n.latency
                  ? ((n.entries = [e]), (n.latency = e.duration))
                  : e.duration === n.latency &&
                    e.startTime === (n.entries[0] && n.entries[0].startTime) &&
                    n.entries.push(e);
              else {
                let t = {
                  id: e.interactionId,
                  latency: e.duration,
                  entries: [e],
                };
                o.set(t.id, t), i.push(t);
              }
              i.sort((e, t) => t.latency - e.latency),
                i.length > 10 && i.splice(10).forEach((e) => o.delete(e.id));
            }
          };
      },
      187644(e, t, n) {
        "use strict";
        n.d(t, { l: () => r });
        let r = (e, t, n) => {
          try {
            if (PerformanceObserver.supportedEntryTypes.includes(e)) {
              let r = new PerformanceObserver((e) => {
                Promise.resolve().then(() => {
                  t(e.getEntries());
                });
              });
              return (
                r.observe(Object.assign({ type: e, buffered: !0 }, n || {})), r
              );
            }
          } catch (e) {}
        };
      },
      603171(e, t, n) {
        "use strict";
        n.d(t, { Q: () => i });
        var r = n(296438);
        let i = (e) => {
          let t = (t) => {
            ("pagehide" === t.type ||
              (r.j.document && "hidden" === r.j.document.visibilityState)) &&
              e(t);
          };
          r.j.document &&
            (addEventListener("visibilitychange", t, !0),
            addEventListener("pagehide", t, !0));
        };
      },
      686663(e, t, n) {
        "use strict";
        let r;
        n.d(t, { D: () => u, O: () => c });
        var i = n(187644);
        let o = 0,
          s = 1 / 0,
          a = 0,
          l = (e) => {
            e.forEach((e) => {
              e.interactionId &&
                ((s = Math.min(s, e.interactionId)),
                (o = (a = Math.max(a, e.interactionId)) ? (a - s) / 7 + 1 : 0));
            });
          },
          c = () => (r ? o : performance.interactionCount || 0),
          u = () => {
            "interactionCount" in performance ||
              r ||
              (r = (0, i.l)("event", l, {
                type: "event",
                buffered: !0,
                durationThreshold: 0,
              }));
          };
      },
      159204(e, t, n) {
        "use strict";
        n.d(t, { J: () => r });
        let r = (e) => {
          let t = !1;
          return () => {
            t || (e(), (t = !0));
          };
        };
      },
      644319(e, t, n) {
        "use strict";
        n.d(t, { I: () => i });
        var r = n(296438);
        let i = (e) => {
          r.j.document && r.j.document.prerendering
            ? addEventListener("prerenderingchange", () => e(), !0)
            : e();
        };
      },
      666372(e, t, n) {
        "use strict";
        n.d(t, { d: () => s });
        var r = n(296438),
          i = n(603171),
          o = n(159204);
        let s = (e) => {
          let t = r.j.requestIdleCallback || r.j.setTimeout,
            n = -1;
          return (
            (e = (0, o.J)(e)),
            r.j.document && "hidden" === r.j.document.visibilityState
              ? e()
              : ((n = t(e)), (0, i.Q)(e)),
            n
          );
        };
      },
      309886(e, t, n) {
        "use strict";
        n.d(t, { z: () => u });
        var r = n(388808),
          i = n(328150),
          o = n(173350),
          s = n(660524),
          a = n(187644),
          l = n(644319);
        let c = [1800, 3e3],
          u = (e, t = {}) => {
            (0, l.I)(() => {
              let n,
                l = (0, o.N)(),
                u = (0, s.X)("FCP"),
                d = (0, a.l)("paint", (e) => {
                  e.forEach((e) => {
                    "first-contentful-paint" === e.name &&
                      (d.disconnect(),
                      e.startTime < l.firstHiddenTime &&
                        ((u.value = Math.max(e.startTime - (0, i.b)(), 0)),
                        u.entries.push(e),
                        n(!0)));
                  });
                });
              d && (n = (0, r.R)(e, u, c, t.reportAllChanges));
            });
          };
      },
      812659(e, t, n) {
        "use strict";
        n.d(t, { C: () => d });
        var r = n(296438),
          i = n(388808),
          o = n(328150),
          s = n(213900),
          a = n(660524),
          l = n(644319);
        let c = [800, 1800],
          u = (e) => {
            r.j.document && r.j.document.prerendering
              ? (0, l.I)(() => u(e))
              : r.j.document && "complete" !== r.j.document.readyState
                ? addEventListener("load", () => u(e), !0)
                : setTimeout(e, 0);
          },
          d = (e, t = {}) => {
            let n = (0, a.X)("TTFB"),
              r = (0, i.R)(e, n, c, t.reportAllChanges);
            u(() => {
              let e = (0, s.z)();
              e &&
                ((n.value = Math.max(e.responseStart - (0, o.b)(), 0)),
                (n.entries = [e]),
                r(!0));
            });
          };
      },
      296438(e, t, n) {
        "use strict";
        n.d(t, { j: () => r });
        let r = n(978862).O;
      },
      742741(e, t, n) {
        "use strict";
        n.d(t, {
          Sq: () => I,
          U$: () => e1,
          aD: () => P,
          e4: () => F,
          j0: () => eY,
        });
        var r = n(978862),
          i = n(630449),
          o = n(876194),
          s = n(693037),
          a = n(688331),
          l = n(272469),
          c = n(967193);
        let u = r.O,
          d = u.document,
          p = u.navigator,
          h = "Report a Bug",
          f = "Cancel",
          m = "Send Bug Report",
          g = "Confirm",
          _ = "Report a Bug",
          v = "your.email@example.org",
          y = "Email",
          b = "What's the bug? What did you expect?",
          S = "Description",
          w = "Your Name",
          E = "Name",
          k = "Thank you for your report!",
          x = "(required)",
          C = "Add a screenshot",
          T = "Remove screenshot",
          I = (e, t = { includeReplay: !0 }) => {
            if (!e.message)
              throw Error("Unable to submit feedback with empty message");
            let n = (0, i.KU)();
            if (!n) throw Error("No client setup, cannot send feedback.");
            e.tags && Object.keys(e.tags).length && (0, i.o5)().setTags(e.tags);
            let r = (0, o.q)({ source: "api", url: (0, s.$N)(), ...e }, t);
            return new Promise((e, t) => {
              let i = setTimeout(
                  () =>
                    t("Unable to determine if Feedback was correctly sent."),
                  5e3,
                ),
                o = n.on("afterSendEvent", (n, s) => {
                  if (n.event_id === r)
                    return (clearTimeout(i),
                    o(),
                    s &&
                      "number" == typeof s.statusCode &&
                      s.statusCode >= 200 &&
                      s.statusCode < 300)
                      ? e(r)
                      : s &&
                          "number" == typeof s.statusCode &&
                          0 === s.statusCode
                        ? t(
                            "Unable to send Feedback. This is because of network issues, or because you are using an ad-blocker.",
                          )
                        : s &&
                            "number" == typeof s.statusCode &&
                            403 === s.statusCode
                          ? t(
                              "Unable to send Feedback. This could be because this domain is not in your list of allowed domains.",
                            )
                          : t(
                              "Unable to send Feedback. This could be because of network issues, or because you are using an ad-blocker",
                            );
                });
            });
          },
          M = "u" < typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
        function O(e, t) {
          return {
            ...e,
            ...t,
            tags: { ...e.tags, ...t.tags },
            onFormOpen: () => {
              t.onFormOpen && t.onFormOpen(), e.onFormOpen && e.onFormOpen();
            },
            onFormClose: () => {
              t.onFormClose && t.onFormClose(),
                e.onFormClose && e.onFormClose();
            },
            onSubmitSuccess: (n) => {
              t.onSubmitSuccess && t.onSubmitSuccess(n),
                e.onSubmitSuccess && e.onSubmitSuccess(n);
            },
            onSubmitError: (n) => {
              t.onSubmitError && t.onSubmitError(n),
                e.onSubmitError && e.onSubmitError(n);
            },
            onFormSubmitted: () => {
              t.onFormSubmitted && t.onFormSubmitted(),
                e.onFormSubmitted && e.onFormSubmitted();
            },
            themeDark: { ...e.themeDark, ...t.themeDark },
            themeLight: { ...e.themeLight, ...t.themeLight },
          };
        }
        function D(e, t) {
          return (
            Object.entries(t).forEach(([t, n]) => {
              e.setAttributeNS(null, t, n);
            }),
            e
          );
        }
        let R = "rgba(88, 74, 192, 1)",
          A = {
            foreground: "#2b2233",
            background: "#ffffff",
            accentForeground: "white",
            accentBackground: R,
            successColor: "#268d75",
            errorColor: "#df3338",
            border: "1.5px solid rgba(41, 35, 47, 0.13)",
            boxShadow: "0px 4px 24px 0px rgba(43, 34, 51, 0.12)",
            outline: "1px auto var(--accent-background)",
            interactiveFilter: "brightness(95%)",
          },
          N = {
            foreground: "#ebe6ef",
            background: "#29232f",
            accentForeground: "white",
            accentBackground: R,
            successColor: "#2da98c",
            errorColor: "#f55459",
            border: "1.5px solid rgba(235, 230, 239, 0.15)",
            boxShadow: "0px 4px 24px 0px rgba(43, 34, 51, 0.12)",
            outline: "1px auto var(--accent-background)",
            interactiveFilter: "brightness(150%)",
          };
        function L(e) {
          return `
  --foreground: ${e.foreground};
  --background: ${e.background};
  --accent-foreground: ${e.accentForeground};
  --accent-background: ${e.accentBackground};
  --success-color: ${e.successColor};
  --error-color: ${e.errorColor};
  --border: ${e.border};
  --box-shadow: ${e.boxShadow};
  --outline: ${e.outline};
  --interactive-filter: ${e.interactiveFilter};
  `;
        }
        let P =
          ({
            lazyLoadIntegration: e,
            getModalIntegration: t,
            getScreenshotIntegration: n,
          }) =>
          ({
            id: r = "sentry-feedback",
            autoInject: i = !0,
            showBranding: o = !0,
            isEmailRequired: s = !1,
            isNameRequired: R = !1,
            showEmail: P = !0,
            showName: F = !0,
            enableScreenshot: j = !0,
            useSentryUser: $ = { email: "email", name: "username" },
            tags: U,
            styleNonce: B,
            scriptNonce: z,
            colorScheme: H = "system",
            themeLight: q = {},
            themeDark: W = {},
            addScreenshotButtonLabel: K = C,
            cancelButtonLabel: X = f,
            confirmButtonLabel: V = g,
            emailLabel: G = y,
            emailPlaceholder: J = v,
            formTitle: Y = _,
            isRequiredLabel: Q = x,
            messageLabel: Z = S,
            messagePlaceholder: ee = b,
            nameLabel: et = E,
            namePlaceholder: en = w,
            removeScreenshotButtonLabel: er = T,
            submitButtonLabel: ei = m,
            successMessageText: eo = k,
            triggerLabel: es = h,
            triggerAriaLabel: ea = "",
            onFormOpen: el,
            onFormClose: ec,
            onSubmitSuccess: eu,
            onSubmitError: ed,
            onFormSubmitted: ep,
          } = {}) => {
            let eh = {
                id: r,
                autoInject: i,
                showBranding: o,
                isEmailRequired: s,
                isNameRequired: R,
                showEmail: P,
                showName: F,
                enableScreenshot: j,
                useSentryUser: $,
                tags: U,
                styleNonce: B,
                scriptNonce: z,
                colorScheme: H,
                themeDark: W,
                themeLight: q,
                triggerLabel: es,
                triggerAriaLabel: ea,
                cancelButtonLabel: X,
                submitButtonLabel: ei,
                confirmButtonLabel: V,
                formTitle: Y,
                emailLabel: G,
                emailPlaceholder: J,
                messageLabel: Z,
                messagePlaceholder: ee,
                nameLabel: et,
                namePlaceholder: en,
                successMessageText: eo,
                isRequiredLabel: Q,
                addScreenshotButtonLabel: K,
                removeScreenshotButtonLabel: er,
                onFormClose: ec,
                onFormOpen: el,
                onSubmitError: ed,
                onSubmitSuccess: eu,
                onFormSubmitted: ep,
              },
              ef = null,
              em = [],
              eg = (e) => {
                if (!ef) {
                  let t = d.createElement("div");
                  (t.id = String(e.id)),
                    d.body.appendChild(t),
                    (ef = t.attachShadow({ mode: "open" })).appendChild(
                      (function ({
                        colorScheme: e,
                        themeDark: t,
                        themeLight: n,
                        styleNonce: r,
                      }) {
                        let i = d.createElement("style");
                        return (
                          (i.textContent = `
:host {
  --font-family: system-ui, 'Helvetica Neue', Arial, sans-serif;
  --font-size: 14px;
  --z-index: 100000;

  --page-margin: 16px;
  --inset: auto 0 0 auto;
  --actor-inset: var(--inset);

  font-family: var(--font-family);
  font-size: var(--font-size);

  ${"system" !== e ? "color-scheme: only light;" : ""}

  ${L("dark" === e ? { ...N, ...t } : { ...A, ...n })}
}

${
  "system" === e
    ? `
@media (prefers-color-scheme: dark) {
  :host {
    ${L({ ...N, ...t })}
  }
}`
    : ""
}
}
`),
                          r && i.setAttribute("nonce", r),
                          i
                        );
                      })(e),
                    );
                }
                return ef;
              },
              e_ = async (r) => {
                let i,
                  o,
                  s =
                    r.enableScreenshot &&
                    !(
                      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                        p.userAgent,
                      ) ||
                      (/Macintosh/i.test(p.userAgent) &&
                        p.maxTouchPoints &&
                        p.maxTouchPoints > 1)
                    ) &&
                    !!isSecureContext;
                try {
                  (i = (t ? t() : await e("feedbackModalIntegration", z))()),
                    (0, a.Q8)(i);
                } catch (e) {
                  throw (
                    (M &&
                      l.vF.error(
                        "[Feedback] Error when trying to load feedback integrations. Try using `feedbackSyncIntegration` in your `Sentry.init`.",
                      ),
                    Error("[Feedback] Missing feedback modal integration!"))
                  );
                }
                try {
                  let t = s
                    ? n
                      ? n()
                      : await e("feedbackScreenshotIntegration", z)
                    : void 0;
                  t && ((o = t()), (0, a.Q8)(o));
                } catch (e) {
                  M &&
                    l.vF.error(
                      "[Feedback] Missing feedback screenshot integration. Proceeding without screenshots.",
                    );
                }
                let c = i.createDialog({
                  options: {
                    ...r,
                    onFormClose: () => {
                      c && c.close(), r.onFormClose && r.onFormClose();
                    },
                    onFormSubmitted: () => {
                      c && c.close(), r.onFormSubmitted && r.onFormSubmitted();
                    },
                  },
                  screenshotIntegration: o,
                  sendFeedback: I,
                  shadow: eg(r),
                });
                return c;
              },
              ev = (e, t = {}) => {
                let n = O(eh, t),
                  r =
                    "string" == typeof e
                      ? d.querySelector(e)
                      : "function" == typeof e.addEventListener
                        ? e
                        : null;
                if (!r)
                  throw (
                    (M &&
                      l.vF.error(
                        "[Feedback] Unable to attach to target element",
                      ),
                    Error("Unable to attach to target element"))
                  );
                let i = null,
                  o = async () => {
                    i ||
                      (i = await e_({
                        ...n,
                        onFormSubmitted: () => {
                          i && i.removeFromDom(),
                            n.onFormSubmitted && n.onFormSubmitted();
                        },
                      })),
                      i.appendToDom(),
                      i.open();
                  };
                r.addEventListener("click", o);
                let s = () => {
                  (em = em.filter((e) => e !== s)),
                    i && i.removeFromDom(),
                    (i = null),
                    r.removeEventListener("click", o);
                };
                return em.push(s), s;
              },
              ey = (e = {}) => {
                let t = O(eh, e),
                  n = eg(t),
                  r = (function ({
                    triggerLabel: e,
                    triggerAriaLabel: t,
                    shadow: n,
                    styleNonce: r,
                  }) {
                    let i,
                      o,
                      s,
                      a,
                      l,
                      c,
                      p,
                      f,
                      m = d.createElement("button");
                    if (
                      ((m.type = "button"),
                      (m.className = "widget__actor"),
                      (m.ariaHidden = "false"),
                      (m.ariaLabel = t || e || h),
                      m.appendChild(
                        ((o = D(
                          (i = (e) =>
                            u.document.createElementNS(
                              "http://www.w3.org/2000/svg",
                              e,
                            ))("svg"),
                          {
                            width: "20",
                            height: "20",
                            viewBox: "0 0 20 20",
                            fill: "var(--actor-color, var(--foreground))",
                          },
                        )),
                        (s = D(i("g"), { clipPath: "url(#clip0_57_80)" })),
                        (a = D(i("path"), {
                          "fill-rule": "evenodd",
                          "clip-rule": "evenodd",
                          d: "M15.6622 15H12.3997C12.2129 14.9959 12.031 14.9396 11.8747 14.8375L8.04965 12.2H7.49956V19.1C7.4875 19.3348 7.3888 19.5568 7.22256 19.723C7.05632 19.8892 6.83435 19.9879 6.59956 20H2.04956C1.80193 19.9968 1.56535 19.8969 1.39023 19.7218C1.21511 19.5467 1.1153 19.3101 1.11206 19.0625V12.2H0.949652C0.824431 12.2017 0.700142 12.1783 0.584123 12.1311C0.468104 12.084 0.362708 12.014 0.274155 11.9255C0.185602 11.8369 0.115689 11.7315 0.0685419 11.6155C0.0213952 11.4995 -0.00202913 11.3752 -0.00034808 11.25V3.75C-0.00900498 3.62067 0.0092504 3.49095 0.0532651 3.36904C0.0972798 3.24712 0.166097 3.13566 0.255372 3.04168C0.344646 2.94771 0.452437 2.87327 0.571937 2.82307C0.691437 2.77286 0.82005 2.74798 0.949652 2.75H8.04965L11.8747 0.1625C12.031 0.0603649 12.2129 0.00407221 12.3997 0H15.6622C15.9098 0.00323746 16.1464 0.103049 16.3215 0.278167C16.4966 0.453286 16.5964 0.689866 16.5997 0.9375V3.25269C17.3969 3.42959 18.1345 3.83026 18.7211 4.41679C19.5322 5.22788 19.9878 6.32796 19.9878 7.47502C19.9878 8.62209 19.5322 9.72217 18.7211 10.5333C18.1345 11.1198 17.3969 11.5205 16.5997 11.6974V14.0125C16.6047 14.1393 16.5842 14.2659 16.5395 14.3847C16.4948 14.5035 16.4268 14.6121 16.3394 14.7042C16.252 14.7962 16.147 14.8698 16.0307 14.9206C15.9144 14.9714 15.7891 14.9984 15.6622 15ZM1.89695 10.325H1.88715V4.625H8.33715C8.52423 4.62301 8.70666 4.56654 8.86215 4.4625L12.6872 1.875H14.7247V13.125H12.6872L8.86215 10.4875C8.70666 10.3835 8.52423 10.327 8.33715 10.325H2.20217C2.15205 10.3167 2.10102 10.3125 2.04956 10.3125C1.9981 10.3125 1.94708 10.3167 1.89695 10.325ZM2.98706 12.2V18.1625H5.66206V12.2H2.98706ZM16.5997 9.93612V5.01393C16.6536 5.02355 16.7072 5.03495 16.7605 5.04814C17.1202 5.13709 17.4556 5.30487 17.7425 5.53934C18.0293 5.77381 18.2605 6.06912 18.4192 6.40389C18.578 6.73866 18.6603 7.10452 18.6603 7.47502C18.6603 7.84552 18.578 8.21139 18.4192 8.54616C18.2605 8.88093 18.0293 9.17624 17.7425 9.41071C17.4556 9.64518 17.1202 9.81296 16.7605 9.90191C16.7072 9.91509 16.6536 9.9265 16.5997 9.93612Z",
                        })),
                        o.appendChild(s).appendChild(a),
                        (l = i("defs")),
                        (c = D(i("clipPath"), { id: "clip0_57_80" })),
                        (p = D(i("rect"), {
                          width: "20",
                          height: "20",
                          fill: "white",
                        })),
                        c.appendChild(p),
                        l.appendChild(c),
                        o.appendChild(l).appendChild(c).appendChild(p),
                        o),
                      ),
                      e)
                    ) {
                      let t = d.createElement("span");
                      t.appendChild(d.createTextNode(e)), m.appendChild(t);
                    }
                    let g =
                      (((f = d.createElement("style")).textContent = `
.widget__actor {
  position: fixed;
  z-index: var(--z-index);
  margin: var(--page-margin);
  inset: var(--actor-inset);

  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px;

  font-family: inherit;
  font-size: var(--font-size);
  font-weight: 600;
  line-height: 1.14em;
  text-decoration: none;

  background: var(--actor-background, var(--background));
  border-radius: var(--actor-border-radius, 1.7em/50%);
  border: var(--actor-border, var(--border));
  box-shadow: var(--actor-box-shadow, var(--box-shadow));
  color: var(--actor-color, var(--foreground));
  fill: var(--actor-color, var(--foreground));
  cursor: pointer;
  opacity: 1;
  transition: transform 0.2s ease-in-out;
  transform: translate(0, 0) scale(1);
}
.widget__actor[aria-hidden="true"] {
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
  transform: translate(0, 16px) scale(0.98);
}

.widget__actor:hover {
  background: var(--actor-hover-background, var(--background));
  filter: var(--interactive-filter);
}

.widget__actor svg {
  width: 1.14em;
  height: 1.14em;
}

@media (max-width: 600px) {
  .widget__actor span {
    display: none;
  }
}
`),
                      r && f.setAttribute("nonce", r),
                      f);
                    return {
                      el: m,
                      appendToDom() {
                        n.appendChild(g), n.appendChild(m);
                      },
                      removeFromDom() {
                        n.removeChild(m), n.removeChild(g);
                      },
                      show() {
                        m.ariaHidden = "false";
                      },
                      hide() {
                        m.ariaHidden = "true";
                      },
                    };
                  })({
                    triggerLabel: t.triggerLabel,
                    triggerAriaLabel: t.triggerAriaLabel,
                    shadow: n,
                    styleNonce: B,
                  });
                return (
                  ev(r.el, {
                    ...t,
                    onFormOpen() {
                      r.hide();
                    },
                    onFormClose() {
                      r.show();
                    },
                    onFormSubmitted() {
                      r.show();
                    },
                  }),
                  r
                );
              };
            return {
              name: "Feedback",
              setupOnce() {
                (0, c.B)() &&
                  eh.autoInject &&
                  ("loading" === d.readyState
                    ? d.addEventListener("DOMContentLoaded", () =>
                        ey().appendToDom(),
                      )
                    : ey().appendToDom());
              },
              attachTo: ev,
              createWidget(e = {}) {
                let t = ey(O(eh, e));
                return t.appendToDom(), t;
              },
              createForm: async (e = {}) => e_(O(eh, e)),
              remove() {
                ef &&
                  (ef.parentElement && ef.parentElement.remove(), (ef = null)),
                  em.forEach((e) => e()),
                  (em = []);
              },
            };
          };
        function F() {
          let e = (0, i.KU)();
          return e && e.getIntegrationByName("Feedback");
        }
        var j,
          $,
          U,
          B,
          z,
          H,
          q,
          W = {},
          K = [],
          X =
            /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
          V = Array.isArray;
        function G(e, t) {
          for (var n in t) e[n] = t[n];
          return e;
        }
        function J(e) {
          var t = e.parentNode;
          t && t.removeChild(e);
        }
        function Y(e, t, n) {
          var r,
            i,
            o,
            s = {};
          for (o in t)
            "key" == o ? (r = t[o]) : "ref" == o ? (i = t[o]) : (s[o] = t[o]);
          if (
            (arguments.length > 2 &&
              (s.children = arguments.length > 3 ? j.call(arguments, 2) : n),
            "function" == typeof e && null != e.defaultProps)
          )
            for (o in e.defaultProps)
              void 0 === s[o] && (s[o] = e.defaultProps[o]);
          return Q(e, s, r, i, null);
        }
        function Q(e, t, n, r, i) {
          var o = {
            type: e,
            props: t,
            key: n,
            ref: r,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __d: void 0,
            __c: null,
            constructor: void 0,
            __v: null == i ? ++U : i,
            __i: -1,
            __u: 0,
          };
          return null == i && null != $.vnode && $.vnode(o), o;
        }
        function Z(e) {
          return e.children;
        }
        function ee(e, t) {
          (this.props = e), (this.context = t);
        }
        function et(e, t) {
          if (null == t) return e.__ ? et(e.__, e.__i + 1) : null;
          for (var n; t < e.__k.length; t++)
            if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
          return "function" == typeof e.type ? et(e) : null;
        }
        function en(e) {
          ((!e.__d && (e.__d = !0) && B.push(e) && !er.__r++) ||
            z !== $.debounceRendering) &&
            ((z = $.debounceRendering) || H)(er);
        }
        function er() {
          var e,
            t,
            n,
            r = [],
            i = [];
          for (B.sort(q); (e = B.shift()); )
            e.__d &&
              ((n = B.length),
              (t =
                (function (e, t, n) {
                  var r,
                    i = e.__v,
                    o = i.__e,
                    s = e.__P;
                  if (s)
                    return (
                      ((r = G({}, i)).__v = i.__v + 1),
                      $.vnode && $.vnode(r),
                      ec(
                        s,
                        r,
                        i,
                        e.__n,
                        void 0 !== s.ownerSVGElement,
                        32 & i.__u ? [o] : null,
                        t,
                        null == o ? et(i) : o,
                        !!(32 & i.__u),
                        n,
                      ),
                      (r.__.__k[r.__i] = r),
                      (r.__d = void 0),
                      r.__e != o &&
                        (function e(t) {
                          var n, r;
                          if (null != (t = t.__) && null != t.__c) {
                            for (
                              t.__e = t.__c.base = null, n = 0;
                              n < t.__k.length;
                              n++
                            )
                              if (null != (r = t.__k[n]) && null != r.__e) {
                                t.__e = t.__c.base = r.__e;
                                break;
                              }
                            return e(t);
                          }
                        })(r),
                      r
                    );
                })(e, r, i) || t),
              0 === n || B.length > n
                ? (eu(r, t, i),
                  (i.length = r.length = 0),
                  (t = void 0),
                  B.sort(q))
                : t && $.__c && $.__c(t, K));
          t && eu(r, t, i), (er.__r = 0);
        }
        function ei(e, t, n, r, i, o, s, a, l, c, u) {
          var d,
            p,
            h,
            f,
            m,
            g = (r && r.__k) || K,
            _ = t.length;
          for (
            n.__d = l,
              (function (e, t, n) {
                var r,
                  i,
                  o,
                  s,
                  a,
                  l = t.length,
                  c = n.length,
                  u = c,
                  d = 0;
                for (e.__k = [], r = 0; r < l; r++)
                  null !=
                  (i = e.__k[r] =
                    null == (i = t[r]) ||
                    "boolean" == typeof i ||
                    "function" == typeof i
                      ? null
                      : "string" == typeof i ||
                          "number" == typeof i ||
                          "bigint" == typeof i ||
                          i.constructor == String
                        ? Q(null, i, null, null, i)
                        : V(i)
                          ? Q(Z, { children: i }, null, null, null)
                          : void 0 === i.constructor && i.__b > 0
                            ? Q(
                                i.type,
                                i.props,
                                i.key,
                                i.ref ? i.ref : null,
                                i.__v,
                              )
                            : i)
                    ? ((i.__ = e),
                      (i.__b = e.__b + 1),
                      (a = (function (e, t, n, r) {
                        var i = e.key,
                          o = e.type,
                          s = n - 1,
                          a = n + 1,
                          l = t[n];
                        if (null === l || (l && i == l.key && o === l.type))
                          return n;
                        if (r > +(null != l && 0 == (131072 & l.__u)))
                          for (; s >= 0 || a < t.length; ) {
                            if (s >= 0) {
                              if (
                                (l = t[s]) &&
                                0 == (131072 & l.__u) &&
                                i == l.key &&
                                o === l.type
                              )
                                return s;
                              s--;
                            }
                            if (a < t.length) {
                              if (
                                (l = t[a]) &&
                                0 == (131072 & l.__u) &&
                                i == l.key &&
                                o === l.type
                              )
                                return a;
                              a++;
                            }
                          }
                        return -1;
                      })(i, n, (s = r + d), u)),
                      (i.__i = a),
                      (o = null),
                      -1 !== a && (u--, (o = n[a]) && (o.__u |= 131072)),
                      null == o || null === o.__v
                        ? (-1 == a && d--,
                          "function" != typeof i.type && (i.__u |= 65536))
                        : a !== s &&
                          (a === s + 1
                            ? d++
                            : a > s
                              ? u > l - s
                                ? (d += a - s)
                                : d--
                              : (d = a < s && a == s - 1 ? a - s : 0),
                          a !== r + d && (i.__u |= 65536)))
                    : (o = n[r]) &&
                      null == o.key &&
                      o.__e &&
                      (o.__e == e.__d && (e.__d = et(o)),
                      ep(o, o, !1),
                      (n[r] = null),
                      u--);
                if (u)
                  for (r = 0; r < c; r++)
                    null != (o = n[r]) &&
                      0 == (131072 & o.__u) &&
                      (o.__e == e.__d && (e.__d = et(o)), ep(o, o));
              })(n, t, g),
              l = n.__d,
              d = 0;
            d < _;
            d++
          )
            null != (h = n.__k[d]) &&
              "boolean" != typeof h &&
              "function" != typeof h &&
              ((p = -1 === h.__i ? W : g[h.__i] || W),
              (h.__i = d),
              ec(e, h, p, i, o, s, a, l, c, u),
              (f = h.__e),
              h.ref &&
                p.ref != h.ref &&
                (p.ref && ed(p.ref, null, h), u.push(h.ref, h.__c || f, h)),
              null == m && null != f && (m = f),
              65536 & h.__u || p.__k === h.__k
                ? (l = (function e(t, n, r) {
                    var i, o;
                    if ("function" == typeof t.type) {
                      for (i = t.__k, o = 0; i && o < i.length; o++)
                        i[o] && ((i[o].__ = t), (n = e(i[o], n, r)));
                      return n;
                    }
                    t.__e != n &&
                      (r.insertBefore(t.__e, n || null), (n = t.__e));
                    do n = n && n.nextSibling;
                    while (null != n && 8 === n.nodeType);
                    return n;
                  })(h, l, e))
                : "function" == typeof h.type && void 0 !== h.__d
                  ? (l = h.__d)
                  : f && (l = f.nextSibling),
              (h.__d = void 0),
              (h.__u &= -196609));
          (n.__d = l), (n.__e = m);
        }
        function eo(e, t, n) {
          "-" === t[0]
            ? e.setProperty(t, null == n ? "" : n)
            : (e[t] =
                null == n
                  ? ""
                  : "number" != typeof n || X.test(t)
                    ? n
                    : n + "px");
        }
        function es(e, t, n, r, i) {
          var o;
          e: if ("style" === t)
            if ("string" == typeof n) e.style.cssText = n;
            else {
              if (("string" == typeof r && (e.style.cssText = r = ""), r))
                for (t in r) (n && t in n) || eo(e.style, t, "");
              if (n) for (t in n) (r && n[t] === r[t]) || eo(e.style, t, n[t]);
            }
          else if ("o" === t[0] && "n" === t[1])
            (o = t !== (t = t.replace(/(PointerCapture)$|Capture$/i, "$1"))),
              (t =
                t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2)),
              e.l || (e.l = {}),
              (e.l[t + o] = n),
              n
                ? r
                  ? (n.u = r.u)
                  : ((n.u = Date.now()), e.addEventListener(t, o ? el : ea, o))
                : e.removeEventListener(t, o ? el : ea, o);
          else {
            if (i) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
            else if (
              "width" !== t &&
              "height" !== t &&
              "href" !== t &&
              "list" !== t &&
              "form" !== t &&
              "tabIndex" !== t &&
              "download" !== t &&
              "rowSpan" !== t &&
              "colSpan" !== t &&
              "role" !== t &&
              t in e
            )
              try {
                e[t] = null == n ? "" : n;
                break e;
              } catch (e) {}
            "function" == typeof n ||
              (null == n || (!1 === n && "-" !== t[4])
                ? e.removeAttribute(t)
                : e.setAttribute(t, n));
          }
        }
        function ea(e) {
          if (this.l) {
            var t = this.l[e.type + !1];
            if (e.t) {
              if (e.t <= t.u) return;
            } else e.t = Date.now();
            return t($.event ? $.event(e) : e);
          }
        }
        function el(e) {
          if (this.l) return this.l[e.type + !0]($.event ? $.event(e) : e);
        }
        function ec(e, t, n, r, i, o, s, a, l, c) {
          var u,
            d,
            p,
            h,
            f,
            m,
            g,
            _,
            v,
            y,
            b,
            S,
            w,
            E,
            k,
            x = t.type;
          if (void 0 !== t.constructor) return null;
          128 & n.__u && ((l = !!(32 & n.__u)), (o = [(a = t.__e = n.__e)])),
            (u = $.__b) && u(t);
          e: if ("function" == typeof x)
            try {
              if (
                ((_ = t.props),
                (v = (u = x.contextType) && r[u.__c]),
                (y = u ? (v ? v.props.value : u.__) : r),
                n.__c
                  ? (g = (d = t.__c = n.__c).__ = d.__E)
                  : ("prototype" in x && x.prototype.render
                      ? (t.__c = d = new x(_, y))
                      : ((t.__c = d = new ee(_, y)),
                        (d.constructor = x),
                        (d.render = eh)),
                    v && v.sub(d),
                    (d.props = _),
                    d.state || (d.state = {}),
                    (d.context = y),
                    (d.__n = r),
                    (p = d.__d = !0),
                    (d.__h = []),
                    (d._sb = [])),
                null == d.__s && (d.__s = d.state),
                null != x.getDerivedStateFromProps &&
                  (d.__s == d.state && (d.__s = G({}, d.__s)),
                  G(d.__s, x.getDerivedStateFromProps(_, d.__s))),
                (h = d.props),
                (f = d.state),
                (d.__v = t),
                p)
              )
                null == x.getDerivedStateFromProps &&
                  null != d.componentWillMount &&
                  d.componentWillMount(),
                  null != d.componentDidMount &&
                    d.__h.push(d.componentDidMount);
              else {
                if (
                  (null == x.getDerivedStateFromProps &&
                    _ !== h &&
                    null != d.componentWillReceiveProps &&
                    d.componentWillReceiveProps(_, y),
                  !d.__e &&
                    ((null != d.shouldComponentUpdate &&
                      !1 === d.shouldComponentUpdate(_, d.__s, y)) ||
                      t.__v === n.__v))
                ) {
                  for (
                    t.__v !== n.__v &&
                      ((d.props = _), (d.state = d.__s), (d.__d = !1)),
                      t.__e = n.__e,
                      t.__k = n.__k,
                      t.__k.forEach(function (e) {
                        e && (e.__ = t);
                      }),
                      b = 0;
                    b < d._sb.length;
                    b++
                  )
                    d.__h.push(d._sb[b]);
                  (d._sb = []), d.__h.length && s.push(d);
                  break e;
                }
                null != d.componentWillUpdate &&
                  d.componentWillUpdate(_, d.__s, y),
                  null != d.componentDidUpdate &&
                    d.__h.push(function () {
                      d.componentDidUpdate(h, f, m);
                    });
              }
              if (
                ((d.context = y),
                (d.props = _),
                (d.__P = e),
                (d.__e = !1),
                (S = $.__r),
                (w = 0),
                "prototype" in x && x.prototype.render)
              ) {
                for (
                  d.state = d.__s,
                    d.__d = !1,
                    S && S(t),
                    u = d.render(d.props, d.state, d.context),
                    E = 0;
                  E < d._sb.length;
                  E++
                )
                  d.__h.push(d._sb[E]);
                d._sb = [];
              } else
                do
                  (d.__d = !1),
                    S && S(t),
                    (u = d.render(d.props, d.state, d.context)),
                    (d.state = d.__s);
                while (d.__d && ++w < 25);
              (d.state = d.__s),
                null != d.getChildContext &&
                  (r = G(G({}, r), d.getChildContext())),
                p ||
                  null == d.getSnapshotBeforeUpdate ||
                  (m = d.getSnapshotBeforeUpdate(h, f)),
                ei(
                  e,
                  V(
                    (k =
                      null != u && u.type === Z && null == u.key
                        ? u.props.children
                        : u),
                  )
                    ? k
                    : [k],
                  t,
                  n,
                  r,
                  i,
                  o,
                  s,
                  a,
                  l,
                  c,
                ),
                (d.base = t.__e),
                (t.__u &= -161),
                d.__h.length && s.push(d),
                g && (d.__E = d.__ = null);
            } catch (e) {
              (t.__v = null),
                l || null != o
                  ? ((t.__e = a),
                    (t.__u |= l ? 160 : 32),
                    (o[o.indexOf(a)] = null))
                  : ((t.__e = n.__e), (t.__k = n.__k)),
                $.__e(e, t, n);
            }
          else
            null == o && t.__v === n.__v
              ? ((t.__k = n.__k), (t.__e = n.__e))
              : (t.__e = (function (e, t, n, r, i, o, s, a, l) {
                  var c,
                    u,
                    d,
                    p,
                    h,
                    f,
                    m,
                    g = n.props,
                    _ = t.props,
                    v = t.type;
                  if (("svg" === v && (i = !0), null != o)) {
                    for (c = 0; c < o.length; c++)
                      if (
                        (h = o[c]) &&
                        "setAttribute" in h == !!v &&
                        (v ? h.localName === v : 3 === h.nodeType)
                      ) {
                        (e = h), (o[c] = null);
                        break;
                      }
                  }
                  if (null == e) {
                    if (null === v) return document.createTextNode(_);
                    (e = i
                      ? document.createElementNS(
                          "http://www.w3.org/2000/svg",
                          v,
                        )
                      : document.createElement(v, _.is && _)),
                      (o = null),
                      (a = !1);
                  }
                  if (null === v)
                    g === _ || (a && e.data === _) || (e.data = _);
                  else {
                    if (
                      ((o = o && j.call(e.childNodes)),
                      (g = n.props || W),
                      !a && null != o)
                    )
                      for (g = {}, c = 0; c < e.attributes.length; c++)
                        g[(h = e.attributes[c]).name] = h.value;
                    for (c in g)
                      (h = g[c]),
                        "children" == c ||
                          ("dangerouslySetInnerHTML" == c
                            ? (d = h)
                            : "key" === c || c in _ || es(e, c, null, h, i));
                    for (c in _)
                      (h = _[c]),
                        "children" == c
                          ? (p = h)
                          : "dangerouslySetInnerHTML" == c
                            ? (u = h)
                            : "value" == c
                              ? (f = h)
                              : "checked" == c
                                ? (m = h)
                                : "key" === c ||
                                  (a && "function" != typeof h) ||
                                  g[c] === h ||
                                  es(e, c, h, g[c], i);
                    if (u)
                      a ||
                        (d &&
                          (u.__html === d.__html ||
                            u.__html === e.innerHTML)) ||
                        (e.innerHTML = u.__html),
                        (t.__k = []);
                    else if (
                      (d && (e.innerHTML = ""),
                      ei(
                        e,
                        V(p) ? p : [p],
                        t,
                        n,
                        r,
                        i && "foreignObject" !== v,
                        o,
                        s,
                        o ? o[0] : n.__k && et(n, 0),
                        a,
                        l,
                      ),
                      null != o)
                    )
                      for (c = o.length; c--; ) null != o[c] && J(o[c]);
                    a ||
                      ((c = "value"),
                      void 0 === f ||
                        (f === e[c] &&
                          ("progress" !== v || f) &&
                          ("option" !== v || f === g[c])) ||
                        es(e, c, f, g[c], !1),
                      (c = "checked"),
                      void 0 !== m && m !== e[c] && es(e, c, m, g[c], !1));
                  }
                  return e;
                })(n.__e, t, n, r, i, o, s, l, c));
          (u = $.diffed) && u(t);
        }
        function eu(e, t, n) {
          for (var r = 0; r < n.length; r++) ed(n[r], n[++r], n[++r]);
          $.__c && $.__c(t, e),
            e.some(function (t) {
              try {
                (e = t.__h),
                  (t.__h = []),
                  e.some(function (e) {
                    e.call(t);
                  });
              } catch (e) {
                $.__e(e, t.__v);
              }
            });
        }
        function ed(e, t, n) {
          try {
            "function" == typeof e ? e(t) : (e.current = t);
          } catch (e) {
            $.__e(e, n);
          }
        }
        function ep(e, t, n) {
          var r, i;
          if (
            ($.unmount && $.unmount(e),
            (r = e.ref) &&
              ((r.current && r.current !== e.__e) || ed(r, null, t)),
            null != (r = e.__c))
          ) {
            if (r.componentWillUnmount)
              try {
                r.componentWillUnmount();
              } catch (e) {
                $.__e(e, t);
              }
            (r.base = r.__P = null), (e.__c = void 0);
          }
          if ((r = e.__k))
            for (i = 0; i < r.length; i++)
              r[i] && ep(r[i], t, n || "function" != typeof e.type);
          n || null == e.__e || J(e.__e), (e.__ = e.__e = e.__d = void 0);
        }
        function eh(e, t, n) {
          return this.constructor(e, n);
        }
        (j = K.slice),
          ($ = {
            __e: function (e, t, n, r) {
              for (var i, o, s; (t = t.__); )
                if ((i = t.__c) && !i.__)
                  try {
                    if (
                      ((o = i.constructor) &&
                        null != o.getDerivedStateFromError &&
                        (i.setState(o.getDerivedStateFromError(e)),
                        (s = i.__d)),
                      null != i.componentDidCatch &&
                        (i.componentDidCatch(e, r || {}), (s = i.__d)),
                      s)
                    )
                      return (i.__E = i);
                  } catch (t) {
                    e = t;
                  }
              throw e;
            },
          }),
          (U = 0),
          (ee.prototype.setState = function (e, t) {
            var n;
            (n =
              null != this.__s && this.__s !== this.state
                ? this.__s
                : (this.__s = G({}, this.state))),
              "function" == typeof e && (e = e(G({}, n), this.props)),
              e && G(n, e),
              null != e && this.__v && (t && this._sb.push(t), en(this));
          }),
          (ee.prototype.forceUpdate = function (e) {
            this.__v && ((this.__e = !0), e && this.__h.push(e), en(this));
          }),
          (ee.prototype.render = Z),
          (B = []),
          (H =
            "function" == typeof Promise
              ? Promise.prototype.then.bind(Promise.resolve())
              : setTimeout),
          (q = function (e, t) {
            return e.__v.__b - t.__v.__b;
          }),
          (er.__r = 0);
        var ef,
          em,
          eg,
          e_,
          ev = 0,
          ey = [],
          eb = [],
          eS = $,
          ew = eS.__b,
          eE = eS.__r,
          ek = eS.diffed,
          ex = eS.__c,
          eC = eS.unmount,
          eT = eS.__;
        function eI(e, t) {
          eS.__h && eS.__h(em, e, ev || t), (ev = 0);
          var n = em.__H || (em.__H = { __: [], __h: [] });
          return e >= n.__.length && n.__.push({ __V: eb }), n.__[e];
        }
        function eM(e) {
          return (ev = 1), eO(e$, e);
        }
        function eO(e, t, n) {
          var r = eI(ef++, 2);
          if (
            ((r.t = e),
            !r.__c &&
              ((r.__ = [
                n ? n(t) : e$(void 0, t),
                function (e) {
                  var t = r.__N ? r.__N[0] : r.__[0],
                    n = r.t(t, e);
                  t !== n && ((r.__N = [n, r.__[1]]), r.__c.setState({}));
                },
              ]),
              (r.__c = em),
              !em.u))
          ) {
            var i = function (e, t, n) {
              if (!r.__c.__H) return !0;
              var i = r.__c.__H.__.filter(function (e) {
                return !!e.__c;
              });
              if (
                i.every(function (e) {
                  return !e.__N;
                })
              )
                return !o || o.call(this, e, t, n);
              var s = !1;
              return (
                i.forEach(function (e) {
                  if (e.__N) {
                    var t = e.__[0];
                    (e.__ = e.__N), (e.__N = void 0), t !== e.__[0] && (s = !0);
                  }
                }),
                !(!s && r.__c.props === e) && (!o || o.call(this, e, t, n))
              );
            };
            em.u = !0;
            var o = em.shouldComponentUpdate,
              s = em.componentWillUpdate;
            (em.componentWillUpdate = function (e, t, n) {
              if (this.__e) {
                var r = o;
                (o = void 0), i(e, t, n), (o = r);
              }
              s && s.call(this, e, t, n);
            }),
              (em.shouldComponentUpdate = i);
          }
          return r.__N || r.__;
        }
        function eD(e, t) {
          var n = eI(ef++, 4);
          !eS.__s && ej(n.__H, t) && ((n.__ = e), (n.i = t), em.__h.push(n));
        }
        function eR(e, t) {
          var n = eI(ef++, 7);
          return ej(n.__H, t)
            ? ((n.__V = e()), (n.i = t), (n.__h = e), n.__V)
            : n.__;
        }
        function eA(e, t) {
          return (
            (ev = 8),
            eR(function () {
              return e;
            }, t)
          );
        }
        function eN() {
          for (var e; (e = ey.shift()); )
            if (e.__P && e.__H)
              try {
                e.__H.__h.forEach(eP), e.__H.__h.forEach(eF), (e.__H.__h = []);
              } catch (t) {
                (e.__H.__h = []), eS.__e(t, e.__v);
              }
        }
        (eS.__b = function (e) {
          (em = null), ew && ew(e);
        }),
          (eS.__ = function (e, t) {
            t.__k && t.__k.__m && (e.__m = t.__k.__m), eT && eT(e, t);
          }),
          (eS.__r = function (e) {
            eE && eE(e), (ef = 0);
            var t = (em = e.__c).__H;
            t &&
              (eg === em
                ? ((t.__h = []),
                  (em.__h = []),
                  t.__.forEach(function (e) {
                    e.__N && (e.__ = e.__N),
                      (e.__V = eb),
                      (e.__N = e.i = void 0);
                  }))
                : (t.__h.forEach(eP),
                  t.__h.forEach(eF),
                  (t.__h = []),
                  (ef = 0))),
              (eg = em);
          }),
          (eS.diffed = function (e) {
            ek && ek(e);
            var t = e.__c;
            t &&
              t.__H &&
              (t.__H.__h.length &&
                ((1 !== ey.push(t) && e_ === eS.requestAnimationFrame) ||
                  (
                    (e_ = eS.requestAnimationFrame) ||
                    function (e) {
                      var t,
                        n = function () {
                          clearTimeout(r),
                            eL && cancelAnimationFrame(t),
                            setTimeout(e);
                        },
                        r = setTimeout(n, 100);
                      eL && (t = requestAnimationFrame(n));
                    }
                  )(eN)),
              t.__H.__.forEach(function (e) {
                e.i && (e.__H = e.i),
                  e.__V !== eb && (e.__ = e.__V),
                  (e.i = void 0),
                  (e.__V = eb);
              })),
              (eg = em = null);
          }),
          (eS.__c = function (e, t) {
            t.some(function (e) {
              try {
                e.__h.forEach(eP),
                  (e.__h = e.__h.filter(function (e) {
                    return !e.__ || eF(e);
                  }));
              } catch (n) {
                t.some(function (e) {
                  e.__h && (e.__h = []);
                }),
                  (t = []),
                  eS.__e(n, e.__v);
              }
            }),
              ex && ex(e, t);
          }),
          (eS.unmount = function (e) {
            eC && eC(e);
            var t,
              n = e.__c;
            n &&
              n.__H &&
              (n.__H.__.forEach(function (e) {
                try {
                  eP(e);
                } catch (e) {
                  t = e;
                }
              }),
              (n.__H = void 0),
              t && eS.__e(t, n.__v));
          });
        var eL = "function" == typeof requestAnimationFrame;
        function eP(e) {
          var t = em,
            n = e.__c;
          "function" == typeof n && ((e.__c = void 0), n()), (em = t);
        }
        function eF(e) {
          var t = em;
          (e.__c = e.__()), (em = t);
        }
        function ej(e, t) {
          return (
            !e ||
            e.length !== t.length ||
            t.some(function (t, n) {
              return t !== e[n];
            })
          );
        }
        function e$(e, t) {
          return "function" == typeof t ? t(e) : t;
        }
        let eU = {
          __proto__: null,
          useCallback: eA,
          useContext: function (e) {
            var t = em.context[e.__c],
              n = eI(ef++, 9);
            return (
              (n.c = e),
              t
                ? (null == n.__ && ((n.__ = !0), t.sub(em)), t.props.value)
                : e.__
            );
          },
          useDebugValue: function (e, t) {
            eS.useDebugValue && eS.useDebugValue(t ? t(e) : e);
          },
          useEffect: function (e, t) {
            var n = eI(ef++, 3);
            !eS.__s &&
              ej(n.__H, t) &&
              ((n.__ = e), (n.i = t), em.__H.__h.push(n));
          },
          useErrorBoundary: function (e) {
            var t = eI(ef++, 10),
              n = eM();
            return (
              (t.__ = e),
              em.componentDidCatch ||
                (em.componentDidCatch = function (e, r) {
                  t.__ && t.__(e, r), n[1](e);
                }),
              [
                n[0],
                function () {
                  n[1](void 0);
                },
              ]
            );
          },
          useId: function () {
            var e = eI(ef++, 11);
            if (!e.__) {
              for (var t = em.__v; null !== t && !t.__m && null !== t.__; )
                t = t.__;
              var n = t.__m || (t.__m = [0, 0]);
              e.__ = "P" + n[0] + "-" + n[1]++;
            }
            return e.__;
          },
          useImperativeHandle: function (e, t, n) {
            (ev = 6),
              eD(
                function () {
                  return "function" == typeof e
                    ? (e(t()),
                      function () {
                        return e(null);
                      })
                    : e
                      ? ((e.current = t()),
                        function () {
                          return (e.current = null);
                        })
                      : void 0;
                },
                null == n ? n : n.concat(e),
              );
          },
          useLayoutEffect: eD,
          useMemo: eR,
          useReducer: eO,
          useRef: function (e) {
            return (
              (ev = 5),
              eR(function () {
                return { current: e };
              }, [])
            );
          },
          useState: eM,
        };
        function eB({ options: e }) {
          let t = eR(() => {
            let e, t;
            return {
              __html: ((e = D(
                d.createElementNS("http://www.w3.org/2000/svg", "svg"),
                {
                  width: "32",
                  height: "30",
                  viewBox: "0 0 72 66",
                  fill: "inherit",
                },
              )),
              (t = D(d.createElementNS("http://www.w3.org/2000/svg", "path"), {
                transform: "translate(11, 11)",
                d: "M29,2.26a4.67,4.67,0,0,0-8,0L14.42,13.53A32.21,32.21,0,0,1,32.17,40.19H27.55A27.68,27.68,0,0,0,12.09,17.47L6,28a15.92,15.92,0,0,1,9.23,12.17H4.62A.76.76,0,0,1,4,39.06l2.94-5a10.74,10.74,0,0,0-3.36-1.9l-2.91,5a4.54,4.54,0,0,0,1.69,6.24A4.66,4.66,0,0,0,4.62,44H19.15a19.4,19.4,0,0,0-8-17.31l2.31-4A23.87,23.87,0,0,1,23.76,44H36.07a35.88,35.88,0,0,0-16.41-31.8l4.67-8a.77.77,0,0,1,1.05-.27c.53.29,20.29,34.77,20.66,35.17a.76.76,0,0,1-.68,1.13H40.6q.09,1.91,0,3.81h4.78A4.59,4.59,0,0,0,50,39.43a4.49,4.49,0,0,0-.62-2.28Z",
              })),
              e.appendChild(t),
              e).outerHTML,
            };
          }, []);
          return Y(
            "h2",
            { class: "dialog__header" },
            Y("span", { class: "dialog__title" }, e.formTitle),
            e.showBranding
              ? Y("a", {
                  class: "brand-link",
                  target: "_blank",
                  href: "https://sentry.io/welcome/",
                  title: "Powered by Sentry",
                  rel: "noopener noreferrer",
                  dangerouslySetInnerHTML: t,
                })
              : null,
          );
        }
        function ez(e, t) {
          let n = e.get(t);
          return "string" == typeof n ? n.trim() : "";
        }
        function eH({
          options: e,
          defaultEmail: t,
          defaultName: n,
          onFormClose: r,
          onSubmit: i,
          onSubmitSuccess: o,
          onSubmitError: s,
          showEmail: a,
          showName: c,
          screenshotInput: u,
        }) {
          let {
              tags: d,
              addScreenshotButtonLabel: p,
              removeScreenshotButtonLabel: h,
              cancelButtonLabel: f,
              emailLabel: m,
              emailPlaceholder: g,
              isEmailRequired: _,
              isNameRequired: v,
              messageLabel: y,
              messagePlaceholder: b,
              nameLabel: S,
              namePlaceholder: w,
              submitButtonLabel: E,
              isRequiredLabel: k,
            } = e,
            [x, C] = eM(null),
            [T, I] = eM(!1),
            O = u && u.input,
            [D, R] = eM(null),
            A = eA((e) => {
              R(e), I(!1);
            }, []),
            N = eA(
              (e) => {
                var t;
                let n,
                  r =
                    ((n = []),
                    (t = {
                      emailLabel: m,
                      isEmailRequired: _,
                      isNameRequired: v,
                      messageLabel: y,
                      nameLabel: S,
                    }).isNameRequired &&
                      !e.name &&
                      n.push(t.nameLabel),
                    t.isEmailRequired && !e.email && n.push(t.emailLabel),
                    e.message || n.push(t.messageLabel),
                    n);
                return (
                  r.length > 0
                    ? C(
                        `Please enter in the following required fields: ${r.join(", ")}`,
                      )
                    : C(null),
                  0 === r.length
                );
              },
              [m, _, v, y, S],
            );
          return Y(
            "form",
            {
              class: "form",
              onSubmit: eA(
                async (e) => {
                  try {
                    if (
                      (e.preventDefault(),
                      !(e.target instanceof HTMLFormElement))
                    )
                      return;
                    let t = new FormData(e.target),
                      n = await (u && T ? u.value() : void 0),
                      r = {
                        name: ez(t, "name"),
                        email: ez(t, "email"),
                        message: ez(t, "message"),
                        attachments: n ? [n] : void 0,
                      };
                    if (!N(r)) return;
                    try {
                      await i(
                        {
                          name: r.name,
                          email: r.email,
                          message: r.message,
                          source: "widget",
                          tags: d,
                        },
                        { attachments: r.attachments },
                      ),
                        o(r);
                    } catch (e) {
                      M && l.vF.error(e), C(e), s(e);
                    }
                  } catch (e) {}
                },
                [u && T, o, s],
              ),
            },
            O && T ? Y(O, { onError: A }) : null,
            Y(
              "div",
              { class: "form__right", "data-sentry-feedback": !0 },
              Y(
                "div",
                { class: "form__top" },
                x ? Y("div", { class: "form__error-container" }, x) : null,
                c
                  ? Y(
                      "label",
                      { for: "name", class: "form__label" },
                      Y(eq, { label: S, isRequiredLabel: k, isRequired: v }),
                      Y("input", {
                        class: "form__input",
                        defaultValue: n,
                        id: "name",
                        name: "name",
                        placeholder: w,
                        required: v,
                        type: "text",
                      }),
                    )
                  : Y("input", {
                      "aria-hidden": !0,
                      value: n,
                      name: "name",
                      type: "hidden",
                    }),
                a
                  ? Y(
                      "label",
                      { for: "email", class: "form__label" },
                      Y(eq, { label: m, isRequiredLabel: k, isRequired: _ }),
                      Y("input", {
                        class: "form__input",
                        defaultValue: t,
                        id: "email",
                        name: "email",
                        placeholder: g,
                        required: _,
                        type: "email",
                      }),
                    )
                  : Y("input", {
                      "aria-hidden": !0,
                      value: t,
                      name: "email",
                      type: "hidden",
                    }),
                Y(
                  "label",
                  { for: "message", class: "form__label" },
                  Y(eq, { label: y, isRequiredLabel: k, isRequired: !0 }),
                  Y("textarea", {
                    autoFocus: !0,
                    class: "form__input form__input--textarea",
                    id: "message",
                    name: "message",
                    placeholder: b,
                    required: !0,
                    rows: 5,
                  }),
                ),
                O
                  ? Y(
                      "label",
                      { for: "screenshot", class: "form__label" },
                      Y(
                        "button",
                        {
                          class: "btn btn--default",
                          type: "button",
                          onClick: () => {
                            R(null), I((e) => !e);
                          },
                        },
                        T ? h : p,
                      ),
                      D
                        ? Y(
                            "div",
                            { class: "form__error-container" },
                            D.message,
                          )
                        : null,
                    )
                  : null,
              ),
              Y(
                "div",
                { class: "btn-group" },
                Y("button", { class: "btn btn--primary", type: "submit" }, E),
                Y(
                  "button",
                  { class: "btn btn--default", type: "button", onClick: r },
                  f,
                ),
              ),
            ),
          );
        }
        function eq({ label: e, isRequired: t, isRequiredLabel: n }) {
          return Y(
            "span",
            { class: "form__label__text" },
            e,
            t && Y("span", { class: "form__label__text--required" }, n),
          );
        }
        function eW({ open: e, onFormSubmitted: t, ...n }) {
          let r = n.options,
            i = eR(() => {
              let e, t, n, r, i, o, s, a;
              return {
                __html: ((t = D(
                  (e = (e) =>
                    u.document.createElementNS(
                      "http://www.w3.org/2000/svg",
                      e,
                    ))("svg"),
                  {
                    width: "16",
                    height: "17",
                    viewBox: "0 0 16 17",
                    fill: "inherit",
                  },
                )),
                (n = D(e("g"), { clipPath: "url(#clip0_57_156)" })),
                (r = D(e("path"), {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M3.55544 15.1518C4.87103 16.0308 6.41775 16.5 8 16.5C10.1217 16.5 12.1566 15.6571 13.6569 14.1569C15.1571 12.6566 16 10.6217 16 8.5C16 6.91775 15.5308 5.37103 14.6518 4.05544C13.7727 2.73985 12.5233 1.71447 11.0615 1.10897C9.59966 0.503466 7.99113 0.34504 6.43928 0.653721C4.88743 0.962403 3.46197 1.72433 2.34315 2.84315C1.22433 3.96197 0.462403 5.38743 0.153721 6.93928C-0.15496 8.49113 0.00346625 10.0997 0.608967 11.5615C1.21447 13.0233 2.23985 14.2727 3.55544 15.1518ZM4.40546 3.1204C5.46945 2.40946 6.72036 2.03 8 2.03C9.71595 2.03 11.3616 2.71166 12.575 3.92502C13.7883 5.13838 14.47 6.78405 14.47 8.5C14.47 9.77965 14.0905 11.0306 13.3796 12.0945C12.6687 13.1585 11.6582 13.9878 10.476 14.4775C9.29373 14.9672 7.99283 15.0953 6.73777 14.8457C5.48271 14.596 4.32987 13.9798 3.42502 13.075C2.52018 12.1701 1.90397 11.0173 1.65432 9.76224C1.40468 8.50718 1.5328 7.20628 2.0225 6.02404C2.5122 4.8418 3.34148 3.83133 4.40546 3.1204Z",
                })),
                (i = D(e("path"), {
                  d: "M6.68775 12.4297C6.78586 12.4745 6.89218 12.4984 7 12.5C7.11275 12.4955 7.22315 12.4664 7.32337 12.4145C7.4236 12.3627 7.51121 12.2894 7.58 12.2L12 5.63999C12.0848 5.47724 12.1071 5.28902 12.0625 5.11098C12.0178 4.93294 11.9095 4.77744 11.7579 4.67392C11.6064 4.57041 11.4221 4.52608 11.24 4.54931C11.0579 4.57254 10.8907 4.66173 10.77 4.79999L6.88 10.57L5.13 8.56999C5.06508 8.49566 4.98613 8.43488 4.89768 8.39111C4.80922 8.34735 4.713 8.32148 4.61453 8.31498C4.51605 8.30847 4.41727 8.32147 4.32382 8.35322C4.23038 8.38497 4.14413 8.43484 4.07 8.49999C3.92511 8.63217 3.83692 8.81523 3.82387 9.01092C3.81083 9.2066 3.87393 9.39976 4 9.54999L6.43 12.24C6.50187 12.3204 6.58964 12.385 6.68775 12.4297Z",
                })),
                t.appendChild(n).append(i, r),
                (o = e("defs")),
                (s = D(e("clipPath"), { id: "clip0_57_156" })),
                (a = D(e("rect"), {
                  width: "16",
                  height: "16",
                  fill: "white",
                  transform: "translate(0 0.5)",
                })),
                s.appendChild(a),
                o.appendChild(s),
                t.appendChild(o).appendChild(s).appendChild(a),
                t).outerHTML,
              };
            }, []),
            [o, s] = eM(null),
            a = eA(() => {
              o && (clearTimeout(o), s(null)), t();
            }, [o]),
            l = eA(
              (e) => {
                n.onSubmitSuccess(e),
                  s(
                    setTimeout(() => {
                      t(), s(null);
                    }, 5e3),
                  );
              },
              [t],
            );
          return Y(
            Z,
            null,
            o
              ? Y(
                  "div",
                  { class: "success__position", onClick: a },
                  Y(
                    "div",
                    { class: "success__content" },
                    r.successMessageText,
                    Y("span", {
                      class: "success__icon",
                      dangerouslySetInnerHTML: i,
                    }),
                  ),
                )
              : Y(
                  "dialog",
                  { class: "dialog", onClick: r.onFormClose, open: e },
                  Y(
                    "div",
                    { class: "dialog__position" },
                    Y(
                      "div",
                      {
                        class: "dialog__content",
                        onClick: (e) => {
                          e.stopPropagation();
                        },
                      },
                      Y(eB, { options: r }),
                      Y(eH, { ...n, onSubmitSuccess: l }),
                    ),
                  ),
                ),
          );
        }
        let eK = `
.dialog {
  position: fixed;
  z-index: var(--z-index);
  margin: 0;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  height: 100vh;
  width: 100vw;

  color: var(--dialog-color, var(--foreground));
  fill: var(--dialog-color, var(--foreground));
  line-height: 1.75em;

  background-color: rgba(0, 0, 0, 0.05);
  border: none;
  inset: 0;
  opacity: 1;
  transition: opacity 0.2s ease-in-out;
}

.dialog__position {
  position: fixed;
  z-index: var(--z-index);
  inset: var(--dialog-inset);
  padding: var(--page-margin);
  display: flex;
  max-height: calc(100vh - (2 * var(--page-margin)));
}
@media (max-width: 600px) {
  .dialog__position {
    inset: var(--page-margin);
    padding: 0;
  }
}

.dialog__position:has(.editor) {
  inset: var(--page-margin);
  padding: 0;
}

.dialog:not([open]) {
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
}
.dialog:not([open]) .dialog__content {
  transform: translate(0, -16px) scale(0.98);
}

.dialog__content {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: var(--dialog-padding, 24px);
  max-width: 100%;
  width: 100%;
  max-height: 100%;
  overflow: auto;

  background: var(--dialog-background, var(--background));
  border-radius: var(--dialog-border-radius, 20px);
  border: var(--dialog-border, var(--border));
  box-shadow: var(--dialog-box-shadow, var(--box-shadow));
  transform: translate(0, 0) scale(1);
  transition: transform 0.2s ease-in-out;
}

`,
          eX = `
.dialog__header {
  display: flex;
  gap: 4px;
  justify-content: space-between;
  font-weight: var(--dialog-header-weight, 600);
  margin: 0;
}
.dialog__title {
  align-self: center;
  width: var(--form-width, 272px);
}

@media (max-width: 600px) {
  .dialog__title {
    width: auto;
  }
}

.dialog__position:has(.editor) .dialog__title {
  width: auto;
}


.brand-link {
  display: inline-flex;
}
.brand-link:focus-visible {
  outline: var(--outline);
}
`,
          eV = `
.form {
  display: flex;
  overflow: auto;
  flex-direction: row;
  gap: 16px;
  flex: 1 0;
}

.form__right {
  flex: 0 0 auto;
  display: flex;
  overflow: auto;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  width: var(--form-width, 100%);
}

.dialog__position:has(.editor) .form__right {
  width: var(--form-width, 272px);
}

.form__top {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form__error-container {
  color: var(--error-color);
  fill: var(--error-color);
}

.form__label {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 0px;
}

.form__label__text {
  display: flex;
  gap: 4px;
  align-items: center;
}

.form__label__text--required {
  font-size: 0.85em;
}

.form__input {
  font-family: inherit;
  line-height: inherit;
  background: transparent;
  box-sizing: border-box;
  border: var(--input-border, var(--border));
  border-radius: var(--input-border-radius, 6px);
  color: var(--input-color, inherit);
  fill: var(--input-color, inherit);
  font-size: var(--input-font-size, inherit);
  font-weight: var(--input-font-weight, 500);
  padding: 6px 12px;
}

.form__input::placeholder {
  opacity: 0.65;
  color: var(--input-placeholder-color, inherit);
  filter: var(--interactive-filter);
}

.form__input:focus-visible {
  outline: var(--input-focus-outline, var(--outline));
}

.form__input--textarea {
  font-family: inherit;
  resize: vertical;
}

.error {
  color: var(--error-color);
  fill: var(--error-color);
}
`,
          eG = `
.btn-group {
  display: grid;
  gap: 8px;
}

.btn {
  line-height: inherit;
  border: var(--button-border, var(--border));
  border-radius: var(--button-border-radius, 6px);
  cursor: pointer;
  font-family: inherit;
  font-size: var(--button-font-size, inherit);
  font-weight: var(--button-font-weight, 600);
  padding: var(--button-padding, 6px 16px);
}
.btn[disabled] {
  opacity: 0.6;
  pointer-events: none;
}

.btn--primary {
  color: var(--button-primary-color, var(--accent-foreground));
  fill: var(--button-primary-color, var(--accent-foreground));
  background: var(--button-primary-background, var(--accent-background));
  border: var(--button-primary-border, var(--border));
  border-radius: var(--button-primary-border-radius, 6px);
  font-weight: var(--button-primary-font-weight, 500);
}
.btn--primary:hover {
  color: var(--button-primary-hover-color, var(--accent-foreground));
  fill: var(--button-primary-hover-color, var(--accent-foreground));
  background: var(--button-primary-hover-background, var(--accent-background));
  filter: var(--interactive-filter);
}
.btn--primary:focus-visible {
  background: var(--button-primary-hover-background, var(--accent-background));
  filter: var(--interactive-filter);
  outline: var(--button-primary-focus-outline, var(--outline));
}

.btn--default {
  color: var(--button-color, var(--foreground));
  fill: var(--button-color, var(--foreground));
  background: var(--button-background, var(--background));
  border: var(--button-border, var(--border));
  border-radius: var(--button-border-radius, 6px);
  font-weight: var(--button-font-weight, 500);
}
.btn--default:hover {
  color: var(--button-color, var(--foreground));
  fill: var(--button-color, var(--foreground));
  background: var(--button-hover-background, var(--background));
  filter: var(--interactive-filter);
}
.btn--default:focus-visible {
  background: var(--button-hover-background, var(--background));
  filter: var(--interactive-filter);
  outline: var(--button-focus-outline, var(--outline));
}
`,
          eJ = `
.success__position {
  position: fixed;
  inset: var(--dialog-inset);
  padding: var(--page-margin);
  z-index: var(--z-index);
}
.success__content {
  background: var(--success-background, var(--background));
  border: var(--success-border, var(--border));
  border-radius: var(--success-border-radius, 1.7em/50%);
  box-shadow: var(--success-box-shadow, var(--box-shadow));
  font-weight: var(--success-font-weight, 600);
  color: var(--success-color);
  fill: var(--success-color);
  padding: 12px 24px;
  line-height: 1.75em;

  display: grid;
  align-items: center;
  grid-auto-flow: column;
  gap: 6px;
  cursor: default;
}

.success__icon {
  display: flex;
}
`,
          eY = () => ({
            name: "FeedbackModal",
            setupOnce() {},
            createDialog: ({
              options: e,
              screenshotIntegration: t,
              sendFeedback: n,
              shadow: r,
            }) => {
              var o;
              let s,
                a,
                l,
                c,
                u = e.useSentryUser,
                p =
                  ((s = (0, i.o5)().getUser()),
                  (a = (0, i.rm)().getUser()),
                  (l = (0, i.m6)().getUser()),
                  s && Object.keys(s).length
                    ? s
                    : a && Object.keys(a).length
                      ? a
                      : l),
                h = d.createElement("div"),
                f =
                  ((o = e.styleNonce),
                  ((c = d.createElement("style")).textContent = `
:host {
  --dialog-inset: var(--inset);
}

${eK}
${eX}
${eV}
${eG}
${eJ}
`),
                  o && c.setAttribute("nonce", o),
                  c),
                m = "",
                g = {
                  get el() {
                    return h;
                  },
                  appendToDom() {
                    r.contains(f) ||
                      r.contains(h) ||
                      (r.appendChild(f), r.appendChild(h));
                  },
                  removeFromDom() {
                    r.removeChild(h),
                      r.removeChild(f),
                      (d.body.style.overflow = m);
                  },
                  open() {
                    v(!0),
                      e.onFormOpen && e.onFormOpen(),
                      (m = d.body.style.overflow),
                      (d.body.style.overflow = "hidden");
                  },
                  close() {
                    v(!1), (d.body.style.overflow = m);
                  },
                },
                _ =
                  t &&
                  t.createInput({ h: Y, hooks: eU, dialog: g, options: e }),
                v = (t) => {
                  var r, i, o, s;
                  (r = Y(eW, {
                    options: e,
                    screenshotInput: _,
                    showName: e.showName || e.isNameRequired,
                    showEmail: e.showEmail || e.isEmailRequired,
                    defaultName: (u && p && p[u.name]) || "",
                    defaultEmail: (u && p && p[u.email]) || "",
                    onFormClose: () => {
                      v(!1), e.onFormClose && e.onFormClose();
                    },
                    onSubmit: n,
                    onSubmitSuccess: (t) => {
                      v(!1), e.onSubmitSuccess && e.onSubmitSuccess(t);
                    },
                    onSubmitError: (t) => {
                      e.onSubmitError && e.onSubmitError(t);
                    },
                    onFormSubmitted: () => {
                      e.onFormSubmitted && e.onFormSubmitted();
                    },
                    open: t,
                  })),
                    $.__ && $.__(r, h),
                    (i = h.__k),
                    (o = []),
                    (s = []),
                    ec(
                      h,
                      (r = h.__k = Y(Z, null, [r])),
                      i || W,
                      W,
                      void 0 !== h.ownerSVGElement,
                      i ? null : h.firstChild ? j.call(h.childNodes) : null,
                      o,
                      i ? i.__e : h.firstChild,
                      !1,
                      s,
                    ),
                    (r.__d = void 0),
                    eu(o, r, s);
                };
              return g;
            },
          }),
          eQ = u.devicePixelRatio,
          eZ = (e) => ({
            x: Math.min(e.startX, e.endX),
            y: Math.min(e.startY, e.endY),
            width: Math.abs(e.startX - e.endX),
            height: Math.abs(e.startY - e.endY),
          }),
          e0 = (e) => {
            let t = e.clientHeight,
              n = e.clientWidth,
              r = e.width / e.height,
              i = t * r,
              o = t;
            i > n && ((i = n), (o = n / r));
            let s = (n - i) / 2,
              a = (t - o) / 2;
            return { startX: s, startY: a, endX: i + s, endY: o + a };
          },
          e1 = () => ({
            name: "FeedbackScreenshot",
            setupOnce() {},
            createInput: ({ h: e, hooks: t, dialog: n, options: r }) => {
              let i = d.createElement("canvas");
              return {
                input: (function ({
                  h: e,
                  hooks: t,
                  imageBuffer: n,
                  dialog: r,
                  options: i,
                }) {
                  let o = (function ({ hooks: e }) {
                    return function ({
                      onBeforeScreenshot: t,
                      onScreenshot: n,
                      onAfterScreenshot: r,
                      onError: i,
                    }) {
                      e.useEffect(() => {
                        (async () => {
                          t();
                          let e = await p.mediaDevices.getDisplayMedia({
                              video: {
                                width: u.innerWidth * u.devicePixelRatio,
                                height: u.innerHeight * u.devicePixelRatio,
                              },
                              audio: !1,
                              monitorTypeSurfaces: "exclude",
                              preferCurrentTab: !0,
                              selfBrowserSurface: "include",
                              surfaceSwitching: "exclude",
                            }),
                            i = d.createElement("video");
                          await new Promise((t, r) => {
                            (i.srcObject = e),
                              (i.onloadedmetadata = () => {
                                n(i),
                                  e.getTracks().forEach((e) => e.stop()),
                                  t();
                              }),
                              i.play().catch(r);
                          }),
                            r();
                        })().catch(i);
                      }, []);
                    };
                  })({ hooks: t });
                  return function ({ onError: s }) {
                    let a = t.useMemo(() => {
                        var e;
                        let t, n, r;
                        return {
                          __html: ((e = i.styleNonce),
                          (t = d.createElement("style")),
                          (n = "#1A141F"),
                          (r = "#302735"),
                          (t.textContent = `
.editor {
  padding: 10px;
  padding-top: 65px;
  padding-bottom: 65px;
  flex-grow: 1;

  background-color: ${n};
  background-image: repeating-linear-gradient(
      -145deg,
      transparent,
      transparent 8px,
      ${n} 8px,
      ${n} 11px
    ),
    repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 15px,
      ${r} 15px,
      ${r} 16px
    );
}

.editor__canvas-container {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.editor__canvas-container canvas {
  object-fit: contain;
  position: relative;
}

.editor__crop-btn-group {
  padding: 8px;
  gap: 8px;
  border-radius: var(--menu-border-radius, 6px);
  background: var(--button-primary-background, var(--background));
  width: 175px;
  position: absolute;
}

.editor__crop-corner {
  width: 30px;
  height: 30px;
  position: absolute;
  background: none;
  border: 3px solid #ffffff;
}

.editor__crop-corner--top-left {
  cursor: nwse-resize;
  border-right: none;
  border-bottom: none;
}
.editor__crop-corner--top-right {
  cursor: nesw-resize;
  border-left: none;
  border-bottom: none;
}
.editor__crop-corner--bottom-left {
  cursor: nesw-resize;
  border-right: none;
  border-top: none;
}
.editor__crop-corner--bottom-right {
  cursor: nwse-resize;
  border-left: none;
  border-top: none;
}
`),
                          e && t.setAttribute("nonce", e),
                          t).innerText,
                        };
                      }, []),
                      l = (function ({ h: e }) {
                        return function ({
                          top: t,
                          left: n,
                          corner: r,
                          onGrabButton: i,
                        }) {
                          return e("button", {
                            class: `editor__crop-corner editor__crop-corner--${r} `,
                            style: { top: t, left: n },
                            onMouseDown: (e) => {
                              e.preventDefault(), i(e, r);
                            },
                            onClick: (e) => {
                              e.preventDefault();
                            },
                          });
                        };
                      })({ h: e }),
                      c = t.useRef(null),
                      p = t.useRef(null),
                      h = t.useRef(null),
                      [f, m] = t.useState({
                        startX: 0,
                        startY: 0,
                        endX: 0,
                        endY: 0,
                      }),
                      [g, _] = t.useState(!1),
                      [v, y] = t.useState(!1);
                    function b() {
                      let e = h.current,
                        t = eZ(e0(n));
                      if (e) {
                        (e.width = t.width * eQ),
                          (e.height = t.height * eQ),
                          (e.style.width = `${t.width}px`),
                          (e.style.height = `${t.height}px`);
                        let n = e.getContext("2d");
                        n && n.scale(eQ, eQ);
                      }
                      let r = p.current;
                      r &&
                        ((r.style.width = `${t.width}px`),
                        (r.style.height = `${t.height}px`)),
                        m({
                          startX: 0,
                          startY: 0,
                          endX: t.width,
                          endY: t.height,
                        });
                    }
                    function S(e, t) {
                      _(!1), y(!0);
                      let n = w(t),
                        r = () => {
                          d.removeEventListener("mousemove", n),
                            d.removeEventListener("mouseup", r),
                            _(!0),
                            y(!1);
                        };
                      d.addEventListener("mouseup", r),
                        d.addEventListener("mousemove", n);
                    }
                    t.useEffect(() => {
                      u.addEventListener("resize", b, !1);
                    }, []),
                      t.useEffect(() => {
                        let e = h.current;
                        if (!e) return;
                        let t = e.getContext("2d");
                        if (!t) return;
                        let r = eZ(e0(n)),
                          i = eZ(f);
                        t.clearRect(0, 0, r.width, r.height),
                          (t.fillStyle = "rgba(0, 0, 0, 0.5)"),
                          t.fillRect(0, 0, r.width, r.height),
                          t.clearRect(i.x, i.y, i.width, i.height),
                          (t.strokeStyle = "#ffffff"),
                          (t.lineWidth = 3),
                          t.strokeRect(
                            i.x + 1,
                            i.y + 1,
                            i.width - 2,
                            i.height - 2,
                          ),
                          (t.strokeStyle = "#000000"),
                          (t.lineWidth = 1),
                          t.strokeRect(
                            i.x + 3,
                            i.y + 3,
                            i.width - 6,
                            i.height - 6,
                          );
                      }, [f]);
                    let w = t.useCallback(
                        (e) =>
                          function (t) {
                            if (!h.current) return;
                            let n = h.current,
                              r = n.getBoundingClientRect(),
                              i = t.clientX - r.x,
                              o = t.clientY - r.y;
                            switch (e) {
                              case "top-left":
                                m((e) => ({
                                  ...e,
                                  startX: Math.min(Math.max(0, i), e.endX - 33),
                                  startY: Math.min(Math.max(0, o), e.endY - 33),
                                }));
                                break;
                              case "top-right":
                                m((e) => ({
                                  ...e,
                                  endX: Math.max(
                                    Math.min(i, n.width / eQ),
                                    e.startX + 33,
                                  ),
                                  startY: Math.min(Math.max(0, o), e.endY - 33),
                                }));
                                break;
                              case "bottom-left":
                                m((e) => ({
                                  ...e,
                                  startX: Math.min(Math.max(0, i), e.endX - 33),
                                  endY: Math.max(
                                    Math.min(o, n.height / eQ),
                                    e.startY + 33,
                                  ),
                                }));
                                break;
                              case "bottom-right":
                                m((e) => ({
                                  ...e,
                                  endX: Math.max(
                                    Math.min(i, n.width / eQ),
                                    e.startX + 33,
                                  ),
                                  endY: Math.max(
                                    Math.min(o, n.height / eQ),
                                    e.startY + 33,
                                  ),
                                }));
                            }
                          },
                        [],
                      ),
                      E = t.useRef({ initialX: 0, initialY: 0 });
                    return (
                      o({
                        onBeforeScreenshot: t.useCallback(() => {
                          r.el.style.display = "none";
                        }, []),
                        onScreenshot: t.useCallback(
                          (e) => {
                            let t = n.getContext("2d");
                            if (!t) throw Error("Could not get canvas context");
                            (n.width = e.videoWidth),
                              (n.height = e.videoHeight),
                              (n.style.width = "100%"),
                              (n.style.height = "100%"),
                              t.drawImage(e, 0, 0);
                          },
                          [n],
                        ),
                        onAfterScreenshot: t.useCallback(() => {
                          r.el.style.display = "block";
                          let e = c.current;
                          e && e.appendChild(n), b();
                        }, []),
                        onError: t.useCallback((e) => {
                          (r.el.style.display = "block"), s(e);
                        }, []),
                      }),
                      e(
                        "div",
                        { class: "editor" },
                        e("style", {
                          nonce: i.styleNonce,
                          dangerouslySetInnerHTML: a,
                        }),
                        e(
                          "div",
                          { class: "editor__canvas-container", ref: c },
                          e(
                            "div",
                            {
                              class: "editor__crop-container",
                              style: { position: "absolute", zIndex: 1 },
                              ref: p,
                            },
                            e("canvas", {
                              onMouseDown: function (e) {
                                if (v) return;
                                E.current = {
                                  initialX: e.clientX,
                                  initialY: e.clientY,
                                };
                                let t = (e) => {
                                    let t = h.current;
                                    if (!t) return;
                                    let n = e.clientX - E.current.initialX,
                                      r = e.clientY - E.current.initialY;
                                    m((i) => {
                                      let o = Math.max(
                                          0,
                                          Math.min(
                                            i.startX + n,
                                            t.width / eQ - (i.endX - i.startX),
                                          ),
                                        ),
                                        s = Math.max(
                                          0,
                                          Math.min(
                                            i.startY + r,
                                            t.height / eQ - (i.endY - i.startY),
                                          ),
                                        ),
                                        a = o + (i.endX - i.startX),
                                        l = s + (i.endY - i.startY);
                                      return (
                                        (E.current.initialX = e.clientX),
                                        (E.current.initialY = e.clientY),
                                        {
                                          startX: o,
                                          startY: s,
                                          endX: a,
                                          endY: l,
                                        }
                                      );
                                    });
                                  },
                                  n = () => {
                                    d.removeEventListener("mousemove", t),
                                      d.removeEventListener("mouseup", n);
                                  };
                                d.addEventListener("mousemove", t),
                                  d.addEventListener("mouseup", n);
                              },
                              style: {
                                position: "absolute",
                                cursor: g ? "move" : "auto",
                              },
                              ref: h,
                            }),
                            e(l, {
                              left: f.startX - 3,
                              top: f.startY - 3,
                              onGrabButton: S,
                              corner: "top-left",
                            }),
                            e(l, {
                              left: f.endX - 30 + 3,
                              top: f.startY - 3,
                              onGrabButton: S,
                              corner: "top-right",
                            }),
                            e(l, {
                              left: f.startX - 3,
                              top: f.endY - 30 + 3,
                              onGrabButton: S,
                              corner: "bottom-left",
                            }),
                            e(l, {
                              left: f.endX - 30 + 3,
                              top: f.endY - 30 + 3,
                              onGrabButton: S,
                              corner: "bottom-right",
                            }),
                            e(
                              "div",
                              {
                                style: {
                                  left: Math.max(0, f.endX - 191),
                                  top: Math.max(0, f.endY + 8),
                                  display: g ? "flex" : "none",
                                },
                                class: "editor__crop-btn-group",
                              },
                              e(
                                "button",
                                {
                                  onClick: (e) => {
                                    e.preventDefault(),
                                      h.current &&
                                        m({
                                          startX: 0,
                                          startY: 0,
                                          endX: h.current.width / eQ,
                                          endY: h.current.height / eQ,
                                        }),
                                      _(!1);
                                  },
                                  class: "btn btn--default",
                                },
                                i.cancelButtonLabel,
                              ),
                              e(
                                "button",
                                {
                                  onClick: (e) => {
                                    let t, r, i, o, s;
                                    e.preventDefault(),
                                      (t = d.createElement("canvas")),
                                      (r = eZ(e0(n))),
                                      (t.width = (i = eZ(f)).width * eQ),
                                      (t.height = i.height * eQ),
                                      (o = t.getContext("2d")) &&
                                        n &&
                                        o.drawImage(
                                          n,
                                          (i.x / r.width) * n.width,
                                          (i.y / r.height) * n.height,
                                          (i.width / r.width) * n.width,
                                          (i.height / r.height) * n.height,
                                          0,
                                          0,
                                          t.width,
                                          t.height,
                                        ),
                                      (s = n.getContext("2d")) &&
                                        (s.clearRect(0, 0, n.width, n.height),
                                        (n.width = t.width),
                                        (n.height = t.height),
                                        (n.style.width = `${i.width}px`),
                                        (n.style.height = `${i.height}px`),
                                        s.drawImage(t, 0, 0),
                                        b()),
                                      _(!1);
                                  },
                                  class: "btn btn--primary",
                                },
                                i.confirmButtonLabel,
                              ),
                            ),
                          ),
                        ),
                      )
                    );
                  };
                })({ h: e, hooks: t, imageBuffer: i, dialog: n, options: r }),
                value: async () => {
                  let e = await new Promise((e) => {
                    i.toBlob(e, "image/png");
                  });
                  if (e)
                    return {
                      data: new Uint8Array(await e.arrayBuffer()),
                      filename: "screenshot.png",
                      contentType: "application/png",
                    };
                },
              };
            },
          });
      },
      129313(e, t, n) {
        "use strict";
        let r;
        n.d(t, { y: () => N });
        var i,
          o,
          s,
          a = n(397322),
          l = n(688331);
        function c(e, t, n = 1 / 0, r = 0) {
          return !e || e.nodeType !== e.ELEMENT_NODE || r > n
            ? -1
            : t(e)
              ? r
              : c(e.parentNode, t, n, r + 1);
        }
        function u(e, t) {
          return (n) => {
            if (null === n) return !1;
            try {
              if (e) {
                if ("string" == typeof e) {
                  if (n.matches(`.${e}`)) return !0;
                } else if (
                  (function (e, t) {
                    for (let n = e.classList.length; n--; ) {
                      let r = e.classList[n];
                      if (t.test(r)) return !0;
                    }
                    return !1;
                  })(n, e)
                )
                  return !0;
              }
              if (t && n.matches(t)) return !0;
              return !1;
            } catch (e) {
              return !1;
            }
          };
        }
        ((i = s || (s = {}))[(i.Document = 0)] = "Document"),
          (i[(i.DocumentType = 1)] = "DocumentType"),
          (i[(i.Element = 2)] = "Element"),
          (i[(i.Text = 3)] = "Text"),
          (i[(i.CDATA = 4)] = "CDATA"),
          (i[(i.Comment = 5)] = "Comment");
        let d =
            "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.",
          p = {
            map: {},
            getId: () => (console.error(d), -1),
            getNode: () => (console.error(d), null),
            removeNodeFromMap() {
              console.error(d);
            },
            has: () => (console.error(d), !1),
            reset() {
              console.error(d);
            },
          };
        function h(e, t, n, r, i = window) {
          let o = i.Object.getOwnPropertyDescriptor(e, t);
          return (
            i.Object.defineProperty(
              e,
              t,
              r
                ? n
                : {
                    set(e) {
                      y(() => {
                        n.set.call(this, e);
                      }, 0),
                        o && o.set && o.set.call(this, e);
                    },
                  },
            ),
            () => h(e, t, o || {}, !0)
          );
        }
        function f(e, t, n) {
          try {
            if (!(t in e)) return () => {};
            let r = e[t],
              i = n(r);
            return (
              "function" == typeof i &&
                ((i.prototype = i.prototype || {}),
                Object.defineProperties(i, {
                  __rrweb_original__: { enumerable: !1, value: r },
                })),
              (e[t] = i),
              () => {
                e[t] = r;
              }
            );
          } catch (e) {
            return () => {};
          }
        }
        function m(e, t, n, r, i) {
          if (!e) return !1;
          let o = e
            ? e.nodeType === e.ELEMENT_NODE
              ? e
              : e.parentElement
            : null;
          if (!o) return !1;
          let s = c(o, u(t, n)),
            a = -1;
          return (
            !(s < 0) &&
            (r && (a = c(o, u(null, r))), (s > -1 && a < 0) || s < a)
          );
        }
        "u" > typeof window &&
          window.Proxy &&
          window.Reflect &&
          (p = new Proxy(p, {
            get: (e, t, n) => (
              "map" === t && console.error(d), Reflect.get(e, t, n)
            ),
          })),
          /[1-9][0-9]{12}/.test(Date.now().toString());
        let g = {};
        function _(e) {
          let t = g[e];
          if (t) return t;
          let n = window.document,
            r = window[e];
          if (n && "function" == typeof n.createElement)
            try {
              let t = n.createElement("iframe");
              (t.hidden = !0), n.head.appendChild(t);
              let i = t.contentWindow;
              i && i[e] && (r = i[e]), n.head.removeChild(t);
            } catch (e) {}
          return (g[e] = r.bind(window));
        }
        function v(...e) {
          return _("requestAnimationFrame")(...e);
        }
        function y(...e) {
          return _("setTimeout")(...e);
        }
        var b =
          (((o = b || {})[(o["2D"] = 0)] = "2D"),
          (o[(o.WebGL = 1)] = "WebGL"),
          (o[(o.WebGL2 = 2)] = "WebGL2"),
          o);
        let S = (e) =>
          r
            ? (...t) => {
                try {
                  return e(...t);
                } catch (e) {
                  if (r && !0 === r(e)) return () => {};
                  throw e;
                }
              }
            : e;
        for (
          var w =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            E = "u" < typeof Uint8Array ? [] : new Uint8Array(256),
            k = 0;
          k < w.length;
          k++
        )
          E[w.charCodeAt(k)] = k;
        var x = function (e) {
          var t,
            n = new Uint8Array(e),
            r = n.length,
            i = "";
          for (t = 0; t < r; t += 3)
            (i += w[n[t] >> 2]),
              (i += w[((3 & n[t]) << 4) | (n[t + 1] >> 4)]),
              (i += w[((15 & n[t + 1]) << 2) | (n[t + 2] >> 6)]),
              (i += w[63 & n[t + 2]]);
          return (
            r % 3 == 2
              ? (i = i.substring(0, i.length - 1) + "=")
              : r % 3 == 1 && (i = i.substring(0, i.length - 2) + "=="),
            i
          );
        };
        let C = new Map(),
          T = (e, t, n) => {
            let r;
            if (!e || !(M(e, t) || "object" == typeof e)) return;
            let i = e.constructor.name,
              o =
                ((r = C.get(n)) || ((r = new Map()), C.set(n, r)),
                r.has(i) || r.set(i, []),
                r.get(i)),
              s = o.indexOf(e);
            return -1 === s && ((s = o.length), o.push(e)), s;
          },
          I = (e, t, n) =>
            e.map((e) =>
              (function e(t, n, r) {
                if (t instanceof Array) return t.map((t) => e(t, n, r));
                if (null === t);
                else if (
                  t instanceof Float32Array ||
                  t instanceof Float64Array ||
                  t instanceof Int32Array ||
                  t instanceof Uint32Array ||
                  t instanceof Uint8Array ||
                  t instanceof Uint16Array ||
                  t instanceof Int16Array ||
                  t instanceof Int8Array ||
                  t instanceof Uint8ClampedArray
                )
                  return {
                    rr_type: t.constructor.name,
                    args: [Object.values(t)],
                  };
                else if (t instanceof ArrayBuffer)
                  return { rr_type: t.constructor.name, base64: x(t) };
                else if (t instanceof DataView)
                  return {
                    rr_type: t.constructor.name,
                    args: [e(t.buffer, n, r), t.byteOffset, t.byteLength],
                  };
                else if (t instanceof HTMLImageElement) {
                  let e = t.constructor.name,
                    { src: n } = t;
                  return { rr_type: e, src: n };
                } else if (t instanceof HTMLCanvasElement)
                  return { rr_type: "HTMLImageElement", src: t.toDataURL() };
                else if (t instanceof ImageData)
                  return {
                    rr_type: t.constructor.name,
                    args: [e(t.data, n, r), t.width, t.height],
                  };
                else if (M(t, n) || "object" == typeof t)
                  return { rr_type: t.constructor.name, index: T(t, n, r) };
                return t;
              })(e, t, n),
            ),
          M = (e, t) =>
            !![
              "WebGLActiveInfo",
              "WebGLBuffer",
              "WebGLFramebuffer",
              "WebGLProgram",
              "WebGLRenderbuffer",
              "WebGLShader",
              "WebGLShaderPrecisionFormat",
              "WebGLTexture",
              "WebGLUniformLocation",
              "WebGLVertexArrayObject",
              "WebGLVertexArrayObjectOES",
            ]
              .filter((e) => "function" == typeof t[e])
              .find((n) => e instanceof t[n]);
        function O(e, t, n, r, i) {
          let o = [];
          try {
            let s = f(
              e.HTMLCanvasElement.prototype,
              "getContext",
              function (e) {
                return function (o, ...s) {
                  if (!m(this, t, n, r, !0)) {
                    let e = "experimental-webgl" === o ? "webgl" : o;
                    if (
                      ("__context" in this || (this.__context = e),
                      i && ["webgl", "webgl2"].includes(e))
                    )
                      if (s[0] && "object" == typeof s[0]) {
                        let e = s[0];
                        e.preserveDrawingBuffer ||
                          (e.preserveDrawingBuffer = !0);
                      } else s.splice(0, 1, { preserveDrawingBuffer: !0 });
                  }
                  return e.apply(this, [o, ...s]);
                };
              },
            );
            o.push(s);
          } catch (e) {
            console.error(
              "failed to patch HTMLCanvasElement.prototype.getContext",
            );
          }
          return () => {
            o.forEach((e) => e());
          };
        }
        function D(e, t, n, r, i, o, s, a) {
          let l = [];
          for (let s of Object.getOwnPropertyNames(e))
            if (
              ![
                "isContextLost",
                "canvas",
                "drawingBufferWidth",
                "drawingBufferHeight",
              ].includes(s)
            )
              try {
                if ("function" != typeof e[s]) continue;
                let c = f(e, s, function (e) {
                  return function (...l) {
                    let c = e.apply(this, l);
                    if (
                      (T(c, a, this),
                      "tagName" in this.canvas && !m(this.canvas, r, i, o, !0))
                    ) {
                      let e = I(l, a, this),
                        r = { type: t, property: s, args: e };
                      n(this.canvas, r);
                    }
                    return c;
                  };
                });
                l.push(c);
              } catch (i) {
                let r = h(e, s, {
                  set(e) {
                    n(this.canvas, {
                      type: t,
                      property: s,
                      args: [e],
                      setter: !0,
                    });
                  },
                });
                l.push(r);
              }
          return l;
        }
        class R {
          reset() {
            this.pendingCanvasMutations.clear(),
              this.restoreHandlers.forEach((e) => {
                try {
                  e();
                } catch (e) {}
              }),
              (this.restoreHandlers = []),
              (this.windowsSet = new WeakSet()),
              (this.windows = []),
              (this.shadowDoms = new Set()),
              (0, a.z)([
                this,
                "access",
                (e) => e.worker,
                "optionalAccess",
                (e) => e.terminate,
                "call",
                (e) => e(),
              ]),
              (this.worker = null),
              (this.snapshotInProgressMap = new Map());
          }
          freeze() {
            this.frozen = !0;
          }
          unfreeze() {
            this.frozen = !1;
          }
          lock() {
            this.locked = !0;
          }
          unlock() {
            this.locked = !1;
          }
          constructor(e) {
            (this.pendingCanvasMutations = new Map()),
              (this.rafStamps = { latestId: 0, invokeId: null }),
              (this.shadowDoms = new Set()),
              (this.windowsSet = new WeakSet()),
              (this.windows = []),
              (this.restoreHandlers = []),
              (this.frozen = !1),
              (this.locked = !1),
              (this.snapshotInProgressMap = new Map()),
              (this.worker = null),
              (this.processMutation = (e, t) => {
                ((this.rafStamps.invokeId &&
                  this.rafStamps.latestId !== this.rafStamps.invokeId) ||
                  !this.rafStamps.invokeId) &&
                  (this.rafStamps.invokeId = this.rafStamps.latestId),
                  this.pendingCanvasMutations.has(e) ||
                    this.pendingCanvasMutations.set(e, []),
                  this.pendingCanvasMutations.get(e).push(t);
              });
            const {
              sampling: t = "all",
              win: n,
              blockClass: i,
              blockSelector: o,
              unblockSelector: s,
              maxCanvasSize: a,
              recordCanvas: l,
              dataURLOptions: c,
              errorHandler: u,
            } = e;
            if (
              ((this.mutationCb = e.mutationCb),
              (this.mirror = e.mirror),
              (this.options = e),
              u &&
                (function (e) {
                  r = e;
                })(u),
              ((l && "number" == typeof t) || e.enableManualSnapshot) &&
                (this.worker = this.initFPSWorker()),
              this.addWindow(n),
              e.enableManualSnapshot)
            )
              return;
            S(() => {
              l &&
                "all" === t &&
                (this.startRAFTimestamping(),
                this.startPendingCanvasMutationFlusher()),
                l &&
                  "number" == typeof t &&
                  this.initCanvasFPSObserver(t, i, o, s, a, {
                    dataURLOptions: c,
                  });
            })();
          }
          addWindow(e) {
            let {
              sampling: t = "all",
              blockClass: n,
              blockSelector: r,
              unblockSelector: i,
              recordCanvas: o,
              enableManualSnapshot: s,
            } = this.options;
            if (!this.windowsSet.has(e)) {
              if (s) {
                this.windowsSet.add(e), this.windows.push(new WeakRef(e));
                return;
              }
              S(() => {
                if (
                  (o &&
                    "all" === t &&
                    this.initCanvasMutationObserver(e, n, r, i),
                  o && "number" == typeof t)
                ) {
                  let t = O(e, n, r, i, !0);
                  this.restoreHandlers.push(() => {
                    t();
                  });
                }
              })(),
                this.windowsSet.add(e),
                this.windows.push(new WeakRef(e));
            }
          }
          addShadowRoot(e) {
            this.shadowDoms.add(new WeakRef(e));
          }
          resetShadowRoots() {
            this.shadowDoms = new Set();
          }
          initFPSWorker() {
            let e,
              t = new Worker(
                ((e = new Blob([
                  'for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t="undefined"==typeof Uint8Array?[]:new Uint8Array(256),a=0;a<64;a++)t[e.charCodeAt(a)]=a;var n=function(t){var a,n=new Uint8Array(t),r=n.length,s="";for(a=0;a<r;a+=3)s+=e[n[a]>>2],s+=e[(3&n[a])<<4|n[a+1]>>4],s+=e[(15&n[a+1])<<2|n[a+2]>>6],s+=e[63&n[a+2]];return r%3==2?s=s.substring(0,s.length-1)+"=":r%3==1&&(s=s.substring(0,s.length-2)+"=="),s};const r=new Map,s=new Map;const i=self;i.onmessage=async function(e){if(!("OffscreenCanvas"in globalThis))return i.postMessage({id:e.data.id});{const{id:t,bitmap:a,width:o,height:f,maxCanvasSize:c,dataURLOptions:g}=e.data,u=async function(e,t,a){const r=e+"-"+t;if("OffscreenCanvas"in globalThis){if(s.has(r))return s.get(r);const i=new OffscreenCanvas(e,t);i.getContext("2d");const o=await i.convertToBlob(a),f=await o.arrayBuffer(),c=n(f);return s.set(r,c),c}return""}(o,f,g),[h,d]=function(e,t,a){if(!a)return[e,t];const[n,r]=a;if(e<=n&&t<=r)return[e,t];let s=e,i=t;return s>n&&(i=Math.floor(n*t/e),s=n),i>r&&(s=Math.floor(r*e/t),i=r),[s,i]}(o,f,c),l=new OffscreenCanvas(h,d),w=l.getContext("bitmaprenderer"),p=h===o&&d===f?a:await createImageBitmap(a,{resizeWidth:h,resizeHeight:d,resizeQuality:"low"});w.transferFromImageBitmap(p),a.close();const y=await l.convertToBlob(g),v=y.type,b=await y.arrayBuffer(),m=n(b);if(p.close(),!r.has(t)&&await u===m)return r.set(t,m),i.postMessage({id:t});if(r.get(t)===m)return i.postMessage({id:t});i.postMessage({id:t,type:v,base64:m,width:o,height:f}),r.set(t,m)}};',
                ])),
                URL.createObjectURL(e)),
              );
            return (
              (t.onmessage = (e) => {
                let t = e.data,
                  { id: n } = t;
                if ((this.snapshotInProgressMap.set(n, !1), !("base64" in t)))
                  return;
                let { base64: r, type: i, width: o, height: s } = t;
                this.mutationCb({
                  id: n,
                  type: b["2D"],
                  commands: [
                    { property: "clearRect", args: [0, 0, o, s] },
                    {
                      property: "drawImage",
                      args: [
                        {
                          rr_type: "ImageBitmap",
                          args: [
                            {
                              rr_type: "Blob",
                              data: [{ rr_type: "ArrayBuffer", base64: r }],
                              type: i,
                            },
                          ],
                        },
                        0,
                        0,
                        o,
                        s,
                      ],
                    },
                  ],
                });
              }),
              t
            );
          }
          initCanvasFPSObserver(e, t, n, r, i, o) {
            let s = this.takeSnapshot(!1, e, t, n, r, i, o.dataURLOptions);
            this.restoreHandlers.push(() => {
              cancelAnimationFrame(s);
            });
          }
          initCanvasMutationObserver(e, t, n, r) {
            var i, o;
            let s,
              a = O(e, t, n, r, !1),
              l = (function (e, t, n, r, i) {
                let o = [];
                for (let s of Object.getOwnPropertyNames(
                  t.CanvasRenderingContext2D.prototype,
                ))
                  try {
                    if (
                      "function" !=
                      typeof t.CanvasRenderingContext2D.prototype[s]
                    )
                      continue;
                    let a = f(
                      t.CanvasRenderingContext2D.prototype,
                      s,
                      function (o) {
                        return function (...a) {
                          return (
                            m(this.canvas, n, r, i, !0) ||
                              y(() => {
                                let n = I(a, t, this);
                                e(this.canvas, {
                                  type: b["2D"],
                                  property: s,
                                  args: n,
                                });
                              }, 0),
                            o.apply(this, a)
                          );
                        };
                      },
                    );
                    o.push(a);
                  } catch (r) {
                    let n = h(t.CanvasRenderingContext2D.prototype, s, {
                      set(t) {
                        e(this.canvas, {
                          type: b["2D"],
                          property: s,
                          args: [t],
                          setter: !0,
                        });
                      },
                    });
                    o.push(n);
                  }
                return () => {
                  o.forEach((e) => e());
                };
              })(this.processMutation.bind(this), e, t, n, r),
              c =
                ((i = this.processMutation.bind(this)),
                (o = this.mirror),
                (s = []).push(
                  ...D(
                    e.WebGLRenderingContext.prototype,
                    b.WebGL,
                    i,
                    t,
                    n,
                    r,
                    o,
                    e,
                  ),
                ),
                void 0 !== e.WebGL2RenderingContext &&
                  s.push(
                    ...D(
                      e.WebGL2RenderingContext.prototype,
                      b.WebGL2,
                      i,
                      t,
                      n,
                      r,
                      o,
                      e,
                    ),
                  ),
                () => {
                  s.forEach((e) => e());
                });
            this.restoreHandlers.push(() => {
              a(), l(), c();
            });
          }
          snapshot(e) {
            let { options: t } = this,
              n = this.takeSnapshot(
                !0,
                "all" === t.sampling ? 2 : t.sampling || 2,
                t.blockClass,
                t.blockSelector,
                t.unblockSelector,
                t.maxCanvasSize,
                t.dataURLOptions,
                e,
              );
            this.restoreHandlers.push(() => {
              cancelAnimationFrame(n);
            });
          }
          takeSnapshot(e, t, n, r, i, o, s, l) {
            let c = 1e3 / t,
              u = 0,
              d = (e) => {
                if (e) return [e];
                let t = [],
                  o = (e) => {
                    e.querySelectorAll("canvas").forEach((e) => {
                      m(e, n, r, i) || t.push(e);
                    });
                  };
                for (let e of this.windows) {
                  let t = e.deref();
                  t && o(t.document);
                }
                for (let e of this.shadowDoms) {
                  let t = e.deref();
                  t && o(t);
                }
                return t;
              },
              p = (t) => {
                if (this.windows.length) {
                  if (u && t - u < c) return void v(p);
                  (u = t),
                    d(l).forEach((t) => {
                      if (!this.mirror.hasNode(t)) return;
                      let n = this.mirror.getId(t);
                      if (
                        !this.snapshotInProgressMap.get(n) &&
                        t.width &&
                        t.height
                      ) {
                        if (
                          (this.snapshotInProgressMap.set(n, !0),
                          !e && ["webgl", "webgl2"].includes(t.__context))
                        ) {
                          let e = t.getContext(t.__context);
                          !1 ===
                            (0, a.z)([
                              e,
                              "optionalAccess",
                              (e) => e.getContextAttributes,
                              "call",
                              (e) => e(),
                              "optionalAccess",
                              (e) => e.preserveDrawingBuffer,
                            ]) && e.clear(e.COLOR_BUFFER_BIT);
                        }
                        createImageBitmap(t)
                          .then((e) => {
                            (0, a.z)([
                              this,
                              "access",
                              (e) => e.worker,
                              "optionalAccess",
                              (e) => e.postMessage,
                              "call",
                              (r) =>
                                r(
                                  {
                                    id: n,
                                    bitmap: e,
                                    width: t.width,
                                    height: t.height,
                                    dataURLOptions: s,
                                    maxCanvasSize: o,
                                  },
                                  [e],
                                ),
                            ]);
                          })
                          .catch((e) => {
                            S(() => {
                              throw e;
                            })();
                          });
                      }
                    }),
                    e || v(p);
                }
              };
            return v(p);
          }
          startPendingCanvasMutationFlusher() {
            v(() => this.flushPendingCanvasMutations());
          }
          startRAFTimestamping() {
            let e = (t) => {
              (this.rafStamps.latestId = t), v(e);
            };
            v(e);
          }
          flushPendingCanvasMutations() {
            this.pendingCanvasMutations.forEach((e, t) => {
              let n = this.mirror.getId(t);
              this.flushPendingCanvasMutationFor(t, n);
            }),
              v(() => this.flushPendingCanvasMutations());
          }
          flushPendingCanvasMutationFor(e, t) {
            if (this.frozen || this.locked) return;
            let n = this.pendingCanvasMutations.get(e);
            if (!n || -1 === t) return;
            let r = n.map((e) => {
                let { type: t, ...n } = e;
                return n;
              }),
              { type: i } = n[0];
            this.mutationCb({ id: t, type: i, commands: r }),
              this.pendingCanvasMutations.delete(e);
          }
        }
        let A = {
            low: {
              sampling: { canvas: 1 },
              dataURLOptions: { type: "image/webp", quality: 0.25 },
            },
            medium: {
              sampling: { canvas: 2 },
              dataURLOptions: { type: "image/webp", quality: 0.4 },
            },
            high: {
              sampling: { canvas: 4 },
              dataURLOptions: { type: "image/webp", quality: 0.5 },
            },
          },
          N = (0, l._C)((e = {}) => {
            let t,
              [n, r] = e.maxCanvasSize || [],
              i = {
                quality: e.quality || "medium",
                enableManualSnapshot: e.enableManualSnapshot,
                maxCanvasSize: [
                  n ? Math.min(n, 1280) : 1280,
                  r ? Math.min(r, 1280) : 1280,
                ],
              },
              o = new Promise((e) => (t = e));
            return {
              name: "ReplayCanvas",
              getOptions() {
                let {
                  quality: e,
                  enableManualSnapshot: n,
                  maxCanvasSize: r,
                } = i;
                return {
                  enableManualSnapshot: n,
                  recordCanvas: !0,
                  getCanvasManager: (e) => {
                    let i = new R({
                      ...e,
                      enableManualSnapshot: n,
                      maxCanvasSize: r,
                      errorHandler: (e) => {
                        try {
                          "object" == typeof e && (e.__rrweb__ = !0);
                        } catch (e) {}
                      },
                    });
                    return t(i), i;
                  },
                  ...(A[e || "medium"] || A.medium),
                };
              },
              async snapshot(e) {
                (await o).snapshot(e);
              },
            };
          });
      },
      35733(e, t, n) {
        "use strict";
        let r, i, o, s, a, l, c, u, d;
        n.d(t, { M: () => n6, w: () => n1 });
        var p,
          h,
          f,
          m,
          g,
          _,
          v,
          y,
          b,
          S,
          w,
          E,
          k = n(718367),
          x = n(397322),
          C = n(978862),
          T = n(86622),
          I = n(690094),
          M = n(693037),
          O = n(83220),
          D = n(984083),
          R = n(272469),
          A = n(196010),
          N = n(871186),
          L = n(231577),
          P = n(630449),
          F = n(582102),
          j = n(411361),
          $ = n(509474),
          U = n(826476),
          B = n(847745),
          z = n(299346),
          H = n(835869),
          q = n(157444),
          W = n(92332),
          K = n(967193),
          X = n(838596),
          V = n(743154),
          G = n(505880),
          J = n(69171),
          Y = n(756813),
          Q = n(300297);
        let Z = C.O,
          ee = "sentryReplaySession",
          et = "Unable to send Replay";
        function en(e, t) {
          return null != e ? e : t();
        }
        function er(e) {
          let t,
            n = e[0],
            r = 1;
          for (; r < e.length; ) {
            let i = e[r],
              o = e[r + 1];
            if (
              ((r += 2),
              ("optionalAccess" === i || "optionalCall" === i) && null == n)
            )
              return;
            "access" === i || "optionalAccess" === i
              ? ((t = n), (n = o(n)))
              : ("call" === i || "optionalCall" === i) &&
                ((n = o((...e) => n.call(t, ...e))), (t = void 0));
          }
          return n;
        }
        function ei(e) {
          let t = er([e, "optionalAccess", (e) => e.host]);
          return er([t, "optionalAccess", (e) => e.shadowRoot]) === e;
        }
        function eo(e) {
          return "[object ShadowRoot]" === Object.prototype.toString.call(e);
        }
        function es(e) {
          try {
            var t;
            let n = e.rules || e.cssRules;
            return n
              ? ((t = Array.from(n, ea).join("")).includes(
                  " background-clip: text;",
                ) &&
                  !t.includes(" -webkit-background-clip: text;") &&
                  (t = t.replace(
                    /\sbackground-clip:\s*text;/g,
                    " -webkit-background-clip: text; background-clip: text;",
                  )),
                t)
              : null;
          } catch (e) {
            return null;
          }
        }
        function ea(e) {
          let t;
          if ("styleSheet" in e)
            try {
              t =
                es(e.styleSheet) ||
                (function (e) {
                  let { cssText: t } = e;
                  if (t.split('"').length < 3) return t;
                  let n = ["@import", `url(${JSON.stringify(e.href)})`];
                  return (
                    "" === e.layerName
                      ? n.push("layer")
                      : e.layerName && n.push(`layer(${e.layerName})`),
                    e.supportsText && n.push(`supports(${e.supportsText})`),
                    e.media.length && n.push(e.media.mediaText),
                    n.join(" ") + ";"
                  );
                })(e);
            } catch (e) {}
          else if ("selectorText" in e) {
            let t = e.cssText,
              n = e.selectorText.includes(":"),
              r = "string" == typeof e.style.all && e.style.all;
            if (
              (r &&
                (t = (function (e) {
                  let t = "";
                  for (let n = 0; n < e.style.length; n++) {
                    let r = e.style,
                      i = r[n],
                      o = r.getPropertyPriority(i);
                    t += `${i}:${r.getPropertyValue(i)}${o ? " !important" : ""};`;
                  }
                  return `${e.selectorText} { ${t} }`;
                })(e)),
              n &&
                (t = t.replace(
                  /(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm,
                  "$1\\$2",
                )),
              n || r)
            )
              return t;
          }
          return t || e.cssText;
        }
        ((p = b || (b = {}))[(p.Document = 0)] = "Document"),
          (p[(p.DocumentType = 1)] = "DocumentType"),
          (p[(p.Element = 2)] = "Element"),
          (p[(p.Text = 3)] = "Text"),
          (p[(p.CDATA = 4)] = "CDATA"),
          (p[(p.Comment = 5)] = "Comment");
        class el {
          constructor() {
            (this.idNodeMap = new Map()), (this.nodeMetaMap = new WeakMap());
          }
          getId(e) {
            return e
              ? en(
                  er([
                    this,
                    "access",
                    (e) => e.getMeta,
                    "call",
                    (t) => t(e),
                    "optionalAccess",
                    (e) => e.id,
                  ]),
                  () => -1,
                )
              : -1;
          }
          getNode(e) {
            return this.idNodeMap.get(e) || null;
          }
          getIds() {
            return Array.from(this.idNodeMap.keys());
          }
          getMeta(e) {
            return this.nodeMetaMap.get(e) || null;
          }
          removeNodeFromMap(e) {
            let t = this.getId(e);
            this.idNodeMap.delete(t),
              e.childNodes &&
                e.childNodes.forEach((e) => this.removeNodeFromMap(e));
          }
          has(e) {
            return this.idNodeMap.has(e);
          }
          hasNode(e) {
            return this.nodeMetaMap.has(e);
          }
          add(e, t) {
            let n = t.id;
            this.idNodeMap.set(n, e), this.nodeMetaMap.set(e, t);
          }
          replace(e, t) {
            let n = this.getNode(e);
            if (n) {
              let e = this.nodeMetaMap.get(n);
              e && this.nodeMetaMap.set(t, e);
            }
            this.idNodeMap.set(e, t);
          }
          reset() {
            (this.idNodeMap = new Map()), (this.nodeMetaMap = new WeakMap());
          }
        }
        function ec({ maskInputOptions: e, tagName: t, type: n }) {
          return (
            "OPTION" === t && (t = "SELECT"),
            !!(
              e[t.toLowerCase()] ||
              (n && e[n]) ||
              "password" === n ||
              ("INPUT" === t && !n && e.text)
            )
          );
        }
        function eu({ isMasked: e, element: t, value: n, maskInputFn: r }) {
          let i = n || "";
          return e ? (r && (i = r(i, t)), "*".repeat(i.length)) : i;
        }
        function ed(e) {
          return e.toLowerCase();
        }
        function ep(e) {
          return e.toUpperCase();
        }
        let eh = "__rrweb_original__";
        function ef(e) {
          let t = e.type;
          return e.hasAttribute("data-rr-is-password")
            ? "password"
            : t
              ? ed(t)
              : null;
        }
        function em(e, t, n) {
          return "INPUT" === t && ("radio" === n || "checkbox" === n)
            ? e.getAttribute("value") || ""
            : e.value;
        }
        function eg(e, t) {
          let n;
          try {
            n = new URL(
              e,
              en(t, () => window.location.href),
            );
          } catch (e) {
            return null;
          }
          return en(
            er([
              n.pathname.match(/\.([0-9a-z]+)(?:$)/i),
              "optionalAccess",
              (e) => e[1],
            ]),
            () => null,
          );
        }
        let e_ = {};
        function ev(e) {
          let t = e_[e];
          if (t) return t;
          let n = window.document,
            r = window[e];
          if (n && "function" == typeof n.createElement)
            try {
              let t = n.createElement("iframe");
              (t.hidden = !0), n.head.appendChild(t);
              let i = t.contentWindow;
              i && i[e] && (r = i[e]), n.head.removeChild(t);
            } catch (e) {}
          return (e_[e] = r.bind(window));
        }
        function ey(...e) {
          return ev("setTimeout")(...e);
        }
        function eb(...e) {
          return ev("clearTimeout")(...e);
        }
        function eS(e) {
          try {
            return e.contentDocument;
          } catch (e) {}
        }
        let ew = 1,
          eE = RegExp("[^a-z0-9-_:]");
        function ek() {
          return ew++;
        }
        let ex = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
          eC = /^(?:[a-z+]+:)?\/\//i,
          eT = /^www\..*/i,
          eI = /^(data:)([^,]*),(.*)/i;
        function eM(e, t) {
          return (e || "").replace(ex, (e, n, r, i, o, s) => {
            let a = r || o || s,
              l = n || i || "";
            if (!a) return e;
            if (eC.test(a) || eT.test(a) || eI.test(a))
              return `url(${l}${a}${l})`;
            if ("/" === a[0])
              return `url(${l}${(t.indexOf("//") > -1 ? t.split("/").slice(0, 3).join("/") : t.split("/")[0]).split("?")[0] + a}${l})`;
            let c = t.split("/"),
              u = a.split("/");
            for (let e of (c.pop(), u))
              if ("." === e) continue;
              else ".." === e ? c.pop() : c.push(e);
            return `url(${l}${c.join("/")}${l})`;
          });
        }
        let eO = /^[^ \t\n\r\u000c]+/,
          eD = /^[, \t\n\r\u000c]+/,
          eR = new WeakMap();
        function eA(e, t) {
          return t && "" !== t.trim() ? eN(e, t) : t;
        }
        function eN(e, t) {
          let n = eR.get(e);
          if ((n || ((n = e.createElement("a")), eR.set(e, n)), t)) {
            if (t.startsWith("blob:") || t.startsWith("data:")) return t;
          } else t = "";
          return n.setAttribute("href", t), n.href;
        }
        function eL(e, t, n, r, i, o) {
          if (!r) return r;
          if (
            "src" === n ||
            ("href" === n && ("use" !== t || "#" !== r[0])) ||
            ("xlink:href" === n && "#" !== r[0])
          )
            return eA(e, r);
          if ("background" === n && ("table" === t || "td" === t || "th" === t))
            return eA(e, r);
          if ("srcset" === n)
            return (function (e, t) {
              if ("" === t.trim()) return t;
              let n = 0;
              function r(e) {
                let r,
                  i = e.exec(t.substring(n));
                return i ? ((r = i[0]), (n += r.length), r) : "";
              }
              let i = [];
              for (; r(eD), !(n >= t.length); ) {
                let o = r(eO);
                if ("," === o.slice(-1))
                  (o = eA(e, o.substring(0, o.length - 1))), i.push(o);
                else {
                  let r = "";
                  o = eA(e, o);
                  let s = !1;
                  for (;;) {
                    let e = t.charAt(n);
                    if ("" === e) {
                      i.push((o + r).trim());
                      break;
                    }
                    if (s) ")" === e && (s = !1);
                    else if ("," === e) {
                      (n += 1), i.push((o + r).trim());
                      break;
                    } else "(" === e && (s = !0);
                    (r += e), (n += 1);
                  }
                }
              }
              return i.join(", ");
            })(e, r);
          if ("style" === n) return eM(r, eN(e));
          else if ("object" === t && "data" === n) return eA(e, r);
          return "function" == typeof o ? o(n, r, i) : r;
        }
        function eP(e, t, n) {
          return ("video" === e || "audio" === e) && "autoplay" === t;
        }
        function eF(e, t, n = 1 / 0, r = 0) {
          return !e || e.nodeType !== e.ELEMENT_NODE || r > n
            ? -1
            : t(e)
              ? r
              : eF(e.parentNode, t, n, r + 1);
        }
        function ej(e, t) {
          return (n) => {
            if (null === n) return !1;
            try {
              if (e) {
                if ("string" == typeof e) {
                  if (n.matches(`.${e}`)) return !0;
                } else if (
                  (function (e, t) {
                    for (let n = e.classList.length; n--; ) {
                      let r = e.classList[n];
                      if (t.test(r)) return !0;
                    }
                    return !1;
                  })(n, e)
                )
                  return !0;
              }
              if (t && n.matches(t)) return !0;
              return !1;
            } catch (e) {
              return !1;
            }
          };
        }
        function e$(e, t, n, r, i, o) {
          try {
            let s = e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
            if (null === s) return !1;
            if ("INPUT" === s.tagName) {
              let e = s.getAttribute("autocomplete");
              if (
                [
                  "current-password",
                  "new-password",
                  "cc-number",
                  "cc-exp",
                  "cc-exp-month",
                  "cc-exp-year",
                  "cc-csc",
                ].includes(e)
              )
                return !0;
            }
            let a = -1,
              l = -1;
            if (o) {
              if ((l = eF(s, ej(r, i))) < 0) return !0;
              a = eF(s, ej(t, n), l >= 0 ? l : 1 / 0);
            } else {
              if ((a = eF(s, ej(t, n))) < 0) return !1;
              l = eF(s, ej(r, i), a >= 0 ? a : 1 / 0);
            }
            return a >= 0 ? !(l >= 0) || a <= l : !(l >= 0) && !!o;
          } catch (e) {}
          return !!o;
        }
        function eU(e) {
          return null == e ? "" : e.toLowerCase();
        }
        function eB(e, t) {
          let n,
            {
              doc: o,
              mirror: s,
              blockClass: a,
              blockSelector: l,
              unblockSelector: c,
              maskAllText: u,
              maskTextClass: d,
              unmaskTextClass: p,
              maskTextSelector: h,
              unmaskTextSelector: f,
              skipChild: m = !1,
              inlineStylesheet: g = !0,
              maskInputOptions: _ = {},
              maskAttributeFn: v,
              maskTextFn: y,
              maskInputFn: S,
              slimDOMOptions: w,
              dataURLOptions: E = {},
              inlineImages: k = !1,
              recordCanvas: x = !1,
              onSerialize: C,
              onIframeLoad: T,
              iframeLoadTimeout: I = 5e3,
              onStylesheetLoad: M,
              stylesheetLoadTimeout: O = 5e3,
              keepIframeSrcFn: D = () => !1,
              newlyAddedElement: R = !1,
            } = t,
            { preserveWhiteSpace: A = !0 } = t,
            N = (function (e, t) {
              let {
                  doc: n,
                  mirror: o,
                  blockClass: s,
                  blockSelector: a,
                  unblockSelector: l,
                  maskAllText: c,
                  maskAttributeFn: u,
                  maskTextClass: d,
                  unmaskTextClass: p,
                  maskTextSelector: h,
                  unmaskTextSelector: f,
                  inlineStylesheet: m,
                  maskInputOptions: g = {},
                  maskTextFn: _,
                  maskInputFn: v,
                  dataURLOptions: y = {},
                  inlineImages: S,
                  recordCanvas: w,
                  keepIframeSrcFn: E,
                  newlyAddedElement: k = !1,
                } = t,
                x = (function (e, t) {
                  if (!t.hasNode(e)) return;
                  let n = t.getId(e);
                  return 1 === n ? void 0 : n;
                })(n, o);
              switch (e.nodeType) {
                case e.DOCUMENT_NODE:
                  if ("CSS1Compat" !== e.compatMode)
                    return {
                      type: b.Document,
                      childNodes: [],
                      compatMode: e.compatMode,
                    };
                  return { type: b.Document, childNodes: [] };
                case e.DOCUMENT_TYPE_NODE:
                  return {
                    type: b.DocumentType,
                    name: e.name,
                    publicId: e.publicId,
                    systemId: e.systemId,
                    rootId: x,
                  };
                case e.ELEMENT_NODE:
                  return (function (e, t) {
                    let n,
                      {
                        doc: o,
                        blockClass: s,
                        blockSelector: a,
                        unblockSelector: l,
                        inlineStylesheet: c,
                        maskInputOptions: u = {},
                        maskAttributeFn: d,
                        maskInputFn: p,
                        dataURLOptions: h = {},
                        inlineImages: f,
                        recordCanvas: m,
                        keepIframeSrcFn: g,
                        newlyAddedElement: _ = !1,
                        rootId: v,
                        maskAllText: y,
                        maskTextClass: S,
                        unmaskTextClass: w,
                        maskTextSelector: E,
                        unmaskTextSelector: k,
                      } = t,
                      x = (function (e, t, n, r) {
                        try {
                          if (r && e.matches(r)) return !1;
                          if ("string" == typeof t) {
                            if (e.classList.contains(t)) return !0;
                          } else
                            for (let n = e.classList.length; n--; ) {
                              let r = e.classList[n];
                              if (t.test(r)) return !0;
                            }
                          if (n) return e.matches(n);
                        } catch (e) {}
                        return !1;
                      })(e, s, a, l),
                      C = (function (e) {
                        if (e instanceof HTMLFormElement) return "form";
                        let t = ed(e.tagName);
                        return eE.test(t) ? "div" : t;
                      })(e),
                      T = {},
                      I = e.attributes.length;
                    for (let t = 0; t < I; t++) {
                      let n = e.attributes[t];
                      n.name &&
                        !eP(C, n.name, n.value) &&
                        (T[n.name] = eL(o, C, ed(n.name), n.value, e, d));
                    }
                    if ("link" === C && c) {
                      let t = Array.from(o.styleSheets).find(
                          (t) => t.href === e.href,
                        ),
                        n = null;
                      t && (n = es(t)),
                        n &&
                          ((T.rel = null),
                          (T.href = null),
                          (T.crossorigin = null),
                          (T._cssText = eM(n, t.href)));
                    }
                    if (
                      "style" === C &&
                      e.sheet &&
                      !(e.innerText || e.textContent || "").trim().length
                    ) {
                      let t = es(e.sheet);
                      t && (T._cssText = eM(t, eN(o)));
                    }
                    if (
                      "input" === C ||
                      "textarea" === C ||
                      "select" === C ||
                      "option" === C
                    ) {
                      let t = ef(e),
                        n = em(e, ep(C), t),
                        r = e.checked;
                      if ("submit" !== t && "button" !== t && n) {
                        let r = e$(
                          e,
                          S,
                          E,
                          w,
                          k,
                          ec({ type: t, tagName: ep(C), maskInputOptions: u }),
                        );
                        T.value = eu({
                          isMasked: r,
                          element: e,
                          value: n,
                          maskInputFn: p,
                        });
                      }
                      r && (T.checked = r);
                    }
                    if (
                      ("option" === C &&
                        (e.selected && !u.select
                          ? (T.selected = !0)
                          : delete T.selected),
                      "canvas" === C && m)
                    ) {
                      if ("2d" === e.__context)
                        !(function (e) {
                          let t = e.getContext("2d");
                          if (!t) return !0;
                          for (let n = 0; n < e.width; n += 50)
                            for (let r = 0; r < e.height; r += 50) {
                              let i = t.getImageData;
                              if (
                                new Uint32Array(
                                  (eh in i ? i[eh] : i).call(
                                    t,
                                    n,
                                    r,
                                    Math.min(50, e.width - n),
                                    Math.min(50, e.height - r),
                                  ).data.buffer,
                                ).some((e) => 0 !== e)
                              )
                                return !1;
                            }
                          return !0;
                        })(e) &&
                          (T.rr_dataURL = e.toDataURL(h.type, h.quality));
                      else if (!("__context" in e)) {
                        let t = e.toDataURL(h.type, h.quality),
                          n = o.createElement("canvas");
                        (n.width = e.width),
                          (n.height = e.height),
                          t !== n.toDataURL(h.type, h.quality) &&
                            (T.rr_dataURL = t);
                      }
                    }
                    if ("img" === C && f) {
                      r ||
                        (i = (r = o.createElement("canvas")).getContext("2d"));
                      let t =
                          e.currentSrc ||
                          e.getAttribute("src") ||
                          "<unknown-src>",
                        n = e.crossOrigin,
                        s = () => {
                          e.removeEventListener("load", s);
                          try {
                            (r.width = e.naturalWidth),
                              (r.height = e.naturalHeight),
                              i.drawImage(e, 0, 0),
                              (T.rr_dataURL = r.toDataURL(h.type, h.quality));
                          } catch (n) {
                            if ("anonymous" !== e.crossOrigin) {
                              (e.crossOrigin = "anonymous"),
                                e.complete && 0 !== e.naturalWidth
                                  ? s()
                                  : e.addEventListener("load", s);
                              return;
                            }
                            console.warn(
                              `Cannot inline img src=${t}! Error: ${n}`,
                            );
                          }
                          "anonymous" === e.crossOrigin &&
                            (n
                              ? (T.crossOrigin = n)
                              : e.removeAttribute("crossorigin"));
                        };
                      e.complete && 0 !== e.naturalWidth
                        ? s()
                        : e.addEventListener("load", s);
                    }
                    if (
                      (("audio" === C || "video" === C) &&
                        ((T.rr_mediaState = e.paused ? "paused" : "played"),
                        (T.rr_mediaCurrentTime = e.currentTime)),
                      !_ &&
                        (e.scrollLeft && (T.rr_scrollLeft = e.scrollLeft),
                        e.scrollTop && (T.rr_scrollTop = e.scrollTop)),
                      x)
                    ) {
                      let { width: t, height: n } = e.getBoundingClientRect();
                      T = {
                        class: T.class,
                        rr_width: `${t}px`,
                        rr_height: `${n}px`,
                      };
                    }
                    "iframe" !== C ||
                      g(T.src) ||
                      (x || eS(e) || (T.rr_src = T.src), delete T.src);
                    try {
                      customElements.get(C) && (n = !0);
                    } catch (e) {}
                    return {
                      type: b.Element,
                      tagName: C,
                      attributes: T,
                      childNodes: [],
                      isSVG:
                        !!("svg" === e.tagName || e.ownerSVGElement) || void 0,
                      needBlock: x,
                      rootId: v,
                      isCustom: n,
                    };
                  })(e, {
                    doc: n,
                    blockClass: s,
                    blockSelector: a,
                    unblockSelector: l,
                    inlineStylesheet: m,
                    maskAttributeFn: u,
                    maskInputOptions: g,
                    maskInputFn: v,
                    dataURLOptions: y,
                    inlineImages: S,
                    recordCanvas: w,
                    keepIframeSrcFn: E,
                    newlyAddedElement: k,
                    rootId: x,
                    maskAllText: c,
                    maskTextClass: d,
                    unmaskTextClass: p,
                    maskTextSelector: h,
                    unmaskTextSelector: f,
                  });
                case e.TEXT_NODE:
                  return (function (e, t) {
                    let {
                        maskAllText: n,
                        maskTextClass: r,
                        unmaskTextClass: i,
                        maskTextSelector: o,
                        unmaskTextSelector: s,
                        maskTextFn: a,
                        maskInputOptions: l,
                        maskInputFn: c,
                        rootId: u,
                      } = t,
                      d = e.parentNode && e.parentNode.tagName,
                      p = e.textContent,
                      h = "STYLE" === d || void 0,
                      f = "SCRIPT" === d || void 0,
                      m = "TEXTAREA" === d || void 0;
                    if (h && p) {
                      try {
                        e.nextSibling ||
                          e.previousSibling ||
                          (er([
                            e,
                            "access",
                            (e) => e.parentNode,
                            "access",
                            (e) => e.sheet,
                            "optionalAccess",
                            (e) => e.cssRules,
                          ]) &&
                            (p = es(e.parentNode.sheet)));
                      } catch (t) {
                        console.warn(
                          `Cannot get CSS styles from text's parentNode. Error: ${t}`,
                          e,
                        );
                      }
                      p = eM(p, eN(t.doc));
                    }
                    f && (p = "SCRIPT_PLACEHOLDER");
                    let g = e$(e, r, o, i, s, n);
                    return (
                      h ||
                        f ||
                        m ||
                        !p ||
                        !g ||
                        (p = a
                          ? a(p, e.parentElement)
                          : p.replace(/[\S]/g, "*")),
                      m &&
                        p &&
                        (l.textarea || g) &&
                        (p = c ? c(p, e.parentNode) : p.replace(/[\S]/g, "*")),
                      "OPTION" === d &&
                        p &&
                        (p = eu({
                          isMasked: e$(
                            e,
                            r,
                            o,
                            i,
                            s,
                            ec({ type: null, tagName: d, maskInputOptions: l }),
                          ),
                          element: e,
                          value: p,
                          maskInputFn: c,
                        })),
                      {
                        type: b.Text,
                        textContent: p || "",
                        isStyle: h,
                        rootId: u,
                      }
                    );
                  })(e, {
                    doc: n,
                    maskAllText: c,
                    maskTextClass: d,
                    unmaskTextClass: p,
                    maskTextSelector: h,
                    unmaskTextSelector: f,
                    maskTextFn: _,
                    maskInputOptions: g,
                    maskInputFn: v,
                    rootId: x,
                  });
                case e.CDATA_SECTION_NODE:
                  return { type: b.CDATA, textContent: "", rootId: x };
                case e.COMMENT_NODE:
                  return {
                    type: b.Comment,
                    textContent: e.textContent || "",
                    rootId: x,
                  };
                default:
                  return !1;
              }
            })(e, {
              doc: o,
              mirror: s,
              blockClass: a,
              blockSelector: l,
              maskAllText: u,
              unblockSelector: c,
              maskTextClass: d,
              unmaskTextClass: p,
              maskTextSelector: h,
              unmaskTextSelector: f,
              inlineStylesheet: g,
              maskInputOptions: _,
              maskAttributeFn: v,
              maskTextFn: y,
              maskInputFn: S,
              dataURLOptions: E,
              inlineImages: k,
              recordCanvas: x,
              keepIframeSrcFn: D,
              newlyAddedElement: R,
            });
          if (!N) return console.warn(e, "not serialized"), null;
          n = s.hasNode(e)
            ? s.getId(e)
            : !(function (e, t) {
                  if (t.comment && e.type === b.Comment) return !0;
                  if (e.type === b.Element) {
                    if (
                      t.script &&
                      ("script" === e.tagName ||
                        ("link" === e.tagName &&
                          ("preload" === e.attributes.rel ||
                            "modulepreload" === e.attributes.rel)) ||
                        ("link" === e.tagName &&
                          "prefetch" === e.attributes.rel &&
                          "string" == typeof e.attributes.href &&
                          "js" === eg(e.attributes.href)))
                    )
                      return !0;
                    else if (
                      t.headFavicon &&
                      (("link" === e.tagName &&
                        "shortcut icon" === e.attributes.rel) ||
                        ("meta" === e.tagName &&
                          (eU(e.attributes.name).match(
                            /^msapplication-tile(image|color)$/,
                          ) ||
                            "application-name" === eU(e.attributes.name) ||
                            "icon" === eU(e.attributes.rel) ||
                            "apple-touch-icon" === eU(e.attributes.rel) ||
                            "shortcut icon" === eU(e.attributes.rel))))
                    )
                      return !0;
                    else if ("meta" === e.tagName) {
                      if (
                        t.headMetaDescKeywords &&
                        eU(e.attributes.name).match(/^description|keywords$/)
                      )
                        return !0;
                      else if (
                        t.headMetaSocial &&
                        (eU(e.attributes.property).match(/^(og|twitter|fb):/) ||
                          eU(e.attributes.name).match(/^(og|twitter):/) ||
                          "pinterest" === eU(e.attributes.name))
                      )
                        return !0;
                      else if (
                        t.headMetaRobots &&
                        ("robots" === eU(e.attributes.name) ||
                          "googlebot" === eU(e.attributes.name) ||
                          "bingbot" === eU(e.attributes.name))
                      )
                        return !0;
                      else if (
                        t.headMetaHttpEquiv &&
                        void 0 !== e.attributes["http-equiv"]
                      )
                        return !0;
                      else if (
                        t.headMetaAuthorship &&
                        ("author" === eU(e.attributes.name) ||
                          "generator" === eU(e.attributes.name) ||
                          "framework" === eU(e.attributes.name) ||
                          "publisher" === eU(e.attributes.name) ||
                          "progid" === eU(e.attributes.name) ||
                          eU(e.attributes.property).match(/^article:/) ||
                          eU(e.attributes.property).match(/^product:/))
                      )
                        return !0;
                      else if (
                        t.headMetaVerification &&
                        ("google-site-verification" === eU(e.attributes.name) ||
                          "yandex-verification" === eU(e.attributes.name) ||
                          "csrf-token" === eU(e.attributes.name) ||
                          "p:domain_verify" === eU(e.attributes.name) ||
                          "verify-v1" === eU(e.attributes.name) ||
                          "verification" === eU(e.attributes.name) ||
                          "shopify-checkout-api-token" ===
                            eU(e.attributes.name))
                      )
                        return !0;
                    }
                  }
                  return !1;
                })(N, w) &&
                (A ||
                  N.type !== b.Text ||
                  N.isStyle ||
                  N.textContent.replace(/^\s+|\s+$/gm, "").length)
              ? ek()
              : -2;
          let L = Object.assign(N, { id: n });
          if ((s.add(e, L), -2 === n)) return null;
          C && C(e);
          let P = !m;
          if (L.type === b.Element) {
            (P = P && !L.needBlock), delete L.needBlock;
            let t = e.shadowRoot;
            t && eo(t) && (L.isShadowHost = !0);
          }
          if ((L.type === b.Document || L.type === b.Element) && P) {
            w.headWhitespace &&
              L.type === b.Element &&
              "head" === L.tagName &&
              (A = !1);
            let t = {
              doc: o,
              mirror: s,
              blockClass: a,
              blockSelector: l,
              maskAllText: u,
              unblockSelector: c,
              maskTextClass: d,
              unmaskTextClass: p,
              maskTextSelector: h,
              unmaskTextSelector: f,
              skipChild: m,
              inlineStylesheet: g,
              maskInputOptions: _,
              maskAttributeFn: v,
              maskTextFn: y,
              maskInputFn: S,
              slimDOMOptions: w,
              dataURLOptions: E,
              inlineImages: k,
              recordCanvas: x,
              preserveWhiteSpace: A,
              onSerialize: C,
              onIframeLoad: T,
              iframeLoadTimeout: I,
              onStylesheetLoad: M,
              stylesheetLoadTimeout: O,
              keepIframeSrcFn: D,
            };
            for (let n of Array.from(e.childNodes)) {
              let e = eB(n, t);
              e && L.childNodes.push(e);
            }
            if (e.nodeType === e.ELEMENT_NODE && e.shadowRoot)
              for (let n of Array.from(e.shadowRoot.childNodes)) {
                let r = eB(n, t);
                r &&
                  (eo(e.shadowRoot) && (r.isShadow = !0), L.childNodes.push(r));
              }
          }
          return (
            e.parentNode &&
              ei(e.parentNode) &&
              eo(e.parentNode) &&
              (L.isShadow = !0),
            L.type === b.Element &&
              "iframe" === L.tagName &&
              (function (e, t, n) {
                let r,
                  i = e.contentWindow;
                if (!i) return;
                let o = !1;
                try {
                  r = i.document.readyState;
                } catch (e) {
                  return;
                }
                if ("complete" !== r) {
                  let r = ey(() => {
                    o || (t(), (o = !0));
                  }, n);
                  e.addEventListener("load", () => {
                    eb(r), (o = !0), t();
                  });
                  return;
                }
                let s = "about:blank";
                if (i.location.href !== s || e.src === s || "" === e.src)
                  return ey(t, 0), e.addEventListener("load", t);
                e.addEventListener("load", t);
              })(
                e,
                () => {
                  let t = eS(e);
                  if (t && T) {
                    let n = eB(t, {
                      doc: t,
                      mirror: s,
                      blockClass: a,
                      blockSelector: l,
                      unblockSelector: c,
                      maskAllText: u,
                      maskTextClass: d,
                      unmaskTextClass: p,
                      maskTextSelector: h,
                      unmaskTextSelector: f,
                      skipChild: !1,
                      inlineStylesheet: g,
                      maskInputOptions: _,
                      maskAttributeFn: v,
                      maskTextFn: y,
                      maskInputFn: S,
                      slimDOMOptions: w,
                      dataURLOptions: E,
                      inlineImages: k,
                      recordCanvas: x,
                      preserveWhiteSpace: A,
                      onSerialize: C,
                      onIframeLoad: T,
                      iframeLoadTimeout: I,
                      onStylesheetLoad: M,
                      stylesheetLoadTimeout: O,
                      keepIframeSrcFn: D,
                    });
                    n && T(e, n);
                  }
                },
                I,
              ),
            L.type === b.Element &&
              "link" === L.tagName &&
              "string" == typeof L.attributes.rel &&
              ("stylesheet" === L.attributes.rel ||
                ("preload" === L.attributes.rel &&
                  "string" == typeof L.attributes.href &&
                  "css" === eg(L.attributes.href))) &&
              (function (e, t, n) {
                let r,
                  i = !1;
                try {
                  r = e.sheet;
                } catch (e) {
                  return;
                }
                if (r) return;
                let o = ey(() => {
                  i || (t(), (i = !0));
                }, n);
                e.addEventListener("load", () => {
                  eb(o), (i = !0), t();
                });
              })(
                e,
                () => {
                  if (M) {
                    let t = eB(e, {
                      doc: o,
                      mirror: s,
                      blockClass: a,
                      blockSelector: l,
                      unblockSelector: c,
                      maskAllText: u,
                      maskTextClass: d,
                      unmaskTextClass: p,
                      maskTextSelector: h,
                      unmaskTextSelector: f,
                      skipChild: !1,
                      inlineStylesheet: g,
                      maskInputOptions: _,
                      maskAttributeFn: v,
                      maskTextFn: y,
                      maskInputFn: S,
                      slimDOMOptions: w,
                      dataURLOptions: E,
                      inlineImages: k,
                      recordCanvas: x,
                      preserveWhiteSpace: A,
                      onSerialize: C,
                      onIframeLoad: T,
                      iframeLoadTimeout: I,
                      onStylesheetLoad: M,
                      stylesheetLoadTimeout: O,
                      keepIframeSrcFn: D,
                    });
                    t && M(e, t);
                  }
                },
                O,
              ),
            L
          );
        }
        function ez(e) {
          let t,
            n = e[0],
            r = 1;
          for (; r < e.length; ) {
            let i = e[r],
              o = e[r + 1];
            if (
              ((r += 2),
              ("optionalAccess" === i || "optionalCall" === i) && null == n)
            )
              return;
            "access" === i || "optionalAccess" === i
              ? ((t = n), (n = o(n)))
              : ("call" === i || "optionalCall" === i) &&
                ((n = o((...e) => n.call(t, ...e))), (t = void 0));
          }
          return n;
        }
        function eH(e, t, n = document) {
          let r = { capture: !0, passive: !0 };
          return (
            n.addEventListener(e, t, r), () => n.removeEventListener(e, t, r)
          );
        }
        let eq =
            "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.",
          eW = {
            map: {},
            getId: () => (console.error(eq), -1),
            getNode: () => (console.error(eq), null),
            removeNodeFromMap() {
              console.error(eq);
            },
            has: () => (console.error(eq), !1),
            reset() {
              console.error(eq);
            },
          };
        function eK(e, t, n = {}) {
          let r = null,
            i = 0;
          return function (...o) {
            let s = Date.now();
            i || !1 !== n.leading || (i = s);
            let a = t - (s - i),
              l = this;
            a <= 0 || a > t
              ? (r &&
                  ((function (...e) {
                    e9("clearTimeout")(...e);
                  })(r),
                  (r = null)),
                (i = s),
                e.apply(l, o))
              : r ||
                !1 === n.trailing ||
                (r = te(() => {
                  (i = !1 === n.leading ? 0 : Date.now()),
                    (r = null),
                    e.apply(l, o);
                }, a));
          };
        }
        function eX(e, t, n) {
          try {
            if (!(t in e)) return () => {};
            let r = e[t],
              i = n(r);
            return (
              "function" == typeof i &&
                ((i.prototype = i.prototype || {}),
                Object.defineProperties(i, {
                  __rrweb_original__: { enumerable: !1, value: r },
                })),
              (e[t] = i),
              () => {
                e[t] = r;
              }
            );
          } catch (e) {
            return () => {};
          }
        }
        "u" > typeof window &&
          window.Proxy &&
          window.Reflect &&
          (eW = new Proxy(eW, {
            get: (e, t, n) => (
              "map" === t && console.error(eq), Reflect.get(e, t, n)
            ),
          }));
        let eV = Date.now;
        function eG(e) {
          let t = e.document;
          return {
            left: t.scrollingElement
              ? t.scrollingElement.scrollLeft
              : void 0 !== e.pageXOffset
                ? e.pageXOffset
                : ez([
                    t,
                    "optionalAccess",
                    (e) => e.documentElement,
                    "access",
                    (e) => e.scrollLeft,
                  ]) ||
                  ez([
                    t,
                    "optionalAccess",
                    (e) => e.body,
                    "optionalAccess",
                    (e) => e.parentElement,
                    "optionalAccess",
                    (e) => e.scrollLeft,
                  ]) ||
                  ez([
                    t,
                    "optionalAccess",
                    (e) => e.body,
                    "optionalAccess",
                    (e) => e.scrollLeft,
                  ]) ||
                  0,
            top: t.scrollingElement
              ? t.scrollingElement.scrollTop
              : void 0 !== e.pageYOffset
                ? e.pageYOffset
                : ez([
                    t,
                    "optionalAccess",
                    (e) => e.documentElement,
                    "access",
                    (e) => e.scrollTop,
                  ]) ||
                  ez([
                    t,
                    "optionalAccess",
                    (e) => e.body,
                    "optionalAccess",
                    (e) => e.parentElement,
                    "optionalAccess",
                    (e) => e.scrollTop,
                  ]) ||
                  ez([
                    t,
                    "optionalAccess",
                    (e) => e.body,
                    "optionalAccess",
                    (e) => e.scrollTop,
                  ]) ||
                  0,
          };
        }
        function eJ() {
          return (
            window.innerHeight ||
            (document.documentElement &&
              document.documentElement.clientHeight) ||
            (document.body && document.body.clientHeight)
          );
        }
        function eY() {
          return (
            window.innerWidth ||
            (document.documentElement &&
              document.documentElement.clientWidth) ||
            (document.body && document.body.clientWidth)
          );
        }
        function eQ(e) {
          return e
            ? e.nodeType === e.ELEMENT_NODE
              ? e
              : e.parentElement
            : null;
        }
        function eZ(e, t, n, r, i) {
          if (!e) return !1;
          let o = eQ(e);
          if (!o) return !1;
          let s = ej(t, n);
          if (!i) {
            let e = r && o.matches(r);
            return s(o) && !e;
          }
          let a = eF(o, s),
            l = -1;
          return (
            !(a < 0) &&
            (r && (l = eF(o, ej(null, r))), (a > -1 && l < 0) || a < l)
          );
        }
        function e0(e, t) {
          return -2 === t.getId(e);
        }
        function e1(e) {
          return !!e.changedTouches;
        }
        function e2(e, t) {
          return !!("IFRAME" === e.nodeName && t.getMeta(e));
        }
        function e3(e, t) {
          return !!(
            "LINK" === e.nodeName &&
            e.nodeType === e.ELEMENT_NODE &&
            e.getAttribute &&
            "stylesheet" === e.getAttribute("rel") &&
            t.getMeta(e)
          );
        }
        function e6(e) {
          return !!ez([e, "optionalAccess", (e) => e.shadowRoot]);
        }
        /[1-9][0-9]{12}/.test(Date.now().toString()) ||
          (eV = () => new Date().getTime());
        class e8 {
          constructor() {
            (this.id = 1),
              (this.styleIDMap = new WeakMap()),
              (this.idStyleMap = new Map());
          }
          getId(e) {
            return (0, k.S)(this.styleIDMap.get(e), () => -1);
          }
          has(e) {
            return this.styleIDMap.has(e);
          }
          add(e, t) {
            let n;
            return this.has(e)
              ? this.getId(e)
              : ((n = void 0 === t ? this.id++ : t),
                this.styleIDMap.set(e, n),
                this.idStyleMap.set(n, e),
                n);
          }
          getStyle(e) {
            return this.idStyleMap.get(e) || null;
          }
          reset() {
            (this.styleIDMap = new WeakMap()),
              (this.idStyleMap = new Map()),
              (this.id = 1);
          }
          generateId() {
            return this.id++;
          }
        }
        function e4(e) {
          let t = null;
          return (
            ez([
              e,
              "access",
              (e) => e.getRootNode,
              "optionalCall",
              (e) => e(),
              "optionalAccess",
              (e) => e.nodeType,
            ]) === Node.DOCUMENT_FRAGMENT_NODE &&
              e.getRootNode().host &&
              (t = e.getRootNode().host),
            t
          );
        }
        function e5(e) {
          let t = e.ownerDocument;
          return (
            !!t &&
            (t.contains(e) ||
              (function (e) {
                let t = e.ownerDocument;
                if (!t) return !1;
                let n = (function (e) {
                  let t,
                    n = e;
                  for (; (t = e4(n)); ) n = t;
                  return n;
                })(e);
                return t.contains(n);
              })(e))
          );
        }
        let e7 = {};
        function e9(e) {
          let t = e7[e];
          if (t) return t;
          let n = window.document,
            r = window[e];
          if (n && "function" == typeof n.createElement)
            try {
              let t = n.createElement("iframe");
              (t.hidden = !0), n.head.appendChild(t);
              let i = t.contentWindow;
              i && i[e] && (r = i[e]), n.head.removeChild(t);
            } catch (e) {}
          return (e7[e] = r.bind(window));
        }
        function te(...e) {
          return e9("setTimeout")(...e);
        }
        var tt =
            (((h = tt || {})[(h.DomContentLoaded = 0)] = "DomContentLoaded"),
            (h[(h.Load = 1)] = "Load"),
            (h[(h.FullSnapshot = 2)] = "FullSnapshot"),
            (h[(h.IncrementalSnapshot = 3)] = "IncrementalSnapshot"),
            (h[(h.Meta = 4)] = "Meta"),
            (h[(h.Custom = 5)] = "Custom"),
            (h[(h.Plugin = 6)] = "Plugin"),
            h),
          tn =
            (((f = tn || {})[(f.Mutation = 0)] = "Mutation"),
            (f[(f.MouseMove = 1)] = "MouseMove"),
            (f[(f.MouseInteraction = 2)] = "MouseInteraction"),
            (f[(f.Scroll = 3)] = "Scroll"),
            (f[(f.ViewportResize = 4)] = "ViewportResize"),
            (f[(f.Input = 5)] = "Input"),
            (f[(f.TouchMove = 6)] = "TouchMove"),
            (f[(f.MediaInteraction = 7)] = "MediaInteraction"),
            (f[(f.StyleSheetRule = 8)] = "StyleSheetRule"),
            (f[(f.CanvasMutation = 9)] = "CanvasMutation"),
            (f[(f.Font = 10)] = "Font"),
            (f[(f.Log = 11)] = "Log"),
            (f[(f.Drag = 12)] = "Drag"),
            (f[(f.StyleDeclaration = 13)] = "StyleDeclaration"),
            (f[(f.Selection = 14)] = "Selection"),
            (f[(f.AdoptedStyleSheet = 15)] = "AdoptedStyleSheet"),
            (f[(f.CustomElement = 16)] = "CustomElement"),
            f),
          tr =
            (((m = tr || {})[(m.MouseUp = 0)] = "MouseUp"),
            (m[(m.MouseDown = 1)] = "MouseDown"),
            (m[(m.Click = 2)] = "Click"),
            (m[(m.ContextMenu = 3)] = "ContextMenu"),
            (m[(m.DblClick = 4)] = "DblClick"),
            (m[(m.Focus = 5)] = "Focus"),
            (m[(m.Blur = 6)] = "Blur"),
            (m[(m.TouchStart = 7)] = "TouchStart"),
            (m[(m.TouchMove_Departed = 8)] = "TouchMove_Departed"),
            (m[(m.TouchEnd = 9)] = "TouchEnd"),
            (m[(m.TouchCancel = 10)] = "TouchCancel"),
            m),
          ti =
            (((g = ti || {})[(g.Mouse = 0)] = "Mouse"),
            (g[(g.Pen = 1)] = "Pen"),
            (g[(g.Touch = 2)] = "Touch"),
            g);
        function to(e) {
          try {
            return e.contentDocument;
          } catch (e) {}
        }
        ((_ = S || (S = {}))[(_.Document = 0)] = "Document"),
          (_[(_.DocumentType = 1)] = "DocumentType"),
          (_[(_.Element = 2)] = "Element"),
          (_[(_.Text = 3)] = "Text"),
          (_[(_.CDATA = 4)] = "CDATA"),
          (_[(_.Comment = 5)] = "Comment"),
          ((v = w || (w = {}))[(v.PLACEHOLDER = 0)] = "PLACEHOLDER"),
          (v[(v.ELEMENT_NODE = 1)] = "ELEMENT_NODE"),
          (v[(v.ATTRIBUTE_NODE = 2)] = "ATTRIBUTE_NODE"),
          (v[(v.TEXT_NODE = 3)] = "TEXT_NODE"),
          (v[(v.CDATA_SECTION_NODE = 4)] = "CDATA_SECTION_NODE"),
          (v[(v.ENTITY_REFERENCE_NODE = 5)] = "ENTITY_REFERENCE_NODE"),
          (v[(v.ENTITY_NODE = 6)] = "ENTITY_NODE"),
          (v[(v.PROCESSING_INSTRUCTION_NODE = 7)] =
            "PROCESSING_INSTRUCTION_NODE"),
          (v[(v.COMMENT_NODE = 8)] = "COMMENT_NODE"),
          (v[(v.DOCUMENT_NODE = 9)] = "DOCUMENT_NODE"),
          (v[(v.DOCUMENT_TYPE_NODE = 10)] = "DOCUMENT_TYPE_NODE"),
          (v[(v.DOCUMENT_FRAGMENT_NODE = 11)] = "DOCUMENT_FRAGMENT_NODE");
        class ts {
          constructor() {
            (this.length = 0), (this.head = null), (this.tail = null);
          }
          get(e) {
            if (e >= this.length) throw Error("Position outside of list range");
            let t = this.head;
            for (let n = 0; n < e; n++)
              t =
                (function (e) {
                  let t,
                    n = e[0],
                    r = 1;
                  for (; r < e.length; ) {
                    let i = e[r],
                      o = e[r + 1];
                    if (
                      ((r += 2),
                      ("optionalAccess" === i || "optionalCall" === i) &&
                        null == n)
                    )
                      return;
                    "access" === i || "optionalAccess" === i
                      ? ((t = n), (n = o(n)))
                      : ("call" === i || "optionalCall" === i) &&
                        ((n = o((...e) => n.call(t, ...e))), (t = void 0));
                  }
                  return n;
                })([t, "optionalAccess", (e) => e.next]) || null;
            return t;
          }
          addNode(e) {
            let t = { value: e, previous: null, next: null };
            if (
              ((e.__ln = t), e.previousSibling && "__ln" in e.previousSibling)
            ) {
              let n = e.previousSibling.__ln.next;
              (t.next = n),
                (t.previous = e.previousSibling.__ln),
                (e.previousSibling.__ln.next = t),
                n && (n.previous = t);
            } else if (
              e.nextSibling &&
              "__ln" in e.nextSibling &&
              e.nextSibling.__ln.previous
            ) {
              let n = e.nextSibling.__ln.previous;
              (t.previous = n),
                (t.next = e.nextSibling.__ln),
                (e.nextSibling.__ln.previous = t),
                n && (n.next = t);
            } else
              this.head && (this.head.previous = t),
                (t.next = this.head),
                (this.head = t);
            null === t.next && (this.tail = t), this.length++;
          }
          removeNode(e) {
            let t = e.__ln;
            this.head &&
              (t.previous
                ? ((t.previous.next = t.next),
                  t.next
                    ? (t.next.previous = t.previous)
                    : (this.tail = t.previous))
                : ((this.head = t.next),
                  this.head ? (this.head.previous = null) : (this.tail = null)),
              e.__ln && delete e.__ln,
              this.length--);
          }
        }
        let ta = (e, t) => `${e}@${t}`;
        class tl {
          constructor() {
            (this.frozen = !1),
              (this.locked = !1),
              (this.texts = []),
              (this.attributes = []),
              (this.attributeMap = new WeakMap()),
              (this.removes = []),
              (this.mapRemoves = []),
              (this.movedMap = {}),
              (this.addedSet = new Set()),
              (this.movedSet = new Set()),
              (this.droppedSet = new Set()),
              (this.processMutations = (e) => {
                e.forEach(this.processMutation), this.emit();
              }),
              (this.emit = () => {
                if (this.frozen || this.locked) return;
                let e = [],
                  t = new Set(),
                  n = new ts(),
                  r = (e) => {
                    let t = e,
                      n = -2;
                    for (; -2 === n; )
                      n = (t = t && t.nextSibling) && this.mirror.getId(t);
                    return n;
                  },
                  i = (i) => {
                    if (!i.parentNode || !e5(i)) return;
                    let o = ei(i.parentNode)
                        ? this.mirror.getId(e4(i))
                        : this.mirror.getId(i.parentNode),
                      s = r(i);
                    if (-1 === o || -1 === s) return n.addNode(i);
                    let a = eB(i, {
                      doc: this.doc,
                      mirror: this.mirror,
                      blockClass: this.blockClass,
                      blockSelector: this.blockSelector,
                      maskAllText: this.maskAllText,
                      unblockSelector: this.unblockSelector,
                      maskTextClass: this.maskTextClass,
                      unmaskTextClass: this.unmaskTextClass,
                      maskTextSelector: this.maskTextSelector,
                      unmaskTextSelector: this.unmaskTextSelector,
                      skipChild: !0,
                      newlyAddedElement: !0,
                      inlineStylesheet: this.inlineStylesheet,
                      maskInputOptions: this.maskInputOptions,
                      maskAttributeFn: this.maskAttributeFn,
                      maskTextFn: this.maskTextFn,
                      maskInputFn: this.maskInputFn,
                      slimDOMOptions: this.slimDOMOptions,
                      dataURLOptions: this.dataURLOptions,
                      recordCanvas: this.recordCanvas,
                      inlineImages: this.inlineImages,
                      onSerialize: (e) => {
                        e2(e, this.mirror) &&
                          !eZ(
                            e,
                            this.blockClass,
                            this.blockSelector,
                            this.unblockSelector,
                            !1,
                          ) &&
                          this.iframeManager.addIframe(e),
                          e3(e, this.mirror) &&
                            this.stylesheetManager.trackLinkElement(e),
                          e6(i) &&
                            this.shadowDomManager.addShadowRoot(
                              i.shadowRoot,
                              this.doc,
                            );
                      },
                      onIframeLoad: (e, t) => {
                        eZ(
                          e,
                          this.blockClass,
                          this.blockSelector,
                          this.unblockSelector,
                          !1,
                        ) ||
                          (this.iframeManager.attachIframe(e, t),
                          e.contentWindow &&
                            this.canvasManager.addWindow(e.contentWindow),
                          this.shadowDomManager.observeAttachShadow(e));
                      },
                      onStylesheetLoad: (e, t) => {
                        this.stylesheetManager.attachLinkElement(e, t);
                      },
                    });
                    a &&
                      (e.push({ parentId: o, nextId: s, node: a }),
                      t.add(a.id));
                  };
                for (; this.mapRemoves.length; )
                  this.mirror.removeNodeFromMap(this.mapRemoves.shift());
                for (let e of this.movedSet)
                  (!tu(this.removes, e, this.mirror) ||
                    this.movedSet.has(e.parentNode)) &&
                    i(e);
                for (let e of this.addedSet)
                  td(this.droppedSet, e) || tu(this.removes, e, this.mirror)
                    ? td(this.movedSet, e)
                      ? i(e)
                      : this.droppedSet.add(e)
                    : i(e);
                let o = null;
                for (; n.length; ) {
                  let e = null;
                  if (o) {
                    let t = this.mirror.getId(o.value.parentNode),
                      n = r(o.value);
                    -1 !== t && -1 !== n && (e = o);
                  }
                  if (!e) {
                    let t = n.tail;
                    for (; t; ) {
                      let n = t;
                      if (((t = t.previous), n)) {
                        let t = this.mirror.getId(n.value.parentNode);
                        if (-1 === r(n.value)) continue;
                        if (-1 !== t) {
                          e = n;
                          break;
                        }
                        {
                          let t = n.value;
                          if (
                            t.parentNode &&
                            t.parentNode.nodeType ===
                              Node.DOCUMENT_FRAGMENT_NODE
                          ) {
                            let r = t.parentNode.host;
                            if (-1 !== this.mirror.getId(r)) {
                              e = n;
                              break;
                            }
                          }
                        }
                      }
                    }
                  }
                  if (!e) {
                    for (; n.head; ) n.removeNode(n.head.value);
                    break;
                  }
                  (o = e.previous), n.removeNode(e.value), i(e.value);
                }
                let s = {
                  texts: this.texts
                    .map((e) => ({
                      id: this.mirror.getId(e.node),
                      value: e.value,
                    }))
                    .filter((e) => !t.has(e.id))
                    .filter((e) => this.mirror.has(e.id)),
                  attributes: this.attributes
                    .map((e) => {
                      let { attributes: t } = e;
                      if ("string" == typeof t.style) {
                        let n = JSON.stringify(e.styleDiff),
                          r = JSON.stringify(e._unchangedStyles);
                        n.length < t.style.length &&
                          (n + r).split("var(").length ===
                            t.style.split("var(").length &&
                          (t.style = e.styleDiff);
                      }
                      return { id: this.mirror.getId(e.node), attributes: t };
                    })
                    .filter((e) => !t.has(e.id))
                    .filter((e) => this.mirror.has(e.id)),
                  removes: this.removes,
                  adds: e,
                };
                (s.texts.length ||
                  s.attributes.length ||
                  s.removes.length ||
                  s.adds.length) &&
                  ((this.texts = []),
                  (this.attributes = []),
                  (this.attributeMap = new WeakMap()),
                  (this.removes = []),
                  (this.addedSet = new Set()),
                  (this.movedSet = new Set()),
                  (this.droppedSet = new Set()),
                  (this.movedMap = {}),
                  this.mutationCb(s));
              }),
              (this.processMutation = (e) => {
                if (!e0(e.target, this.mirror))
                  switch (e.type) {
                    case "characterData": {
                      let t = e.target.textContent;
                      eZ(
                        e.target,
                        this.blockClass,
                        this.blockSelector,
                        this.unblockSelector,
                        !1,
                      ) ||
                        t === e.oldValue ||
                        this.texts.push({
                          value:
                            e$(
                              e.target,
                              this.maskTextClass,
                              this.maskTextSelector,
                              this.unmaskTextClass,
                              this.unmaskTextSelector,
                              this.maskAllText,
                            ) && t
                              ? this.maskTextFn
                                ? this.maskTextFn(t, eQ(e.target))
                                : t.replace(/[\S]/g, "*")
                              : t,
                          node: e.target,
                        });
                      break;
                    }
                    case "attributes": {
                      let t = e.target,
                        n = e.attributeName,
                        r = e.target.getAttribute(n);
                      if ("value" === n) {
                        let n = ef(t),
                          i = t.tagName;
                        r = em(t, i, n);
                        let o = ec({
                          maskInputOptions: this.maskInputOptions,
                          tagName: i,
                          type: n,
                        });
                        r = eu({
                          isMasked: e$(
                            e.target,
                            this.maskTextClass,
                            this.maskTextSelector,
                            this.unmaskTextClass,
                            this.unmaskTextSelector,
                            o,
                          ),
                          element: t,
                          value: r,
                          maskInputFn: this.maskInputFn,
                        });
                      }
                      if (
                        eZ(
                          e.target,
                          this.blockClass,
                          this.blockSelector,
                          this.unblockSelector,
                          !1,
                        ) ||
                        r === e.oldValue
                      )
                        return;
                      let i = this.attributeMap.get(e.target);
                      if (
                        "IFRAME" === t.tagName &&
                        "src" === n &&
                        !this.keepIframeSrcFn(r)
                      ) {
                        if (to(t)) return;
                        n = "rr_src";
                      }
                      if (
                        (i ||
                          ((i = {
                            node: e.target,
                            attributes: {},
                            styleDiff: {},
                            _unchangedStyles: {},
                          }),
                          this.attributes.push(i),
                          this.attributeMap.set(e.target, i)),
                        "type" === n &&
                          "INPUT" === t.tagName &&
                          "password" === (e.oldValue || "").toLowerCase() &&
                          t.setAttribute("data-rr-is-password", "true"),
                        !eP(t.tagName, n) &&
                          ((i.attributes[n] = eL(
                            this.doc,
                            ed(t.tagName),
                            ed(n),
                            r,
                            t,
                            this.maskAttributeFn,
                          )),
                          "style" === n))
                      ) {
                        if (!this.unattachedDoc)
                          try {
                            this.unattachedDoc =
                              document.implementation.createHTMLDocument();
                          } catch (e) {
                            this.unattachedDoc = this.doc;
                          }
                        let n = this.unattachedDoc.createElement("span");
                        for (let r of (e.oldValue &&
                          n.setAttribute("style", e.oldValue),
                        Array.from(t.style))) {
                          let e = t.style.getPropertyValue(r),
                            o = t.style.getPropertyPriority(r);
                          e !== n.style.getPropertyValue(r) ||
                          o !== n.style.getPropertyPriority(r)
                            ? "" === o
                              ? (i.styleDiff[r] = e)
                              : (i.styleDiff[r] = [e, o])
                            : (i._unchangedStyles[r] = [e, o]);
                        }
                        for (let e of Array.from(n.style))
                          "" === t.style.getPropertyValue(e) &&
                            (i.styleDiff[e] = !1);
                      }
                      break;
                    }
                    case "childList":
                      if (
                        eZ(
                          e.target,
                          this.blockClass,
                          this.blockSelector,
                          this.unblockSelector,
                          !0,
                        )
                      )
                        return;
                      e.addedNodes.forEach((t) => this.genAdds(t, e.target)),
                        e.removedNodes.forEach((t) => {
                          let n = this.mirror.getId(t),
                            r = ei(e.target)
                              ? this.mirror.getId(e.target.host)
                              : this.mirror.getId(e.target);
                          eZ(
                            e.target,
                            this.blockClass,
                            this.blockSelector,
                            this.unblockSelector,
                            !1,
                          ) ||
                            e0(t, this.mirror) ||
                            -1 === this.mirror.getId(t) ||
                            (this.addedSet.has(t)
                              ? (tc(this.addedSet, t), this.droppedSet.add(t))
                              : (this.addedSet.has(e.target) && -1 === n) ||
                                (function e(t, n) {
                                  if (ei(t)) return !1;
                                  let r = n.getId(t);
                                  return (
                                    !n.has(r) ||
                                    ((!t.parentNode ||
                                      t.parentNode.nodeType !==
                                        t.DOCUMENT_NODE) &&
                                      (!t.parentNode || e(t.parentNode, n)))
                                  );
                                })(e.target, this.mirror) ||
                                (this.movedSet.has(t) && this.movedMap[ta(n, r)]
                                  ? tc(this.movedSet, t)
                                  : this.removes.push({
                                      parentId: r,
                                      id: n,
                                      isShadow:
                                        !!(ei(e.target) && eo(e.target)) ||
                                        void 0,
                                    })),
                            this.mapRemoves.push(t));
                        });
                  }
              }),
              (this.genAdds = (e, t) => {
                if (
                  !this.processedNodeManager.inOtherBuffer(e, this) &&
                  !(this.addedSet.has(e) || this.movedSet.has(e))
                ) {
                  if (this.mirror.hasNode(e)) {
                    if (e0(e, this.mirror)) return;
                    this.movedSet.add(e);
                    let n = null;
                    t && this.mirror.hasNode(t) && (n = this.mirror.getId(t)),
                      n &&
                        -1 !== n &&
                        (this.movedMap[ta(this.mirror.getId(e), n)] = !0);
                  } else this.addedSet.add(e), this.droppedSet.delete(e);
                  !eZ(
                    e,
                    this.blockClass,
                    this.blockSelector,
                    this.unblockSelector,
                    !1,
                  ) &&
                    (e.childNodes.forEach((e) => this.genAdds(e)),
                    e6(e) &&
                      e.shadowRoot.childNodes.forEach((t) => {
                        this.processedNodeManager.add(t, this),
                          this.genAdds(t, e);
                      }));
                }
              });
          }
          init(e) {
            [
              "mutationCb",
              "blockClass",
              "blockSelector",
              "unblockSelector",
              "maskAllText",
              "maskTextClass",
              "unmaskTextClass",
              "maskTextSelector",
              "unmaskTextSelector",
              "inlineStylesheet",
              "maskInputOptions",
              "maskAttributeFn",
              "maskTextFn",
              "maskInputFn",
              "keepIframeSrcFn",
              "recordCanvas",
              "inlineImages",
              "slimDOMOptions",
              "dataURLOptions",
              "doc",
              "mirror",
              "iframeManager",
              "stylesheetManager",
              "shadowDomManager",
              "canvasManager",
              "processedNodeManager",
            ].forEach((t) => {
              this[t] = e[t];
            });
          }
          freeze() {
            (this.frozen = !0), this.canvasManager.freeze();
          }
          unfreeze() {
            (this.frozen = !1), this.canvasManager.unfreeze(), this.emit();
          }
          isFrozen() {
            return this.frozen;
          }
          lock() {
            (this.locked = !0), this.canvasManager.lock();
          }
          unlock() {
            (this.locked = !1), this.canvasManager.unlock(), this.emit();
          }
          reset() {
            this.shadowDomManager.reset(), this.canvasManager.reset();
          }
        }
        function tc(e, t) {
          e.delete(t), t.childNodes.forEach((t) => tc(e, t));
        }
        function tu(e, t, n) {
          return (
            0 !== e.length &&
            (function (e, t, n) {
              let r = t.parentNode;
              for (; r; ) {
                let t = n.getId(r);
                if (e.some((e) => e.id === t)) return !0;
                r = r.parentNode;
              }
              return !1;
            })(e, t, n)
          );
        }
        function td(e, t) {
          return (
            0 !== e.size &&
            (function e(t, n) {
              let { parentNode: r } = n;
              return !!r && (!!t.has(r) || e(t, r));
            })(e, t)
          );
        }
        let tp = (e) =>
          o
            ? (...t) => {
                try {
                  return e(...t);
                } catch (e) {
                  if (o && !0 === o(e)) return () => {};
                  throw e;
                }
              }
            : e;
        function th(e) {
          let t,
            n = e[0],
            r = 1;
          for (; r < e.length; ) {
            let i = e[r],
              o = e[r + 1];
            if (
              ((r += 2),
              ("optionalAccess" === i || "optionalCall" === i) && null == n)
            )
              return;
            "access" === i || "optionalAccess" === i
              ? ((t = n), (n = o(n)))
              : ("call" === i || "optionalCall" === i) &&
                ((n = o((...e) => n.call(t, ...e))), (t = void 0));
          }
          return n;
        }
        let tf = [];
        function tm(e) {
          try {
            if ("composedPath" in e) {
              let t = e.composedPath();
              if (t.length) return t[0];
            } else if ("path" in e && e.path.length) return e.path[0];
          } catch (e) {}
          return e && e.target;
        }
        function tg(e, t) {
          let n = new tl();
          tf.push(n), n.init(e);
          let r = window.MutationObserver || window.__rrMutationObserver,
            i = th([
              window,
              "optionalAccess",
              (e) => e.Zone,
              "optionalAccess",
              (e) => e.__symbol__,
              "optionalCall",
              (e) => e("MutationObserver"),
            ]);
          i && window[i] && (r = window[i]);
          let o = new r(
            tp((t) => {
              (e.onMutation && !1 === e.onMutation(t)) ||
                n.processMutations.bind(n)(t);
            }),
          );
          return (
            o.observe(t, {
              attributes: !0,
              attributeOldValue: !0,
              characterData: !0,
              characterDataOldValue: !0,
              childList: !0,
              subtree: !0,
            }),
            o
          );
        }
        function t_({
          scrollCb: e,
          doc: t,
          mirror: n,
          blockClass: r,
          blockSelector: i,
          unblockSelector: o,
          sampling: s,
        }) {
          return eH(
            "scroll",
            tp(
              eK(
                tp((s) => {
                  let a = tm(s);
                  if (!a || eZ(a, r, i, o, !0)) return;
                  let l = n.getId(a);
                  if (a === t && t.defaultView) {
                    let n = eG(t.defaultView);
                    e({ id: l, x: n.left, y: n.top });
                  } else e({ id: l, x: a.scrollLeft, y: a.scrollTop });
                }),
                s.scroll || 100,
              ),
            ),
            t,
          );
        }
        let tv = ["INPUT", "TEXTAREA", "SELECT"],
          ty = new WeakMap();
        function tb(e) {
          var t = [];
          if (
            (tk("CSSGroupingRule") &&
              e.parentRule instanceof CSSGroupingRule) ||
            (tk("CSSMediaRule") && e.parentRule instanceof CSSMediaRule) ||
            (tk("CSSSupportsRule") &&
              e.parentRule instanceof CSSSupportsRule) ||
            (tk("CSSConditionRule") && e.parentRule instanceof CSSConditionRule)
          ) {
            let n = Array.from(e.parentRule.cssRules).indexOf(e);
            t.unshift(n);
          } else if (e.parentStyleSheet) {
            let n = Array.from(e.parentStyleSheet.cssRules).indexOf(e);
            t.unshift(n);
          }
          return t;
        }
        function tS(e, t, n) {
          let r, i;
          return e
            ? (e.ownerNode ? (r = t.getId(e.ownerNode)) : (i = n.getId(e)),
              { styleId: i, id: r })
            : {};
        }
        function tw({ mirror: e, stylesheetManager: t }, n) {
          let r = null;
          r = "#document" === n.nodeName ? e.getId(n) : e.getId(n.host);
          let i =
              "#document" === n.nodeName
                ? th([
                    n,
                    "access",
                    (e) => e.defaultView,
                    "optionalAccess",
                    (e) => e.Document,
                  ])
                : th([
                    n,
                    "access",
                    (e) => e.ownerDocument,
                    "optionalAccess",
                    (e) => e.defaultView,
                    "optionalAccess",
                    (e) => e.ShadowRoot,
                  ]),
            o = th([i, "optionalAccess", (e) => e.prototype])
              ? Object.getOwnPropertyDescriptor(
                  th([i, "optionalAccess", (e) => e.prototype]),
                  "adoptedStyleSheets",
                )
              : void 0;
          return null !== r && -1 !== r && i && o
            ? (Object.defineProperty(n, "adoptedStyleSheets", {
                configurable: o.configurable,
                enumerable: o.enumerable,
                get() {
                  return th([
                    o,
                    "access",
                    (e) => e.get,
                    "optionalAccess",
                    (e) => e.call,
                    "call",
                    (e) => e(this),
                  ]);
                },
                set(e) {
                  let n = th([
                    o,
                    "access",
                    (e) => e.set,
                    "optionalAccess",
                    (e) => e.call,
                    "call",
                    (t) => t(this, e),
                  ]);
                  if (null !== r && -1 !== r)
                    try {
                      t.adoptStyleSheets(e, r);
                    } catch (e) {}
                  return n;
                },
              }),
              tp(() => {
                Object.defineProperty(n, "adoptedStyleSheets", {
                  configurable: o.configurable,
                  enumerable: o.enumerable,
                  get: o.get,
                  set: o.set,
                });
              }))
            : () => {};
        }
        function tE(e, t = {}) {
          let n,
            r = e.doc.defaultView;
          if (!r) return () => {};
          e.recordDOM && (n = tg(e, e.doc));
          let i = (function ({
              mousemoveCb: e,
              sampling: t,
              doc: n,
              mirror: r,
            }) {
              let i;
              if (!1 === t.mousemove) return () => {};
              let o = "number" == typeof t.mousemove ? t.mousemove : 50,
                s =
                  "number" == typeof t.mousemoveCallback
                    ? t.mousemoveCallback
                    : 500,
                a = [],
                l = eK(
                  tp((t) => {
                    let n = Date.now() - i;
                    e(
                      a.map((e) => ((e.timeOffset -= n), e)),
                      t,
                    ),
                      (a = []),
                      (i = null);
                  }),
                  s,
                ),
                c = tp(
                  eK(
                    tp((e) => {
                      let t = tm(e),
                        { clientX: n, clientY: o } = e1(e)
                          ? e.changedTouches[0]
                          : e;
                      i || (i = eV()),
                        a.push({
                          x: n,
                          y: o,
                          id: r.getId(t),
                          timeOffset: eV() - i,
                        }),
                        l(
                          "u" > typeof DragEvent && e instanceof DragEvent
                            ? tn.Drag
                            : e instanceof MouseEvent
                              ? tn.MouseMove
                              : tn.TouchMove,
                        );
                    }),
                    o,
                    { trailing: !1 },
                  ),
                ),
                u = [
                  eH("mousemove", c, n),
                  eH("touchmove", c, n),
                  eH("drag", c, n),
                ];
              return tp(() => {
                u.forEach((e) => e());
              });
            })(e),
            o = (function ({
              mouseInteractionCb: e,
              doc: t,
              mirror: n,
              blockClass: r,
              blockSelector: i,
              unblockSelector: o,
              sampling: s,
            }) {
              if (!1 === s.mouseInteraction) return () => {};
              let a =
                  !0 === s.mouseInteraction || void 0 === s.mouseInteraction
                    ? {}
                    : s.mouseInteraction,
                l = [],
                c = null;
              return (
                Object.keys(tr)
                  .filter(
                    (e) =>
                      Number.isNaN(Number(e)) &&
                      !e.endsWith("_Departed") &&
                      !1 !== a[e],
                  )
                  .forEach((s) => {
                    let a = ed(s),
                      u = (t) => {
                        let a = tm(t);
                        if (eZ(a, r, i, o, !0)) return;
                        let l = null,
                          u = s;
                        if ("pointerType" in t) {
                          switch (t.pointerType) {
                            case "mouse":
                              l = ti.Mouse;
                              break;
                            case "touch":
                              l = ti.Touch;
                              break;
                            case "pen":
                              l = ti.Pen;
                          }
                          l === ti.Touch
                            ? tr[s] === tr.MouseDown
                              ? (u = "TouchStart")
                              : tr[s] === tr.MouseUp && (u = "TouchEnd")
                            : ti.Pen;
                        } else e1(t) && (l = ti.Touch);
                        null !== l
                          ? ((c = l),
                            ((u.startsWith("Touch") && l === ti.Touch) ||
                              (u.startsWith("Mouse") && l === ti.Mouse)) &&
                              (l = null))
                          : tr[s] === tr.Click && ((l = c), (c = null));
                        let d = e1(t) ? t.changedTouches[0] : t;
                        if (!d) return;
                        let p = n.getId(a),
                          { clientX: h, clientY: f } = d;
                        tp(e)({
                          type: tr[u],
                          id: p,
                          x: h,
                          y: f,
                          ...(null !== l && { pointerType: l }),
                        });
                      };
                    if (window.PointerEvent)
                      switch (tr[s]) {
                        case tr.MouseDown:
                        case tr.MouseUp:
                          a = a.replace("mouse", "pointer");
                          break;
                        case tr.TouchStart:
                        case tr.TouchEnd:
                          return;
                      }
                    l.push(eH(a, u, t));
                  }),
                tp(() => {
                  l.forEach((e) => e());
                })
              );
            })(e),
            s = t_(e),
            a = (function ({ viewportResizeCb: e }, { win: t }) {
              let n = -1,
                r = -1;
              return eH(
                "resize",
                tp(
                  eK(
                    tp(() => {
                      let t = eJ(),
                        i = eY();
                      (n !== t || r !== i) &&
                        (e({ width: Number(i), height: Number(t) }),
                        (n = t),
                        (r = i));
                    }),
                    200,
                  ),
                ),
                t,
              );
            })(e, { win: r }),
            l = (function ({
              inputCb: e,
              doc: t,
              mirror: n,
              blockClass: r,
              blockSelector: i,
              unblockSelector: o,
              ignoreClass: s,
              ignoreSelector: a,
              maskInputOptions: l,
              maskInputFn: c,
              sampling: u,
              userTriggeredOnInput: d,
              maskTextClass: p,
              unmaskTextClass: h,
              maskTextSelector: f,
              unmaskTextSelector: m,
            }) {
              function g(e) {
                let n = tm(e),
                  u = e.isTrusted,
                  g = n && ep(n.tagName);
                if (
                  ("OPTION" === g && (n = n.parentElement),
                  !n || !g || 0 > tv.indexOf(g) || eZ(n, r, i, o, !0))
                )
                  return;
                let v = n;
                if (v.classList.contains(s) || (a && v.matches(a))) return;
                let y = ef(n),
                  b = em(v, g, y),
                  S = !1,
                  w = ec({ maskInputOptions: l, tagName: g, type: y }),
                  E = e$(n, p, f, h, m, w);
                ("radio" === y || "checkbox" === y) && (S = n.checked),
                  (b = eu({
                    isMasked: E,
                    element: n,
                    value: b,
                    maskInputFn: c,
                  })),
                  _(
                    n,
                    d
                      ? { text: b, isChecked: S, userTriggered: u }
                      : { text: b, isChecked: S },
                  );
                let k = n.name;
                "radio" === y &&
                  k &&
                  S &&
                  t
                    .querySelectorAll(`input[type="radio"][name="${k}"]`)
                    .forEach((e) => {
                      if (e !== n) {
                        let t = eu({
                          isMasked: E,
                          element: e,
                          value: em(e, g, y),
                          maskInputFn: c,
                        });
                        _(
                          e,
                          d
                            ? { text: t, isChecked: !S, userTriggered: !1 }
                            : { text: t, isChecked: !S },
                        );
                      }
                    });
              }
              function _(t, r) {
                let i = ty.get(t);
                if (!i || i.text !== r.text || i.isChecked !== r.isChecked) {
                  ty.set(t, r);
                  let i = n.getId(t);
                  tp(e)({ ...r, id: i });
                }
              }
              let v = (
                  "last" === u.input ? ["change"] : ["input", "change"]
                ).map((e) => eH(e, tp(g), t)),
                y = t.defaultView;
              if (!y)
                return () => {
                  v.forEach((e) => e());
                };
              let b = y.Object.getOwnPropertyDescriptor(
                  y.HTMLInputElement.prototype,
                  "value",
                ),
                S = [
                  [y.HTMLInputElement.prototype, "value"],
                  [y.HTMLInputElement.prototype, "checked"],
                  [y.HTMLSelectElement.prototype, "value"],
                  [y.HTMLTextAreaElement.prototype, "value"],
                  [y.HTMLSelectElement.prototype, "selectedIndex"],
                  [y.HTMLOptionElement.prototype, "selected"],
                ];
              return (
                b &&
                  b.set &&
                  v.push(
                    ...S.map((e) =>
                      (function e(t, n, r, i, o = window) {
                        let s = o.Object.getOwnPropertyDescriptor(t, n);
                        return (
                          o.Object.defineProperty(
                            t,
                            n,
                            i
                              ? r
                              : {
                                  set(e) {
                                    te(() => {
                                      r.set.call(this, e);
                                    }, 0),
                                      s && s.set && s.set.call(this, e);
                                  },
                                },
                          ),
                          () => e(t, n, s || {}, !0)
                        );
                      })(
                        e[0],
                        e[1],
                        {
                          set() {
                            tp(g)({ target: this, isTrusted: !1 });
                          },
                        },
                        !1,
                        y,
                      ),
                    ),
                  ),
                tp(() => {
                  v.forEach((e) => e());
                })
              );
            })(e),
            c = (function ({
              mediaInteractionCb: e,
              blockClass: t,
              blockSelector: n,
              unblockSelector: r,
              mirror: i,
              sampling: o,
              doc: s,
            }) {
              let a = tp((s) =>
                  eK(
                    tp((o) => {
                      let a = tm(o);
                      if (!a || eZ(a, t, n, r, !0)) return;
                      let {
                        currentTime: l,
                        volume: c,
                        muted: u,
                        playbackRate: d,
                      } = a;
                      e({
                        type: s,
                        id: i.getId(a),
                        currentTime: l,
                        volume: c,
                        muted: u,
                        playbackRate: d,
                      });
                    }),
                    o.media || 500,
                  ),
                ),
                l = [
                  eH("play", a(0), s),
                  eH("pause", a(1), s),
                  eH("seeked", a(2), s),
                  eH("volumechange", a(3), s),
                  eH("ratechange", a(4), s),
                ];
              return tp(() => {
                l.forEach((e) => e());
              });
            })(e),
            u = () => {},
            d = () => {},
            p = () => {},
            h = () => {};
          e.recordDOM &&
            ((u = (function (
              { styleSheetRuleCb: e, mirror: t, stylesheetManager: n },
              { win: r },
            ) {
              let i, o;
              if (!r.CSSStyleSheet || !r.CSSStyleSheet.prototype)
                return () => {};
              let s = r.CSSStyleSheet.prototype.insertRule;
              r.CSSStyleSheet.prototype.insertRule = new Proxy(s, {
                apply: tp((r, i, o) => {
                  let [s, a] = o,
                    { id: l, styleId: c } = tS(i, t, n.styleMirror);
                  return (
                    ((l && -1 !== l) || (c && -1 !== c)) &&
                      e({ id: l, styleId: c, adds: [{ rule: s, index: a }] }),
                    r.apply(i, o)
                  );
                }),
              });
              let a = r.CSSStyleSheet.prototype.deleteRule;
              (r.CSSStyleSheet.prototype.deleteRule = new Proxy(a, {
                apply: tp((r, i, o) => {
                  let [s] = o,
                    { id: a, styleId: l } = tS(i, t, n.styleMirror);
                  return (
                    ((a && -1 !== a) || (l && -1 !== l)) &&
                      e({ id: a, styleId: l, removes: [{ index: s }] }),
                    r.apply(i, o)
                  );
                }),
              })),
                r.CSSStyleSheet.prototype.replace &&
                  ((i = r.CSSStyleSheet.prototype.replace),
                  (r.CSSStyleSheet.prototype.replace = new Proxy(i, {
                    apply: tp((r, i, o) => {
                      let [s] = o,
                        { id: a, styleId: l } = tS(i, t, n.styleMirror);
                      return (
                        ((a && -1 !== a) || (l && -1 !== l)) &&
                          e({ id: a, styleId: l, replace: s }),
                        r.apply(i, o)
                      );
                    }),
                  }))),
                r.CSSStyleSheet.prototype.replaceSync &&
                  ((o = r.CSSStyleSheet.prototype.replaceSync),
                  (r.CSSStyleSheet.prototype.replaceSync = new Proxy(o, {
                    apply: tp((r, i, o) => {
                      let [s] = o,
                        { id: a, styleId: l } = tS(i, t, n.styleMirror);
                      return (
                        ((a && -1 !== a) || (l && -1 !== l)) &&
                          e({ id: a, styleId: l, replaceSync: s }),
                        r.apply(i, o)
                      );
                    }),
                  })));
              let l = {};
              tx("CSSGroupingRule")
                ? (l.CSSGroupingRule = r.CSSGroupingRule)
                : (tx("CSSMediaRule") && (l.CSSMediaRule = r.CSSMediaRule),
                  tx("CSSConditionRule") &&
                    (l.CSSConditionRule = r.CSSConditionRule),
                  tx("CSSSupportsRule") &&
                    (l.CSSSupportsRule = r.CSSSupportsRule));
              let c = {};
              return (
                Object.entries(l).forEach(([r, i]) => {
                  (c[r] = {
                    insertRule: i.prototype.insertRule,
                    deleteRule: i.prototype.deleteRule,
                  }),
                    (i.prototype.insertRule = new Proxy(c[r].insertRule, {
                      apply: tp((r, i, o) => {
                        let [s, a] = o,
                          { id: l, styleId: c } = tS(
                            i.parentStyleSheet,
                            t,
                            n.styleMirror,
                          );
                        return (
                          ((l && -1 !== l) || (c && -1 !== c)) &&
                            e({
                              id: l,
                              styleId: c,
                              adds: [{ rule: s, index: [...tb(i), a || 0] }],
                            }),
                          r.apply(i, o)
                        );
                      }),
                    })),
                    (i.prototype.deleteRule = new Proxy(c[r].deleteRule, {
                      apply: tp((r, i, o) => {
                        let [s] = o,
                          { id: a, styleId: l } = tS(
                            i.parentStyleSheet,
                            t,
                            n.styleMirror,
                          );
                        return (
                          ((a && -1 !== a) || (l && -1 !== l)) &&
                            e({
                              id: a,
                              styleId: l,
                              removes: [{ index: [...tb(i), s] }],
                            }),
                          r.apply(i, o)
                        );
                      }),
                    }));
                }),
                tp(() => {
                  (r.CSSStyleSheet.prototype.insertRule = s),
                    (r.CSSStyleSheet.prototype.deleteRule = a),
                    i && (r.CSSStyleSheet.prototype.replace = i),
                    o && (r.CSSStyleSheet.prototype.replaceSync = o),
                    Object.entries(l).forEach(([e, t]) => {
                      (t.prototype.insertRule = c[e].insertRule),
                        (t.prototype.deleteRule = c[e].deleteRule);
                    });
                })
              );
            })(e, { win: r })),
            (d = tw(e, e.doc)),
            (p = (function (
              {
                styleDeclarationCb: e,
                mirror: t,
                ignoreCSSAttributes: n,
                stylesheetManager: r,
              },
              { win: i },
            ) {
              let o = i.CSSStyleDeclaration.prototype.setProperty;
              i.CSSStyleDeclaration.prototype.setProperty = new Proxy(o, {
                apply: tp((i, s, a) => {
                  let [l, c, u] = a;
                  if (n.has(l)) return o.apply(s, [l, c, u]);
                  let { id: d, styleId: p } = tS(
                    th([
                      s,
                      "access",
                      (e) => e.parentRule,
                      "optionalAccess",
                      (e) => e.parentStyleSheet,
                    ]),
                    t,
                    r.styleMirror,
                  );
                  return (
                    ((d && -1 !== d) || (p && -1 !== p)) &&
                      e({
                        id: d,
                        styleId: p,
                        set: { property: l, value: c, priority: u },
                        index: tb(s.parentRule),
                      }),
                    i.apply(s, a)
                  );
                }),
              });
              let s = i.CSSStyleDeclaration.prototype.removeProperty;
              return (
                (i.CSSStyleDeclaration.prototype.removeProperty = new Proxy(s, {
                  apply: tp((i, o, a) => {
                    let [l] = a;
                    if (n.has(l)) return s.apply(o, [l]);
                    let { id: c, styleId: u } = tS(
                      th([
                        o,
                        "access",
                        (e) => e.parentRule,
                        "optionalAccess",
                        (e) => e.parentStyleSheet,
                      ]),
                      t,
                      r.styleMirror,
                    );
                    return (
                      ((c && -1 !== c) || (u && -1 !== u)) &&
                        e({
                          id: c,
                          styleId: u,
                          remove: { property: l },
                          index: tb(o.parentRule),
                        }),
                      i.apply(o, a)
                    );
                  }),
                })),
                tp(() => {
                  (i.CSSStyleDeclaration.prototype.setProperty = o),
                    (i.CSSStyleDeclaration.prototype.removeProperty = s);
                })
              );
            })(e, { win: r })),
            e.collectFonts &&
              (h = (function ({ fontCb: e, doc: t }) {
                let n = t.defaultView;
                if (!n) return () => {};
                let r = [],
                  i = new WeakMap(),
                  o = n.FontFace;
                n.FontFace = function (e, t, n) {
                  let r = new o(e, t, n);
                  return (
                    i.set(r, {
                      family: e,
                      buffer: "string" != typeof t,
                      descriptors: n,
                      fontSource:
                        "string" == typeof t
                          ? t
                          : JSON.stringify(Array.from(new Uint8Array(t))),
                    }),
                    r
                  );
                };
                let s = eX(t.fonts, "add", function (t) {
                  return function (n) {
                    return (
                      te(
                        tp(() => {
                          let t = i.get(n);
                          t && (e(t), i.delete(n));
                        }),
                        0,
                      ),
                      t.apply(this, [n])
                    );
                  };
                });
                return (
                  r.push(() => {
                    n.FontFace = o;
                  }),
                  r.push(s),
                  tp(() => {
                    r.forEach((e) => e());
                  })
                );
              })(e)));
          let f = (function (e) {
              let {
                  doc: t,
                  mirror: n,
                  blockClass: r,
                  blockSelector: i,
                  unblockSelector: o,
                  selectionCb: s,
                } = e,
                a = !0,
                l = tp(() => {
                  let e = t.getSelection();
                  if (
                    !e ||
                    (a && th([e, "optionalAccess", (e) => e.isCollapsed]))
                  )
                    return;
                  a = e.isCollapsed || !1;
                  let l = [],
                    c = e.rangeCount || 0;
                  for (let t = 0; t < c; t++) {
                    let {
                      startContainer: s,
                      startOffset: a,
                      endContainer: c,
                      endOffset: u,
                    } = e.getRangeAt(t);
                    eZ(s, r, i, o, !0) ||
                      eZ(c, r, i, o, !0) ||
                      l.push({
                        start: n.getId(s),
                        startOffset: a,
                        end: n.getId(c),
                        endOffset: u,
                      });
                  }
                  s({ ranges: l });
                });
              return l(), eH("selectionchange", l);
            })(e),
            m = (function ({ doc: e, customElementCb: t }) {
              let n = e.defaultView;
              return n && n.customElements
                ? eX(n.customElements, "define", function (e) {
                    return function (n, r, i) {
                      try {
                        t({ define: { name: n } });
                      } catch (e) {}
                      return e.apply(this, [n, r, i]);
                    };
                  })
                : () => {};
            })(e),
            g = [];
          for (let t of e.plugins) g.push(t.observer(t.callback, r, t.options));
          return tp(() => {
            tf.forEach((e) => e.reset()),
              th([
                n,
                "optionalAccess",
                (e) => e.disconnect,
                "call",
                (e) => e(),
              ]),
              i(),
              o(),
              s(),
              a(),
              l(),
              c(),
              u(),
              d(),
              p(),
              h(),
              f(),
              m(),
              g.forEach((e) => e());
          });
        }
        function tk(e) {
          return void 0 !== window[e];
        }
        function tx(e) {
          return !!(
            void 0 !== window[e] &&
            window[e].prototype &&
            "insertRule" in window[e].prototype &&
            "deleteRule" in window[e].prototype
          );
        }
        class tC {
          constructor(e) {
            (this.generateIdFn = e),
              (this.iframeIdToRemoteIdMap = new WeakMap()),
              (this.iframeRemoteIdToIdMap = new WeakMap());
          }
          getId(e, t, n, r) {
            let i = n || this.getIdToRemoteIdMap(e),
              o = r || this.getRemoteIdToIdMap(e),
              s = i.get(t);
            return (
              s || ((s = this.generateIdFn()), i.set(t, s), o.set(s, t)), s
            );
          }
          getIds(e, t) {
            let n = this.getIdToRemoteIdMap(e),
              r = this.getRemoteIdToIdMap(e);
            return t.map((t) => this.getId(e, t, n, r));
          }
          getRemoteId(e, t, n) {
            let r = n || this.getRemoteIdToIdMap(e);
            if ("number" != typeof t) return t;
            let i = r.get(t);
            return i || -1;
          }
          getRemoteIds(e, t) {
            let n = this.getRemoteIdToIdMap(e);
            return t.map((t) => this.getRemoteId(e, t, n));
          }
          reset(e) {
            if (!e) {
              (this.iframeIdToRemoteIdMap = new WeakMap()),
                (this.iframeRemoteIdToIdMap = new WeakMap());
              return;
            }
            this.iframeIdToRemoteIdMap.delete(e),
              this.iframeRemoteIdToIdMap.delete(e);
          }
          getIdToRemoteIdMap(e) {
            let t = this.iframeIdToRemoteIdMap.get(e);
            return (
              t || ((t = new Map()), this.iframeIdToRemoteIdMap.set(e, t)), t
            );
          }
          getRemoteIdToIdMap(e) {
            let t = this.iframeRemoteIdToIdMap.get(e);
            return (
              t || ((t = new Map()), this.iframeRemoteIdToIdMap.set(e, t)), t
            );
          }
        }
        function tT(e) {
          let t,
            n = e[0],
            r = 1;
          for (; r < e.length; ) {
            let i = e[r],
              o = e[r + 1];
            if (
              ((r += 2),
              ("optionalAccess" === i || "optionalCall" === i) && null == n)
            )
              return;
            "access" === i || "optionalAccess" === i
              ? ((t = n), (n = o(n)))
              : ("call" === i || "optionalCall" === i) &&
                ((n = o((...e) => n.call(t, ...e))), (t = void 0));
          }
          return n;
        }
        class tI {
          constructor() {
            (this.crossOriginIframeMirror = new tC(ek)),
              (this.crossOriginIframeRootIdMap = new WeakMap());
          }
          addIframe() {}
          addLoadListener() {}
          attachIframe() {}
        }
        class tM {
          constructor(e) {
            (this.iframes = new WeakMap()),
              (this.crossOriginIframeMap = new WeakMap()),
              (this.crossOriginIframeMirror = new tC(ek)),
              (this.crossOriginIframeRootIdMap = new WeakMap()),
              (this.mutationCb = e.mutationCb),
              (this.wrappedEmit = e.wrappedEmit),
              (this.stylesheetManager = e.stylesheetManager),
              (this.recordCrossOriginIframes = e.recordCrossOriginIframes),
              (this.crossOriginIframeStyleMirror = new tC(
                this.stylesheetManager.styleMirror.generateId.bind(
                  this.stylesheetManager.styleMirror,
                ),
              )),
              (this.mirror = e.mirror),
              this.recordCrossOriginIframes &&
                window.addEventListener(
                  "message",
                  this.handleMessage.bind(this),
                );
          }
          addIframe(e) {
            this.iframes.set(e, !0),
              e.contentWindow &&
                this.crossOriginIframeMap.set(e.contentWindow, e);
          }
          addLoadListener(e) {
            this.loadListener = e;
          }
          attachIframe(e, t) {
            this.mutationCb({
              adds: [{ parentId: this.mirror.getId(e), nextId: null, node: t }],
              removes: [],
              texts: [],
              attributes: [],
              isAttachIframe: !0,
            }),
              tT([
                this,
                "access",
                (e) => e.loadListener,
                "optionalCall",
                (t) => t(e),
              ]);
            let n = to(e);
            n &&
              n.adoptedStyleSheets &&
              n.adoptedStyleSheets.length > 0 &&
              this.stylesheetManager.adoptStyleSheets(
                n.adoptedStyleSheets,
                this.mirror.getId(n),
              );
          }
          handleMessage(e) {
            if (
              "rrweb" !== e.data.type ||
              e.origin !== e.data.origin ||
              !e.source
            )
              return;
            let t = this.crossOriginIframeMap.get(e.source);
            if (!t) return;
            let n = this.transformCrossOriginEvent(t, e.data.event);
            n && this.wrappedEmit(n, e.data.isCheckout);
          }
          transformCrossOriginEvent(e, t) {
            switch (t.type) {
              case tt.FullSnapshot: {
                this.crossOriginIframeMirror.reset(e),
                  this.crossOriginIframeStyleMirror.reset(e),
                  this.replaceIdOnNode(t.data.node, e);
                let n = t.data.node.id;
                return (
                  this.crossOriginIframeRootIdMap.set(e, n),
                  this.patchRootIdOnNode(t.data.node, n),
                  {
                    timestamp: t.timestamp,
                    type: tt.IncrementalSnapshot,
                    data: {
                      source: tn.Mutation,
                      adds: [
                        {
                          parentId: this.mirror.getId(e),
                          nextId: null,
                          node: t.data.node,
                        },
                      ],
                      removes: [],
                      texts: [],
                      attributes: [],
                      isAttachIframe: !0,
                    },
                  }
                );
              }
              case tt.Meta:
              case tt.Load:
              case tt.DomContentLoaded:
                break;
              case tt.Plugin:
                return t;
              case tt.Custom:
                return (
                  this.replaceIds(t.data.payload, e, [
                    "id",
                    "parentId",
                    "previousId",
                    "nextId",
                  ]),
                  t
                );
              case tt.IncrementalSnapshot:
                switch (t.data.source) {
                  case tn.Mutation:
                    return (
                      t.data.adds.forEach((t) => {
                        this.replaceIds(t, e, [
                          "parentId",
                          "nextId",
                          "previousId",
                        ]),
                          this.replaceIdOnNode(t.node, e);
                        let n = this.crossOriginIframeRootIdMap.get(e);
                        n && this.patchRootIdOnNode(t.node, n);
                      }),
                      t.data.removes.forEach((t) => {
                        this.replaceIds(t, e, ["parentId", "id"]);
                      }),
                      t.data.attributes.forEach((t) => {
                        this.replaceIds(t, e, ["id"]);
                      }),
                      t.data.texts.forEach((t) => {
                        this.replaceIds(t, e, ["id"]);
                      }),
                      t
                    );
                  case tn.Drag:
                  case tn.TouchMove:
                  case tn.MouseMove:
                    return (
                      t.data.positions.forEach((t) => {
                        this.replaceIds(t, e, ["id"]);
                      }),
                      t
                    );
                  case tn.ViewportResize:
                    return !1;
                  case tn.MediaInteraction:
                  case tn.MouseInteraction:
                  case tn.Scroll:
                  case tn.CanvasMutation:
                  case tn.Input:
                    return this.replaceIds(t.data, e, ["id"]), t;
                  case tn.StyleSheetRule:
                  case tn.StyleDeclaration:
                    return (
                      this.replaceIds(t.data, e, ["id"]),
                      this.replaceStyleIds(t.data, e, ["styleId"]),
                      t
                    );
                  case tn.Font:
                    return t;
                  case tn.Selection:
                    return (
                      t.data.ranges.forEach((t) => {
                        this.replaceIds(t, e, ["start", "end"]);
                      }),
                      t
                    );
                  case tn.AdoptedStyleSheet:
                    return (
                      this.replaceIds(t.data, e, ["id"]),
                      this.replaceStyleIds(t.data, e, ["styleIds"]),
                      tT([
                        t,
                        "access",
                        (e) => e.data,
                        "access",
                        (e) => e.styles,
                        "optionalAccess",
                        (e) => e.forEach,
                        "call",
                        (t) =>
                          t((t) => {
                            this.replaceStyleIds(t, e, ["styleId"]);
                          }),
                      ]),
                      t
                    );
                }
            }
            return !1;
          }
          replace(e, t, n, r) {
            for (let i of r)
              (Array.isArray(t[i]) || "number" == typeof t[i]) &&
                (Array.isArray(t[i])
                  ? (t[i] = e.getIds(n, t[i]))
                  : (t[i] = e.getId(n, t[i])));
            return t;
          }
          replaceIds(e, t, n) {
            return this.replace(this.crossOriginIframeMirror, e, t, n);
          }
          replaceStyleIds(e, t, n) {
            return this.replace(this.crossOriginIframeStyleMirror, e, t, n);
          }
          replaceIdOnNode(e, t) {
            this.replaceIds(e, t, ["id", "rootId"]),
              "childNodes" in e &&
                e.childNodes.forEach((e) => {
                  this.replaceIdOnNode(e, t);
                });
          }
          patchRootIdOnNode(e, t) {
            e.type === b.Document || e.rootId || (e.rootId = t),
              "childNodes" in e &&
                e.childNodes.forEach((e) => {
                  this.patchRootIdOnNode(e, t);
                });
          }
        }
        class tO {
          init() {}
          addShadowRoot() {}
          observeAttachShadow() {}
          reset() {}
        }
        class tD {
          constructor(e) {
            (this.shadowDoms = new WeakSet()),
              (this.restoreHandlers = []),
              (this.mutationCb = e.mutationCb),
              (this.scrollCb = e.scrollCb),
              (this.bypassOptions = e.bypassOptions),
              (this.mirror = e.mirror),
              this.init();
          }
          init() {
            this.reset(), this.patchAttachShadow(Element, document);
          }
          addShadowRoot(e, t) {
            if (!eo(e) || this.shadowDoms.has(e)) return;
            this.shadowDoms.add(e),
              this.bypassOptions.canvasManager.addShadowRoot(e);
            let n = tg(
              {
                ...this.bypassOptions,
                doc: t,
                mutationCb: this.mutationCb,
                mirror: this.mirror,
                shadowDomManager: this,
              },
              e,
            );
            this.restoreHandlers.push(() => n.disconnect()),
              this.restoreHandlers.push(
                t_({
                  ...this.bypassOptions,
                  scrollCb: this.scrollCb,
                  doc: e,
                  mirror: this.mirror,
                }),
              ),
              te(() => {
                e.adoptedStyleSheets &&
                  e.adoptedStyleSheets.length > 0 &&
                  this.bypassOptions.stylesheetManager.adoptStyleSheets(
                    e.adoptedStyleSheets,
                    this.mirror.getId(e.host),
                  ),
                  this.restoreHandlers.push(
                    tw(
                      {
                        mirror: this.mirror,
                        stylesheetManager: this.bypassOptions.stylesheetManager,
                      },
                      e,
                    ),
                  );
              }, 0);
          }
          observeAttachShadow(e) {
            let t = to(e),
              n = (function (e) {
                try {
                  return e.contentWindow;
                } catch (e) {}
              })(e);
            t && n && this.patchAttachShadow(n.Element, t);
          }
          patchAttachShadow(e, t) {
            let n = this;
            this.restoreHandlers.push(
              eX(e.prototype, "attachShadow", function (e) {
                return function (r) {
                  let i = e.call(this, r);
                  return (
                    this.shadowRoot &&
                      e5(this) &&
                      n.addShadowRoot(this.shadowRoot, t),
                    i
                  );
                };
              }),
            );
          }
          reset() {
            this.restoreHandlers.forEach((e) => {
              try {
                e();
              } catch (e) {}
            }),
              (this.restoreHandlers = []),
              (this.shadowDoms = new WeakSet()),
              this.bypassOptions.canvasManager.resetShadowRoots();
          }
        }
        class tR {
          reset() {}
          freeze() {}
          unfreeze() {}
          lock() {}
          unlock() {}
          snapshot() {}
          addWindow() {}
          addShadowRoot() {}
          resetShadowRoots() {}
        }
        class tA {
          constructor(e) {
            (this.trackedLinkElements = new WeakSet()),
              (this.styleMirror = new e8()),
              (this.mutationCb = e.mutationCb),
              (this.adoptedStyleSheetCb = e.adoptedStyleSheetCb);
          }
          attachLinkElement(e, t) {
            "_cssText" in t.attributes &&
              this.mutationCb({
                adds: [],
                removes: [],
                texts: [],
                attributes: [{ id: t.id, attributes: t.attributes }],
              }),
              this.trackLinkElement(e);
          }
          trackLinkElement(e) {
            this.trackedLinkElements.has(e) ||
              (this.trackedLinkElements.add(e),
              this.trackStylesheetInLinkElement(e));
          }
          adoptStyleSheets(e, t) {
            if (0 === e.length) return;
            let n = { id: t, styleIds: [] },
              r = [];
            for (let t of e) {
              let e;
              this.styleMirror.has(t)
                ? (e = this.styleMirror.getId(t))
                : ((e = this.styleMirror.add(t)),
                  r.push({
                    styleId: e,
                    rules: Array.from(t.rules || CSSRule, (e, t) => ({
                      rule: ea(e),
                      index: t,
                    })),
                  })),
                n.styleIds.push(e);
            }
            r.length > 0 && (n.styles = r), this.adoptedStyleSheetCb(n);
          }
          reset() {
            this.styleMirror.reset(),
              (this.trackedLinkElements = new WeakSet());
          }
          trackStylesheetInLinkElement(e) {}
        }
        class tN {
          constructor() {
            (this.nodeMap = new WeakMap()), (this.active = !1);
          }
          inOtherBuffer(e, t) {
            let n = this.nodeMap.get(e);
            return n && Array.from(n).some((e) => e !== t);
          }
          add(e, t) {
            this.active ||
              ((this.active = !0),
              (function (...e) {
                e9("requestAnimationFrame")(...e);
              })(() => {
                (this.nodeMap = new WeakMap()), (this.active = !1);
              })),
              this.nodeMap.set(e, (this.nodeMap.get(e) || new Set()).add(t));
          }
          destroy() {}
        }
        try {
          if (2 !== Array.from([1], (e) => 2 * e)[0]) {
            let e = document.createElement("iframe");
            document.body.appendChild(e),
              (Array.from =
                (0, x.z)([
                  e,
                  "access",
                  (e) => e.contentWindow,
                  "optionalAccess",
                  (e) => e.Array,
                  "access",
                  (e) => e.from,
                ]) || Array.from),
              document.body.removeChild(e);
          }
        } catch (e) {
          console.debug("Unable to override Array.from", e);
        }
        let tL = new el();
        function tP(e = {}) {
          let t,
            {
              emit: n,
              checkoutEveryNms: r,
              checkoutEveryNth: i,
              blockClass: l = "rr-block",
              blockSelector: c = null,
              unblockSelector: u = null,
              ignoreClass: d = "rr-ignore",
              ignoreSelector: p = null,
              maskAllText: h = !1,
              maskTextClass: f = "rr-mask",
              unmaskTextClass: m = null,
              maskTextSelector: g = null,
              unmaskTextSelector: _ = null,
              inlineStylesheet: v = !0,
              maskAllInputs: y,
              maskInputOptions: b,
              slimDOMOptions: S,
              maskAttributeFn: w,
              maskInputFn: E,
              maskTextFn: k,
              maxCanvasSize: C = null,
              packFn: T,
              sampling: I = {},
              dataURLOptions: M = {},
              mousemoveWait: O,
              recordDOM: D = !0,
              recordCanvas: R = !1,
              recordCrossOriginIframes: A = !1,
              recordAfter: N = "DOMContentLoaded" === e.recordAfter
                ? e.recordAfter
                : "load",
              userTriggeredOnInput: L = !1,
              collectFonts: P = !1,
              inlineImages: F = !1,
              plugins: j,
              keepIframeSrcFn: $ = () => !1,
              ignoreCSSAttributes: U = new Set([]),
              errorHandler: B,
              onMutation: z,
              getCanvasManager: H,
            } = e;
          o = B;
          let q = !A || window.parent === window,
            W = !1;
          if (!q)
            try {
              window.parent.document && (W = !1);
            } catch (e) {
              W = !0;
            }
          if (q && !n) throw Error("emit function is required");
          if (!q && !W) return () => {};
          void 0 !== O && void 0 === I.mousemove && (I.mousemove = O),
            tL.reset();
          let K =
              !0 === y
                ? {
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
                    checkbox: !0,
                  }
                : void 0 !== b
                  ? b
                  : {},
            X =
              !0 === S || "all" === S
                ? {
                    script: !0,
                    comment: !0,
                    headFavicon: !0,
                    headWhitespace: !0,
                    headMetaSocial: !0,
                    headMetaRobots: !0,
                    headMetaHttpEquiv: !0,
                    headMetaVerification: !0,
                    headMetaAuthorship: "all" === S,
                    headMetaDescKeywords: "all" === S,
                  }
                : S || {};
          !(function (e = window) {
            "NodeList" in e &&
              !e.NodeList.prototype.forEach &&
              (e.NodeList.prototype.forEach = Array.prototype.forEach),
              "DOMTokenList" in e &&
                !e.DOMTokenList.prototype.forEach &&
                (e.DOMTokenList.prototype.forEach = Array.prototype.forEach),
              Node.prototype.contains ||
                (Node.prototype.contains = (...e) => {
                  let t = e[0];
                  if (!(0 in e)) throw TypeError("1 argument is required");
                  do if (this === t) return !0;
                  while ((t = t && t.parentNode));
                  return !1;
                });
          })();
          let V = 0,
            G = (e) => {
              for (let t of j || [])
                t.eventProcessor && (e = t.eventProcessor(e));
              return T && !W && (e = T(e)), e;
            };
          s = (e, o) => {
            if (
              ((e.timestamp = eV()),
              (0, x.z)([
                tf,
                "access",
                (e) => e[0],
                "optionalAccess",
                (e) => e.isFrozen,
                "call",
                (e) => e(),
              ]) &&
                e.type !== tt.FullSnapshot &&
                (e.type !== tt.IncrementalSnapshot ||
                  e.data.source !== tn.Mutation) &&
                tf.forEach((e) => e.unfreeze()),
              q)
            )
              (0, x.z)([n, "optionalCall", (t) => t(G(e), o)]);
            else if (W) {
              let t = {
                type: "rrweb",
                event: G(e),
                origin: window.location.origin,
                isCheckout: o,
              };
              window.parent.postMessage(t, "*");
            }
            if (e.type === tt.FullSnapshot) (t = e), (V = 0);
            else if (e.type === tt.IncrementalSnapshot) {
              if (e.data.source === tn.Mutation && e.data.isAttachIframe)
                return;
              V++;
              let n = i && V >= i,
                o = r && t && e.timestamp - t.timestamp > r;
              (n || o) && ei(!0);
            }
          };
          let J = (e) => {
              s({
                type: tt.IncrementalSnapshot,
                data: { source: tn.Mutation, ...e },
              });
            },
            Y = (e) =>
              s({
                type: tt.IncrementalSnapshot,
                data: { source: tn.Scroll, ...e },
              }),
            Q = (e) =>
              s({
                type: tt.IncrementalSnapshot,
                data: { source: tn.CanvasMutation, ...e },
              }),
            Z = new tA({
              mutationCb: J,
              adoptedStyleSheetCb: (e) =>
                s({
                  type: tt.IncrementalSnapshot,
                  data: { source: tn.AdoptedStyleSheet, ...e },
                }),
            }),
            ee =
              "boolean" == typeof __RRWEB_EXCLUDE_IFRAME__ &&
              __RRWEB_EXCLUDE_IFRAME__
                ? new tI()
                : new tM({
                    mirror: tL,
                    mutationCb: J,
                    stylesheetManager: Z,
                    recordCrossOriginIframes: A,
                    wrappedEmit: s,
                  });
          for (let e of j || [])
            e.getMirror &&
              e.getMirror({
                nodeMirror: tL,
                crossOriginIframeMirror: ee.crossOriginIframeMirror,
                crossOriginIframeStyleMirror: ee.crossOriginIframeStyleMirror,
              });
          let et = new tN(),
            en = (function (e, t) {
              try {
                return e ? e(t) : new tR();
              } catch (e) {
                return (
                  console.warn("Unable to initialize CanvasManager"), new tR()
                );
              }
            })(H, {
              mirror: tL,
              win: window,
              mutationCb: (e) =>
                s({
                  type: tt.IncrementalSnapshot,
                  data: { source: tn.CanvasMutation, ...e },
                }),
              recordCanvas: R,
              blockClass: l,
              blockSelector: c,
              unblockSelector: u,
              maxCanvasSize: C,
              sampling: I.canvas,
              dataURLOptions: M,
              errorHandler: B,
            }),
            er =
              "boolean" == typeof __RRWEB_EXCLUDE_SHADOW_DOM__ &&
              __RRWEB_EXCLUDE_SHADOW_DOM__
                ? new tO()
                : new tD({
                    mutationCb: J,
                    scrollCb: Y,
                    bypassOptions: {
                      onMutation: z,
                      blockClass: l,
                      blockSelector: c,
                      unblockSelector: u,
                      maskAllText: h,
                      maskTextClass: f,
                      unmaskTextClass: m,
                      maskTextSelector: g,
                      unmaskTextSelector: _,
                      inlineStylesheet: v,
                      maskInputOptions: K,
                      dataURLOptions: M,
                      maskAttributeFn: w,
                      maskTextFn: k,
                      maskInputFn: E,
                      recordCanvas: R,
                      inlineImages: F,
                      sampling: I,
                      slimDOMOptions: X,
                      iframeManager: ee,
                      stylesheetManager: Z,
                      canvasManager: en,
                      keepIframeSrcFn: $,
                      processedNodeManager: et,
                    },
                    mirror: tL,
                  }),
            ei = (e = !1) => {
              if (!D) return;
              s(
                {
                  type: tt.Meta,
                  data: {
                    href: window.location.href,
                    width: eY(),
                    height: eJ(),
                  },
                },
                e,
              ),
                Z.reset(),
                er.init(),
                tf.forEach((e) => e.lock());
              let t = (function (e, t) {
                let {
                  mirror: n = new el(),
                  blockClass: r = "rr-block",
                  blockSelector: i = null,
                  unblockSelector: o = null,
                  maskAllText: s = !1,
                  maskTextClass: a = "rr-mask",
                  unmaskTextClass: l = null,
                  maskTextSelector: c = null,
                  unmaskTextSelector: u = null,
                  inlineStylesheet: d = !0,
                  inlineImages: p = !1,
                  recordCanvas: h = !1,
                  maskAllInputs: f = !1,
                  maskAttributeFn: m,
                  maskTextFn: g,
                  maskInputFn: _,
                  slimDOM: v = !1,
                  dataURLOptions: y,
                  preserveWhiteSpace: b,
                  onSerialize: S,
                  onIframeLoad: w,
                  iframeLoadTimeout: E,
                  onStylesheetLoad: k,
                  stylesheetLoadTimeout: x,
                  keepIframeSrcFn: C = () => !1,
                } = t || {};
                return eB(e, {
                  doc: e,
                  mirror: n,
                  blockClass: r,
                  blockSelector: i,
                  unblockSelector: o,
                  maskAllText: s,
                  maskTextClass: a,
                  unmaskTextClass: l,
                  maskTextSelector: c,
                  unmaskTextSelector: u,
                  skipChild: !1,
                  inlineStylesheet: d,
                  maskInputOptions:
                    !0 === f
                      ? {
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
                        }
                      : !1 === f
                        ? {}
                        : f,
                  maskAttributeFn: m,
                  maskTextFn: g,
                  maskInputFn: _,
                  slimDOMOptions:
                    !0 === v || "all" === v
                      ? {
                          script: !0,
                          comment: !0,
                          headFavicon: !0,
                          headWhitespace: !0,
                          headMetaDescKeywords: "all" === v,
                          headMetaSocial: !0,
                          headMetaRobots: !0,
                          headMetaHttpEquiv: !0,
                          headMetaAuthorship: !0,
                          headMetaVerification: !0,
                        }
                      : !1 === v
                        ? {}
                        : v,
                  dataURLOptions: y,
                  inlineImages: p,
                  recordCanvas: h,
                  preserveWhiteSpace: b,
                  onSerialize: S,
                  onIframeLoad: w,
                  iframeLoadTimeout: E,
                  onStylesheetLoad: k,
                  stylesheetLoadTimeout: x,
                  keepIframeSrcFn: C,
                  newlyAddedElement: !1,
                });
              })(document, {
                mirror: tL,
                blockClass: l,
                blockSelector: c,
                unblockSelector: u,
                maskAllText: h,
                maskTextClass: f,
                unmaskTextClass: m,
                maskTextSelector: g,
                unmaskTextSelector: _,
                inlineStylesheet: v,
                maskAllInputs: K,
                maskAttributeFn: w,
                maskInputFn: E,
                maskTextFn: k,
                slimDOM: X,
                dataURLOptions: M,
                recordCanvas: R,
                inlineImages: F,
                onSerialize: (e) => {
                  e2(e, tL) && ee.addIframe(e),
                    e3(e, tL) && Z.trackLinkElement(e),
                    e6(e) && er.addShadowRoot(e.shadowRoot, document);
                },
                onIframeLoad: (e, t) => {
                  ee.attachIframe(e, t),
                    e.contentWindow && en.addWindow(e.contentWindow),
                    er.observeAttachShadow(e);
                },
                onStylesheetLoad: (e, t) => {
                  Z.attachLinkElement(e, t);
                },
                keepIframeSrcFn: $,
              });
              if (!t) return console.warn("Failed to snapshot the document");
              s({
                type: tt.FullSnapshot,
                data: { node: t, initialOffset: eG(window) },
              }),
                tf.forEach((e) => e.unlock()),
                document.adoptedStyleSheets &&
                  document.adoptedStyleSheets.length > 0 &&
                  Z.adoptStyleSheets(
                    document.adoptedStyleSheets,
                    tL.getId(document),
                  );
            };
          a = ei;
          try {
            let e = [],
              t = (e) =>
                tp(tE)(
                  {
                    onMutation: z,
                    mutationCb: J,
                    mousemoveCb: (e, t) =>
                      s({
                        type: tt.IncrementalSnapshot,
                        data: { source: t, positions: e },
                      }),
                    mouseInteractionCb: (e) =>
                      s({
                        type: tt.IncrementalSnapshot,
                        data: { source: tn.MouseInteraction, ...e },
                      }),
                    scrollCb: Y,
                    viewportResizeCb: (e) =>
                      s({
                        type: tt.IncrementalSnapshot,
                        data: { source: tn.ViewportResize, ...e },
                      }),
                    inputCb: (e) =>
                      s({
                        type: tt.IncrementalSnapshot,
                        data: { source: tn.Input, ...e },
                      }),
                    mediaInteractionCb: (e) =>
                      s({
                        type: tt.IncrementalSnapshot,
                        data: { source: tn.MediaInteraction, ...e },
                      }),
                    styleSheetRuleCb: (e) =>
                      s({
                        type: tt.IncrementalSnapshot,
                        data: { source: tn.StyleSheetRule, ...e },
                      }),
                    styleDeclarationCb: (e) =>
                      s({
                        type: tt.IncrementalSnapshot,
                        data: { source: tn.StyleDeclaration, ...e },
                      }),
                    canvasMutationCb: Q,
                    fontCb: (e) =>
                      s({
                        type: tt.IncrementalSnapshot,
                        data: { source: tn.Font, ...e },
                      }),
                    selectionCb: (e) => {
                      s({
                        type: tt.IncrementalSnapshot,
                        data: { source: tn.Selection, ...e },
                      });
                    },
                    customElementCb: (e) => {
                      s({
                        type: tt.IncrementalSnapshot,
                        data: { source: tn.CustomElement, ...e },
                      });
                    },
                    blockClass: l,
                    ignoreClass: d,
                    ignoreSelector: p,
                    maskAllText: h,
                    maskTextClass: f,
                    unmaskTextClass: m,
                    maskTextSelector: g,
                    unmaskTextSelector: _,
                    maskInputOptions: K,
                    inlineStylesheet: v,
                    sampling: I,
                    recordDOM: D,
                    recordCanvas: R,
                    inlineImages: F,
                    userTriggeredOnInput: L,
                    collectFonts: P,
                    doc: e,
                    maskAttributeFn: w,
                    maskInputFn: E,
                    maskTextFn: k,
                    keepIframeSrcFn: $,
                    blockSelector: c,
                    unblockSelector: u,
                    slimDOMOptions: X,
                    dataURLOptions: M,
                    mirror: tL,
                    iframeManager: ee,
                    stylesheetManager: Z,
                    shadowDomManager: er,
                    processedNodeManager: et,
                    canvasManager: en,
                    ignoreCSSAttributes: U,
                    plugins:
                      (0, x.z)([
                        j,
                        "optionalAccess",
                        (e) => e.filter,
                        "call",
                        (e) => e((e) => e.observer),
                        "optionalAccess",
                        (e) => e.map,
                        "call",
                        (e) =>
                          e((e) => ({
                            observer: e.observer,
                            options: e.options,
                            callback: (t) =>
                              s({
                                type: tt.Plugin,
                                data: { plugin: e.name, payload: t },
                              }),
                          })),
                      ]) || [],
                  },
                  {},
                );
            ee.addLoadListener((n) => {
              try {
                e.push(t(n.contentDocument));
              } catch (e) {
                console.warn(e);
              }
            });
            let n = () => {
              ei(), e.push(t(document));
            };
            return (
              "interactive" === document.readyState ||
              "complete" === document.readyState
                ? n()
                : (e.push(
                    eH("DOMContentLoaded", () => {
                      s({ type: tt.DomContentLoaded, data: {} }),
                        "DOMContentLoaded" === N && n();
                    }),
                  ),
                  e.push(
                    eH(
                      "load",
                      () => {
                        s({ type: tt.Load, data: {} }), "load" === N && n();
                      },
                      window,
                    ),
                  )),
              () => {
                e.forEach((e) => e()), et.destroy(), (a = void 0), (o = void 0);
              }
            );
          } catch (e) {
            console.warn(e);
          }
        }
        function tF(e) {
          return e > 0x2540be3ff ? e : 1e3 * e;
        }
        function tj(e) {
          return e > 0x2540be3ff ? e / 1e3 : e;
        }
        function t$(e, t) {
          "sentry.transaction" !== t.category &&
            (["ui.click", "ui.input"].includes(t.category)
              ? e.triggerUserActivity()
              : e.checkAndHandleExpiredSession(),
            e.addUpdate(
              () => (
                e.throttledAddEvent({
                  type: tt.Custom,
                  timestamp: 1e3 * (t.timestamp || 0),
                  data: { tag: "breadcrumb", payload: (0, T.S8)(t, 10, 1e3) },
                }),
                "console" === t.category
              ),
            ));
        }
        function tU(e) {
          return e.closest("button,a") || e;
        }
        function tB(e) {
          let t = tz(e);
          return t && t instanceof Element ? tU(t) : t;
        }
        function tz(e) {
          var t;
          return "object" == typeof (t = e) && t && "target" in t
            ? e.target
            : e;
        }
        (tP.mirror = tL),
          (tP.takeFullSnapshot = function (e) {
            if (!a)
              throw Error("please take full snapshot after start recording");
            a(e);
          });
        let tH = new Set([
          tn.Mutation,
          tn.StyleSheetRule,
          tn.StyleDeclaration,
          tn.AdoptedStyleSheet,
          tn.CanvasMutation,
          tn.Selection,
          tn.MediaInteraction,
        ]);
        class tq {
          constructor(e, t, n = t$) {
            (this._lastMutation = 0),
              (this._lastScroll = 0),
              (this._clicks = []),
              (this._timeout = t.timeout / 1e3),
              (this._threshold = t.threshold / 1e3),
              (this._scrollTimeout = t.scrollTimeout / 1e3),
              (this._replay = e),
              (this._ignoreSelector = t.ignoreSelector),
              (this._addBreadcrumbEvent = n);
          }
          addListeners() {
            var e;
            let t =
              ((e = () => {
                this._lastMutation = tK();
              }),
              l ||
                ((l = []),
                (0, I.GS)(Z, "open", function (e) {
                  return function (...t) {
                    if (l)
                      try {
                        l.forEach((e) => e());
                      } catch (e) {}
                    return e.apply(Z, t);
                  };
                })),
              l.push(e),
              () => {
                let t = l ? l.indexOf(e) : -1;
                t > -1 && l.splice(t, 1);
              });
            this._teardown = () => {
              t(),
                (this._clicks = []),
                (this._lastMutation = 0),
                (this._lastScroll = 0);
            };
          }
          removeListeners() {
            this._teardown && this._teardown(),
              this._checkClickTimeout && clearTimeout(this._checkClickTimeout);
          }
          handleClick(e, t) {
            var n, r, i;
            if (
              ((n = t),
              (r = this._ignoreSelector),
              !tW.includes(n.tagName) ||
                ("INPUT" === n.tagName &&
                  !["submit", "button"].includes(
                    n.getAttribute("type") || "",
                  )) ||
                ("A" === n.tagName &&
                  (n.hasAttribute("download") ||
                    (n.hasAttribute("target") &&
                      "_self" !== n.getAttribute("target")))) ||
                (r && n.matches(r)) ||
                !(
                  (i = e).data &&
                  "number" == typeof i.data.nodeId &&
                  i.timestamp
                ))
            )
              return;
            let o = {
              timestamp: tj(e.timestamp),
              clickBreadcrumb: e,
              clickCount: 0,
              node: t,
            };
            this._clicks.some(
              (e) =>
                e.node === o.node && 1 > Math.abs(e.timestamp - o.timestamp),
            ) ||
              (this._clicks.push(o),
              1 === this._clicks.length && this._scheduleCheckClicks());
          }
          registerMutation(e = Date.now()) {
            this._lastMutation = tj(e);
          }
          registerScroll(e = Date.now()) {
            this._lastScroll = tj(e);
          }
          registerClick(e) {
            let t = tU(e);
            this._handleMultiClick(t);
          }
          _handleMultiClick(e) {
            this._getClicks(e).forEach((e) => {
              e.clickCount++;
            });
          }
          _getClicks(e) {
            return this._clicks.filter((t) => t.node === e);
          }
          _checkClicks() {
            let e = [],
              t = tK();
            for (let n of (this._clicks.forEach((n) => {
              !n.mutationAfter &&
                this._lastMutation &&
                (n.mutationAfter =
                  n.timestamp <= this._lastMutation
                    ? this._lastMutation - n.timestamp
                    : void 0),
                !n.scrollAfter &&
                  this._lastScroll &&
                  (n.scrollAfter =
                    n.timestamp <= this._lastScroll
                      ? this._lastScroll - n.timestamp
                      : void 0),
                n.timestamp + this._timeout <= t && e.push(n);
            }),
            e)) {
              let e = this._clicks.indexOf(n);
              e > -1 &&
                (this._generateBreadcrumbs(n), this._clicks.splice(e, 1));
            }
            this._clicks.length && this._scheduleCheckClicks();
          }
          _generateBreadcrumbs(e) {
            let t = this._replay,
              n = e.scrollAfter && e.scrollAfter <= this._scrollTimeout,
              r = e.mutationAfter && e.mutationAfter <= this._threshold,
              { clickCount: i, clickBreadcrumb: o } = e;
            if (!n && !r) {
              let n =
                  1e3 *
                  Math.min(e.mutationAfter || this._timeout, this._timeout),
                r = n < 1e3 * this._timeout ? "mutation" : "timeout",
                s = {
                  type: "default",
                  message: o.message,
                  timestamp: o.timestamp,
                  category: "ui.slowClickDetected",
                  data: {
                    ...o.data,
                    url: Z.location.href,
                    route: t.getCurrentRoute(),
                    timeAfterClickMs: n,
                    endReason: r,
                    clickCount: i || 1,
                  },
                };
              this._addBreadcrumbEvent(t, s);
              return;
            }
            if (i > 1) {
              let e = {
                type: "default",
                message: o.message,
                timestamp: o.timestamp,
                category: "ui.multiClick",
                data: {
                  ...o.data,
                  url: Z.location.href,
                  route: t.getCurrentRoute(),
                  clickCount: i,
                  metric: !0,
                },
              };
              this._addBreadcrumbEvent(t, e);
            }
          }
          _scheduleCheckClicks() {
            this._checkClickTimeout && clearTimeout(this._checkClickTimeout),
              (this._checkClickTimeout = (0, V.wg)(
                () => this._checkClicks(),
                1e3,
              ));
          }
        }
        let tW = ["A", "BUTTON", "INPUT"];
        function tK() {
          return Date.now() / 1e3;
        }
        function tX(e) {
          return { timestamp: Date.now() / 1e3, type: "default", ...e };
        }
        ((y = E || (E = {}))[(y.Document = 0)] = "Document"),
          (y[(y.DocumentType = 1)] = "DocumentType"),
          (y[(y.Element = 2)] = "Element"),
          (y[(y.Text = 3)] = "Text"),
          (y[(y.CDATA = 4)] = "CDATA"),
          (y[(y.Comment = 5)] = "Comment");
        let tV = new Set([
          "id",
          "class",
          "aria-label",
          "role",
          "name",
          "alt",
          "title",
          "data-test-id",
          "data-testid",
          "disabled",
          "aria-disabled",
          "data-sentry-component",
        ]);
        function tG(e, t) {
          let n = tP.mirror.getId(e),
            r = n && tP.mirror.getNode(n),
            i = r && tP.mirror.getMeta(r),
            o = i && i.type === E.Element ? i : null;
          return {
            message: t,
            data: o
              ? {
                  nodeId: n,
                  node: {
                    id: n,
                    tagName: o.tagName,
                    textContent: Array.from(o.childNodes)
                      .map((e) => e.type === E.Text && e.textContent)
                      .filter(Boolean)
                      .map((e) => e.trim())
                      .join(""),
                    attributes: (function (e) {
                      let t = {};
                      for (let n in (!e["data-sentry-component"] &&
                        e["data-sentry-element"] &&
                        (e["data-sentry-component"] = e["data-sentry-element"]),
                      e))
                        if (tV.has(n)) {
                          let r = n;
                          ("data-testid" === n || "data-test-id" === n) &&
                            (r = "testId"),
                            (t[r] = e[n]);
                        }
                      return t;
                    })(o.attributes),
                  },
                }
              : {},
          };
        }
        let tJ = {
          resource: function (e) {
            let {
              entryType: t,
              initiatorType: n,
              name: r,
              responseEnd: i,
              startTime: o,
              decodedBodySize: s,
              encodedBodySize: a,
              responseStatus: l,
              transferSize: c,
            } = e;
            return ["fetch", "xmlhttprequest"].includes(n)
              ? null
              : {
                  type: `${t}.${n}`,
                  start: tZ(o),
                  end: tZ(i),
                  name: r,
                  data: {
                    size: c,
                    statusCode: l,
                    decodedBodySize: s,
                    encodedBodySize: a,
                  },
                };
          },
          paint: function (e) {
            let { duration: t, entryType: n, name: r, startTime: i } = e,
              o = tZ(i);
            return { type: n, name: r, start: o, end: o + t, data: void 0 };
          },
          navigation: function (e) {
            let {
              entryType: t,
              name: n,
              decodedBodySize: r,
              duration: i,
              domComplete: o,
              encodedBodySize: s,
              domContentLoadedEventStart: a,
              domContentLoadedEventEnd: l,
              domInteractive: c,
              loadEventStart: u,
              loadEventEnd: d,
              redirectCount: p,
              startTime: h,
              transferSize: f,
              type: m,
            } = e;
            return 0 === i
              ? null
              : {
                  type: `${t}.${m}`,
                  start: tZ(h),
                  end: tZ(o),
                  name: n,
                  data: {
                    size: f,
                    decodedBodySize: r,
                    encodedBodySize: s,
                    duration: i,
                    domInteractive: c,
                    domContentLoadedEventStart: a,
                    domContentLoadedEventEnd: l,
                    loadEventStart: u,
                    loadEventEnd: d,
                    domComplete: o,
                    redirectCount: p,
                  },
                };
          },
        };
        function tY(e, t) {
          return ({ metric: n }) => void t.replayPerformanceEntries.push(e(n));
        }
        function tQ(e) {
          let t = tJ[e.entryType];
          return t ? t(e) : null;
        }
        function tZ(e) {
          return ((O.k3 || Z.performance.timeOrigin) + e) / 1e3;
        }
        function t0(e) {
          let t = e.entries[e.entries.length - 1];
          return t6(
            e,
            "largest-contentful-paint",
            t && t.element ? [t.element] : void 0,
          );
        }
        function t1(e) {
          let t = [],
            n = [];
          for (let r of e.entries)
            if (void 0 !== r.sources) {
              let e = [];
              for (let t of r.sources)
                if (t.node) {
                  n.push(t.node);
                  let r = tP.mirror.getId(t.node);
                  r && e.push(r);
                }
              t.push({ value: r.value, nodeIds: e.length ? e : void 0 });
            }
          return t6(e, "cumulative-layout-shift", n, t);
        }
        function t2(e) {
          let t = e.entries[e.entries.length - 1];
          return t6(
            e,
            "first-input-delay",
            t && t.target ? [t.target] : void 0,
          );
        }
        function t3(e) {
          let t = e.entries[e.entries.length - 1];
          return t6(
            e,
            "interaction-to-next-paint",
            t && t.target ? [t.target] : void 0,
          );
        }
        function t6(e, t, n, r) {
          let i = e.value,
            o = e.rating,
            s = tZ(i);
          return {
            type: "web-vital",
            name: t,
            start: s,
            end: s,
            data: {
              value: i,
              size: i,
              rating: o,
              nodeIds: n ? n.map((e) => tP.mirror.getId(e)) : void 0,
              attributions: r,
            },
          };
        }
        let t8 = "u" < typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
          t4 = ["info", "warn", "error", "log"],
          t5 = "[Replay] ";
        function t7(e, t = "info") {
          (0, D.Z)(
            {
              category: "console",
              data: { logger: "replay" },
              level: t,
              message: `${t5}${e}`,
            },
            { level: t },
          );
        }
        let t9 =
          ((c = !1),
          (u = !1),
          (d = {
            exception: () => void 0,
            infoTick: () => void 0,
            setConfig: (e) => {
              (c = e.captureExceptions), (u = e.traceInternals);
            },
          }),
          t8
            ? (t4.forEach((e) => {
                d[e] = (...t) => {
                  R.vF[e](t5, ...t), u && t7(t.join(""), (0, A.t)(e));
                };
              }),
              (d.exception = (e, ...t) => {
                t.length && d.error && d.error(...t),
                  R.vF.error(t5, e),
                  c ? (0, N.Cp)(e) : u && t7(e, "error");
              }),
              (d.infoTick = (...e) => {
                R.vF.info(t5, ...e), u && setTimeout(() => t7(e[0]), 0);
              }))
            : t4.forEach((e) => {
                d[e] = () => void 0;
              }),
          d);
        class ne extends Error {
          constructor() {
            super("Event buffer exceeded maximum size of 20000000.");
          }
        }
        class nt {
          constructor() {
            (this.events = []),
              (this._totalSize = 0),
              (this.hasCheckout = !1),
              (this.waitForCheckout = !1);
          }
          get hasEvents() {
            return this.events.length > 0;
          }
          get type() {
            return "sync";
          }
          destroy() {
            this.events = [];
          }
          async addEvent(e) {
            let t = JSON.stringify(e).length;
            if (((this._totalSize += t), this._totalSize > 2e7)) throw new ne();
            this.events.push(e);
          }
          finish() {
            return new Promise((e) => {
              let t = this.events;
              this.clear(), e(JSON.stringify(t));
            });
          }
          clear() {
            (this.events = []), (this._totalSize = 0), (this.hasCheckout = !1);
          }
          getEarliestTimestamp() {
            let e = this.events.map((e) => e.timestamp).sort()[0];
            return e ? tF(e) : null;
          }
        }
        class nn {
          constructor(e) {
            (this._worker = e), (this._id = 0);
          }
          ensureReady() {
            return (
              this._ensureReadyPromise ||
                (this._ensureReadyPromise = new Promise((e, t) => {
                  this._worker.addEventListener(
                    "message",
                    ({ data: n }) => {
                      n.success ? e() : t();
                    },
                    { once: !0 },
                  ),
                    this._worker.addEventListener(
                      "error",
                      (e) => {
                        t(e);
                      },
                      { once: !0 },
                    );
                })),
              this._ensureReadyPromise
            );
          }
          destroy() {
            t8 && t9.info("Destroying compression worker"),
              this._worker.terminate();
          }
          postMessage(e, t) {
            let n = this._getAndIncrementId();
            return new Promise((r, i) => {
              let o = ({ data: t }) => {
                if (t.method === e && t.id === n) {
                  if (
                    (this._worker.removeEventListener("message", o), !t.success)
                  ) {
                    t8 && t9.error("Error in compression worker: ", t.response),
                      i(Error("Error in compression worker"));
                    return;
                  }
                  r(t.response);
                }
              };
              this._worker.addEventListener("message", o),
                this._worker.postMessage({ id: n, method: e, arg: t });
            });
          }
          _getAndIncrementId() {
            return this._id++;
          }
        }
        class nr {
          constructor(e) {
            (this._worker = new nn(e)),
              (this._earliestTimestamp = null),
              (this._totalSize = 0),
              (this.hasCheckout = !1),
              (this.waitForCheckout = !1);
          }
          get hasEvents() {
            return !!this._earliestTimestamp;
          }
          get type() {
            return "worker";
          }
          ensureReady() {
            return this._worker.ensureReady();
          }
          destroy() {
            this._worker.destroy();
          }
          addEvent(e) {
            let t = tF(e.timestamp);
            (!this._earliestTimestamp || t < this._earliestTimestamp) &&
              (this._earliestTimestamp = t);
            let n = JSON.stringify(e);
            return ((this._totalSize += n.length), this._totalSize > 2e7)
              ? Promise.reject(new ne())
              : this._sendEventToWorker(n);
          }
          finish() {
            return this._finishRequest();
          }
          clear() {
            (this._earliestTimestamp = null),
              (this._totalSize = 0),
              (this.hasCheckout = !1),
              this._worker.postMessage("clear").then(null, (e) => {
                t8 &&
                  t9.exception(
                    e,
                    'Sending "clear" message to worker failed',
                    e,
                  );
              });
          }
          getEarliestTimestamp() {
            return this._earliestTimestamp;
          }
          _sendEventToWorker(e) {
            return this._worker.postMessage("addEvent", e);
          }
          async _finishRequest() {
            let e = await this._worker.postMessage("finish");
            return (this._earliestTimestamp = null), (this._totalSize = 0), e;
          }
        }
        class ni {
          constructor(e) {
            (this._fallback = new nt()),
              (this._compression = new nr(e)),
              (this._used = this._fallback),
              (this._ensureWorkerIsLoadedPromise =
                this._ensureWorkerIsLoaded());
          }
          get waitForCheckout() {
            return this._used.waitForCheckout;
          }
          get type() {
            return this._used.type;
          }
          get hasEvents() {
            return this._used.hasEvents;
          }
          get hasCheckout() {
            return this._used.hasCheckout;
          }
          set hasCheckout(e) {
            this._used.hasCheckout = e;
          }
          set waitForCheckout(e) {
            this._used.waitForCheckout = e;
          }
          destroy() {
            this._fallback.destroy(), this._compression.destroy();
          }
          clear() {
            return this._used.clear();
          }
          getEarliestTimestamp() {
            return this._used.getEarliestTimestamp();
          }
          addEvent(e) {
            return this._used.addEvent(e);
          }
          async finish() {
            return await this.ensureWorkerIsLoaded(), this._used.finish();
          }
          ensureWorkerIsLoaded() {
            return this._ensureWorkerIsLoadedPromise;
          }
          async _ensureWorkerIsLoaded() {
            try {
              await this._compression.ensureReady();
            } catch (e) {
              t8 &&
                t9.exception(
                  e,
                  "Failed to load the compression worker, falling back to simple buffer",
                );
              return;
            }
            await this._switchToCompressionWorker();
          }
          async _switchToCompressionWorker() {
            let {
                events: e,
                hasCheckout: t,
                waitForCheckout: n,
              } = this._fallback,
              r = [];
            for (let t of e) r.push(this._compression.addEvent(t));
            (this._compression.hasCheckout = t),
              (this._compression.waitForCheckout = n),
              (this._used = this._compression);
            try {
              await Promise.all(r), this._fallback.clear();
            } catch (e) {
              t8 &&
                t9.exception(e, "Failed to add events when switching buffers.");
            }
          }
        }
        function no() {
          try {
            return "sessionStorage" in Z && !!Z.sessionStorage;
          } catch (e) {
            return !1;
          }
        }
        function ns(e) {
          return void 0 !== e && Math.random() < e;
        }
        function na(e) {
          let t = Date.now(),
            n = e.id || (0, L.eJ)(),
            r = e.started || t,
            i = e.lastActivity || t,
            o = e.segmentId || 0;
          return {
            id: n,
            started: r,
            lastActivity: i,
            segmentId: o,
            sampled: e.sampled,
            previousSessionId: e.previousSessionId,
          };
        }
        function nl(e) {
          if (no())
            try {
              Z.sessionStorage.setItem(ee, JSON.stringify(e));
            } catch (e) {}
        }
        function nc(
          { sessionSampleRate: e, allowBuffering: t, stickySession: n = !1 },
          { previousSessionId: r } = {},
        ) {
          let i = na({
            sampled: ns(e) ? "session" : !!t && "buffer",
            previousSessionId: r,
          });
          return n && nl(i), i;
        }
        function nu(e, t, n = +new Date()) {
          return null === e || void 0 === t || t < 0 || (0 !== t && e + t <= n);
        }
        function nd(
          e,
          {
            maxReplayDuration: t,
            sessionIdleExpire: n,
            targetTime: r = Date.now(),
          },
        ) {
          return nu(e.started, t, r) || nu(e.lastActivity, n, r);
        }
        function np(e, { sessionIdleExpire: t, maxReplayDuration: n }) {
          return (
            !!nd(e, { sessionIdleExpire: t, maxReplayDuration: n }) &&
            ("buffer" !== e.sampled || 0 !== e.segmentId)
          );
        }
        function nh(
          { sessionIdleExpire: e, maxReplayDuration: t, previousSessionId: n },
          r,
        ) {
          let i =
            r.stickySession &&
            (function () {
              if (!no()) return null;
              try {
                let e = Z.sessionStorage.getItem(ee);
                if (!e) return null;
                let t = JSON.parse(e);
                return t8 && t9.infoTick("Loading existing session"), na(t);
              } catch (e) {
                return null;
              }
            })();
          return i
            ? np(i, { sessionIdleExpire: e, maxReplayDuration: t })
              ? (t8 &&
                  t9.infoTick(
                    "Session in sessionStorage is expired, creating new one...",
                  ),
                nc(r, { previousSessionId: i.id }))
              : i
            : (t8 && t9.infoTick("Creating new session"),
              nc(r, { previousSessionId: n }));
        }
        function nf(e, t, n) {
          return !!ng(e, t) && (nm(e, t, n), !0);
        }
        async function nm(e, t, n) {
          let { eventBuffer: r } = e;
          if (!r || (r.waitForCheckout && !n)) return null;
          let i = "buffer" === e.recordingMode;
          try {
            n && i && r.clear(),
              n && ((r.hasCheckout = !0), (r.waitForCheckout = !1));
            let o = e.getOptions(),
              s = (function (e, t) {
                try {
                  if ("function" == typeof t && e.type === tt.Custom)
                    return t(e);
                } catch (e) {
                  return (
                    t8 &&
                      t9.exception(
                        e,
                        "An error occurred in the `beforeAddRecordingEvent` callback, skipping the event...",
                      ),
                    null
                  );
                }
                return e;
              })(t, o.beforeAddRecordingEvent);
            if (!s) return;
            return await r.addEvent(s);
          } catch (o) {
            let t = o && o instanceof ne;
            if (t && i) return r.clear(), (r.waitForCheckout = !0), null;
            e.handleException(o),
              await e.stop({ reason: t ? "addEventSizeExceeded" : "addEvent" });
            let n = (0, P.KU)();
            n && n.recordDroppedEvent("internal_sdk_error", "replay");
          }
        }
        function ng(e, t) {
          if (!e.eventBuffer || e.isPaused() || !e.isEnabled()) return !1;
          let n = tF(t.timestamp);
          return (
            !(n + e.timeouts.sessionIdlePause < Date.now()) &&
            (!(
              n >
              e.getContext().initialTimestamp + e.getOptions().maxReplayDuration
            ) ||
              (t8 &&
                t9.infoTick(
                  `Skipping event with timestamp ${n} because it is after maxReplayDuration`,
                ),
              !1))
          );
        }
        function n_(e) {
          return "transaction" === e.type;
        }
        function nv(e) {
          return "feedback" === e.type;
        }
        function ny(e) {
          return !!e.category;
        }
        function nb() {
          let e = (0, P.o5)().getPropagationContext().dsc;
          e && delete e.replay_id;
          let t = (0, F.Bk)();
          if (t) {
            let e = (0, j.k1)(t);
            delete e.replay_id;
          }
        }
        function nS(e, t) {
          return t.map(({ type: t, start: n, end: r, name: i, data: o }) => {
            let s = e.throttledAddEvent({
              type: tt.Custom,
              timestamp: n,
              data: {
                tag: "performanceSpan",
                payload: {
                  op: t,
                  description: i,
                  startTimestamp: n,
                  endTimestamp: r,
                  data: o,
                },
              },
            });
            return "string" == typeof s ? Promise.resolve(null) : s;
          });
        }
        function nw(e, t) {
          var n;
          e.isEnabled() &&
            null !== t &&
            ((n = t.name),
            ((!t8 || !e.getOptions()._experiments.traceInternals) &&
              (0, $.A)(n, (0, P.KU)())) ||
              e.addUpdate(() => (nS(e, [t]), !0)));
        }
        function nE(e) {
          if (!e) return;
          let t = new TextEncoder();
          try {
            if ("string" == typeof e) return t.encode(e).length;
            if (e instanceof URLSearchParams)
              return t.encode(e.toString()).length;
            if (e instanceof FormData) {
              let n = nD(e);
              return t.encode(n).length;
            }
            if (e instanceof Blob) return e.size;
            if (e instanceof ArrayBuffer) return e.byteLength;
          } catch (e) {}
        }
        function nk(e) {
          if (!e) return;
          let t = parseInt(e, 10);
          return isNaN(t) ? void 0 : t;
        }
        function nx(e) {
          try {
            if ("string" == typeof e) return [e];
            if (e instanceof URLSearchParams) return [e.toString()];
            if (e instanceof FormData) return [nD(e)];
            if (!e) return [void 0];
          } catch (t) {
            return (
              t8 && t9.exception(t, "Failed to serialize body", e),
              [void 0, "BODY_PARSE_ERROR"]
            );
          }
          return (
            t8 && t9.info("Skipping network body because of body type", e),
            [void 0, "UNPARSEABLE_BODY_TYPE"]
          );
        }
        function nC(e, t) {
          if (!e)
            return { headers: {}, size: void 0, _meta: { warnings: [t] } };
          let n = { ...e._meta },
            r = n.warnings || [];
          return (n.warnings = [...r, t]), (e._meta = n), e;
        }
        function nT(e, t) {
          if (!t) return null;
          let {
            startTimestamp: n,
            endTimestamp: r,
            url: i,
            method: o,
            statusCode: s,
            request: a,
            response: l,
          } = t;
          return {
            type: e,
            start: n / 1e3,
            end: r / 1e3,
            name: i,
            data: (0, I.Ce)({
              method: o,
              statusCode: s,
              request: a,
              response: l,
            }),
          };
        }
        function nI(e) {
          return { headers: {}, size: e, _meta: { warnings: ["URL_SKIPPED"] } };
        }
        function nM(e, t, n) {
          if (!t && 0 === Object.keys(e).length) return;
          if (!t) return { headers: e };
          if (!n) return { headers: e, size: t };
          let r = { headers: e, size: t },
            { body: i, warnings: o } = (function (e) {
              var t;
              let n, r;
              if (!e || "string" != typeof e) return { body: e };
              let i = e.length > 15e4,
                o =
                  ((n = (t = e)[0]),
                  (r = t[t.length - 1]),
                  ("[" === n && "]" === r) || ("{" === n && "}" === r));
              if (i) {
                let t = e.slice(0, 15e4);
                return o
                  ? { body: t, warnings: ["MAYBE_JSON_TRUNCATED"] }
                  : { body: `${t}…`, warnings: ["TEXT_TRUNCATED"] };
              }
              if (o)
                try {
                  return { body: JSON.parse(e) };
                } catch (e) {}
              return { body: e };
            })(n);
          return (
            (r.body = i), o && o.length > 0 && (r._meta = { warnings: o }), r
          );
        }
        function nO(e, t) {
          return Object.entries(e).reduce((n, [r, i]) => {
            let o = r.toLowerCase();
            return t.includes(o) && e[r] && (n[o] = i), n;
          }, {});
        }
        function nD(e) {
          return new URLSearchParams(e).toString();
        }
        function nR(e, t) {
          let n = (function (e, t = Z.document.baseURI) {
            if (
              e.startsWith("http://") ||
              e.startsWith("https://") ||
              e.startsWith(Z.location.origin)
            )
              return e;
            let n = new URL(e, t);
            if (n.origin !== new URL(t).origin) return e;
            let r = n.href;
            return !e.endsWith("/") && r.endsWith("/") ? r.slice(0, -1) : r;
          })(e);
          return (0, U.Xr)(n, t);
        }
        async function nA(e, t, n) {
          try {
            let r = await nN(e, t, n),
              i = nT("resource.fetch", r);
            nw(n.replay, i);
          } catch (e) {
            t8 && t9.exception(e, "Failed to capture fetch breadcrumb");
          }
        }
        async function nN(e, t, n) {
          let r = Date.now(),
            { startTimestamp: i = r, endTimestamp: o = r } = t,
            {
              url: s,
              method: a,
              status_code: l = 0,
              request_body_size: c,
              response_body_size: u,
            } = e.data,
            d =
              nR(s, n.networkDetailAllowUrls) &&
              !nR(s, n.networkDetailDenyUrls);
          return {
            startTimestamp: i,
            endTimestamp: o,
            url: s,
            method: a,
            statusCode: l,
            request: d
              ? (function (
                  { networkCaptureBodies: e, networkRequestHeaders: t },
                  n,
                  r,
                ) {
                  var i, o;
                  let s = n
                    ? ((i = n),
                      (o = t),
                      1 === i.length && "string" != typeof i[0]
                        ? n$(i[0], o)
                        : 2 === i.length
                          ? n$(i[1], o)
                          : {})
                    : {};
                  if (!e) return nM(s, r, void 0);
                  let [a, l] = nx(nF(n)),
                    c = nM(s, r, a);
                  return l ? nC(c, l) : c;
                })(n, t.input, c)
              : nI(c),
            response: await nL(d, n, t.response, u),
          };
        }
        async function nL(
          e,
          { networkCaptureBodies: t, networkResponseHeaders: n },
          r,
          i,
        ) {
          if (!e && void 0 !== i) return nI(i);
          let o = r ? nj(r.headers, n) : {};
          if (!r || (!t && void 0 !== i)) return nM(o, i, void 0);
          let [s, a] = await nP(r),
            l = (function (
              e,
              {
                networkCaptureBodies: t,
                responseBodySize: n,
                captureDetails: r,
                headers: i,
              },
            ) {
              try {
                let o = e && e.length && void 0 === n ? nE(e) : n;
                if (!r) return nI(o);
                if (t) return nM(i, o, e);
                return nM(i, o, void 0);
              } catch (e) {
                return (
                  t8 && t9.exception(e, "Failed to serialize response body"),
                  nM(i, n, void 0)
                );
              }
            })(s, {
              networkCaptureBodies: t,
              responseBodySize: i,
              captureDetails: e,
              headers: o,
            });
          return a ? nC(l, a) : l;
        }
        async function nP(e) {
          let t = (function (e) {
            try {
              return e.clone();
            } catch (e) {
              t8 && t9.exception(e, "Failed to clone response body");
            }
          })(e);
          if (!t) return [void 0, "BODY_PARSE_ERROR"];
          try {
            var n;
            return [
              await ((n = t),
              new Promise((e, t) => {
                let r = (0, V.wg)(
                  () => t(Error("Timeout while trying to read response body")),
                  500,
                );
                nU(n)
                  .then(
                    (t) => e(t),
                    (e) => t(e),
                  )
                  .finally(() => clearTimeout(r));
              })),
            ];
          } catch (e) {
            if (e instanceof Error && e.message.indexOf("Timeout") > -1)
              return (
                t8 && t9.warn("Parsing text body from response timed out"),
                [void 0, "BODY_PARSE_TIMEOUT"]
              );
            return (
              t8 && t9.exception(e, "Failed to get text body from response"),
              [void 0, "BODY_PARSE_ERROR"]
            );
          }
        }
        function nF(e = []) {
          if (2 === e.length && "object" == typeof e[1]) return e[1].body;
        }
        function nj(e, t) {
          let n = {};
          return (
            t.forEach((t) => {
              e.get(t) && (n[t] = e.get(t));
            }),
            n
          );
        }
        function n$(e, t) {
          if (!e) return {};
          let n = e.headers;
          return n
            ? n instanceof Headers
              ? nj(n, t)
              : Array.isArray(n)
                ? {}
                : nO(n, t)
            : {};
        }
        async function nU(e) {
          return await e.text();
        }
        async function nB(e, t, n) {
          try {
            let r = (function (e, t, n) {
                let r,
                  i = Date.now(),
                  {
                    startTimestamp: o = i,
                    endTimestamp: s = i,
                    input: a,
                    xhr: l,
                  } = t,
                  {
                    url: c,
                    method: u,
                    status_code: d = 0,
                    request_body_size: p,
                    response_body_size: h,
                  } = e.data;
                if (!c) return null;
                if (
                  !l ||
                  !nR(c, n.networkDetailAllowUrls) ||
                  nR(c, n.networkDetailDenyUrls)
                ) {
                  let e = nI(p);
                  return {
                    startTimestamp: o,
                    endTimestamp: s,
                    url: c,
                    method: u,
                    statusCode: d,
                    request: e,
                    response: nI(h),
                  };
                }
                let f = l[J.Er],
                  m = f ? nO(f.request_headers, n.networkRequestHeaders) : {},
                  g = nO(
                    (r = l.getAllResponseHeaders())
                      ? r.split("\r\n").reduce((e, t) => {
                          let [n, r] = t.split(": ");
                          return r && (e[n.toLowerCase()] = r), e;
                        }, {})
                      : {},
                    n.networkResponseHeaders,
                  ),
                  [_, v] = n.networkCaptureBodies ? nx(a) : [void 0],
                  [y, b] = n.networkCaptureBodies
                    ? (function (e) {
                        let t = [];
                        try {
                          return [e.responseText];
                        } catch (e) {
                          t.push(e);
                        }
                        try {
                          var n = e.response,
                            r = e.responseType;
                          try {
                            if ("string" == typeof n) return [n];
                            if (n instanceof Document)
                              return [n.body.outerHTML];
                            if ("json" === r && n && "object" == typeof n)
                              return [JSON.stringify(n)];
                            if (!n) return [void 0];
                          } catch (e) {
                            return (
                              t8 &&
                                t9.exception(e, "Failed to serialize body", n),
                              [void 0, "BODY_PARSE_ERROR"]
                            );
                          }
                          return (
                            t8 &&
                              t9.info(
                                "Skipping network body because of body type",
                                n,
                              ),
                            [void 0, "UNPARSEABLE_BODY_TYPE"]
                          );
                        } catch (e) {
                          t.push(e);
                        }
                        return (
                          t8 &&
                            t9.warn("Failed to get xhr response body", ...t),
                          [void 0]
                        );
                      })(l)
                    : [void 0],
                  S = nM(m, p, _),
                  w = nM(g, h, y);
                return {
                  startTimestamp: o,
                  endTimestamp: s,
                  url: c,
                  method: u,
                  statusCode: d,
                  request: v ? nC(S, v) : S,
                  response: b ? nC(w, b) : w,
                };
              })(e, t, n),
              i = nT("resource.xhr", r);
            nw(n.replay, i);
          } catch (e) {
            t8 && t9.exception(e, "Failed to capture xhr breadcrumb");
          }
        }
        async function nz(e) {
          try {
            return Promise.all(
              nS(e, [
                (function (e) {
                  let {
                      jsHeapSizeLimit: t,
                      totalJSHeapSize: n,
                      usedJSHeapSize: r,
                    } = e,
                    i = Date.now() / 1e3;
                  return {
                    type: "memory",
                    name: "memory",
                    start: i,
                    end: i,
                    data: {
                      memory: {
                        jsHeapSizeLimit: t,
                        totalJSHeapSize: n,
                        usedJSHeapSize: r,
                      },
                    },
                  };
                })(Z.performance.memory),
              ]),
            );
          } catch (e) {
            return [];
          }
        }
        let nH = C.O.navigator;
        async function nq({ client: e, scope: t, replayId: n, event: r }) {
          let i = {
            event_id: n,
            integrations:
              "object" != typeof e._integrations ||
              null === e._integrations ||
              Array.isArray(e._integrations)
                ? void 0
                : Object.keys(e._integrations),
          };
          e.emit("preprocessEvent", r, i);
          let o = await (0, z.mG)(e.getOptions(), r, i, t, e, (0, P.rm)());
          if (!o) return null;
          o.platform = o.platform || "javascript";
          let s = e.getSdkMetadata(),
            { name: a, version: l } = (s && s.sdk) || {};
          return (
            (o.sdk = {
              ...o.sdk,
              name: a || "sentry.javascript.unknown",
              version: l || "0.0.0",
            }),
            o
          );
        }
        async function nW({
          recordingData: e,
          replayId: t,
          segmentId: n,
          eventContext: r,
          timestamp: i,
          session: o,
        }) {
          var s;
          let a,
            l = (function ({ recordingData: e, headers: t }) {
              let n,
                r = `${JSON.stringify(t)}
`;
              if ("string" == typeof e) n = `${r}${e}`;
              else {
                let t = new TextEncoder().encode(r);
                (n = new Uint8Array(t.length + e.length)).set(t),
                  n.set(e, t.length);
              }
              return n;
            })({ recordingData: e, headers: { segment_id: n } }),
            { urls: c, errorIds: u, traceIds: d, initialTimestamp: p } = r,
            h = (0, P.KU)(),
            f = (0, P.o5)(),
            m = h && h.getTransport(),
            g = h && h.getDsn();
          if (!h || !m || !g || !o.sampled) return (0, H.XW)({});
          let _ = {
              type: "replay_event",
              replay_start_timestamp: p / 1e3,
              timestamp: i / 1e3,
              error_ids: u,
              trace_ids: d,
              urls: c,
              replay_id: t,
              segment_id: n,
              replay_type: o.sampled,
            },
            v = await nq({ scope: f, client: h, replayId: t, event: _ });
          if (!v)
            return (
              h.recordDroppedEvent("event_processor", "replay", _),
              t8 &&
                t9.info(
                  "An event processor returned `null`, will not send event.",
                ),
              (0, H.XW)({})
            );
          delete v.sdkProcessingMetadata;
          let y =
            ((s = h.getOptions().tunnel),
            (0, B.h4)((0, B.n2)(v, (0, B.Cj)(v), s, g), [
              [{ type: "replay_event" }, v],
              [
                {
                  type: "replay_recording",
                  length:
                    "string" == typeof l
                      ? new TextEncoder().encode(l).length
                      : l.length,
                },
                l,
              ],
            ]));
          try {
            a = await m.send(y);
          } catch (t) {
            let e = Error(et);
            try {
              e.cause = t;
            } catch (e) {}
            throw e;
          }
          if (
            "number" == typeof a.statusCode &&
            (a.statusCode < 200 || a.statusCode >= 300)
          )
            throw new nK(a.statusCode);
          let b = (0, q.wq)({}, a);
          if ((0, q.Jz)(b, "replay")) throw new nX(b);
          return a;
        }
        class nK extends Error {
          constructor(e) {
            super(`Transport returned status code ${e}`);
          }
        }
        class nX extends Error {
          constructor(e) {
            super("Rate limit hit"), (this.rateLimits = e);
          }
        }
        async function nV(e, t = { count: 0, interval: 5e3 }) {
          let { recordingData: n, onError: r } = e;
          if (n.length)
            try {
              return await nW(e), !0;
            } catch (n) {
              if (n instanceof nK || n instanceof nX) throw n;
              if (
                ((0, N.o)("Replays", { _retryCount: t.count }),
                r && r(n),
                t.count >= 3)
              ) {
                let e = Error(`${et} - max retries exceeded`);
                try {
                  e.cause = n;
                } catch (e) {}
                throw e;
              }
              return (
                (t.interval *= ++t.count),
                new Promise((n, r) => {
                  (0, V.wg)(async () => {
                    try {
                      await nV(e, t), n(!0);
                    } catch (e) {
                      r(e);
                    }
                  }, t.interval);
                })
              );
            }
        }
        let nG = "__THROTTLED";
        class nJ {
          constructor({ options: e, recordingOptions: t }) {
            nJ.prototype.__init.call(this),
              nJ.prototype.__init2.call(this),
              nJ.prototype.__init3.call(this),
              nJ.prototype.__init4.call(this),
              nJ.prototype.__init5.call(this),
              nJ.prototype.__init6.call(this),
              (this.eventBuffer = null),
              (this.performanceEntries = []),
              (this.replayPerformanceEntries = []),
              (this.recordingMode = "session"),
              (this.timeouts = {
                sessionIdlePause: 3e5,
                sessionIdleExpire: 9e5,
              }),
              (this._lastActivity = Date.now()),
              (this._isEnabled = !1),
              (this._isPaused = !1),
              (this._requiresManualStart = !1),
              (this._hasInitializedCoreListeners = !1),
              (this._context = {
                errorIds: new Set(),
                traceIds: new Set(),
                urls: [],
                initialTimestamp: Date.now(),
                initialUrl: "",
              }),
              (this._recordingOptions = t),
              (this._options = e),
              (this._debouncedFlush = (function (e, t, n) {
                let r,
                  i,
                  o,
                  s = n && n.maxWait ? Math.max(n.maxWait, t) : 0;
                function a() {
                  return l(), (r = e());
                }
                function l() {
                  void 0 !== i && clearTimeout(i),
                    void 0 !== o && clearTimeout(o),
                    (i = o = void 0);
                }
                function c() {
                  return (
                    i && clearTimeout(i),
                    (i = (0, V.wg)(a, t)),
                    s && void 0 === o && (o = (0, V.wg)(a, s)),
                    r
                  );
                }
                return (
                  (c.cancel = l),
                  (c.flush = function () {
                    return void 0 !== i || void 0 !== o ? a() : r;
                  }),
                  c
                );
              })(() => this._flush(), this._options.flushMinDelay, {
                maxWait: this._options.flushMaxDelay,
              })),
              (this._throttledAddEvent = (function (e) {
                let t = new Map(),
                  n = !1;
                return (...r) => {
                  let i,
                    o = Math.floor(Date.now() / 1e3);
                  if (
                    ((i = o - 5),
                    t.forEach((e, n) => {
                      n < i && t.delete(n);
                    }),
                    [...t.values()].reduce((e, t) => e + t, 0) >= 300)
                  ) {
                    let e = n;
                    return (n = !0), e ? "__SKIPPED" : nG;
                  }
                  n = !1;
                  let s = t.get(o) || 0;
                  return t.set(o, s + 1), e(...r);
                };
              })((e, t) =>
                ng(this, e) ? nm(this, e, t) : Promise.resolve(null),
              ));
            const { slowClickTimeout: n, slowClickIgnoreSelectors: r } =
                this.getOptions(),
              i = n
                ? {
                    threshold: Math.min(3e3, n),
                    timeout: n,
                    scrollTimeout: 300,
                    ignoreSelector: r ? r.join(",") : "",
                  }
                : void 0;
            if ((i && (this.clickDetector = new tq(this, i)), t8)) {
              const t = e._experiments;
              t9.setConfig({
                captureExceptions: !!t.captureExceptions,
                traceInternals: !!t.traceInternals,
              });
            }
          }
          getContext() {
            return this._context;
          }
          isEnabled() {
            return this._isEnabled;
          }
          isPaused() {
            return this._isPaused;
          }
          isRecordingCanvas() {
            return !!this._canvas;
          }
          getOptions() {
            return this._options;
          }
          handleException(e) {
            t8 && t9.exception(e),
              this._options.onError && this._options.onError(e);
          }
          initializeSampling(e) {
            let { errorSampleRate: t, sessionSampleRate: n } = this._options,
              r = t <= 0 && n <= 0;
            if (((this._requiresManualStart = r), !r)) {
              if ((this._initializeSessionForSampling(e), !this.session)) {
                t8 &&
                  t9.exception(
                    Error("Unable to initialize and create session"),
                  );
                return;
              }
              !1 !== this.session.sampled &&
                ((this.recordingMode =
                  "buffer" === this.session.sampled &&
                  0 === this.session.segmentId
                    ? "buffer"
                    : "session"),
                t8 &&
                  t9.infoTick(`Starting replay in ${this.recordingMode} mode`),
                this._initializeRecording());
            }
          }
          start() {
            if (this._isEnabled && "session" === this.recordingMode) {
              t8 && t9.info("Recording is already in progress");
              return;
            }
            if (this._isEnabled && "buffer" === this.recordingMode) {
              t8 &&
                t9.info(
                  "Buffering is in progress, call `flush()` to save the replay",
                );
              return;
            }
            t8 && t9.infoTick("Starting replay in session mode"),
              this._updateUserActivity();
            let e = nh(
              {
                maxReplayDuration: this._options.maxReplayDuration,
                sessionIdleExpire: this.timeouts.sessionIdleExpire,
              },
              {
                stickySession: this._options.stickySession,
                sessionSampleRate: 1,
                allowBuffering: !1,
              },
            );
            (this.session = e), this._initializeRecording();
          }
          startBuffering() {
            if (this._isEnabled) {
              t8 &&
                t9.info(
                  "Buffering is in progress, call `flush()` to save the replay",
                );
              return;
            }
            t8 && t9.infoTick("Starting replay in buffer mode");
            let e = nh(
              {
                sessionIdleExpire: this.timeouts.sessionIdleExpire,
                maxReplayDuration: this._options.maxReplayDuration,
              },
              {
                stickySession: this._options.stickySession,
                sessionSampleRate: 0,
                allowBuffering: !0,
              },
            );
            (this.session = e),
              (this.recordingMode = "buffer"),
              this._initializeRecording();
          }
          startRecording() {
            try {
              var e;
              let t,
                n = this._canvas;
              this._stopRecording = tP({
                ...this._recordingOptions,
                ...("buffer" === this.recordingMode
                  ? { checkoutEveryNms: 6e4 }
                  : this._options._experiments.continuousCheckout && {
                      checkoutEveryNms: Math.max(
                        36e4,
                        this._options._experiments.continuousCheckout,
                      ),
                    }),
                emit:
                  ((e = this),
                  (t = !1),
                  (n, r) => {
                    if (!e.checkAndHandleExpiredSession()) {
                      t8 &&
                        t9.warn("Received replay event after session expired.");
                      return;
                    }
                    let i = r || !t;
                    (t = !0),
                      e.clickDetector &&
                        (function (e, t) {
                          try {
                            var n;
                            if (((n = t), 3 !== n.type)) return;
                            let { source: r } = t.data;
                            if (
                              (tH.has(r) && e.registerMutation(t.timestamp),
                              r === tn.Scroll && e.registerScroll(t.timestamp),
                              t.data.source === tn.MouseInteraction)
                            ) {
                              let { type: n, id: r } = t.data,
                                i = tP.mirror.getNode(r);
                              i instanceof HTMLElement &&
                                n === tr.Click &&
                                e.registerClick(i);
                            }
                          } catch (e) {}
                        })(e.clickDetector, n),
                      e.addUpdate(() => {
                        if (
                          ("buffer" === e.recordingMode &&
                            i &&
                            e.setInitialState(),
                          !nf(e, n, i))
                        )
                          return !0;
                        if (!i) return !1;
                        let t = e.session;
                        if (
                          ((function (e, t) {
                            if (t && e.session && 0 === e.session.segmentId) {
                              let t;
                              nf(
                                e,
                                ((t = e.getOptions()),
                                {
                                  type: tt.Custom,
                                  timestamp: Date.now(),
                                  data: {
                                    tag: "options",
                                    payload: {
                                      shouldRecordCanvas: e.isRecordingCanvas(),
                                      sessionSampleRate: t.sessionSampleRate,
                                      errorSampleRate: t.errorSampleRate,
                                      useCompressionOption: t.useCompression,
                                      blockAllMedia: t.blockAllMedia,
                                      maskAllText: t.maskAllText,
                                      maskAllInputs: t.maskAllInputs,
                                      useCompression:
                                        !!e.eventBuffer &&
                                        "worker" === e.eventBuffer.type,
                                      networkDetailHasUrls:
                                        t.networkDetailAllowUrls.length > 0,
                                      networkCaptureBodies:
                                        t.networkCaptureBodies,
                                      networkRequestHasHeaders:
                                        t.networkRequestHeaders.length > 0,
                                      networkResponseHasHeaders:
                                        t.networkResponseHeaders.length > 0,
                                    },
                                  },
                                }),
                                !1,
                              );
                            }
                          })(e, i),
                          "buffer" === e.recordingMode && t && e.eventBuffer)
                        ) {
                          let n = e.eventBuffer.getEarliestTimestamp();
                          n &&
                            (t8 &&
                              t9.info(
                                `Updating session start time to earliest event in buffer to ${new Date(n)}`,
                              ),
                            (t.started = n),
                            e.getOptions().stickySession && nl(t));
                        }
                        return (
                          (!!t && !!t.previousSessionId) ||
                          ("session" === e.recordingMode && e.flush(), !0)
                        );
                      });
                  }),
                ...(/iPhone|iPad|iPod/i.test((nH && nH.userAgent) || "") ||
                (/Macintosh/i.test((nH && nH.userAgent) || "") &&
                  nH &&
                  nH.maxTouchPoints &&
                  nH.maxTouchPoints > 1)
                  ? { sampling: { mousemove: !1 } }
                  : {}),
                onMutation: this._onMutationHandler,
                ...(n
                  ? {
                      recordCanvas: n.recordCanvas,
                      getCanvasManager: n.getCanvasManager,
                      sampling: n.sampling,
                      dataURLOptions: n.dataURLOptions,
                    }
                  : {}),
              });
            } catch (e) {
              this.handleException(e);
            }
          }
          stopRecording() {
            try {
              return (
                this._stopRecording &&
                  (this._stopRecording(), (this._stopRecording = void 0)),
                !0
              );
            } catch (e) {
              return this.handleException(e), !1;
            }
          }
          async stop({ forceFlush: e = !1, reason: t } = {}) {
            if (this._isEnabled) {
              this._isEnabled = !1;
              try {
                t8 &&
                  t9.info(`Stopping Replay${t ? ` triggered by ${t}` : ""}`),
                  nb(),
                  this._removeListeners(),
                  this.stopRecording(),
                  this._debouncedFlush.cancel(),
                  e && (await this._flush({ force: !0 })),
                  this.eventBuffer && this.eventBuffer.destroy(),
                  (this.eventBuffer = null),
                  (function () {
                    if (no())
                      try {
                        Z.sessionStorage.removeItem(ee);
                      } catch (e) {}
                  })(),
                  (this.session = void 0);
              } catch (e) {
                this.handleException(e);
              }
            }
          }
          pause() {
            !this._isPaused &&
              ((this._isPaused = !0),
              this.stopRecording(),
              t8 && t9.info("Pausing replay"));
          }
          resume() {
            this._isPaused &&
              this._checkSession() &&
              ((this._isPaused = !1),
              this.startRecording(),
              t8 && t9.info("Resuming replay"));
          }
          async sendBufferedReplayOrFlush({ continueRecording: e = !0 } = {}) {
            if ("session" === this.recordingMode) return this.flushImmediate();
            let t = Date.now();
            t8 && t9.info("Converting buffer to session"),
              await this.flushImmediate();
            let n = this.stopRecording();
            e &&
              n &&
              "session" !== this.recordingMode &&
              ((this.recordingMode = "session"),
              this.session &&
                (this._updateUserActivity(t),
                this._updateSessionActivity(t),
                this._maybeSaveSession()),
              this.startRecording());
          }
          addUpdate(e) {
            let t = e();
            "buffer" === this.recordingMode ||
              (!0 !== t && this._debouncedFlush());
          }
          triggerUserActivity() {
            if ((this._updateUserActivity(), !this._stopRecording)) {
              if (!this._checkSession()) return;
              this.resume();
              return;
            }
            this.checkAndHandleExpiredSession(), this._updateSessionActivity();
          }
          updateUserActivity() {
            this._updateUserActivity(), this._updateSessionActivity();
          }
          conditionalFlush() {
            return "buffer" === this.recordingMode
              ? Promise.resolve()
              : this.flushImmediate();
          }
          flush() {
            return this._debouncedFlush();
          }
          flushImmediate() {
            return this._debouncedFlush(), this._debouncedFlush.flush();
          }
          cancelFlush() {
            this._debouncedFlush.cancel();
          }
          getSessionId() {
            return this.session && this.session.id;
          }
          checkAndHandleExpiredSession() {
            return this._lastActivity &&
              nu(this._lastActivity, this.timeouts.sessionIdlePause) &&
              this.session &&
              "session" === this.session.sampled
              ? void this.pause()
              : !!this._checkSession();
          }
          setInitialState() {
            let e = `${Z.location.pathname}${Z.location.hash}${Z.location.search}`,
              t = `${Z.location.origin}${e}`;
            (this.performanceEntries = []),
              (this.replayPerformanceEntries = []),
              this._clearContext(),
              (this._context.initialUrl = t),
              (this._context.initialTimestamp = Date.now()),
              this._context.urls.push(t);
          }
          throttledAddEvent(e, t) {
            let n = this._throttledAddEvent(e, t);
            if (n === nG) {
              let e = tX({ category: "replay.throttled" });
              this.addUpdate(
                () =>
                  !nf(this, {
                    type: 5,
                    timestamp: e.timestamp || 0,
                    data: { tag: "breadcrumb", payload: e, metric: !0 },
                  }),
              );
            }
            return n;
          }
          getCurrentRoute() {
            let e = this.lastActiveSpan || (0, F.Bk)(),
              t = e && (0, F.zU)(e),
              n = ((t && (0, F.et)(t).data) || {})[W.i_];
            if (t && n && ["route", "custom"].includes(n))
              return (0, F.et)(t).description;
          }
          _initializeRecording() {
            this.setInitialState(),
              this._updateSessionActivity(),
              (this.eventBuffer = (function ({
                useCompression: e,
                workerUrl: t,
              }) {
                if (e && window.Worker) {
                  let e = (function (e) {
                    try {
                      let t =
                        e ||
                        (function () {
                          if (
                            "u" < typeof __SENTRY_EXCLUDE_REPLAY_WORKER__ ||
                            !__SENTRY_EXCLUDE_REPLAY_WORKER__
                          ) {
                            let e;
                            return (
                              (e = new Blob([
                                'var t=Uint8Array,n=Uint16Array,r=Int32Array,e=new t([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new t([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),a=new t([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),s=function(t,e){for(var i=new n(31),a=0;a<31;++a)i[a]=e+=1<<t[a-1];var s=new r(i[30]);for(a=1;a<30;++a)for(var o=i[a];o<i[a+1];++o)s[o]=o-i[a]<<5|a;return{b:i,r:s}},o=s(e,2),f=o.b,h=o.r;f[28]=258,h[258]=28;for(var l=s(i,0).r,u=new n(32768),c=0;c<32768;++c){var v=(43690&c)>>1|(21845&c)<<1;v=(61680&(v=(52428&v)>>2|(13107&v)<<2))>>4|(3855&v)<<4,u[c]=((65280&v)>>8|(255&v)<<8)>>1}var d=function(t,r,e){for(var i=t.length,a=0,s=new n(r);a<i;++a)t[a]&&++s[t[a]-1];var o,f=new n(r);for(a=1;a<r;++a)f[a]=f[a-1]+s[a-1]<<1;if(e){o=new n(1<<r);var h=15-r;for(a=0;a<i;++a)if(t[a])for(var l=a<<4|t[a],c=r-t[a],v=f[t[a]-1]++<<c,d=v|(1<<c)-1;v<=d;++v)o[u[v]>>h]=l}else for(o=new n(i),a=0;a<i;++a)t[a]&&(o[a]=u[f[t[a]-1]++]>>15-t[a]);return o},g=new t(288);for(c=0;c<144;++c)g[c]=8;for(c=144;c<256;++c)g[c]=9;for(c=256;c<280;++c)g[c]=7;for(c=280;c<288;++c)g[c]=8;var w=new t(32);for(c=0;c<32;++c)w[c]=5;var p=d(g,9,0),y=d(w,5,0),m=function(t){return(t+7)/8|0},b=function(n,r,e){return(null==e||e>n.length)&&(e=n.length),new t(n.subarray(r,e))},M=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],E=function(t,n,r){var e=new Error(n||M[t]);if(e.code=t,Error.captureStackTrace&&Error.captureStackTrace(e,E),!r)throw e;return e},z=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8},_=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8,t[e+2]|=r>>16},x=function(r,e){for(var i=[],a=0;a<r.length;++a)r[a]&&i.push({s:a,f:r[a]});var s=i.length,o=i.slice();if(!s)return{t:F,l:0};if(1==s){var f=new t(i[0].s+1);return f[i[0].s]=1,{t:f,l:1}}i.sort((function(t,n){return t.f-n.f})),i.push({s:-1,f:25001});var h=i[0],l=i[1],u=0,c=1,v=2;for(i[0]={s:-1,f:h.f+l.f,l:h,r:l};c!=s-1;)h=i[i[u].f<i[v].f?u++:v++],l=i[u!=c&&i[u].f<i[v].f?u++:v++],i[c++]={s:-1,f:h.f+l.f,l:h,r:l};var d=o[0].s;for(a=1;a<s;++a)o[a].s>d&&(d=o[a].s);var g=new n(d+1),w=A(i[c-1],g,0);if(w>e){a=0;var p=0,y=w-e,m=1<<y;for(o.sort((function(t,n){return g[n.s]-g[t.s]||t.f-n.f}));a<s;++a){var b=o[a].s;if(!(g[b]>e))break;p+=m-(1<<w-g[b]),g[b]=e}for(p>>=y;p>0;){var M=o[a].s;g[M]<e?p-=1<<e-g[M]++-1:++a}for(;a>=0&&p;--a){var E=o[a].s;g[E]==e&&(--g[E],++p)}w=e}return{t:new t(g),l:w}},A=function(t,n,r){return-1==t.s?Math.max(A(t.l,n,r+1),A(t.r,n,r+1)):n[t.s]=r},D=function(t){for(var r=t.length;r&&!t[--r];);for(var e=new n(++r),i=0,a=t[0],s=1,o=function(t){e[i++]=t},f=1;f<=r;++f)if(t[f]==a&&f!=r)++s;else{if(!a&&s>2){for(;s>138;s-=138)o(32754);s>2&&(o(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(o(a),--s;s>6;s-=6)o(8304);s>2&&(o(s-3<<5|8208),s=0)}for(;s--;)o(a);s=1,a=t[f]}return{c:e.subarray(0,i),n:r}},T=function(t,n){for(var r=0,e=0;e<n.length;++e)r+=t[e]*n[e];return r},k=function(t,n,r){var e=r.length,i=m(n+2);t[i]=255&e,t[i+1]=e>>8,t[i+2]=255^t[i],t[i+3]=255^t[i+1];for(var a=0;a<e;++a)t[i+a+4]=r[a];return 8*(i+4+e)},U=function(t,r,s,o,f,h,l,u,c,v,m){z(r,m++,s),++f[256];for(var b=x(f,15),M=b.t,E=b.l,A=x(h,15),U=A.t,C=A.l,F=D(M),I=F.c,S=F.n,L=D(U),O=L.c,j=L.n,q=new n(19),B=0;B<I.length;++B)++q[31&I[B]];for(B=0;B<O.length;++B)++q[31&O[B]];for(var G=x(q,7),H=G.t,J=G.l,K=19;K>4&&!H[a[K-1]];--K);var N,P,Q,R,V=v+5<<3,W=T(f,g)+T(h,w)+l,X=T(f,M)+T(h,U)+l+14+3*K+T(q,H)+2*q[16]+3*q[17]+7*q[18];if(c>=0&&V<=W&&V<=X)return k(r,m,t.subarray(c,c+v));if(z(r,m,1+(X<W)),m+=2,X<W){N=d(M,E,0),P=M,Q=d(U,C,0),R=U;var Y=d(H,J,0);z(r,m,S-257),z(r,m+5,j-1),z(r,m+10,K-4),m+=14;for(B=0;B<K;++B)z(r,m+3*B,H[a[B]]);m+=3*K;for(var Z=[I,O],$=0;$<2;++$){var tt=Z[$];for(B=0;B<tt.length;++B){var nt=31&tt[B];z(r,m,Y[nt]),m+=H[nt],nt>15&&(z(r,m,tt[B]>>5&127),m+=tt[B]>>12)}}}else N=p,P=g,Q=y,R=w;for(B=0;B<u;++B){var rt=o[B];if(rt>255){_(r,m,N[(nt=rt>>18&31)+257]),m+=P[nt+257],nt>7&&(z(r,m,rt>>23&31),m+=e[nt]);var et=31&rt;_(r,m,Q[et]),m+=R[et],et>3&&(_(r,m,rt>>5&8191),m+=i[et])}else _(r,m,N[rt]),m+=P[rt]}return _(r,m,N[256]),m+P[256]},C=new r([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),F=new t(0),I=function(){for(var t=new Int32Array(256),n=0;n<256;++n){for(var r=n,e=9;--e;)r=(1&r&&-306674912)^r>>>1;t[n]=r}return t}(),S=function(){var t=-1;return{p:function(n){for(var r=t,e=0;e<n.length;++e)r=I[255&r^n[e]]^r>>>8;t=r},d:function(){return~t}}},L=function(){var t=1,n=0;return{p:function(r){for(var e=t,i=n,a=0|r.length,s=0;s!=a;){for(var o=Math.min(s+2655,a);s<o;++s)i+=e+=r[s];e=(65535&e)+15*(e>>16),i=(65535&i)+15*(i>>16)}t=e,n=i},d:function(){return(255&(t%=65521))<<24|(65280&t)<<8|(255&(n%=65521))<<8|n>>8}}},O=function(a,s,o,f,u){if(!u&&(u={l:1},s.dictionary)){var c=s.dictionary.subarray(-32768),v=new t(c.length+a.length);v.set(c),v.set(a,c.length),a=v,u.w=c.length}return function(a,s,o,f,u,c){var v=c.z||a.length,d=new t(f+v+5*(1+Math.ceil(v/7e3))+u),g=d.subarray(f,d.length-u),w=c.l,p=7&(c.r||0);if(s){p&&(g[0]=c.r>>3);for(var y=C[s-1],M=y>>13,E=8191&y,z=(1<<o)-1,_=c.p||new n(32768),x=c.h||new n(z+1),A=Math.ceil(o/3),D=2*A,T=function(t){return(a[t]^a[t+1]<<A^a[t+2]<<D)&z},F=new r(25e3),I=new n(288),S=new n(32),L=0,O=0,j=c.i||0,q=0,B=c.w||0,G=0;j+2<v;++j){var H=T(j),J=32767&j,K=x[H];if(_[J]=K,x[H]=J,B<=j){var N=v-j;if((L>7e3||q>24576)&&(N>423||!w)){p=U(a,g,0,F,I,S,O,q,G,j-G,p),q=L=O=0,G=j;for(var P=0;P<286;++P)I[P]=0;for(P=0;P<30;++P)S[P]=0}var Q=2,R=0,V=E,W=J-K&32767;if(N>2&&H==T(j-W))for(var X=Math.min(M,N)-1,Y=Math.min(32767,j),Z=Math.min(258,N);W<=Y&&--V&&J!=K;){if(a[j+Q]==a[j+Q-W]){for(var $=0;$<Z&&a[j+$]==a[j+$-W];++$);if($>Q){if(Q=$,R=W,$>X)break;var tt=Math.min(W,$-2),nt=0;for(P=0;P<tt;++P){var rt=j-W+P&32767,et=rt-_[rt]&32767;et>nt&&(nt=et,K=rt)}}}W+=(J=K)-(K=_[J])&32767}if(R){F[q++]=268435456|h[Q]<<18|l[R];var it=31&h[Q],at=31&l[R];O+=e[it]+i[at],++I[257+it],++S[at],B=j+Q,++L}else F[q++]=a[j],++I[a[j]]}}for(j=Math.max(j,B);j<v;++j)F[q++]=a[j],++I[a[j]];p=U(a,g,w,F,I,S,O,q,G,j-G,p),w||(c.r=7&p|g[p/8|0]<<3,p-=7,c.h=x,c.p=_,c.i=j,c.w=B)}else{for(j=c.w||0;j<v+w;j+=65535){var st=j+65535;st>=v&&(g[p/8|0]=w,st=v),p=k(g,p+1,a.subarray(j,st))}c.i=v}return b(d,0,f+m(p)+u)}(a,null==s.level?6:s.level,null==s.mem?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(a.length)))):12+s.mem,o,f,u)},j=function(t,n,r){for(;r;++n)t[n]=r,r>>>=8},q=function(t,n){var r=n.filename;if(t[0]=31,t[1]=139,t[2]=8,t[8]=n.level<2?4:9==n.level?2:0,t[9]=3,0!=n.mtime&&j(t,4,Math.floor(new Date(n.mtime||Date.now())/1e3)),r){t[3]=8;for(var e=0;e<=r.length;++e)t[e+10]=r.charCodeAt(e)}},B=function(t){return 10+(t.filename?t.filename.length+1:0)},G=function(){function n(n,r){if("function"==typeof n&&(r=n,n={}),this.ondata=r,this.o=n||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new t(98304),this.o.dictionary){var e=this.o.dictionary.subarray(-32768);this.b.set(e,32768-e.length),this.s.i=32768-e.length}}return n.prototype.p=function(t,n){this.ondata(O(t,this.o,0,0,this.s),n)},n.prototype.push=function(n,r){this.ondata||E(5),this.s.l&&E(4);var e=n.length+this.s.z;if(e>this.b.length){if(e>2*this.b.length-32768){var i=new t(-32768&e);i.set(this.b.subarray(0,this.s.z)),this.b=i}var a=this.b.length-this.s.z;a&&(this.b.set(n.subarray(0,a),this.s.z),this.s.z=this.b.length,this.p(this.b,!1)),this.b.set(this.b.subarray(-32768)),this.b.set(n.subarray(a),32768),this.s.z=n.length-a+32768,this.s.i=32766,this.s.w=32768}else this.b.set(n,this.s.z),this.s.z+=n.length;this.s.l=1&r,(this.s.z>this.s.w+8191||r)&&(this.p(this.b,r||!1),this.s.w=this.s.i,this.s.i-=2)},n}();var H=function(){function t(t,n){this.c=L(),this.v=1,G.call(this,t,n)}return t.prototype.push=function(t,n){this.c.p(t),G.prototype.push.call(this,t,n)},t.prototype.p=function(t,n){var r=O(t,this.o,this.v&&(this.o.dictionary?6:2),n&&4,this.s);this.v&&(function(t,n){var r=n.level,e=0==r?0:r<6?1:9==r?3:2;if(t[0]=120,t[1]=e<<6|(n.dictionary&&32),t[1]|=31-(t[0]<<8|t[1])%31,n.dictionary){var i=L();i.p(n.dictionary),j(t,2,i.d())}}(r,this.o),this.v=0),n&&j(r,r.length-4,this.c.d()),this.ondata(r,n)},t}(),J="undefined"!=typeof TextEncoder&&new TextEncoder,K="undefined"!=typeof TextDecoder&&new TextDecoder;try{K.decode(F,{stream:!0})}catch(t){}var N=function(){function t(t){this.ondata=t}return t.prototype.push=function(t,n){this.ondata||E(5),this.d&&E(4),this.ondata(P(t),this.d=n||!1)},t}();function P(n,r){if(J)return J.encode(n);for(var e=n.length,i=new t(n.length+(n.length>>1)),a=0,s=function(t){i[a++]=t},o=0;o<e;++o){if(a+5>i.length){var f=new t(a+8+(e-o<<1));f.set(i),i=f}var h=n.charCodeAt(o);h<128||r?s(h):h<2048?(s(192|h>>6),s(128|63&h)):h>55295&&h<57344?(s(240|(h=65536+(1047552&h)|1023&n.charCodeAt(++o))>>18),s(128|h>>12&63),s(128|h>>6&63),s(128|63&h)):(s(224|h>>12),s(128|h>>6&63),s(128|63&h))}return b(i,0,a)}function Q(t){return function(t,n){n||(n={});var r=S(),e=t.length;r.p(t);var i=O(t,n,B(n),8),a=i.length;return q(i,n),j(i,a-8,r.d()),j(i,a-4,e),i}(P(t))}const R=new class{constructor(){this._init()}clear(){this._init()}addEvent(t){if(!t)throw new Error("Adding invalid event");const n=this._hasEvents?",":"";this.stream.push(n+t),this._hasEvents=!0}finish(){this.stream.push("]",!0);const t=function(t){let n=0;for(const r of t)n+=r.length;const r=new Uint8Array(n);for(let n=0,e=0,i=t.length;n<i;n++){const i=t[n];r.set(i,e),e+=i.length}return r}(this._deflatedData);return this._init(),t}_init(){this._hasEvents=!1,this._deflatedData=[],this.deflate=new H,this.deflate.ondata=(t,n)=>{this._deflatedData.push(t)},this.stream=new N(((t,n)=>{this.deflate.push(t,n)})),this.stream.push("[")}},V={clear:()=>{R.clear()},addEvent:t=>R.addEvent(t),finish:()=>R.finish(),compress:t=>Q(t)};addEventListener("message",(function(t){const n=t.data.method,r=t.data.id,e=t.data.arg;if(n in V&&"function"==typeof V[n])try{const t=V[n](e);postMessage({id:r,method:n,success:!0,response:t})}catch(t){postMessage({id:r,method:n,success:!1,response:t.message}),console.error(t)}})),postMessage({id:void 0,method:"init",success:!0,response:void 0});',
                              ])),
                              URL.createObjectURL(e)
                            );
                          }
                          return "";
                        })();
                      if (!t) return;
                      t8 &&
                        t9.info(
                          `Using compression worker${e ? ` from ${e}` : ""}`,
                        );
                      let n = new Worker(t);
                      return new ni(n);
                    } catch (e) {
                      t8 &&
                        t9.exception(e, "Failed to create compression worker");
                    }
                  })(t);
                  if (e) return e;
                }
                return t8 && t9.info("Using simple buffer"), new nt();
              })({
                useCompression: this._options.useCompression,
                workerUrl: this._options.workerUrl,
              })),
              this._removeListeners(),
              this._addListeners(),
              (this._isEnabled = !0),
              (this._isPaused = !1),
              this.startRecording();
          }
          _initializeSessionForSampling(e) {
            let t = this._options.errorSampleRate > 0,
              n = nh(
                {
                  sessionIdleExpire: this.timeouts.sessionIdleExpire,
                  maxReplayDuration: this._options.maxReplayDuration,
                  previousSessionId: e,
                },
                {
                  stickySession: this._options.stickySession,
                  sessionSampleRate: this._options.sessionSampleRate,
                  allowBuffering: t,
                },
              );
            this.session = n;
          }
          _checkSession() {
            if (!this.session) return !1;
            let e = this.session;
            return (
              !np(e, {
                sessionIdleExpire: this.timeouts.sessionIdleExpire,
                maxReplayDuration: this._options.maxReplayDuration,
              }) || (this._refreshSession(e), !1)
            );
          }
          async _refreshSession(e) {
            this._isEnabled &&
              (await this.stop({ reason: "refresh session" }),
              this.initializeSampling(e.id));
          }
          _addListeners() {
            try {
              Z.document.addEventListener(
                "visibilitychange",
                this._handleVisibilityChange,
              ),
                Z.addEventListener("blur", this._handleWindowBlur),
                Z.addEventListener("focus", this._handleWindowFocus),
                Z.addEventListener("keydown", this._handleKeyboardEvent),
                this.clickDetector && this.clickDetector.addListeners(),
                this._hasInitializedCoreListeners ||
                  (!(function (e) {
                    let t,
                      n = (0, P.KU)();
                    (0, Y.i)((t) => {
                      var n, r;
                      if (!e.isEnabled()) return;
                      let i = (function (e) {
                        let { target: t, message: n } = (function (e) {
                          let t,
                            n = "click" === e.name,
                            r = null;
                          try {
                            (r = n ? tB(e.event) : tz(e.event)),
                              (t =
                                (0, M.Hd)(r, { maxStringLength: 200 }) ||
                                "<unknown>");
                          } catch (e) {
                            t = "<unknown>";
                          }
                          return { target: r, message: t };
                        })(e);
                        return tX({ category: `ui.${e.name}`, ...tG(t, n) });
                      })(t);
                      if (!i) return;
                      let o = "click" === t.name,
                        s = o ? t.event : void 0;
                      o &&
                        e.clickDetector &&
                        s &&
                        s.target &&
                        !s.altKey &&
                        !s.metaKey &&
                        !s.ctrlKey &&
                        !s.shiftKey &&
                        ((n = e.clickDetector),
                        (r = tB(t.event)),
                        n.handleClick(i, r)),
                        t$(e, i);
                    }),
                      (0, Q._)((t) => {
                        if (!e.isEnabled()) return;
                        let n = (function (e) {
                          let { from: t, to: n } = e,
                            r = Date.now() / 1e3;
                          return {
                            type: "navigation.push",
                            start: r,
                            end: r,
                            name: n,
                            data: { previous: t },
                          };
                        })(t);
                        null !== n &&
                          (e.getContext().urls.push(n.name),
                          e.triggerUserActivity(),
                          e.addUpdate(() => (nS(e, [n]), !1)));
                      }),
                      (t = (0, P.KU)()) &&
                        t.on("beforeAddBreadcrumb", (t) =>
                          (function (e, t) {
                            var n;
                            if (!e.isEnabled() || !ny(t)) return;
                            let r =
                              ((n = t),
                              !ny(n) ||
                              [
                                "fetch",
                                "xhr",
                                "sentry.event",
                                "sentry.transaction",
                              ].includes(n.category) ||
                              n.category.startsWith("ui.")
                                ? null
                                : "console" === n.category
                                  ? (function (e) {
                                      let t = e.data && e.data.arguments;
                                      if (!Array.isArray(t) || 0 === t.length)
                                        return tX(e);
                                      let n = !1,
                                        r = t.map((e) => {
                                          if (!e) return e;
                                          if ("string" == typeof e)
                                            return e.length > 5e3
                                              ? ((n = !0),
                                                `${e.slice(0, 5e3)}…`)
                                              : e;
                                          if ("object" == typeof e)
                                            try {
                                              let t = (0, T.S8)(e, 7);
                                              if (
                                                JSON.stringify(t).length > 5e3
                                              )
                                                return (
                                                  (n = !0),
                                                  `${JSON.stringify(t, null, 2).slice(0, 5e3)}…`
                                                );
                                              return t;
                                            } catch (e) {}
                                          return e;
                                        });
                                      return tX({
                                        ...e,
                                        data: {
                                          ...e.data,
                                          arguments: r,
                                          ...(n
                                            ? {
                                                _meta: {
                                                  warnings: [
                                                    "CONSOLE_ARG_TRUNCATED",
                                                  ],
                                                },
                                              }
                                            : {}),
                                        },
                                      });
                                    })(n)
                                  : tX(n));
                            r && t$(e, r);
                          })(e, t),
                        );
                    let r = (0, P.KU)();
                    try {
                      let {
                          networkDetailAllowUrls: t,
                          networkDetailDenyUrls: n,
                          networkCaptureBodies: i,
                          networkRequestHeaders: o,
                          networkResponseHeaders: s,
                        } = e.getOptions(),
                        a = {
                          replay: e,
                          networkDetailAllowUrls: t,
                          networkDetailDenyUrls: n,
                          networkCaptureBodies: i,
                          networkRequestHeaders: o,
                          networkResponseHeaders: s,
                        };
                      r &&
                        r.on("beforeAddBreadcrumb", (e, t) =>
                          (function (e, t, n) {
                            if (t.data)
                              try {
                                var r, i, o, s;
                                (r = t),
                                  "xhr" === r.category &&
                                    (i = n) &&
                                    i.xhr &&
                                    (!(function (e, t) {
                                      let { xhr: n, input: r } = t;
                                      if (!n) return;
                                      let i = nE(r),
                                        o = n.getResponseHeader(
                                          "content-length",
                                        )
                                          ? nk(
                                              n.getResponseHeader(
                                                "content-length",
                                              ),
                                            )
                                          : (function (e, t) {
                                              try {
                                                let n =
                                                  "json" === t &&
                                                  e &&
                                                  "object" == typeof e
                                                    ? JSON.stringify(e)
                                                    : e;
                                                return nE(n);
                                              } catch (e) {
                                                return;
                                              }
                                            })(n.response, n.responseType);
                                      void 0 !== i &&
                                        (e.data.request_body_size = i),
                                        void 0 !== o &&
                                          (e.data.response_body_size = o);
                                    })(t, n),
                                    nB(t, n, e)),
                                  (o = t),
                                  "fetch" === o.category &&
                                    (s = n) &&
                                    s.response &&
                                    (!(function (e, t) {
                                      let { input: n, response: r } = t,
                                        i = nE(n ? nF(n) : void 0),
                                        o = r
                                          ? nk(r.headers.get("content-length"))
                                          : void 0;
                                      void 0 !== i &&
                                        (e.data.request_body_size = i),
                                        void 0 !== o &&
                                          (e.data.response_body_size = o);
                                    })(t, n),
                                    nA(t, n, e));
                              } catch (e) {
                                t8 &&
                                  t9.exception(
                                    e,
                                    "Error when enriching network breadcrumb",
                                  );
                              }
                          })(a, e, t),
                        );
                    } catch (e) {}
                    let i = Object.assign(
                      (t, n) =>
                        !e.isEnabled() || e.isPaused()
                          ? t
                          : "replay_event" === t.type
                            ? (delete t.breadcrumbs, t)
                            : !t.type || n_(t) || nv(t)
                              ? e.checkAndHandleExpiredSession()
                                ? nv(t)
                                  ? (e.flush(),
                                    (t.contexts.feedback.replay_id =
                                      e.getSessionId()),
                                    e.triggerUserActivity(),
                                    e.addUpdate(
                                      () =>
                                        !t.timestamp ||
                                        (e.throttledAddEvent({
                                          type: tt.Custom,
                                          timestamp: 1e3 * t.timestamp,
                                          data: {
                                            tag: "breadcrumb",
                                            payload: {
                                              timestamp: t.timestamp,
                                              type: "default",
                                              category: "sentry.feedback",
                                              data: { feedbackId: t.event_id },
                                            },
                                          },
                                        }),
                                        !1),
                                    ),
                                    t)
                                  : !t.type &&
                                      t.exception &&
                                      t.exception.values &&
                                      t.exception.values.length &&
                                      n.originalException &&
                                      n.originalException.__rrweb__ &&
                                      !e.getOptions()._experiments
                                        .captureExceptions
                                    ? (t8 &&
                                        t9.log(
                                          "Ignoring error from rrweb internals",
                                          t,
                                        ),
                                      null)
                                    : ((("buffer" === e.recordingMode &&
                                        t.message !== et &&
                                        t.exception &&
                                        !t.type &&
                                        ns(e.getOptions().errorSampleRate)) ||
                                        "session" === e.recordingMode) &&
                                        (t.tags = {
                                          ...t.tags,
                                          replayId: e.getSessionId(),
                                        }),
                                      t)
                                : (nb(), t)
                              : t,
                      { id: "Replay" },
                    );
                    (0, N.SA)(i),
                      n &&
                        (n.on("beforeSendEvent", (t) => {
                          var n, r;
                          let i;
                          e.isEnabled() &&
                            !t.type &&
                            ((n = e),
                            (i =
                              (r = t).exception &&
                              r.exception.values &&
                              r.exception.values[0] &&
                              r.exception.values[0].value),
                            "string" == typeof i &&
                              (i.match(
                                /(reactjs\.org\/docs\/error-decoder\.html\?invariant=|react\.dev\/errors\/)(418|419|422|423|425)/,
                              ) ||
                                i.match(
                                  /(does not match server-rendered HTML|Hydration failed because)/i,
                                )) &&
                              t$(
                                n,
                                tX({
                                  category: "replay.hydrate-error",
                                  data: { url: (0, M.$N)() },
                                }),
                              ));
                        }),
                        n.on("afterSendEvent", (t, n) => {
                          if (!e.isEnabled() || (t.type && !n_(t))) return;
                          let r = n && n.statusCode;
                          if (r && !(r < 200) && !(r >= 300)) {
                            if (n_(t)) {
                              var i, o;
                              let n;
                              return void ((i = e),
                              (o = t),
                              (n = i.getContext()),
                              o.contexts &&
                                o.contexts.trace &&
                                o.contexts.trace.trace_id &&
                                n.traceIds.size < 100 &&
                                n.traceIds.add(o.contexts.trace.trace_id));
                            }
                            !(function (e, t) {
                              let n = e.getContext();
                              if (
                                (t.event_id &&
                                  n.errorIds.size < 100 &&
                                  n.errorIds.add(t.event_id),
                                "buffer" !== e.recordingMode ||
                                  !t.tags ||
                                  !t.tags.replayId)
                              )
                                return;
                              let { beforeErrorSampling: r } = e.getOptions();
                              ("function" != typeof r || r(t)) &&
                                (0, V.wg)(async () => {
                                  try {
                                    await e.sendBufferedReplayOrFlush();
                                  } catch (t) {
                                    e.handleException(t);
                                  }
                                });
                            })(e, t);
                          }
                        }),
                        n.on("createDsc", (t) => {
                          let n = e.getSessionId();
                          n &&
                            e.isEnabled() &&
                            "session" === e.recordingMode &&
                            e.checkAndHandleExpiredSession() &&
                            (t.replay_id = n);
                        }),
                        n.on("spanStart", (t) => {
                          e.lastActiveSpan = t;
                        }),
                        n.on("spanEnd", (t) => {
                          e.lastActiveSpan = t;
                        }),
                        n.on("beforeSendFeedback", (t, n) => {
                          let r = e.getSessionId();
                          n &&
                            n.includeReplay &&
                            e.isEnabled() &&
                            r &&
                            t.contexts &&
                            t.contexts.feedback &&
                            (t.contexts.feedback.replay_id = r);
                        }));
                  })(this),
                  (this._hasInitializedCoreListeners = !0));
            } catch (e) {
              this.handleException(e);
            }
            this._performanceCleanupCallback = (function (e) {
              function t(t) {
                e.performanceEntries.includes(t) ||
                  e.performanceEntries.push(t);
              }
              function n({ entries: e }) {
                e.forEach(t);
              }
              let r = [];
              return (
                ["navigation", "paint", "resource"].forEach((e) => {
                  r.push((0, G.wv)(e, n));
                }),
                r.push(
                  (0, G.Pt)(tY(t0, e)),
                  (0, G.a9)(tY(t1, e)),
                  (0, G.T5)(tY(t2, e)),
                  (0, G.hT)(tY(t3, e)),
                ),
                () => {
                  r.forEach((e) => e());
                }
              );
            })(this);
          }
          _removeListeners() {
            try {
              Z.document.removeEventListener(
                "visibilitychange",
                this._handleVisibilityChange,
              ),
                Z.removeEventListener("blur", this._handleWindowBlur),
                Z.removeEventListener("focus", this._handleWindowFocus),
                Z.removeEventListener("keydown", this._handleKeyboardEvent),
                this.clickDetector && this.clickDetector.removeListeners(),
                this._performanceCleanupCallback &&
                  this._performanceCleanupCallback();
            } catch (e) {
              this.handleException(e);
            }
          }
          __init() {
            this._handleVisibilityChange = () => {
              "visible" === Z.document.visibilityState
                ? this._doChangeToForegroundTasks()
                : this._doChangeToBackgroundTasks();
            };
          }
          __init2() {
            this._handleWindowBlur = () => {
              let e = tX({ category: "ui.blur" });
              this._doChangeToBackgroundTasks(e);
            };
          }
          __init3() {
            this._handleWindowFocus = () => {
              let e = tX({ category: "ui.focus" });
              this._doChangeToForegroundTasks(e);
            };
          }
          __init4() {
            this._handleKeyboardEvent = (e) => {
              !(function (e, t) {
                if (!e.isEnabled()) return;
                e.updateUserActivity();
                let n = (function (e) {
                  var t;
                  let {
                    metaKey: n,
                    shiftKey: r,
                    ctrlKey: i,
                    altKey: o,
                    key: s,
                    target: a,
                  } = e;
                  if (
                    !a ||
                    "INPUT" === (t = a).tagName ||
                    "TEXTAREA" === t.tagName ||
                    t.isContentEditable ||
                    !s
                  )
                    return null;
                  let l = n || i || o,
                    c = 1 === s.length;
                  if (!l && c) return null;
                  let u = (0, M.Hd)(a, { maxStringLength: 200 }) || "<unknown>",
                    d = tG(a, u);
                  return tX({
                    category: "ui.keyDown",
                    message: u,
                    data: {
                      ...d.data,
                      metaKey: n,
                      shiftKey: r,
                      ctrlKey: i,
                      altKey: o,
                      key: s,
                    },
                  });
                })(t);
                n && t$(e, n);
              })(this, e);
            };
          }
          _doChangeToBackgroundTasks(e) {
            !this.session ||
              nd(this.session, {
                maxReplayDuration: this._options.maxReplayDuration,
                sessionIdleExpire: this.timeouts.sessionIdleExpire,
              }) ||
              (e && this._createCustomBreadcrumb(e), this.conditionalFlush());
          }
          _doChangeToForegroundTasks(e) {
            if (this.session) {
              if (!this.checkAndHandleExpiredSession()) {
                t8 &&
                  t9.info(
                    "Document has become active, but session has expired",
                  );
                return;
              }
              e && this._createCustomBreadcrumb(e);
            }
          }
          _updateUserActivity(e = Date.now()) {
            this._lastActivity = e;
          }
          _updateSessionActivity(e = Date.now()) {
            this.session &&
              ((this.session.lastActivity = e), this._maybeSaveSession());
          }
          _createCustomBreadcrumb(e) {
            this.addUpdate(() => {
              this.throttledAddEvent({
                type: tt.Custom,
                timestamp: e.timestamp || 0,
                data: { tag: "breadcrumb", payload: e },
              });
            });
          }
          _addPerformanceEntries() {
            let e = this.performanceEntries
              .map(tQ)
              .filter(Boolean)
              .concat(this.replayPerformanceEntries);
            if (
              ((this.performanceEntries = []),
              (this.replayPerformanceEntries = []),
              this._requiresManualStart)
            ) {
              let t = this._context.initialTimestamp / 1e3;
              e = e.filter((e) => e.start >= t);
            }
            return Promise.all(nS(this, e));
          }
          _clearContext() {
            this._context.errorIds.clear(),
              this._context.traceIds.clear(),
              (this._context.urls = []);
          }
          _updateInitialTimestampFromEventBuffer() {
            let { session: e, eventBuffer: t } = this;
            if (!e || !t || this._requiresManualStart || e.segmentId) return;
            let n = t.getEarliestTimestamp();
            n &&
              n < this._context.initialTimestamp &&
              (this._context.initialTimestamp = n);
          }
          _popEventContext() {
            let e = {
              initialTimestamp: this._context.initialTimestamp,
              initialUrl: this._context.initialUrl,
              errorIds: Array.from(this._context.errorIds),
              traceIds: Array.from(this._context.traceIds),
              urls: this._context.urls,
            };
            return this._clearContext(), e;
          }
          async _runFlush() {
            let e = this.getSessionId();
            if (!this.session || !this.eventBuffer || !e) {
              t8 && t9.error("No session or eventBuffer found to flush.");
              return;
            }
            if (
              (await this._addPerformanceEntries(),
              this.eventBuffer && this.eventBuffer.hasEvents)
            ) {
              if (
                (await nz(this), this.eventBuffer) &&
                e === this.getSessionId()
              )
                try {
                  this._updateInitialTimestampFromEventBuffer();
                  let t = Date.now();
                  if (
                    t - this._context.initialTimestamp >
                    this._options.maxReplayDuration + 3e4
                  )
                    throw Error("Session is too long, not sending replay");
                  let n = this._popEventContext(),
                    r = this.session.segmentId++;
                  this._maybeSaveSession();
                  let i = await this.eventBuffer.finish();
                  await nV({
                    replayId: e,
                    recordingData: i,
                    segmentId: r,
                    eventContext: n,
                    session: this.session,
                    timestamp: t,
                    onError: (e) => this.handleException(e),
                  });
                } catch (t) {
                  this.handleException(t), this.stop({ reason: "sendReplay" });
                  let e = (0, P.KU)();
                  e &&
                    e.recordDroppedEvent(
                      t instanceof nX ? "ratelimit_backoff" : "send_error",
                      "replay",
                    );
                }
            }
          }
          __init5() {
            this._flush = async ({ force: e = !1 } = {}) => {
              if (!this._isEnabled && !e) return;
              if (!this.checkAndHandleExpiredSession()) {
                t8 &&
                  t9.error(
                    "Attempting to finish replay event after session expired.",
                  );
                return;
              }
              if (!this.session) return;
              let t = this.session.started,
                n = Date.now() - t;
              this._debouncedFlush.cancel();
              let r = n < this._options.minReplayDuration,
                i = n > this._options.maxReplayDuration + 5e3;
              if (r || i) {
                t8 &&
                  t9.info(
                    `Session duration (${Math.floor(n / 1e3)}s) is too ${r ? "short" : "long"}, not sending replay.`,
                  ),
                  r && this._debouncedFlush();
                return;
              }
              let o = this.eventBuffer;
              o &&
                0 === this.session.segmentId &&
                !o.hasCheckout &&
                t8 &&
                t9.info("Flushing initial segment without checkout.");
              let s = !!this._flushLock;
              this._flushLock || (this._flushLock = this._runFlush());
              try {
                await this._flushLock;
              } catch (e) {
                this.handleException(e);
              } finally {
                (this._flushLock = void 0), s && this._debouncedFlush();
              }
            };
          }
          _maybeSaveSession() {
            this.session && this._options.stickySession && nl(this.session);
          }
          __init6() {
            this._onMutationHandler = (e) => {
              let t = e.length,
                n = this._options.mutationLimit,
                r = this._options.mutationBreadcrumbLimit,
                i = n && t > n;
              if (t > r || i) {
                let e = tX({
                  category: "replay.mutations",
                  data: { count: t, limit: i },
                });
                this._createCustomBreadcrumb(e);
              }
              return (
                !i ||
                (this.stop({
                  reason: "mutationLimit",
                  forceFlush: "session" === this.recordingMode,
                }),
                !1)
              );
            };
          }
        }
        function nY(e, t) {
          return [...e, ...t].join(",");
        }
        let nQ =
            'img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]',
          nZ = ["content-length", "content-type", "accept"],
          n0 = !1,
          n1 = (e) => new n2(e);
        class n2 {
          static __initStatic() {
            this.id = "Replay";
          }
          constructor({
            flushMinDelay: e = 5e3,
            flushMaxDelay: t = 5500,
            minReplayDuration: n = 4999,
            maxReplayDuration: r = 36e5,
            stickySession: i = !0,
            useCompression: o = !0,
            workerUrl: s,
            _experiments: a = {},
            maskAllText: l = !0,
            maskAllInputs: c = !0,
            blockAllMedia: u = !0,
            mutationBreadcrumbLimit: d = 750,
            mutationLimit: p = 1e4,
            slowClickTimeout: h = 7e3,
            slowClickIgnoreSelectors: f = [],
            networkDetailAllowUrls: m = [],
            networkDetailDenyUrls: g = [],
            networkCaptureBodies: _ = !0,
            networkRequestHeaders: v = [],
            networkResponseHeaders: y = [],
            mask: b = [],
            maskAttributes: S = ["title", "placeholder"],
            unmask: w = [],
            block: E = [],
            unblock: k = [],
            ignore: x = [],
            maskFn: C,
            beforeAddRecordingEvent: T,
            beforeErrorSampling: I,
            onError: M,
          } = {}) {
            this.name = n2.id;
            const O = (function ({
              mask: e,
              unmask: t,
              block: n,
              unblock: r,
              ignore: i,
            }) {
              return {
                maskTextSelector: nY(e, [".sentry-mask", "[data-sentry-mask]"]),
                unmaskTextSelector: nY(t, []),
                blockSelector: nY(n, [
                  ".sentry-block",
                  "[data-sentry-block]",
                  "base",
                  "iframe[srcdoc]:not([src])",
                ]),
                unblockSelector: nY(r, []),
                ignoreSelector: nY(i, [
                  ".sentry-ignore",
                  "[data-sentry-ignore]",
                  'input[type="file"]',
                ]),
              };
            })({ mask: b, unmask: w, block: E, unblock: k, ignore: x });
            if (
              ((this._recordingOptions = {
                maskAllInputs: c,
                maskAllText: l,
                maskInputOptions: { password: !0 },
                maskTextFn: C,
                maskInputFn: C,
                maskAttributeFn: (e, t, n) =>
                  (function ({
                    el: e,
                    key: t,
                    maskAttributes: n,
                    maskAllText: r,
                    privacyOptions: i,
                    value: o,
                  }) {
                    return !r ||
                      (i.unmaskTextSelector && e.matches(i.unmaskTextSelector))
                      ? o
                      : n.includes(t) ||
                          ("value" === t &&
                            "INPUT" === e.tagName &&
                            ["submit", "button"].includes(
                              e.getAttribute("type") || "",
                            ))
                        ? o.replace(/[\S]/g, "*")
                        : o;
                  })({
                    maskAttributes: S,
                    maskAllText: l,
                    privacyOptions: O,
                    key: e,
                    value: t,
                    el: n,
                  }),
                ...O,
                slimDOMOptions: "all",
                inlineStylesheet: !0,
                inlineImages: !1,
                collectFonts: !0,
                errorHandler: (e) => {
                  try {
                    e.__rrweb__ = !0;
                  } catch (e) {}
                },
              }),
              (this._initialOptions = {
                flushMinDelay: e,
                flushMaxDelay: t,
                minReplayDuration: Math.min(n, 15e3),
                maxReplayDuration: Math.min(r, 36e5),
                stickySession: i,
                useCompression: o,
                workerUrl: s,
                blockAllMedia: u,
                maskAllInputs: c,
                maskAllText: l,
                mutationBreadcrumbLimit: d,
                mutationLimit: p,
                slowClickTimeout: h,
                slowClickIgnoreSelectors: f,
                networkDetailAllowUrls: m,
                networkDetailDenyUrls: g,
                networkCaptureBodies: _,
                networkRequestHeaders: n3(v),
                networkResponseHeaders: n3(y),
                beforeAddRecordingEvent: T,
                beforeErrorSampling: I,
                onError: M,
                _experiments: a,
              }),
              this._initialOptions.blockAllMedia &&
                (this._recordingOptions.blockSelector = this._recordingOptions
                  .blockSelector
                  ? `${this._recordingOptions.blockSelector},${nQ}`
                  : nQ),
              this._isInitialized && (0, K.B)())
            )
              throw Error(
                "Multiple Sentry Session Replay instances are not supported",
              );
            this._isInitialized = !0;
          }
          get _isInitialized() {
            return n0;
          }
          set _isInitialized(e) {
            n0 = e;
          }
          afterAllSetup(e) {
            (0, K.B)() &&
              !this._replay &&
              (this._setup(e), this._initialize(e));
          }
          start() {
            this._replay && this._replay.start();
          }
          startBuffering() {
            this._replay && this._replay.startBuffering();
          }
          stop() {
            return this._replay
              ? this._replay.stop({
                  forceFlush: "session" === this._replay.recordingMode,
                })
              : Promise.resolve();
          }
          flush(e) {
            return this._replay
              ? this._replay.isEnabled()
                ? this._replay.sendBufferedReplayOrFlush(e)
                : (this._replay.start(), Promise.resolve())
              : Promise.resolve();
          }
          getReplayId() {
            if (this._replay && this._replay.isEnabled())
              return this._replay.getSessionId();
          }
          getRecordingMode() {
            if (this._replay && this._replay.isEnabled())
              return this._replay.recordingMode;
          }
          _initialize(e) {
            this._replay &&
              (this._maybeLoadFromReplayCanvasIntegration(e),
              this._replay.initializeSampling());
          }
          _setup(e) {
            var t;
            let n,
              r,
              i,
              o,
              s =
                ((t = this._initialOptions),
                (n = e.getOptions()),
                (r = {
                  sessionSampleRate: 0,
                  errorSampleRate: 0,
                  ...(0, I.Ce)(t),
                }),
                (i = (0, X.i)(n.replaysSessionSampleRate)),
                (o = (0, X.i)(n.replaysOnErrorSampleRate)),
                null == i &&
                  null == o &&
                  (0, R.pq)(() => {
                    console.warn(
                      "Replay is disabled because neither `replaysSessionSampleRate` nor `replaysOnErrorSampleRate` are set.",
                    );
                  }),
                null != i && (r.sessionSampleRate = i),
                null != o && (r.errorSampleRate = o),
                r);
            this._replay = new nJ({
              options: s,
              recordingOptions: this._recordingOptions,
            });
          }
          _maybeLoadFromReplayCanvasIntegration(e) {
            try {
              let t = e.getIntegrationByName("ReplayCanvas");
              if (!t) return;
              this._replay._canvas = t.getOptions();
            } catch (e) {}
          }
        }
        function n3(e) {
          return [...nZ, ...e.map((e) => e.toLowerCase())];
        }
        function n6() {
          let e = (0, P.KU)();
          return e && e.getIntegrationByName("Replay");
        }
        n2.__initStatic();
      },
    },
    t = {};
  function n(r) {
    var i = t[r];
    if (void 0 !== i) return i.exports;
    var o = (t[r] = { exports: {} });
    return e[r](o, o.exports, n), o.exports;
  }
  (n.d = (e, t) => {
    for (var r in t)
      n.o(t, r) &&
        !n.o(e, r) &&
        Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
  }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = (e) => {
      "u" > typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.rv = () => "1.7.11"),
    (n.ruid = "bundler=rspack@1.7.11"),
    (() => {
      "use strict";
      var e = n(168769);
      window.DiscordSentry = (0, e.i)();
    })();
})();
//# sourceMappingURL=sentry.9804e2ec3f765d8c.js.map
