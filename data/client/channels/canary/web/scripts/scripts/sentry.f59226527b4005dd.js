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
        function a() {
          throw Error("clearTimeout has not been defined");
        }
        try {
          t = "function" == typeof setTimeout ? setTimeout : o;
        } catch (e) {
          t = o;
        }
        try {
          n = "function" == typeof clearTimeout ? clearTimeout : a;
        } catch (e) {
          n = a;
        }
        function s(e) {
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
            var e = s(d);
            c = !0;
            for (var t = l.length; t; ) {
              for (r = l, l = []; ++u < t; ) r && r[u].run();
              (u = -1), (t = l.length);
            }
            (r = null),
              (c = !1),
              (function (e) {
                if (n === clearTimeout) return clearTimeout(e);
                if ((n === a || !n) && clearTimeout)
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
          l.push(new h(e, t)), 1 !== l.length || c || s(p);
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
      let e,
        t,
        r,
        i,
        o,
        a,
        s,
        l,
        c,
        u,
        d,
        p,
        h,
        f,
        m,
        g,
        _,
        y,
        v,
        b,
        S,
        w,
        E,
        k,
        x,
        C;
      var T = {};
      n.r(T),
        n.d(T, {
          BrowserClient: () => nU,
          OpenFeatureIntegrationHook: () => d1,
          SDK_VERSION: () => "8.55.0",
          SEMANTIC_ATTRIBUTE_SENTRY_OP: () => tl,
          SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN: () => tc,
          SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE: () => ts,
          SEMANTIC_ATTRIBUTE_SENTRY_SOURCE: () => ta,
          Scope: () => eT,
          WINDOW: () => nL,
          addBreadcrumb: () => n8,
          addEventProcessor: () => t9,
          addIntegration: () => ez,
          addTracingExtensions: () => r8,
          breadcrumbsIntegration: () => rt,
          browserApiErrorsIntegration: () => rr,
          browserProfilingIntegration: () => dJ,
          browserSessionIntegration: () => rl,
          browserTracingIntegration: () => dM,
          buildLaunchDarklyFlagUsedHandler: () => dQ,
          captureConsoleIntegration: () => r7,
          captureEvent: () => tZ,
          captureException: () => tJ,
          captureFeedback: () => r9,
          captureMessage: () => tK,
          captureSession: () => nr,
          captureUserFeedback: () => r0,
          chromeStackLineParser: () => rC,
          close: () => t8,
          contextLinesIntegration: () => i6,
          continueTrace: () => ig,
          createTransport: () => rY,
          createUserFeedbackEnvelope: () => nF,
          debugIntegration: () => iC,
          dedupeIntegration: () => e2,
          defaultRequestInstrumentationOptions: () => df,
          defaultStackLineParsers: () => rP,
          defaultStackParser: () => r$,
          endSession: () => nt,
          eventFromException: () => nA,
          eventFromMessage: () => nO,
          exceptionFromError: () => nC,
          extraErrorDataIntegration: () => iT,
          featureFlagsIntegration: () => r3,
          feedbackAsyncIntegration: () => u0,
          feedbackIntegration: () => u1,
          feedbackSyncIntegration: () => u1,
          flush: () => t6,
          forceLoad: () => rZ,
          functionToStringIntegration: () => eG,
          geckoStackLineParser: () => rM,
          getActiveSpan: () => tF,
          getClient: () => eU,
          getCurrentHub: () => iI,
          getCurrentScope: () => eN,
          getDefaultIntegrations: () => rX,
          getFeedback: () => cI,
          getGlobalScope: () => eP,
          getIsolationScope: () => eL,
          getReplay: () => lU,
          getRootSpan: () => t$,
          getSpanDescendants: () => tP,
          getSpanStatusFromHttpCode: () => iM,
          globalHandlersIntegration: () => rm,
          httpClientIntegration: () => i0,
          httpContextIntegration: () => ry,
          inboundFiltersIntegration: () => eq,
          init: () => rJ,
          instrumentOutgoingRequests: () => dm,
          isInitialized: () => t7,
          lastEventId: () => t4,
          launchDarklyIntegration: () => dZ,
          lazyLoadIntegration: () => iX,
          linkedErrorsIntegration: () => rS,
          makeBrowserOfflineTransport: () => dP,
          makeFetchTransport: () => rG,
          makeMultiplexedTransport: () => iO,
          metrics: () => dn,
          moduleMetadataIntegration: () => i$,
          onLoad: () => rQ,
          openFeatureIntegration: () => d0,
          opera10StackLineParser: () => rD,
          opera11StackLineParser: () => rL,
          parameterize: () => iF,
          registerSpanErrorInstrumentation: () => r4,
          replayCanvasIntegration: () => ct,
          replayIntegration: () => lP,
          reportingObserverIntegration: () => iK,
          rewriteFramesIntegration: () => iH,
          sendFeedback: () => cv,
          sessionTimingIntegration: () => iz,
          setContext: () => tQ,
          setCurrentClient: () => e9,
          setExtra: () => t1,
          setExtras: () => t0,
          setHttpStatus: () => iR,
          setMeasurement: () => ir,
          setTag: () => t3,
          setTags: () => t2,
          setUser: () => t5,
          showReportDialog: () => rK,
          spanToBaggageHeader: () => tq,
          spanToJSON: () => tR,
          spanToTraceHeader: () => tT,
          spotlightBrowserIntegration: () => dK,
          startBrowserTracingNavigationSpan: () => dA,
          startBrowserTracingPageLoadSpan: () => dR,
          startInactiveSpan: () => im,
          startNewTrace: () => iv,
          startSession: () => ne,
          startSpan: () => ip,
          startSpanManual: () => ih,
          statsigIntegration: () => d5,
          suppressTracing: () => iy,
          thirdPartyErrorFilterIntegration: () => iW,
          unleashIntegration: () => d2,
          updateSpanName: () => tj,
          winjsStackLineParser: () => rA,
          withActiveSpan: () => i_,
          withIsolationScope: () => eF,
          withScope: () => e$,
          zodErrorsIntegration: () => iV,
        });
      let I = "u" < typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
        M = globalThis;
      function R(e, t, n) {
        let r = n || M,
          i = (r.__SENTRY__ = r.__SENTRY__ || {}),
          o = (i["8.55.0"] = i["8.55.0"] || {});
        return o[e] || (o[e] = t());
      }
      function A() {
        return O(M), M;
      }
      function O(e) {
        let t = (e.__SENTRY__ = e.__SENTRY__ || {});
        return (
          (t.version = t.version || "8.55.0"), (t["8.55.0"] = t["8.55.0"] || {})
        );
      }
      let D = Object.prototype.toString;
      function N(e) {
        switch (D.call(e)) {
          case "[object Error]":
          case "[object Exception]":
          case "[object DOMException]":
          case "[object WebAssembly.Exception]":
            return !0;
          default:
            return W(e, Error);
        }
      }
      function L(e, t) {
        return D.call(e) === `[object ${t}]`;
      }
      function P(e) {
        return L(e, "ErrorEvent");
      }
      function $(e) {
        return L(e, "DOMError");
      }
      function F(e) {
        return L(e, "String");
      }
      function U(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          "__sentry_template_string__" in e &&
          "__sentry_template_values__" in e
        );
      }
      function j(e) {
        return (
          null === e || U(e) || ("object" != typeof e && "function" != typeof e)
        );
      }
      function B(e) {
        return L(e, "Object");
      }
      function H(e) {
        return "u" > typeof Event && W(e, Event);
      }
      function z(e) {
        return !!(e && e.then && "function" == typeof e.then);
      }
      function W(e, t) {
        try {
          return e instanceof t;
        } catch (e) {
          return !1;
        }
      }
      function q(e) {
        return !!(
          "object" == typeof e &&
          null !== e &&
          (e.__isVue || e._isVue)
        );
      }
      function Y(e, t = {}) {
        if (!e) return "<unknown>";
        try {
          let n,
            r = e,
            i = [],
            o = 0,
            a = 0,
            s = Array.isArray(t) ? t : t.keyAttrs,
            l = (!Array.isArray(t) && t.maxStringLength) || 80;
          for (
            ;
            r &&
            o++ < 5 &&
            ((n = (function (e, t) {
              let n = [];
              if (!e || !e.tagName) return "";
              if (M.HTMLElement && e instanceof HTMLElement && e.dataset) {
                if (e.dataset.sentryComponent) return e.dataset.sentryComponent;
                if (e.dataset.sentryElement) return e.dataset.sentryElement;
              }
              n.push(e.tagName.toLowerCase());
              let r =
                t && t.length
                  ? t
                      .filter((t) => e.getAttribute(t))
                      .map((t) => [t, e.getAttribute(t)])
                  : null;
              if (r && r.length)
                r.forEach((e) => {
                  n.push(`[${e[0]}="${e[1]}"]`);
                });
              else {
                e.id && n.push(`#${e.id}`);
                let t = e.className;
                if (t && F(t)) for (let e of t.split(/\s+/)) n.push(`.${e}`);
              }
              for (let t of ["aria-label", "type", "name", "title", "alt"]) {
                let r = e.getAttribute(t);
                r && n.push(`[${t}="${r}"]`);
              }
              return n.join("");
            })(r, s)),
            "html" !== n && (!(o > 1) || !(a + 3 * i.length + n.length >= l)));

          )
            i.push(n), (a += n.length), (r = r.parentNode);
          return i.reverse().join(" > ");
        } catch (e) {
          return "<unknown>";
        }
      }
      function V() {
        try {
          return M.document.location.href;
        } catch (e) {
          return "";
        }
      }
      function G(e) {
        if (!M.HTMLElement) return null;
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
      let X = "u" < typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
        J = ["debug", "info", "warn", "error", "log", "assert", "trace"],
        K = {};
      function Z(e) {
        if (!("console" in M)) return e();
        let t = M.console,
          n = {},
          r = Object.keys(K);
        r.forEach((e) => {
          let r = K[e];
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
      let Q = R("logger", function () {
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
          X
            ? J.forEach((n) => {
                t[n] = (...t) => {
                  e &&
                    Z(() => {
                      M.console[n](`Sentry Logger [${n}]:`, ...t);
                    });
                };
              })
            : J.forEach((e) => {
                t[e] = () => void 0;
              }),
          t
        );
      });
      function ee(e, t = 0) {
        return "string" != typeof e || 0 === t || e.length <= t
          ? e
          : `${e.slice(0, t)}...`;
      }
      function et(e, t) {
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
      function en(e, t) {
        if (!Array.isArray(e)) return "";
        let n = [];
        for (let t = 0; t < e.length; t++) {
          let r = e[t];
          try {
            q(r) ? n.push("[VueViewModel]") : n.push(String(r));
          } catch (e) {
            n.push("[value cannot be serialized]");
          }
        }
        return n.join(t);
      }
      function er(e, t = [], n = !1) {
        return t.some((t) =>
          (function (e, t, n = !1) {
            return (
              !!F(e) &&
              (L(t, "RegExp")
                ? t.test(e)
                : !!F(t) && (n ? e === t : e.includes(t)))
            );
          })(e, t, n),
        );
      }
      function ei(e, t, n) {
        if (!(t in e)) return;
        let r = e[t],
          i = n(r);
        "function" == typeof i && ea(i, r);
        try {
          e[t] = i;
        } catch (n) {
          X && Q.log(`Failed to replace method "${t}" in object`, e);
        }
      }
      function eo(e, t, n) {
        try {
          Object.defineProperty(e, t, {
            value: n,
            writable: !0,
            configurable: !0,
          });
        } catch (n) {
          X &&
            Q.log(`Failed to add non-enumerable property "${t}" to object`, e);
        }
      }
      function ea(e, t) {
        try {
          let n = t.prototype || {};
          (e.prototype = t.prototype = n), eo(e, "__sentry_original__", t);
        } catch (e) {}
      }
      function es(e) {
        return e.__sentry_original__;
      }
      function el(e) {
        if (N(e))
          return { message: e.message, name: e.name, stack: e.stack, ...eu(e) };
        if (!H(e)) return e;
        {
          let t = {
            type: e.type,
            target: ec(e.target),
            currentTarget: ec(e.currentTarget),
            ...eu(e),
          };
          return (
            "u" > typeof CustomEvent &&
              W(e, CustomEvent) &&
              (t.detail = e.detail),
            t
          );
        }
      }
      function ec(e) {
        try {
          return "u" > typeof Element && W(e, Element)
            ? Y(e)
            : Object.prototype.toString.call(e);
        } catch (e) {
          return "<unknown>";
        }
      }
      function eu(e) {
        if ("object" != typeof e || null === e) return {};
        {
          let t = {};
          for (let n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          return t;
        }
      }
      function ed(e) {
        return (function e(t, n) {
          if (
            (function (e) {
              if (!B(e)) return !1;
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
      function ep() {
        return Date.now() / 1e3;
      }
      let eh = (function () {
          let { performance: e } = M;
          if (!e || !e.now) return ep;
          let t = Date.now() - e.now(),
            n = void 0 == e.timeOrigin ? t : e.timeOrigin;
          return () => (n + e.now()) / 1e3;
        })(),
        ef = (() => {
          let { performance: e } = M;
          if (!e || !e.now) return;
          let t = e.now(),
            n = Date.now(),
            r = e.timeOrigin ? Math.abs(e.timeOrigin + t - n) : 36e5,
            i = e.timing && e.timing.navigationStart,
            o = "number" == typeof i ? Math.abs(i + t - n) : 36e5;
          if (r < 36e5 || o < 36e5)
            if (r <= o) return e.timeOrigin;
            else return i;
          return n;
        })();
      function em() {
        let e = M.crypto || M.msCrypto,
          t = () => 16 * Math.random();
        try {
          if (e && e.randomUUID) return e.randomUUID().replace(/-/g, "");
          e &&
            e.getRandomValues &&
            (t = () => {
              let t = new Uint8Array(1);
              return e.getRandomValues(t), t[0];
            });
        } catch (e) {}
        return "10000000100040008000100000000000".replace(/[018]/g, (e) =>
          (e ^ ((15 & t()) >> (e / 4))).toString(16),
        );
      }
      function eg(e) {
        return e.exception && e.exception.values
          ? e.exception.values[0]
          : void 0;
      }
      function e_(e) {
        let { message: t, event_id: n } = e;
        if (t) return t;
        let r = eg(e);
        return r
          ? r.type && r.value
            ? `${r.type}: ${r.value}`
            : r.type || r.value || n || "<unknown>"
          : n || "<unknown>";
      }
      function ey(e, t, n) {
        let r = (e.exception = e.exception || {}),
          i = (r.values = r.values || []),
          o = (i[0] = i[0] || {});
        o.value || (o.value = t || ""), o.type || (o.type = n || "Error");
      }
      function ev(e, t) {
        let n = eg(e);
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
      function eb(e) {
        if (
          (function (e) {
            try {
              return e.__sentry_captured__;
            } catch (e) {}
          })(e)
        )
          return !0;
        try {
          eo(e, "__sentry_captured__", !0);
        } catch (e) {}
        return !1;
      }
      function eS(e, t = {}) {
        if (
          (t.user &&
            (!e.ipAddress &&
              t.user.ip_address &&
              (e.ipAddress = t.user.ip_address),
            e.did ||
              t.did ||
              (e.did = t.user.id || t.user.email || t.user.username)),
          (e.timestamp = t.timestamp || eh()),
          t.abnormal_mechanism && (e.abnormal_mechanism = t.abnormal_mechanism),
          t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration),
          t.sid && (e.sid = 32 === t.sid.length ? t.sid : em()),
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
      function ew() {
        return em().substring(16);
      }
      function eE(e, t, n = 2) {
        if (!t || "object" != typeof t || n <= 0) return t;
        if (e && t && 0 === Object.keys(t).length) return e;
        let r = { ...e };
        for (let e in t)
          Object.prototype.hasOwnProperty.call(t, e) &&
            (r[e] = eE(r[e], t[e], n - 1));
        return r;
      }
      let ek = "_sentrySpan";
      function ex(e, t) {
        t ? eo(e, ek, t) : delete e[ek];
      }
      class eC {
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
            (this._propagationContext = { traceId: em(), spanId: ew() });
        }
        clone() {
          let e = new eC();
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
            ex(e, this[ek]),
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
            this._session && eS(this._session, { user: e }),
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
              t instanceof eT
                ? [t.getScopeData(), t.getRequestSession()]
                : B(t)
                  ? [e, e.requestSession]
                  : [],
            {
              tags: i,
              extra: o,
              user: a,
              contexts: s,
              level: l,
              fingerprint: c = [],
              propagationContext: u,
            } = n || {};
          return (
            (this._tags = { ...this._tags, ...i }),
            (this._extra = { ...this._extra, ...o }),
            (this._contexts = { ...this._contexts, ...s }),
            a && Object.keys(a).length && (this._user = a),
            l && (this._level = l),
            c.length && (this._fingerprint = c),
            u && (this._propagationContext = u),
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
            ex(this, void 0),
            (this._attachments = []),
            this.setPropagationContext({ traceId: em() }),
            this._notifyScopeListeners(),
            this
          );
        }
        addBreadcrumb(e, t) {
          let n = "number" == typeof t ? t : 100;
          if (n <= 0) return this;
          let r = { timestamp: ep(), ...e };
          return (
            this._breadcrumbs.push(r),
            this._breadcrumbs.length > n &&
              ((this._breadcrumbs = this._breadcrumbs.slice(-n)),
              this._client &&
                this._client.recordDroppedEvent("buffer_overflow", "log_item")),
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
            span: this[ek],
          };
        }
        setSDKProcessingMetadata(e) {
          return (
            (this._sdkProcessingMetadata = eE(
              this._sdkProcessingMetadata,
              e,
              2,
            )),
            this
          );
        }
        setPropagationContext(e) {
          return (this._propagationContext = { spanId: ew(), ...e }), this;
        }
        getPropagationContext() {
          return this._propagationContext;
        }
        captureException(e, t) {
          let n = t && t.event_id ? t.event_id : em();
          if (!this._client)
            return (
              Q.warn(
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
          let r = n && n.event_id ? n.event_id : em();
          if (!this._client)
            return (
              Q.warn(
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
          let n = t && t.event_id ? t.event_id : em();
          return (
            this._client
              ? this._client.captureEvent(e, { ...t, event_id: n }, this)
              : Q.warn(
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
      let eT = eC;
      class eI {
        constructor(e, t) {
          let n, r;
          (n = e || new eT()),
            (r = t || new eT()),
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
          return z(t)
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
      function eM() {
        let e = O(A());
        return (e.stack =
          e.stack ||
          new eI(
            R("defaultCurrentScope", () => new eT()),
            R("defaultIsolationScope", () => new eT()),
          ));
      }
      function eR(e) {
        return eM().withScope(e);
      }
      function eA(e, t) {
        let n = eM();
        return n.withScope(() => ((n.getStackTop().scope = e), t(e)));
      }
      function eO(e) {
        return eM().withScope(() => e(eM().getIsolationScope()));
      }
      function eD(e) {
        let t = O(e);
        return t.acs
          ? t.acs
          : {
              withIsolationScope: eO,
              withScope: eR,
              withSetScope: eA,
              withSetIsolationScope: (e, t) => eO(t),
              getCurrentScope: () => eM().getScope(),
              getIsolationScope: () => eM().getIsolationScope(),
            };
      }
      function eN() {
        return eD(A()).getCurrentScope();
      }
      function eL() {
        return eD(A()).getIsolationScope();
      }
      function eP() {
        return R("globalScope", () => new eT());
      }
      function e$(...e) {
        let t = eD(A());
        if (2 === e.length) {
          let [n, r] = e;
          return n ? t.withSetScope(n, r) : t.withScope(r);
        }
        return t.withScope(e[0]);
      }
      function eF(...e) {
        let t = eD(A());
        if (2 === e.length) {
          let [n, r] = e;
          return n ? t.withSetIsolationScope(n, r) : t.withIsolationScope(r);
        }
        return t.withIsolationScope(e[0]);
      }
      function eU() {
        return eN().getClient();
      }
      let ej = [];
      function eB(e, t) {
        for (let n of t) n && n.afterAllSetup && n.afterAllSetup(e);
      }
      function eH(e, t, n) {
        if (n[t.name]) {
          I &&
            Q.log(
              `Integration skipped because it was already installed: ${t.name}`,
            );
          return;
        }
        if (
          ((n[t.name] = t),
          -1 === ej.indexOf(t.name) &&
            "function" == typeof t.setupOnce &&
            (t.setupOnce(), ej.push(t.name)),
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
        I && Q.log(`Integration installed: ${t.name}`);
      }
      function ez(e) {
        let t = eU();
        if (!t) {
          I &&
            Q.warn(
              `Cannot add integration "${e.name}" because no SDK Client is available.`,
            );
          return;
        }
        t.addIntegration(e);
      }
      let eW = [
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
        eq = (e = {}) => ({
          name: "InboundFilters",
          processEvent: (t, n, r) => {
            var i, o, a, s, l;
            return ((i = t),
            (o = (function (e = {}, t = {}) {
              return {
                allowUrls: [...(e.allowUrls || []), ...(t.allowUrls || [])],
                denyUrls: [...(e.denyUrls || []), ...(t.denyUrls || [])],
                ignoreErrors: [
                  ...(e.ignoreErrors || []),
                  ...(t.ignoreErrors || []),
                  ...(e.disableErrorDefaults ? [] : eW),
                ],
                ignoreTransactions: [
                  ...(e.ignoreTransactions || []),
                  ...(t.ignoreTransactions || []),
                ],
                ignoreInternal: void 0 === e.ignoreInternal || e.ignoreInternal,
              };
            })(e, r.getOptions())).ignoreInternal &&
            (function (e) {
              try {
                return "SentryError" === e.exception.values[0].type;
              } catch (e) {}
              return !1;
            })(i)
              ? (I &&
                  Q.warn(`Event dropped due to being internal Sentry Error.
Event: ${e_(i)}`),
                0)
              : ((a = i),
                  (s = o.ignoreErrors),
                  !a.type &&
                    s &&
                    s.length &&
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
                    })(a).some((e) => er(e, s)))
                ? (I &&
                    Q.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${e_(i)}`),
                  0)
                : (l = i).type ||
                    !l.exception ||
                    !l.exception.values ||
                    0 === l.exception.values.length ||
                    l.message ||
                    l.exception.values.some(
                      (e) =>
                        e.stacktrace ||
                        (e.type && "Error" !== e.type) ||
                        e.value,
                    )
                  ? !(function (e, t) {
                      if ("transaction" !== e.type || !t || !t.length)
                        return !1;
                      let n = e.transaction;
                      return !!n && er(n, t);
                    })(i, o.ignoreTransactions)
                    ? !(function (e, t) {
                        if (!t || !t.length) return !1;
                        let n = eY(e);
                        return !!n && er(n, t);
                      })(i, o.denyUrls)
                      ? (function (e, t) {
                          if (!t || !t.length) return !0;
                          let n = eY(e);
                          return !n || er(n, t);
                        })(i, o.allowUrls) ||
                        (I &&
                          Q.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${e_(i)}.
Url: ${eY(i)}`),
                        0)
                      : (I &&
                          Q.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${e_(i)}.
Url: ${eY(i)}`),
                        0)
                    : (I &&
                        Q.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${e_(i)}`),
                      0)
                  : (I &&
                      Q.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${e_(i)}`),
                    0))
              ? t
              : null;
          },
        });
      function eY(e) {
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
          return I && Q.error(`Cannot extract url for event ${e_(e)}`), null;
        }
      }
      let eV = new WeakMap(),
        eG = () => ({
          name: "FunctionToString",
          setupOnce() {
            e = Function.prototype.toString;
            try {
              Function.prototype.toString = function (...t) {
                let n = es(this),
                  r = eV.has(eU()) && void 0 !== n ? n : this;
                return e.apply(r, t);
              };
            } catch (e) {}
          },
          setup(e) {
            eV.set(e, !0);
          },
        }),
        eX = /\(error: (.*)\)/,
        eJ = /captureMessage|captureException/;
      function eK(...e) {
        let t = e.sort((e, t) => e[0] - t[0]).map((e) => e[1]);
        return (e, n = 0, r = 0) => {
          let i = [],
            o = e.split("\n");
          for (let e = n; e < o.length; e++) {
            let n = o[e];
            if (n.length > 1024) continue;
            let a = eX.test(n) ? n.replace(eX, "$1") : n;
            if (!a.match(/\S*Error: /)) {
              for (let e of t) {
                let t = e(a);
                if (t) {
                  i.push(t);
                  break;
                }
              }
              if (i.length >= 50 + r) break;
            }
          }
          var a = i.slice(r);
          if (!a.length) return [];
          let s = Array.from(a);
          return (
            /sentryWrapped/.test(eZ(s).function || "") && s.pop(),
            s.reverse(),
            eJ.test(eZ(s).function || "") &&
              (s.pop(), eJ.test(eZ(s).function || "") && s.pop()),
            s
              .slice(0, 50)
              .map((e) => ({
                ...e,
                filename: e.filename || eZ(s).filename,
                function: e.function || "?",
              }))
          );
        };
      }
      function eZ(e) {
        return e[e.length - 1] || {};
      }
      let eQ = "<anonymous>";
      function e0(e) {
        try {
          if (!e || "function" != typeof e) return eQ;
          return e.name || eQ;
        } catch (e) {
          return eQ;
        }
      }
      function e1(e) {
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
      let e2 = () => {
        let e;
        return {
          name: "Dedupe",
          processEvent(t) {
            if (t.type) return t;
            try {
              var n, r, i, o, a, s;
              let l, c, u, d;
              if (
                ((n = t),
                (r = e) &&
                  ((i = n),
                  (o = r),
                  (l = i.message),
                  (c = o.message),
                  ((l || c) &&
                    (!l || c) &&
                    (l || !c) &&
                    l === c &&
                    e5(i, o) &&
                    e3(i, o) &&
                    1) ||
                    ((a = n),
                    (s = r),
                    (u = e4(s)),
                    (d = e4(a)),
                    u &&
                      d &&
                      u.type === d.type &&
                      u.value === d.value &&
                      e5(a, s) &&
                      e3(a, s))))
              )
                return (
                  I &&
                    Q.warn(
                      "Event dropped due to being a duplicate of previously captured event.",
                    ),
                  null
                );
            } catch (e) {}
            return (e = t);
          },
        };
      };
      function e3(e, t) {
        let n = e1(e),
          r = e1(t);
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
      function e5(e, t) {
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
      function e4(e) {
        return e.exception && e.exception.values && e.exception.values[0];
      }
      function e6() {
        if (!("fetch" in M)) return !1;
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
      function e8(e) {
        return (
          e &&
          /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
        );
      }
      function e7() {
        if ("string" == typeof EdgeRuntime) return !0;
        if (!e6()) return !1;
        if (e8(M.fetch)) return !0;
        let e = !1,
          t = M.document;
        if (t && "function" == typeof t.createElement)
          try {
            let n = t.createElement("iframe");
            (n.hidden = !0),
              t.head.appendChild(n),
              n.contentWindow &&
                n.contentWindow.fetch &&
                (e = e8(n.contentWindow.fetch)),
              t.head.removeChild(n);
          } catch (e) {
            X &&
              Q.warn(
                "Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
                e,
              );
          }
        return e;
      }
      function e9(e) {
        eN().setClient(e);
      }
      let te = "production";
      function tt(e) {
        return new tr((t) => {
          t(e);
        });
      }
      function tn(e) {
        return new tr((t, n) => {
          n(e);
        });
      }
      ((cM = cj || (cj = {}))[(cM.PENDING = 0)] = "PENDING"),
        (cM[(cM.RESOLVED = 1)] = "RESOLVED"),
        (cM[(cM.REJECTED = 2)] = "REJECTED");
      class tr {
        constructor(e) {
          tr.prototype.__init.call(this),
            tr.prototype.__init2.call(this),
            tr.prototype.__init3.call(this),
            tr.prototype.__init4.call(this),
            (this._state = cj.PENDING),
            (this._handlers = []);
          try {
            e(this._resolve, this._reject);
          } catch (e) {
            this._reject(e);
          }
        }
        then(e, t) {
          return new tr((n, r) => {
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
          return new tr((t, n) => {
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
            this._setResult(cj.RESOLVED, e);
          };
        }
        __init2() {
          this._reject = (e) => {
            this._setResult(cj.REJECTED, e);
          };
        }
        __init3() {
          this._setResult = (e, t) => {
            if (this._state === cj.PENDING) {
              if (z(t)) return void t.then(this._resolve, this._reject);
              (this._state = e), (this._value = t), this._executeHandlers();
            }
          };
        }
        __init4() {
          this._executeHandlers = () => {
            if (this._state === cj.PENDING) return;
            let e = this._handlers.slice();
            (this._handlers = []),
              e.forEach((e) => {
                e[0] ||
                  (this._state === cj.RESOLVED && e[1](this._value),
                  this._state === cj.REJECTED && e[2](this._value),
                  (e[0] = !0));
              });
          };
        }
      }
      function ti(e) {
        let n = M._sentryDebugIds;
        if (!n) return {};
        let o = Object.keys(n);
        return i && o.length === r
          ? i
          : ((r = o.length),
            (i = o.reduce((r, i) => {
              t || (t = {});
              let o = t[i];
              if (o) r[o[0]] = o[1];
              else {
                let o = e(i);
                for (let e = o.length - 1; e >= 0; e--) {
                  let a = o[e],
                    s = a && a.filename,
                    l = n[i];
                  if (s && l) {
                    (r[s] = l), (t[i] = [s, l]);
                    break;
                  }
                }
              }
              return r;
            }, {})));
      }
      function to(e, t = 100, n = Infinity) {
        try {
          return (function e(
            t,
            n,
            r = Infinity,
            i = Infinity,
            o = (function () {
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
            })(),
          ) {
            let [a, s] = o;
            if (
              null == n ||
              ["boolean", "string"].includes(typeof n) ||
              ("number" == typeof n && Number.isFinite(n))
            )
              return n;
            let l = (function (e, t) {
              try {
                var n;
                let r;
                if ("domain" === e && t && "object" == typeof t && t._events)
                  return "[Domain]";
                if ("domainEmitter" === e) return "[DomainEmitter]";
                if ("u" > typeof global && t === global) return "[Global]";
                if ("u" > typeof window && t === window) return "[Window]";
                if ("u" > typeof document && t === document)
                  return "[Document]";
                if (q(t)) return "[VueViewModel]";
                if (
                  B(t) &&
                  "nativeEvent" in t &&
                  "preventDefault" in t &&
                  "stopPropagation" in t
                )
                  return "[SyntheticEvent]";
                if ("number" == typeof t && !Number.isFinite(t))
                  return `[${t}]`;
                if ("function" == typeof t) return `[Function: ${e0(t)}]`;
                if ("symbol" == typeof t) return `[${String(t)}]`;
                if ("bigint" == typeof t) return `[BigInt: ${String(t)}]`;
                let i =
                  ((n = t),
                  (r = Object.getPrototypeOf(n))
                    ? r.constructor.name
                    : "null prototype");
                if (/^HTML(\w*)Element$/.test(i)) return `[HTMLElement: ${i}]`;
                return `[object ${i}]`;
              } catch (e) {
                return `**non-serializable** (${e})`;
              }
            })(t, n);
            if (!l.startsWith("[object ")) return l;
            if (n.__sentry_skip_normalization__) return n;
            let c =
              "number" == typeof n.__sentry_override_normalization_depth__
                ? n.__sentry_override_normalization_depth__
                : r;
            if (0 === c) return l.replace("object ", "");
            if (a(n)) return "[Circular ~]";
            if (n && "function" == typeof n.toJSON)
              try {
                let t = n.toJSON();
                return e("", t, c - 1, i, o);
              } catch (e) {}
            let u = Array.isArray(n) ? [] : {},
              d = 0,
              p = el(n);
            for (let t in p) {
              if (!Object.prototype.hasOwnProperty.call(p, t)) continue;
              if (d >= i) {
                u[t] = "[MaxProperties ~]";
                break;
              }
              let n = p[t];
              (u[t] = e(t, n, c - 1, i, o)), d++;
            }
            return s(n), u;
          })("", e, t, n);
        } catch (e) {
          return { ERROR: `**non-serializable** (${e})` };
        }
      }
      let ta = "sentry.source",
        ts = "sentry.sample_rate",
        tl = "sentry.op",
        tc = "sentry.origin",
        tu = "sentry.idle_span_finish_reason",
        td = "sentry.measurement_unit",
        tp = "sentry.measurement_value",
        th = "sentry.custom_span_name",
        tf = "sentry.exclusive_time",
        tm = "sentry-",
        tg = /^sentry-/;
      function t_(e) {
        let t = (function (e) {
          if (e && (F(e) || Array.isArray(e)))
            return Array.isArray(e)
              ? e.reduce(
                  (e, t) => (
                    Object.entries(tv(t)).forEach(([t, n]) => {
                      e[t] = n;
                    }),
                    e
                  ),
                  {},
                )
              : tv(e);
        })(e);
        if (!t) return;
        let n = Object.entries(t).reduce(
          (e, [t, n]) => (t.match(tg) && (e[t.slice(tm.length)] = n), e),
          {},
        );
        return Object.keys(n).length > 0 ? n : void 0;
      }
      function ty(e) {
        if (e) {
          var t = Object.entries(e).reduce(
            (e, [t, n]) => (n && (e[`${tm}${t}`] = n), e),
            {},
          );
          return 0 !== Object.keys(t).length
            ? Object.entries(t).reduce((e, [t, n], r) => {
                let i = `${encodeURIComponent(t)}=${encodeURIComponent(n)}`,
                  o = 0 === r ? i : `${e},${i}`;
                return o.length > 8192
                  ? (X &&
                      Q.warn(
                        `Not adding key: ${t} with val: ${n} to baggage header due to exceeding baggage size limits.`,
                      ),
                    e)
                  : o;
              }, "")
            : void 0;
        }
      }
      function tv(e) {
        return e
          .split(",")
          .map((e) => e.split("=").map((e) => decodeURIComponent(e.trim())))
          .reduce((e, [t, n]) => (t && n && (e[t] = n), e), {});
      }
      function tb(e) {
        if ("boolean" == typeof __SENTRY_TRACING__ && !__SENTRY_TRACING__)
          return !1;
        let t = eU(),
          n = e || (t && t.getOptions());
        return (
          !!n &&
          (n.enableTracing || "tracesSampleRate" in n || "tracesSampler" in n)
        );
      }
      let tS = "_sentryMetrics";
      function tw(e) {
        let t = e[tS];
        if (!t) return;
        let n = {};
        for (let [, [e, r]] of t) (n[e] || (n[e] = [])).push(ed(r));
        return n;
      }
      let tE = RegExp(
        "^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$",
      );
      function tk(e, t) {
        let n = (function (e) {
            let t;
            if (!e) return;
            let n = e.match(tE);
            if (n)
              return (
                "1" === n[3] ? (t = !0) : "0" === n[3] && (t = !1),
                { traceId: n[1], parentSampled: t, parentSpanId: n[2] }
              );
          })(e),
          r = t_(t);
        if (!n || !n.traceId) return { traceId: em(), spanId: ew() };
        let { traceId: i, parentSpanId: o, parentSampled: a } = n;
        return {
          traceId: i,
          parentSpanId: o,
          spanId: ew(),
          sampled: a,
          dsc: r || {},
        };
      }
      function tx(e = em(), t = ew(), n) {
        let r = "";
        return void 0 !== n && (r = n ? "-1" : "-0"), `${e}-${t}${r}`;
      }
      let tC = !1;
      function tT(e) {
        let { traceId: t, spanId: n } = e.spanContext();
        return tx(t, n, tA(e));
      }
      function tI(e) {
        return "number" == typeof e
          ? tM(e)
          : Array.isArray(e)
            ? e[0] + e[1] / 1e9
            : e instanceof Date
              ? tM(e.getTime())
              : eh();
      }
      function tM(e) {
        return e > 0x2540be3ff ? e / 1e3 : e;
      }
      function tR(e) {
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
              endTime: a,
              parentSpanId: s,
              status: l,
            } = e;
            return ed({
              span_id: n,
              trace_id: r,
              data: t,
              description: o,
              parent_span_id: s,
              start_timestamp: tI(i),
              timestamp: tI(a) || void 0,
              status: tO(l),
              op: t[tl],
              origin: t[tc],
              _metrics_summary: tw(e),
            });
          }
          return { span_id: n, trace_id: r };
        } catch (e) {
          return {};
        }
      }
      function tA(e) {
        let { traceFlags: t } = e.spanContext();
        return 1 === t;
      }
      function tO(e) {
        if (e && 0 !== e.code)
          return 1 === e.code ? "ok" : e.message || "unknown_error";
      }
      let tD = "_sentryChildSpans",
        tN = "_sentryRootSpan";
      function tL(e, t) {
        let n = e[tN] || e;
        eo(t, tN, n), e[tD] ? e[tD].add(t) : eo(e, tD, new Set([t]));
      }
      function tP(e) {
        let t = new Set();
        return (
          !(function e(n) {
            if (!t.has(n) && tA(n))
              for (let r of (t.add(n), n[tD] ? Array.from(n[tD]) : [])) e(r);
          })(e),
          Array.from(t)
        );
      }
      function t$(e) {
        return e[tN] || e;
      }
      function tF() {
        let e = eD(A());
        return e.getActiveSpan ? e.getActiveSpan() : eN()[ek];
      }
      function tU() {
        tC ||
          (Z(() => {
            console.warn(
              "[Sentry] Deprecation warning: Returning null from `beforeSendSpan` will be disallowed from SDK version 9.0.0 onwards. The callback will only support mutating spans. To drop certain spans, configure the respective integrations directly.",
            );
          }),
          (tC = !0));
      }
      function tj(e, t) {
        e.updateName(t), e.setAttributes({ [ta]: "custom", [th]: t });
      }
      let tB = "_frozenDsc";
      function tH(e, t) {
        let n = t.getOptions(),
          { publicKey: r } = t.getDsn() || {},
          i = ed({
            environment: n.environment || te,
            release: n.release,
            public_key: r,
            trace_id: e,
          });
        return t.emit("createDsc", i), i;
      }
      function tz(e, t) {
        let n = t.getPropagationContext();
        return n.dsc || tH(n.traceId, e);
      }
      function tW(e) {
        let t = eU();
        if (!t) return {};
        let n = t$(e),
          r = n[tB];
        if (r) return r;
        let i = n.spanContext().traceState,
          o = i && i.get("sentry.dsc"),
          a = o && t_(o);
        if (a) return a;
        let s = tH(e.spanContext().traceId, t),
          l = tR(n),
          c = l.data || {},
          u = c[ts];
        null != u && (s.sample_rate = `${u}`);
        let d = c[ta],
          p = l.description;
        return (
          "url" !== d && p && (s.transaction = p),
          tb() && (s.sampled = String(tA(n))),
          t.emit("createDsc", s, n),
          s
        );
      }
      function tq(e) {
        return ty(tW(e));
      }
      function tY(e, t) {
        let {
          extra: n,
          tags: r,
          user: i,
          contexts: o,
          level: a,
          sdkProcessingMetadata: s,
          breadcrumbs: l,
          fingerprint: c,
          eventProcessors: u,
          attachments: d,
          propagationContext: p,
          transactionName: h,
          span: f,
        } = t;
        tV(e, "extra", n),
          tV(e, "tags", r),
          tV(e, "user", i),
          tV(e, "contexts", o),
          (e.sdkProcessingMetadata = eE(e.sdkProcessingMetadata, s, 2)),
          a && (e.level = a),
          h && (e.transactionName = h),
          f && (e.span = f),
          l.length && (e.breadcrumbs = [...e.breadcrumbs, ...l]),
          c.length && (e.fingerprint = [...e.fingerprint, ...c]),
          u.length && (e.eventProcessors = [...e.eventProcessors, ...u]),
          d.length && (e.attachments = [...e.attachments, ...d]),
          (e.propagationContext = { ...e.propagationContext, ...p });
      }
      function tV(e, t, n) {
        e[t] = eE(e[t], n, 1);
      }
      function tG(e, t, n, r, i, o) {
        var a, s;
        let { normalizeDepth: l = 3, normalizeMaxBreadth: c = 1e3 } = e,
          u = {
            ...t,
            event_id: t.event_id || n.event_id || em(),
            timestamp: t.timestamp || ep(),
          },
          d = n.integrations || e.integrations.map((e) => e.name);
        (function (e, t) {
          let {
            environment: n,
            release: r,
            dist: i,
            maxValueLength: o = 250,
          } = t;
          (e.environment = e.environment || n || te),
            !e.release && r && (e.release = r),
            !e.dist && i && (e.dist = i),
            e.message && (e.message = ee(e.message, o));
          let a = e.exception && e.exception.values && e.exception.values[0];
          a && a.value && (a.value = ee(a.value, o));
          let s = e.request;
          s && s.url && (s.url = ee(s.url, o));
        })(u, e),
          (a = u),
          (s = d).length > 0 &&
            ((a.sdk = a.sdk || {}),
            (a.sdk.integrations = [...(a.sdk.integrations || []), ...s])),
          i && i.emit("applyFrameMetadata", t),
          void 0 === t.type &&
            (function (e, t) {
              let n = ti(t);
              try {
                e.exception.values.forEach((e) => {
                  e.stacktrace.frames.forEach((e) => {
                    n && e.filename && (e.debug_id = n[e.filename]);
                  });
                });
              } catch (e) {}
            })(u, e.stackParser);
        let p = (function (e, t) {
          if (!t) return e;
          let n = e ? e.clone() : new eT();
          return n.update(t), n;
        })(r, n.captureContext);
        n.mechanism && ev(u, n.mechanism);
        let h = i ? i.getEventProcessors() : [],
          f = eP().getScopeData();
        o && tY(f, o.getScopeData()), p && tY(f, p.getScopeData());
        let m = [...(n.attachments || []), ...f.attachments];
        return (
          m.length && (n.attachments = m),
          !(function (e, t) {
            var n, r, i, o, a, s, l, c;
            let u,
              d,
              {
                fingerprint: p,
                span: h,
                breadcrumbs: f,
                sdkProcessingMetadata: m,
              } = t;
            (function (e, t) {
              let {
                  extra: n,
                  tags: r,
                  user: i,
                  contexts: o,
                  level: a,
                  transactionName: s,
                } = t,
                l = ed(n);
              l && Object.keys(l).length && (e.extra = { ...l, ...e.extra });
              let c = ed(r);
              c && Object.keys(c).length && (e.tags = { ...c, ...e.tags });
              let u = ed(i);
              u && Object.keys(u).length && (e.user = { ...u, ...e.user });
              let d = ed(o);
              d &&
                Object.keys(d).length &&
                (e.contexts = { ...d, ...e.contexts }),
                a && (e.level = a),
                s && "transaction" !== e.type && (e.transaction = s);
            })(e, t),
              h &&
                (((n = e).contexts = {
                  trace: (function (e) {
                    let {
                      spanId: t,
                      traceId: n,
                      isRemote: r,
                    } = e.spanContext();
                    return ed({
                      parent_span_id: r ? t : tR(e).parent_span_id,
                      span_id: r ? ew() : t,
                      trace_id: n,
                    });
                  })((r = h)),
                  ...n.contexts,
                }),
                (n.sdkProcessingMetadata = {
                  dynamicSamplingContext: tW(r),
                  ...n.sdkProcessingMetadata,
                }),
                (u = tR(t$(r)).description) &&
                  !n.transaction &&
                  "transaction" === n.type &&
                  (n.transaction = u)),
              (i = e),
              (o = p),
              (i.fingerprint = i.fingerprint
                ? Array.isArray(i.fingerprint)
                  ? i.fingerprint
                  : [i.fingerprint]
                : []),
              o && (i.fingerprint = i.fingerprint.concat(o)),
              i.fingerprint && !i.fingerprint.length && delete i.fingerprint,
              (a = e),
              (s = f),
              (d = [...(a.breadcrumbs || []), ...s]),
              (a.breadcrumbs = d.length ? d : void 0),
              (l = e),
              (c = m),
              (l.sdkProcessingMetadata = { ...l.sdkProcessingMetadata, ...c });
          })(u, f),
          (function e(t, n, r, i = 0) {
            return new tr((o, a) => {
              let s = t[i];
              if (null === n || "function" != typeof s) o(n);
              else {
                let l = s({ ...n }, r);
                I &&
                  s.id &&
                  null === l &&
                  Q.log(`Event processor "${s.id}" dropped event`),
                  z(l)
                    ? l.then((n) => e(t, n, r, i + 1).then(o)).then(null, a)
                    : e(t, l, r, i + 1)
                        .then(o)
                        .then(null, a);
              }
            });
          })([...h, ...f.eventProcessors], u, n).then((e) =>
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
            "number" == typeof l && l > 0)
              ? (function (e, t, n) {
                  if (!e) return null;
                  let r = {
                    ...e,
                    ...(e.breadcrumbs && {
                      breadcrumbs: e.breadcrumbs.map((e) => ({
                        ...e,
                        ...(e.data && { data: to(e.data, t, n) }),
                      })),
                    }),
                    ...(e.user && { user: to(e.user, t, n) }),
                    ...(e.contexts && { contexts: to(e.contexts, t, n) }),
                    ...(e.extra && { extra: to(e.extra, t, n) }),
                  };
                  return (
                    e.contexts &&
                      e.contexts.trace &&
                      r.contexts &&
                      ((r.contexts.trace = e.contexts.trace),
                      e.contexts.trace.data &&
                        (r.contexts.trace.data = to(
                          e.contexts.trace.data,
                          t,
                          n,
                        ))),
                    e.spans &&
                      (r.spans = e.spans.map((e) => ({
                        ...e,
                        ...(e.data && { data: to(e.data, t, n) }),
                      }))),
                    e.contexts &&
                      e.contexts.flags &&
                      r.contexts &&
                      (r.contexts.flags = to(e.contexts.flags, 3, n)),
                    r
                  );
                })(e, l, c)
              : e,
          )
        );
      }
      let tX = [
        "user",
        "level",
        "extra",
        "contexts",
        "tags",
        "fingerprint",
        "requestSession",
        "propagationContext",
      ];
      function tJ(e, t) {
        return eN().captureException(
          e,
          (function (e) {
            if (e) {
              var t;
              return (t = e) instanceof eT ||
                "function" == typeof t ||
                Object.keys(e).some((e) => tX.includes(e))
                ? { captureContext: e }
                : e;
            }
          })(t),
        );
      }
      function tK(e, t) {
        let n = "string" == typeof t ? t : void 0,
          r = "string" != typeof t ? { captureContext: t } : void 0;
        return eN().captureMessage(e, n, r);
      }
      function tZ(e, t) {
        return eN().captureEvent(e, t);
      }
      function tQ(e, t) {
        eL().setContext(e, t);
      }
      function t0(e) {
        eL().setExtras(e);
      }
      function t1(e, t) {
        eL().setExtra(e, t);
      }
      function t2(e) {
        eL().setTags(e);
      }
      function t3(e, t) {
        eL().setTag(e, t);
      }
      function t5(e) {
        eL().setUser(e);
      }
      function t4() {
        return eL().lastEventId();
      }
      async function t6(e) {
        let t = eU();
        return t
          ? t.flush(e)
          : (I && Q.warn("Cannot flush events. No client defined."),
            Promise.resolve(!1));
      }
      async function t8(e) {
        let t = eU();
        return t
          ? t.close(e)
          : (I &&
              Q.warn("Cannot flush events and disable SDK. No client defined."),
            Promise.resolve(!1));
      }
      function t7() {
        return !!eU();
      }
      function t9(e) {
        eL().addEventProcessor(e);
      }
      function ne(e) {
        var t;
        let n,
          r,
          i = eU(),
          o = eL(),
          a = eN(),
          { release: s, environment: l = te } = (i && i.getOptions()) || {},
          { userAgent: c } = M.navigator || {},
          u =
            ((t = {
              release: s,
              environment: l,
              user: a.getUser() || o.getUser(),
              ...(c && { userAgent: c }),
              ...e,
            }),
            (n = eh()),
            (r = {
              sid: em(),
              init: !0,
              timestamp: n,
              started: n,
              duration: 0,
              status: "ok",
              errors: 0,
              ignoreDuration: !1,
              toJSON: () => {
                var e;
                return (
                  (e = r),
                  ed({
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
            }),
            t && eS(r, t),
            r),
          d = o.getSession();
        return (
          d && "ok" === d.status && eS(d, { status: "exited" }),
          nt(),
          o.setSession(u),
          a.setSession(u),
          u
        );
      }
      function nt() {
        let e,
          t = eL(),
          n = eN(),
          r = n.getSession() || t.getSession();
        r &&
          ((e = {}), "ok" === r.status && (e = { status: "exited" }), eS(r, e)),
          nn(),
          t.setSession(),
          n.setSession();
      }
      function nn() {
        let e = eL(),
          t = eN(),
          n = eU(),
          r = t.getSession() || e.getSession();
        r && n && n.captureSession(r);
      }
      function nr(e = !1) {
        e ? nt() : nn();
      }
      let ni =
        /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
      function no(e, t = !1) {
        let {
          host: n,
          path: r,
          pass: i,
          port: o,
          projectId: a,
          protocol: s,
          publicKey: l,
        } = e;
        return `${s}://${l}${t && i ? `:${i}` : ""}@${n}${o ? `:${o}` : ""}/${r ? `${r}/` : r}${a}`;
      }
      function na(e) {
        let t = ni.exec(e);
        if (!t)
          return void Z(() => {
            console.error(`Invalid Sentry Dsn: ${e}`);
          });
        let [n, r, i = "", o = "", a = "", s = ""] = t.slice(1),
          l = "",
          c = s,
          u = c.split("/");
        if (
          (u.length > 1 && ((l = u.slice(0, -1).join("/")), (c = u.pop())), c)
        ) {
          let e = c.match(/^\d+/);
          e && (c = e[0]);
        }
        return ns({
          host: o,
          pass: i,
          path: l,
          projectId: c,
          port: a,
          protocol: n,
          publicKey: r,
        });
      }
      function ns(e) {
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
      function nl(e) {
        let t = "string" == typeof e ? na(e) : ns(e);
        if (
          t &&
          (function (e) {
            if (!X) return !0;
            let { port: t, projectId: n, protocol: r } = e;
            return (
              !["protocol", "publicKey", "host", "projectId"].find(
                (t) =>
                  !e[t] && (Q.error(`Invalid Sentry Dsn: ${t} missing`), !0),
              ) &&
              (n.match(/^\d+$/)
                ? "http" !== r && "https" !== r
                  ? (Q.error(`Invalid Sentry Dsn: Invalid protocol ${r}`), !1)
                  : !(t && isNaN(parseInt(t, 10))) ||
                    (Q.error(`Invalid Sentry Dsn: Invalid port ${t}`), !1)
                : (Q.error(`Invalid Sentry Dsn: Invalid projectId ${n}`), !1))
            );
          })(t)
        )
          return t;
      }
      function nc(e) {
        let t = e.protocol ? `${e.protocol}:` : "",
          n = e.port ? `:${e.port}` : "";
        return `${t}//${e.host}${n}${e.path ? `/${e.path}` : ""}/api/`;
      }
      function nu(e, t, n) {
        let r;
        return (
          t ||
          `${nc(e)}${e.projectId}/envelope/?${((r = { sentry_version: "7" }), e.publicKey && (r.sentry_key = e.publicKey), n && (r.sentry_client = `${n.name}/${n.version}`), new URLSearchParams(r).toString())}`
        );
      }
      function nd(e, t = []) {
        return [e, t];
      }
      function np(e, t) {
        for (let n of e[1]) {
          let e = n[0].type;
          if (t(n, e)) return !0;
        }
        return !1;
      }
      function nh(e, t) {
        return np(e, (e, n) => t.includes(n));
      }
      function nf(e) {
        return M.__SENTRY__ && M.__SENTRY__.encodePolyfill
          ? M.__SENTRY__.encodePolyfill(e)
          : new TextEncoder().encode(e);
      }
      function nm(e) {
        let [t, n] = e,
          r = JSON.stringify(t);
        function i(e) {
          "string" == typeof r
            ? (r = "string" == typeof e ? r + e : [nf(r), e])
            : r.push("string" == typeof e ? nf(e) : e);
        }
        for (let e of n) {
          let [t, n] = e;
          if (
            (i(`
${JSON.stringify(t)}
`),
            "string" == typeof n || n instanceof Uint8Array)
          )
            i(n);
          else {
            let e;
            try {
              e = JSON.stringify(n);
            } catch (t) {
              e = JSON.stringify(to(n));
            }
            i(e);
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
      let ng = {
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
      function n_(e) {
        if (!e || !e.sdk) return;
        let { name: t, version: n } = e.sdk;
        return { name: t, version: n };
      }
      function ny(e, t, n, r) {
        let i =
          e.sdkProcessingMetadata &&
          e.sdkProcessingMetadata.dynamicSamplingContext;
        return {
          event_id: e.event_id,
          sent_at: new Date().toISOString(),
          ...(t && { sdk: t }),
          ...(!!n && r && { dsn: no(r) }),
          ...(i && { trace: ed({ ...i }) }),
        };
      }
      class nv extends Error {
        constructor(e, t = "warn") {
          super(e), (this.message = e), (this.logLevel = t);
        }
      }
      function nb(e) {
        if ("boolean" == typeof e) return Number(e);
        let t = "string" == typeof e ? parseFloat(e) : e;
        if ("number" != typeof t || isNaN(t) || t < 0 || t > 1) {
          I &&
            Q.warn(
              `[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(e)} of type ${JSON.stringify(typeof e)}.`,
            );
          return;
        }
        return t;
      }
      let nS = "Not capturing exception because it's already been captured.";
      class nw {
        constructor(e) {
          if (
            ((this._options = e),
            (this._integrations = {}),
            (this._numProcessing = 0),
            (this._outcomes = {}),
            (this._hooks = {}),
            (this._eventProcessors = []),
            e.dsn
              ? (this._dsn = nl(e.dsn))
              : I && Q.warn("No DSN provided, client will not send events."),
            this._dsn)
          ) {
            const t = nu(
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
          const t = ["enableTracing", "tracesSampleRate", "tracesSampler"].find(
            (t) => t in e && void 0 == e[t],
          );
          t &&
            Z(() => {
              console.warn(
                `[Sentry] Deprecation warning: \`${t}\` is set to undefined, which leads to tracing being enabled. In v9, a value of \`undefined\` will result in tracing being disabled.`,
              );
            });
        }
        captureException(e, t, n) {
          let r = em();
          if (eb(e)) return I && Q.log(nS), r;
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
          let i = { event_id: em(), ...n },
            o = U(e) ? e : String(e),
            a = j(e)
              ? this.eventFromMessage(o, t, i)
              : this.eventFromException(e, i);
          return (
            this._process(a.then((e) => this._captureEvent(e, i, r))),
            i.event_id
          );
        }
        captureEvent(e, t, n) {
          let r = em();
          if (t && t.originalException && eb(t.originalException))
            return I && Q.log(nS), r;
          let i = { event_id: r, ...t },
            o = (e.sdkProcessingMetadata || {}).capturedSpanScope;
          return this._process(this._captureEvent(e, i, o || n)), i.event_id;
        }
        captureSession(e) {
          "string" != typeof e.release
            ? I &&
              Q.warn(
                "Discarded session because of missing or non-string release",
              )
            : (this.sendSession(e), eS(e, { init: !1 }));
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
            : tt(!0);
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
          eH(this, e, this._integrations), t || eB(this, [e]);
        }
        sendEvent(e, t = {}) {
          var n, r, i, o;
          let a, s, l;
          this.emit("beforeSendEvent", e, t);
          let c =
            ((n = this._dsn),
            (r = this._options._metadata),
            (i = this._options.tunnel),
            (a = n_(r)),
            (s = e.type && "replay_event" !== e.type ? e.type : "event"),
            (o = r && r.sdk) &&
              ((e.sdk = e.sdk || {}),
              (e.sdk.name = e.sdk.name || o.name),
              (e.sdk.version = e.sdk.version || o.version),
              (e.sdk.integrations = [
                ...(e.sdk.integrations || []),
                ...(o.integrations || []),
              ]),
              (e.sdk.packages = [
                ...(e.sdk.packages || []),
                ...(o.packages || []),
              ])),
            (l = ny(e, a, i, n)),
            delete e.sdkProcessingMetadata,
            nd(l, [[{ type: s }, e]]));
          for (let e of t.attachments || [])
            c = (function (e, t) {
              let [n, r] = e;
              return [n, [...r, t]];
            })(
              c,
              (function (e) {
                let t = "string" == typeof e.data ? nf(e.data) : e.data;
                return [
                  ed({
                    type: "attachment",
                    length: t.length,
                    filename: e.filename,
                    content_type: e.contentType,
                    attachment_type: e.attachmentType,
                  }),
                  t,
                ];
              })(e),
            );
          let u = this.sendEnvelope(c);
          u && u.then((t) => this.emit("afterSendEvent", e, t), null);
        }
        sendSession(e) {
          var t, n, r;
          let i,
            o =
              ((t = this._dsn),
              (n = this._options._metadata),
              (r = this._options.tunnel),
              (i = n_(n)),
              nd(
                {
                  sent_at: new Date().toISOString(),
                  ...(i && { sdk: i }),
                  ...(!!r && t && { dsn: no(t) }),
                },
                [
                  "aggregates" in e
                    ? [{ type: "sessions" }, e]
                    : [{ type: "session" }, e.toJSON()],
                ],
              ));
          this.sendEnvelope(o);
        }
        recordDroppedEvent(e, t, n) {
          if (this._options.sendClientReports) {
            let r = "number" == typeof n ? n : 1,
              i = `${e}:${t}`;
            I &&
              Q.log(`Recording outcome: "${i}"${r > 1 ? ` (${r} times)` : ""}`),
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
                  (e) => (I && Q.error("Error while sending envelope:", e), e),
                )
            : (I && Q.error("Transport disabled"), tt({}));
        }
        _setupIntegrations() {
          var e;
          let t,
            { integrations: n } = this._options;
          (this._integrations =
            ((e = this),
            (t = {}),
            n.forEach((n) => {
              n && eH(e, n, t);
            }),
            t)),
            eB(this, n);
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
            (eS(e, {
              ...(n && { status: "crashed" }),
              errors: e.errors || Number(r || n),
            }),
            this.captureSession(e));
        }
        _isClientDoneProcessing(e) {
          return new tr((t) => {
            let n = 0,
              r = setInterval(() => {
                0 == this._numProcessing
                  ? (clearInterval(r), t(!0))
                  : ((n += 1), e && n >= e && (clearInterval(r), t(!1)));
              }, 1);
          });
        }
        _isEnabled() {
          return !1 !== this.getOptions().enabled && void 0 !== this._transport;
        }
        _prepareEvent(e, t, n = eN(), r = eL()) {
          let i = this.getOptions(),
            o = Object.keys(this._integrations);
          return (
            !t.integrations && o.length > 0 && (t.integrations = o),
            this.emit("preprocessEvent", e, t),
            e.type || r.setLastEventId(e.event_id || t.event_id),
            tG(i, e, t, n, this, r).then(
              (e) => (
                null === e ||
                  ((e.contexts = {
                    trace: (function (e) {
                      let {
                        traceId: t,
                        spanId: n,
                        parentSpanId: r,
                      } = e.getPropagationContext();
                      return ed({ trace_id: t, span_id: n, parent_span_id: r });
                    })(n),
                    ...e.contexts,
                  }),
                  (e.sdkProcessingMetadata = {
                    dynamicSamplingContext: tz(this, n),
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
              I &&
                (e instanceof nv && "log" === e.logLevel
                  ? Q.log(e.message)
                  : Q.warn(e));
            },
          );
        }
        _processEvent(e, t, n) {
          let r = this.getOptions(),
            { sampleRate: i } = r,
            o = nk(e),
            a = nE(e),
            s = e.type || "error",
            l = `before send for type \`${s}\``,
            c = void 0 === i ? void 0 : nb(i);
          if (a && "number" == typeof c && Math.random() > c)
            return (
              this.recordDroppedEvent("sample_rate", "error", e),
              tn(
                new nv(
                  `Discarding event because it's not included in the random sample (sampling rate = ${i})`,
                  "log",
                ),
              )
            );
          let u = "replay_event" === s ? "replay" : s,
            d = (e.sdkProcessingMetadata || {}).capturedSpanIsolationScope;
          return this._prepareEvent(e, t, n, d)
            .then((n) => {
              if (null === n)
                throw (
                  (this.recordDroppedEvent("event_processor", u, e),
                  new nv(
                    "An event processor returned `null`, will not send event.",
                    "log",
                  ))
                );
              return t.data && !0 === t.data.__sentry__
                ? n
                : (function (e, t) {
                    let n = `${t} must return \`null\` or a valid event.`;
                    if (z(e))
                      return e.then(
                        (e) => {
                          if (!B(e) && null !== e) throw new nv(n);
                          return e;
                        },
                        (e) => {
                          throw new nv(`${t} rejected with ${e}`);
                        },
                      );
                    if (!B(e) && null !== e) throw new nv(n);
                    return e;
                  })(
                    (function (e, t, n, r) {
                      let {
                        beforeSend: i,
                        beforeSendTransaction: o,
                        beforeSendSpan: a,
                      } = t;
                      if (nE(n) && i) return i(n, r);
                      if (nk(n)) {
                        if (n.spans && a) {
                          let t = [];
                          for (let r of n.spans) {
                            let n = a(r);
                            n
                              ? t.push(n)
                              : (tU(),
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
                throw new nv(
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
              let a = r.transaction_info;
              return (
                o &&
                  a &&
                  r.transaction !== e.transaction &&
                  (r.transaction_info = { ...a, source: "custom" }),
                this.sendEvent(r, t),
                r
              );
            })
            .then(null, (e) => {
              if (e instanceof nv) throw e;
              throw (
                (this.captureException(e, {
                  data: { __sentry__: !0 },
                  originalException: e,
                }),
                new nv(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
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
          var e;
          I && Q.log("Flushing outcomes...");
          let t = this._clearOutcomes();
          if (0 === t.length) {
            I && Q.log("No outcomes to send");
            return;
          }
          if (!this._dsn) {
            I && Q.log("No dsn provided, will not send outcomes");
            return;
          }
          I && Q.log("Sending outcomes:", t);
          let n = nd(
            (e = this._options.tunnel && no(this._dsn)) ? { dsn: e } : {},
            [
              [
                { type: "client_report" },
                { timestamp: ep(), discarded_events: t },
              ],
            ],
          );
          this.sendEnvelope(n);
        }
      }
      function nE(e) {
        return void 0 === e.type;
      }
      function nk(e) {
        return "transaction" === e.type;
      }
      let nx = "u" < typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
      function nC(e, t) {
        var n, r;
        let i,
          o,
          a = nI(e, t),
          s = {
            type:
              !(i = (n = t) && n.name) && nR(n)
                ? n.message && Array.isArray(n.message) && 2 == n.message.length
                  ? n.message[0]
                  : "WebAssembly.Exception"
                : i,
            value: (o = (r = t) && r.message)
              ? o.error && "string" == typeof o.error.message
                ? o.error.message
                : nR(r) && Array.isArray(r.message) && 2 == r.message.length
                  ? r.message[1]
                  : o
              : "No error message",
          };
        return (
          a.length && (s.stacktrace = { frames: a }),
          void 0 === s.type &&
            "" === s.value &&
            (s.value = "Unrecoverable error caught"),
          s
        );
      }
      function nT(e, t) {
        return { exception: { values: [nC(e, t)] } };
      }
      function nI(e, t) {
        var n, r;
        let i = t.stacktrace || t.stack || "",
          o = (n = t) && nM.test(n.message) ? 1 : 0,
          a = "number" == typeof (r = t).framesToPop ? r.framesToPop : 0;
        try {
          return e(i, o, a);
        } catch (e) {}
        return [];
      }
      let nM = /Minified React error #\d+;/i;
      function nR(e) {
        return (
          "u" > typeof WebAssembly &&
          void 0 !== WebAssembly.Exception &&
          e instanceof WebAssembly.Exception
        );
      }
      function nA(e, t, n, r) {
        let i = nD(e, t, (n && n.syntheticException) || void 0, r);
        return (
          ev(i),
          (i.level = "error"),
          n && n.event_id && (i.event_id = n.event_id),
          tt(i)
        );
      }
      function nO(e, t, n = "info", r, i) {
        let o = nN(e, t, (r && r.syntheticException) || void 0, i);
        return (
          (o.level = n), r && r.event_id && (o.event_id = r.event_id), tt(o)
        );
      }
      function nD(e, t, n, r, i) {
        let o;
        if (P(t) && t.error) return nT(e, t.error);
        if ($(t) || L(t, "DOMException")) {
          if ("stack" in t) o = nT(e, t);
          else {
            let i = t.name || ($(t) ? "DOMError" : "DOMException"),
              a = t.message ? `${i}: ${t.message}` : i;
            ey((o = nN(e, a, n, r)), a);
          }
          return (
            "code" in t &&
              (o.tags = { ...o.tags, "DOMException.code": `${t.code}` }),
            o
          );
        }
        return N(t)
          ? nT(e, t)
          : (B(t) || H(t)
              ? ev(
                  (o = (function (e, t, n, r) {
                    let i = eU(),
                      o = i && i.getOptions().normalizeDepth,
                      a = (function (e) {
                        for (let t in e)
                          if (Object.prototype.hasOwnProperty.call(e, t)) {
                            let n = e[t];
                            if (n instanceof Error) return n;
                          }
                      })(t),
                      s = {
                        __serialized__: (function e(t, n = 3, r = 102400) {
                          let i = to(t, n);
                          return ~-encodeURI(JSON.stringify(i)).split(/%..|./)
                            .length > r
                            ? e(t, n - 1, r)
                            : i;
                        })(t, o),
                      };
                    if (a)
                      return { exception: { values: [nC(e, a)] }, extra: s };
                    let l = {
                      exception: {
                        values: [
                          {
                            type: H(t)
                              ? t.constructor.name
                              : r
                                ? "UnhandledRejection"
                                : "Error",
                            value: (function (e, { isUnhandledRejection: t }) {
                              let n = (function (e, t = 40) {
                                  let n = Object.keys(el(e));
                                  n.sort();
                                  let r = n[0];
                                  if (!r) return "[object has no keys]";
                                  if (r.length >= t) return ee(r, t);
                                  for (let e = n.length; e > 0; e--) {
                                    let r = n.slice(0, e).join(", ");
                                    if (!(r.length > t)) {
                                      if (e === n.length) return r;
                                      return ee(r, t);
                                    }
                                  }
                                  return "";
                                })(e),
                                r = t ? "promise rejection" : "exception";
                              if (P(e))
                                return `Event \`ErrorEvent\` captured as ${r} with message \`${e.message}\``;
                              if (H(e)) {
                                let t = (function (e) {
                                  try {
                                    let t = Object.getPrototypeOf(e);
                                    return t ? t.constructor.name : void 0;
                                  } catch (e) {}
                                })(e);
                                return `Event \`${t}\` (type=${e.type}) captured as ${r}`;
                              }
                              return `Object captured as ${r} with keys: ${n}`;
                            })(t, { isUnhandledRejection: r }),
                          },
                        ],
                      },
                      extra: s,
                    };
                    if (n) {
                      let t = nI(e, n);
                      t.length &&
                        (l.exception.values[0].stacktrace = { frames: t });
                    }
                    return l;
                  })(e, t, n, i)),
                  { synthetic: !0 },
                )
              : (ey((o = nN(e, t, n, r)), `${t}`, void 0),
                ev(o, { synthetic: !0 })),
            o);
      }
      function nN(e, t, n, r) {
        let i = {};
        if (r && n) {
          let r = nI(e, n);
          r.length &&
            (i.exception = {
              values: [{ value: t, stacktrace: { frames: r } }],
            }),
            ev(i, { synthetic: !0 });
        }
        if (U(t)) {
          let { __sentry_template_string__: e, __sentry_template_values__: n } =
            t;
          return (i.logentry = { message: e, params: n }), i;
        }
        return (i.message = t), i;
      }
      let nL = M,
        nP = 0;
      function n$(e, t = {}) {
        if ("function" != typeof e) return e;
        try {
          let t = e.__sentry_wrapped__;
          if (t)
            if ("function" == typeof t) return t;
            else return e;
          if (es(e)) return e;
        } catch (t) {
          return e;
        }
        let n = function (...n) {
          try {
            let r = n.map((e) => n$(e, t));
            return e.apply(this, r);
          } catch (e) {
            throw (
              (nP++,
              setTimeout(() => {
                nP--;
              }),
              e$((r) => {
                r.addEventProcessor(
                  (e) => (
                    t.mechanism && (ey(e, void 0, void 0), ev(e, t.mechanism)),
                    (e.extra = { ...e.extra, arguments: n }),
                    e
                  ),
                ),
                  tJ(e);
              }),
              e)
            );
          }
        };
        try {
          for (let t in e)
            Object.prototype.hasOwnProperty.call(e, t) && (n[t] = e[t]);
        } catch (e) {}
        ea(n, e), eo(e, "__sentry_wrapped__", n);
        try {
          Object.getOwnPropertyDescriptor(n, "name").configurable &&
            Object.defineProperty(n, "name", { get: () => e.name });
        } catch (e) {}
        return n;
      }
      function nF(e, { metadata: t, tunnel: n, dsn: r }) {
        return nd(
          {
            event_id: e.event_id,
            sent_at: new Date().toISOString(),
            ...(t &&
              t.sdk && { sdk: { name: t.sdk.name, version: t.sdk.version } }),
            ...(!!n && !!r && { dsn: no(r) }),
          },
          [[{ type: "user_report" }, e]],
        );
      }
      class nU extends nw {
        constructor(e) {
          const t = { parentSpanIsAlwaysRootSpan: !0, ...e };
          !(function (e, t, n = [t], r = "npm") {
            let i = e._metadata || {};
            i.sdk ||
              (i.sdk = {
                name: `sentry.javascript.${t}`,
                packages: n.map((e) => ({
                  name: `${r}:@sentry/${e}`,
                  version: "8.55.0",
                })),
                version: "8.55.0",
              }),
              (e._metadata = i);
          })(t, "browser", ["browser"], nL.SENTRY_SDK_SOURCE || "npm"),
            super(t),
            t.sendClientReports &&
              nL.document &&
              nL.document.addEventListener("visibilitychange", () => {
                "hidden" === nL.document.visibilityState &&
                  this._flushOutcomes();
              });
        }
        eventFromException(e, t) {
          return nA(
            this._options.stackParser,
            e,
            t,
            this._options.attachStacktrace,
          );
        }
        eventFromMessage(e, t = "info", n) {
          return nO(
            this._options.stackParser,
            e,
            t,
            n,
            this._options.attachStacktrace,
          );
        }
        captureUserFeedback(e) {
          if (!this._isEnabled()) {
            nx && Q.warn("SDK not enabled, will not capture user feedback.");
            return;
          }
          let t = nF(e, {
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
      let nj = {},
        nB = {};
      function nH(e, t) {
        (nj[e] = nj[e] || []), nj[e].push(t);
      }
      function nz(e, t) {
        if (!nB[e]) {
          nB[e] = !0;
          try {
            t();
          } catch (t) {
            X && Q.error(`Error while instrumenting ${e}`, t);
          }
        }
      }
      function nW(e, t) {
        let n = e && nj[e];
        if (n)
          for (let r of n)
            try {
              r(t);
            } catch (t) {
              X &&
                Q.error(
                  `Error while triggering instrumentation handler.
Type: ${e}
Name: ${e0(r)}
Error:`,
                  t,
                );
            }
      }
      function nq(e) {
        nH("dom", e), nz("dom", nY);
      }
      function nY() {
        if (!M.document) return;
        let e = nW.bind(null, "dom"),
          t = nV(e, !0);
        M.document.addEventListener("click", t, !1),
          M.document.addEventListener("keypress", t, !1),
          ["EventTarget", "Node"].forEach((t) => {
            let n = M[t],
              r = n && n.prototype;
            r &&
              r.hasOwnProperty &&
              r.hasOwnProperty("addEventListener") &&
              (ei(r, "addEventListener", function (t) {
                return function (n, r, i) {
                  if ("click" === n || "keypress" == n)
                    try {
                      let r = (this.__sentry_instrumentation_handlers__ =
                          this.__sentry_instrumentation_handlers__ || {}),
                        o = (r[n] = r[n] || { refCount: 0 });
                      if (!o.handler) {
                        let r = nV(e);
                        (o.handler = r), t.call(this, n, r, i);
                      }
                      o.refCount++;
                    } catch (e) {}
                  return t.call(this, n, r, i);
                };
              }),
              ei(r, "removeEventListener", function (e) {
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
      function nV(e, t = !1) {
        return (n) => {
          var r;
          if (!n || n._sentryCaptured) return;
          let i = (function (e) {
            try {
              return e.target;
            } catch (e) {
              return null;
            }
          })(n);
          if (
            ((r = n.type),
            "keypress" === r &&
              (!i ||
                !i.tagName ||
                ("INPUT" !== i.tagName &&
                  "TEXTAREA" !== i.tagName &&
                  !i.isContentEditable &&
                  1)))
          )
            return;
          eo(n, "_sentryCaptured", !0),
            i && !i._sentryId && eo(i, "_sentryId", em());
          let l = "keypress" === n.type ? "input" : n.type;
          !(function (e) {
            if (e.type !== a) return !1;
            try {
              if (!e.target || e.target._sentryId !== s) return !1;
            } catch (e) {}
            return !0;
          })(n) &&
            (e({ event: n, name: l, global: t }),
            (a = n.type),
            (s = i ? i._sentryId : void 0)),
            clearTimeout(o),
            (o = M.setTimeout(() => {
              (s = void 0), (a = void 0);
            }, 1e3));
        };
      }
      let nG = "__sentry_xhr_v3__";
      function nX(e) {
        nH("xhr", e), nz("xhr", nJ);
      }
      function nJ() {
        if (!M.XMLHttpRequest) return;
        let e = XMLHttpRequest.prototype;
        (e.open = new Proxy(e.open, {
          apply(e, t, n) {
            let r = Error(),
              i = 1e3 * eh(),
              o = F(n[0]) ? n[0].toUpperCase() : void 0,
              a = (function (e) {
                if (F(e)) return e;
                try {
                  return e.toString();
                } catch (e) {}
              })(n[1]);
            if (!o || !a) return e.apply(t, n);
            (t[nG] = { method: o, url: a, request_headers: {} }),
              "POST" === o &&
                a.match(/sentry_key/) &&
                (t.__sentry_own_request__ = !0);
            let s = () => {
              let e = t[nG];
              if (e && 4 === t.readyState) {
                try {
                  e.status_code = t.status;
                } catch (e) {}
                nW("xhr", {
                  endTimestamp: 1e3 * eh(),
                  startTimestamp: i,
                  xhr: t,
                  virtualError: r,
                });
              }
            };
            return (
              "onreadystatechange" in t &&
              "function" == typeof t.onreadystatechange
                ? (t.onreadystatechange = new Proxy(t.onreadystatechange, {
                    apply: (e, t, n) => (s(), e.apply(t, n)),
                  }))
                : t.addEventListener("readystatechange", s),
              (t.setRequestHeader = new Proxy(t.setRequestHeader, {
                apply(e, t, n) {
                  let [r, i] = n,
                    o = t[nG];
                  return (
                    o &&
                      F(r) &&
                      F(i) &&
                      (o.request_headers[r.toLowerCase()] = i),
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
              let r = t[nG];
              return (
                r &&
                  (void 0 !== n[0] && (r.body = n[0]),
                  nW("xhr", { startTimestamp: 1e3 * eh(), xhr: t })),
                e.apply(t, n)
              );
            },
          }));
      }
      function nK(e) {
        let t = "history";
        nH(t, e), nz(t, nZ);
      }
      function nZ() {
        let e, t, n;
        if (
          ((t = (e = M.chrome) && e.app && e.app.runtime),
          (n =
            "history" in M &&
            !!M.history.pushState &&
            !!M.history.replaceState),
          t || !n)
        )
          return;
        let r = M.onpopstate;
        function i(e) {
          return function (...t) {
            let n = t.length > 2 ? t[2] : void 0;
            if (n) {
              let e = l,
                t = String(n);
              (l = t), nW("history", { from: e, to: t });
            }
            return e.apply(this, t);
          };
        }
        (M.onpopstate = function (...e) {
          let t = M.location.href,
            n = l;
          if (((l = t), nW("history", { from: n, to: t }), r))
            try {
              return r.apply(this, e);
            } catch (e) {}
        }),
          ei(M.history, "pushState", i),
          ei(M.history, "replaceState", i);
      }
      function nQ(e) {
        let t = "console";
        nH(t, e), nz(t, n0);
      }
      function n0() {
        "console" in M &&
          J.forEach(function (e) {
            e in M.console &&
              ei(M.console, e, function (t) {
                return (
                  (K[e] = t),
                  function (...t) {
                    nW("console", { args: t, level: e });
                    let n = K[e];
                    n && n.apply(M.console, t);
                  }
                );
              });
          });
      }
      function n1(e, t) {
        let n = "fetch";
        nH(n, e), nz(n, () => n2(void 0, t));
      }
      function n2(e, t = !1) {
        (!t || e7()) &&
          ei(M, "fetch", function (t) {
            return function (...n) {
              let r = Error(),
                { method: i, url: o } = (function (e) {
                  if (0 === e.length) return { method: "GET", url: "" };
                  if (2 === e.length) {
                    let [t, n] = e;
                    return {
                      url: n6(t),
                      method: n4(n, "method")
                        ? String(n.method).toUpperCase()
                        : "GET",
                    };
                  }
                  let t = e[0];
                  return {
                    url: n6(t),
                    method: n4(t, "method")
                      ? String(t.method).toUpperCase()
                      : "GET",
                  };
                })(n),
                a = {
                  args: n,
                  fetchData: { method: i, url: o },
                  startTimestamp: 1e3 * eh(),
                  virtualError: r,
                };
              return (
                e || nW("fetch", { ...a }),
                t.apply(M, n).then(
                  async (t) => (
                    e
                      ? e(t)
                      : nW("fetch", {
                          ...a,
                          endTimestamp: 1e3 * eh(),
                          response: t,
                        }),
                    t
                  ),
                  (e) => {
                    throw (
                      (nW("fetch", {
                        ...a,
                        endTimestamp: 1e3 * eh(),
                        error: e,
                      }),
                      N(e) &&
                        void 0 === e.stack &&
                        ((e.stack = r.stack), eo(e, "framesToPop", 1)),
                      e)
                    );
                  },
                )
              );
            };
          });
      }
      async function n3(e, t) {
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
      function n5(e) {
        let t;
        try {
          t = e.clone();
        } catch (e) {
          return;
        }
        n3(t, () => {
          nW("fetch-body-resolved", { endTimestamp: 1e3 * eh(), response: e });
        });
      }
      function n4(e, t) {
        return !!e && "object" == typeof e && !!e[t];
      }
      function n6(e) {
        return "string" == typeof e
          ? e
          : e
            ? n4(e, "url")
              ? e.url
              : e.toString
                ? e.toString()
                : ""
            : "";
      }
      function n8(e, t) {
        let n = eU(),
          r = eL();
        if (!n) return;
        let { beforeBreadcrumb: i = null, maxBreadcrumbs: o = 100 } =
          n.getOptions();
        if (o <= 0) return;
        let a = { timestamp: ep(), ...e },
          s = i ? Z(() => i(a, t)) : a;
        null !== s &&
          (n.emit && n.emit("beforeAddBreadcrumb", s, t),
          r.addBreadcrumb(s, o));
      }
      function n7(e) {
        return "warn" === e
          ? "warning"
          : ["fatal", "error", "warning", "log", "info", "debug"].includes(e)
            ? e
            : "log";
      }
      function n9(e) {
        if (void 0 !== e)
          return e >= 400 && e < 500 ? "warning" : e >= 500 ? "error" : void 0;
      }
      function re(e) {
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
      let rt = (e = {}) => {
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
              var n, r, i, o, a, s, l;
              t.console &&
                nQ(
                  ((n = e),
                  function (e) {
                    if (eU() !== n) return;
                    let t = {
                      category: "console",
                      data: { arguments: e.args, logger: "console" },
                      level: n7(e.level),
                      message: en(e.args, " "),
                    };
                    if ("assert" === e.level)
                      if (!1 !== e.args[0]) return;
                      else
                        (t.message = `Assertion failed: ${en(e.args.slice(1), " ") || "console.assert"}`),
                          (t.data.arguments = e.args.slice(1));
                    n8(t, { input: e.args, level: e.level });
                  }),
                ),
                t.dom &&
                  nq(
                    ((r = e),
                    (i = t.dom),
                    function (e) {
                      let t, n;
                      if (eU() !== r) return;
                      let o =
                          "object" == typeof i ? i.serializeAttribute : void 0,
                        a =
                          "object" == typeof i &&
                          "number" == typeof i.maxStringLength
                            ? i.maxStringLength
                            : void 0;
                      a &&
                        a > 1024 &&
                        (nx &&
                          Q.warn(
                            `\`dom.maxStringLength\` cannot exceed 1024, but a value of ${a} was configured. Sentry will use 1024 instead.`,
                          ),
                        (a = 1024)),
                        "string" == typeof o && (o = [o]);
                      try {
                        var s;
                        let r = e.event,
                          i = (s = r) && s.target ? r.target : r;
                        (t = Y(i, { keyAttrs: o, maxStringLength: a })),
                          (n = G(i));
                      } catch (e) {
                        t = "<unknown>";
                      }
                      if (0 === t.length) return;
                      let l = { category: `ui.${e.name}`, message: t };
                      n && (l.data = { "ui.component_name": n }),
                        n8(l, {
                          event: e.event,
                          name: e.name,
                          global: e.global,
                        });
                    }),
                  ),
                t.xhr &&
                  nX(
                    ((o = e),
                    function (e) {
                      if (eU() !== o) return;
                      let { startTimestamp: t, endTimestamp: n } = e,
                        r = e.xhr[nG];
                      if (!t || !n || !r) return;
                      let { method: i, url: a, status_code: s, body: l } = r,
                        c = {
                          xhr: e.xhr,
                          input: l,
                          startTimestamp: t,
                          endTimestamp: n,
                        };
                      n8(
                        {
                          category: "xhr",
                          data: { method: i, url: a, status_code: s },
                          type: "http",
                          level: n9(s),
                        },
                        c,
                      );
                    }),
                  ),
                t.fetch &&
                  n1(
                    ((a = e),
                    function (e) {
                      if (eU() !== a) return;
                      let { startTimestamp: t, endTimestamp: n } = e;
                      if (
                        n &&
                        (!e.fetchData.url.match(/sentry_key/) ||
                          "POST" !== e.fetchData.method)
                      )
                        if (e.error)
                          n8(
                            {
                              category: "fetch",
                              data: e.fetchData,
                              level: "error",
                              type: "http",
                            },
                            {
                              data: e.error,
                              input: e.args,
                              startTimestamp: t,
                              endTimestamp: n,
                            },
                          );
                        else {
                          let r = e.response,
                            i = { ...e.fetchData, status_code: r && r.status },
                            o = {
                              input: e.args,
                              response: r,
                              startTimestamp: t,
                              endTimestamp: n,
                            },
                            a = n9(i.status_code);
                          n8(
                            {
                              category: "fetch",
                              data: i,
                              type: "http",
                              level: a,
                            },
                            o,
                          );
                        }
                    }),
                  ),
                t.history &&
                  nK(
                    ((s = e),
                    function (e) {
                      if (eU() !== s) return;
                      let t = e.from,
                        n = e.to,
                        r = re(nL.location.href),
                        i = t ? re(t) : void 0,
                        o = re(n);
                      (i && i.path) || (i = r),
                        r.protocol === o.protocol &&
                          r.host === o.host &&
                          (n = o.relative),
                        r.protocol === i.protocol &&
                          r.host === i.host &&
                          (t = i.relative),
                        n8({
                          category: "navigation",
                          data: { from: t, to: n },
                        });
                    }),
                  ),
                t.sentry &&
                  e.on(
                    "beforeSendEvent",
                    ((l = e),
                    function (e) {
                      eU() === l &&
                        n8(
                          {
                            category: `sentry.${"transaction" === e.type ? "transaction" : "event"}`,
                            event_id: e.event_id,
                            level: e.level,
                            message: e_(e),
                          },
                          { event: e },
                        );
                    }),
                  );
            },
          };
        },
        rn = [
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
        rr = (e = {}) => {
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
              t.setTimeout && ei(nL, "setTimeout", ri),
                t.setInterval && ei(nL, "setInterval", ri),
                t.requestAnimationFrame && ei(nL, "requestAnimationFrame", ro),
                t.XMLHttpRequest &&
                  "XMLHttpRequest" in nL &&
                  ei(XMLHttpRequest.prototype, "send", ra);
              let e = t.eventTarget;
              e && (Array.isArray(e) ? e : rn).forEach(rs);
            },
          };
        };
      function ri(e) {
        return function (...t) {
          let n = t[0];
          return (
            (t[0] = n$(n, {
              mechanism: {
                data: { function: e0(e) },
                handled: !1,
                type: "instrument",
              },
            })),
            e.apply(this, t)
          );
        };
      }
      function ro(e) {
        return function (t) {
          return e.apply(this, [
            n$(t, {
              mechanism: {
                data: { function: "requestAnimationFrame", handler: e0(e) },
                handled: !1,
                type: "instrument",
              },
            }),
          ]);
        };
      }
      function ra(e) {
        return function (...t) {
          let n = this;
          return (
            ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(
              (e) => {
                e in n &&
                  "function" == typeof n[e] &&
                  ei(n, e, function (t) {
                    let n = {
                        mechanism: {
                          data: { function: e, handler: e0(t) },
                          handled: !1,
                          type: "instrument",
                        },
                      },
                      r = es(t);
                    return r && (n.mechanism.data.handler = e0(r)), n$(t, n);
                  });
              },
            ),
            e.apply(this, t)
          );
        };
      }
      function rs(e) {
        let t = nL[e],
          n = t && t.prototype;
        n &&
          n.hasOwnProperty &&
          n.hasOwnProperty("addEventListener") &&
          (ei(n, "addEventListener", function (t) {
            return function (n, r, i) {
              try {
                var o;
                (o = r),
                  "function" == typeof o.handleEvent &&
                    (r.handleEvent = n$(r.handleEvent, {
                      mechanism: {
                        data: {
                          function: "handleEvent",
                          handler: e0(r),
                          target: e,
                        },
                        handled: !1,
                        type: "instrument",
                      },
                    }));
              } catch (e) {}
              return t.apply(this, [
                n,
                n$(r, {
                  mechanism: {
                    data: {
                      function: "addEventListener",
                      handler: e0(r),
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
          ei(n, "removeEventListener", function (e) {
            return function (t, n, r) {
              try {
                let i = n.__sentry_wrapped__;
                i && e.call(this, t, i, r);
              } catch (e) {}
              return e.call(this, t, n, r);
            };
          }));
      }
      let rl = () => ({
          name: "BrowserSession",
          setupOnce() {
            if (void 0 === nL.document) {
              nx &&
                Q.warn(
                  "Using the `browserSessionIntegration` in non-browser environments is not supported.",
                );
              return;
            }
            ne({ ignoreDuration: !0 }),
              nr(),
              nK(({ from: e, to: t }) => {
                void 0 !== e && e !== t && (ne({ ignoreDuration: !0 }), nr());
              });
          },
        }),
        rc = null;
      function ru(e) {
        let t = "error";
        nH(t, e), nz(t, rd);
      }
      function rd() {
        (rc = M.onerror),
          (M.onerror = function (e, t, n, r, i) {
            return (
              nW("error", { column: r, error: i, line: n, msg: e, url: t }),
              !!rc && rc.apply(this, arguments)
            );
          }),
          (M.onerror.__SENTRY_INSTRUMENTED__ = !0);
      }
      let rp = null;
      function rh(e) {
        let t = "unhandledrejection";
        nH(t, e), nz(t, rf);
      }
      function rf() {
        (rp = M.onunhandledrejection),
          (M.onunhandledrejection = function (e) {
            return (
              nW("unhandledrejection", e), !rp || rp.apply(this, arguments)
            );
          }),
          (M.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0);
      }
      let rm = (e = {}) => {
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
              ru((e) => {
                var t, r, i, o;
                let a,
                  s,
                  l,
                  c,
                  u,
                  d,
                  { stackParser: p, attachStacktrace: h } = r_();
                if (eU() !== n || nP > 0) return;
                let { msg: f, url: m, line: g, column: _, error: y } = e,
                  v =
                    ((t = nD(p, y || f, void 0, h, !1)),
                    (r = m),
                    (i = g),
                    (o = _),
                    (u = (c = (l = (s = (a = t.exception =
                      t.exception || {}).values =
                      a.values || [])[0] =
                      s[0] || {}).stacktrace =
                      l.stacktrace || {}).frames =
                      c.frames || []),
                    (d = F(r) && r.length > 0 ? r : V()),
                    0 === u.length &&
                      u.push({
                        colno: o,
                        filename: d,
                        function: "?",
                        in_app: !0,
                        lineno: i,
                      }),
                    t);
                (v.level = "error"),
                  tZ(v, {
                    originalException: y,
                    mechanism: { handled: !1, type: "onerror" },
                  });
              }),
              rg("onerror")),
              t.onunhandledrejection &&
                ((r = e),
                rh((e) => {
                  var t;
                  let { stackParser: n, attachStacktrace: i } = r_();
                  if (eU() !== r || nP > 0) return;
                  let o = (function (e) {
                      if (j(e)) return e;
                      try {
                        if ("reason" in e) return e.reason;
                        if ("detail" in e && "reason" in e.detail)
                          return e.detail.reason;
                      } catch (e) {}
                      return e;
                    })(e),
                    a = j(o)
                      ? ((t = o),
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
                      : nD(n, o, void 0, i, !0);
                  (a.level = "error"),
                    tZ(a, {
                      originalException: o,
                      mechanism: { handled: !1, type: "onunhandledrejection" },
                    });
                }),
                rg("onunhandledrejection"));
          },
        };
      };
      function rg(e) {
        nx && Q.log(`Global Handler attached: ${e}`);
      }
      function r_() {
        let e = eU();
        return (
          (e && e.getOptions()) || {
            stackParser: () => [],
            attachStacktrace: !1,
          }
        );
      }
      let ry = () => ({
        name: "HttpContext",
        preprocessEvent(e) {
          if (!nL.navigator && !nL.location && !nL.document) return;
          let t =
              (e.request && e.request.url) || (nL.location && nL.location.href),
            { referrer: n } = nL.document || {},
            { userAgent: r } = nL.navigator || {},
            i = {
              ...(e.request && e.request.headers),
              ...(n && { Referer: n }),
              ...(r && { "User-Agent": r }),
            },
            o = { ...e.request, ...(t && { url: t }), headers: i };
          e.request = o;
        },
      });
      function rv(e, t) {
        (e.mechanism = e.mechanism || { type: "generic", handled: !0 }),
          (e.mechanism = {
            ...e.mechanism,
            ...("AggregateError" === e.type && { is_exception_group: !0 }),
            exception_id: t,
          });
      }
      function rb(e, t, n, r) {
        (e.mechanism = e.mechanism || { type: "generic", handled: !0 }),
          (e.mechanism = {
            ...e.mechanism,
            type: "chained",
            source: t,
            exception_id: n,
            parent_id: r,
          });
      }
      let rS = (e = {}) => {
        let t = e.limit || 5,
          n = e.key || "cause";
        return {
          name: "LinkedErrors",
          preprocessEvent(e, r, i) {
            let o = i.getOptions();
            !(function (e, t, n = 250, r, i, o, a) {
              var s, l;
              if (
                !o.exception ||
                !o.exception.values ||
                !a ||
                !W(a.originalException, Error)
              )
                return;
              let c =
                o.exception.values.length > 0
                  ? o.exception.values[o.exception.values.length - 1]
                  : void 0;
              c &&
                (o.exception.values =
                  ((s = (function e(t, n, r, i, o, a, s, l) {
                    if (a.length >= r + 1) return a;
                    let c = [...a];
                    if (W(i[o], Error)) {
                      rv(s, l);
                      let a = t(n, i[o]),
                        u = c.length;
                      rb(a, o, u, l),
                        (c = e(t, n, r, i[o], o, [a, ...c], a, u));
                    }
                    return (
                      Array.isArray(i.errors) &&
                        i.errors.forEach((i, a) => {
                          if (W(i, Error)) {
                            rv(s, l);
                            let u = t(n, i),
                              d = c.length;
                            rb(u, `errors[${a}]`, d, l),
                              (c = e(t, n, r, i, o, [u, ...c], u, d));
                          }
                        }),
                      c
                    );
                  })(
                    e,
                    t,
                    i,
                    a.originalException,
                    r,
                    o.exception.values,
                    c,
                    0,
                  )),
                  (l = n),
                  s.map((e) => (e.value && (e.value = ee(e.value, l)), e))));
            })(nC, o.stackParser, o.maxValueLength, n, t, e, r);
          },
        };
      };
      function rw(e, t, n, r) {
        let i = {
          filename: e,
          function: "<anonymous>" === t ? "?" : t,
          in_app: !0,
        };
        return void 0 !== n && (i.lineno = n), void 0 !== r && (i.colno = r), i;
      }
      let rE = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
        rk =
          /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
        rx = /\((\S*)(?::(\d+))(?::(\d+))\)/,
        rC = [
          30,
          (e) => {
            let t = rE.exec(e);
            if (t) {
              let [, e, n, r] = t;
              return rw(e, "?", +n, +r);
            }
            let n = rk.exec(e);
            if (n) {
              if (n[2] && 0 === n[2].indexOf("eval")) {
                let e = rx.exec(n[2]);
                e && ((n[2] = e[1]), (n[3] = e[2]), (n[4] = e[3]));
              }
              let [e, t] = rF(n[1] || "?", n[2]);
              return rw(t, e, n[3] ? +n[3] : void 0, n[4] ? +n[4] : void 0);
            }
          },
        ],
        rT =
          /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
        rI = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
        rM = [
          50,
          (e) => {
            let t = rT.exec(e);
            if (t) {
              if (t[3] && t[3].indexOf(" > eval") > -1) {
                let e = rI.exec(t[3]);
                e &&
                  ((t[1] = t[1] || "eval"),
                  (t[3] = e[1]),
                  (t[4] = e[2]),
                  (t[5] = ""));
              }
              let e = t[3],
                n = t[1] || "?";
              return (
                ([n, e] = rF(n, e)),
                rw(e, n, t[4] ? +t[4] : void 0, t[5] ? +t[5] : void 0)
              );
            }
          },
        ],
        rR =
          /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
        rA = [
          40,
          (e) => {
            let t = rR.exec(e);
            return t
              ? rw(t[2], t[1] || "?", +t[3], t[4] ? +t[4] : void 0)
              : void 0;
          },
        ],
        rO = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,
        rD = [
          10,
          (e) => {
            let t = rO.exec(e);
            return t ? rw(t[2], t[3] || "?", +t[1]) : void 0;
          },
        ],
        rN =
          / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i,
        rL = [
          20,
          (e) => {
            let t = rN.exec(e);
            return t ? rw(t[5], t[3] || t[4] || "?", +t[1], +t[2]) : void 0;
          },
        ],
        rP = [rC, rM],
        r$ = eK(...rP),
        rF = (e, t) => {
          let n = -1 !== e.indexOf("safari-extension"),
            r = -1 !== e.indexOf("safari-web-extension");
          return n || r
            ? [
                -1 !== e.indexOf("@") ? e.split("@")[0] : "?",
                n ? `safari-extension:${t}` : `safari-web-extension:${t}`,
              ]
            : [e, t];
        },
        rU = "u" < typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
        rj = {};
      function rB(e) {
        let t = rj[e];
        if (t) return t;
        let n = M[e];
        if (e8(n)) return (rj[e] = n.bind(M));
        let r = M.document;
        if (r && "function" == typeof r.createElement)
          try {
            let t = r.createElement("iframe");
            (t.hidden = !0), r.head.appendChild(t);
            let i = t.contentWindow;
            i && i[e] && (n = i[e]), r.head.removeChild(t);
          } catch (t) {
            rU &&
              Q.warn(
                `Could not create sandbox iframe for ${e} check, bailing to window.${e}: `,
                t,
              );
          }
        return n ? (rj[e] = n.bind(M)) : n;
      }
      function rH(...e) {
        return rB("setTimeout")(...e);
      }
      function rz(e, t = Date.now()) {
        let n = parseInt(`${e}`, 10);
        if (!isNaN(n)) return 1e3 * n;
        let r = Date.parse(`${e}`);
        return isNaN(r) ? 6e4 : r - t;
      }
      function rW(e, t, n = Date.now()) {
        return (e[t] || e.all || 0) > n;
      }
      function rq(e, { statusCode: t, headers: n }, r = Date.now()) {
        let i = { ...e },
          o = n && n["x-sentry-rate-limits"],
          a = n && n["retry-after"];
        if (o)
          for (let e of o.trim().split(",")) {
            let [t, n, , , o] = e.split(":", 5),
              a = parseInt(t, 10),
              s = (isNaN(a) ? 60 : a) * 1e3;
            if (n)
              for (let e of n.split(";"))
                "metric_bucket" === e
                  ? (!o || o.split(";").includes("custom")) && (i[e] = r + s)
                  : (i[e] = r + s);
            else i.all = r + s;
          }
        else a ? (i.all = r + rz(a, r)) : 429 === t && (i.all = r + 6e4);
        return i;
      }
      function rY(
        e,
        t,
        n = (function (e) {
          let t = [];
          function n(e) {
            return t.splice(t.indexOf(e), 1)[0] || Promise.resolve(void 0);
          }
          return {
            $: t,
            add: function (r) {
              if (!(void 0 === e || t.length < e))
                return tn(
                  new nv(
                    "Not adding Promise because buffer limit was reached.",
                  ),
                );
              let i = r();
              return (
                -1 === t.indexOf(i) && t.push(i),
                i.then(() => n(i)).then(null, () => n(i).then(null, () => {})),
                i
              );
            },
            drain: function (e) {
              return new tr((n, r) => {
                let i = t.length;
                if (!i) return n(!0);
                let o = setTimeout(() => {
                  e && e > 0 && n(!1);
                }, e);
                t.forEach((e) => {
                  tt(e).then(() => {
                    --i || (clearTimeout(o), n(!0));
                  }, r);
                });
              });
            },
          };
        })(e.bufferSize || 64),
      ) {
        let r = {};
        return {
          send: function (i) {
            let o = [];
            if (
              (np(i, (t, n) => {
                let i = ng[n];
                if (rW(r, i)) {
                  let r = rV(t, n);
                  e.recordDroppedEvent("ratelimit_backoff", i, r);
                } else o.push(t);
              }),
              0 === o.length)
            )
              return tt({});
            let a = nd(i[0], o),
              s = (t) => {
                np(a, (n, r) => {
                  let i = rV(n, r);
                  e.recordDroppedEvent(t, ng[r], i);
                });
              };
            return n
              .add(() =>
                t({ body: nm(a) }).then(
                  (e) => (
                    void 0 !== e.statusCode &&
                      (e.statusCode < 200 || e.statusCode >= 300) &&
                      I &&
                      Q.warn(
                        `Sentry responded with status code ${e.statusCode} to sent event.`,
                      ),
                    (r = rq(r, e)),
                    e
                  ),
                  (e) => {
                    throw (s("network_error"), e);
                  },
                ),
              )
              .then(
                (e) => e,
                (e) => {
                  if (e instanceof nv)
                    return (
                      I &&
                        Q.error(
                          "Skipped sending event because buffer is full.",
                        ),
                      s("queue_overflow"),
                      tt({})
                    );
                  throw e;
                },
              );
          },
          flush: (e) => n.drain(e),
        };
      }
      function rV(e, t) {
        if ("event" === t || "transaction" === t)
          return Array.isArray(e) ? e[1] : void 0;
      }
      function rG(e, t = rB("fetch")) {
        let n = 0,
          r = 0;
        return rY(e, function (i) {
          let o = i.body.length;
          (n += o), r++;
          let a = {
            body: i.body,
            method: "POST",
            referrerPolicy: "origin",
            headers: e.headers,
            keepalive: n <= 6e4 && r < 15,
            ...e.fetchOptions,
          };
          if (!t)
            return (rj.fetch = void 0), tn("No fetch implementation available");
          try {
            return t(e.url, a).then(
              (e) => (
                (n -= o),
                r--,
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
            return (rj.fetch = void 0), (n -= o), r--, tn(e);
          }
        });
      }
      function rX(e) {
        let t = [eq(), eG(), rr(), rt(), rm(), rS(), e2(), ry()];
        return !1 !== e.autoSessionTracking && t.push(rl()), t;
      }
      function rJ(e = {}) {
        var t;
        let n,
          r = (function (e = {}) {
            let t = {
              defaultIntegrations: rX(e),
              release:
                "string" == typeof __SENTRY_RELEASE__
                  ? __SENTRY_RELEASE__
                  : nL.SENTRY_RELEASE && nL.SENTRY_RELEASE.id
                    ? nL.SENTRY_RELEASE.id
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
          !r.skipBrowserExtensionCheck &&
          (function () {
            let e = void 0 !== nL.window && nL;
            if (!e) return !1;
            let t = e.chrome ? "chrome" : "browser",
              n = e[t],
              r = n && n.runtime && n.runtime.id,
              i = (nL.location && nL.location.href) || "",
              o =
                !!r &&
                nL === nL.top &&
                [
                  "chrome-extension:",
                  "moz-extension:",
                  "ms-browser-extension:",
                  "safari-web-extension:",
                ].some((e) => i.startsWith(`${e}//`)),
              a = void 0 !== e.nw;
            return !!r && !o && !a;
          })()
        )
          return void Z(() => {
            console.error(
              "[Sentry] You cannot run Sentry this way in a browser extension, check: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/",
            );
          });
        nx &&
          !e6() &&
          Q.warn(
            "No Fetch API detected. The Sentry SDK requires a Fetch API compatible environment to send events. Please add a Fetch API polyfill.",
          );
        let i = {
          ...r,
          stackParser: Array.isArray((t = r.stackParser || r$)) ? eK(...t) : t,
          integrations: (function (e) {
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
              a = o.findIndex((e) => "Debug" === e.name);
            if (a > -1) {
              let [e] = o.splice(a, 1);
              o.push(e);
            }
            return o;
          })(r),
          transport: r.transport || rG,
        };
        return (
          !0 === i.debug &&
            (I
              ? Q.enable()
              : Z(() => {
                  console.warn(
                    "[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.",
                  );
                })),
          eN().update(i.initialScope),
          e9((n = new nU(i))),
          n.init(),
          n
        );
      }
      function rK(e = {}) {
        if (!nL.document) {
          nx && Q.error("Global document not defined in showReportDialog call");
          return;
        }
        let t = eN(),
          n = t.getClient(),
          r = n && n.getDsn();
        if (!r) {
          nx && Q.error("DSN not configured for showReportDialog call");
          return;
        }
        if ((t && (e.user = { ...t.getUser(), ...e.user }), !e.eventId)) {
          let t = t4();
          t && (e.eventId = t);
        }
        let i = nL.document.createElement("script");
        (i.async = !0),
          (i.crossOrigin = "anonymous"),
          (i.src = (function (e, t) {
            let n = nl(e);
            if (!n) return "";
            let r = `${nc(n)}embed/error-page/`,
              i = `dsn=${no(n)}`;
            for (let e in t)
              if ("dsn" !== e && "onClose" !== e)
                if ("user" === e) {
                  let e = t.user;
                  if (!e) continue;
                  e.name && (i += `&name=${encodeURIComponent(e.name)}`),
                    e.email && (i += `&email=${encodeURIComponent(e.email)}`);
                } else
                  i += `&${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`;
            return `${r}?${i}`;
          })(r, e)),
          e.onLoad && (i.onload = e.onLoad);
        let { onClose: o } = e;
        if (o) {
          let e = (t) => {
            if ("__sentry_reportdialog_closed__" === t.data)
              try {
                o();
              } finally {
                nL.removeEventListener("message", e);
              }
          };
          nL.addEventListener("message", e);
        }
        let a = nL.document.head || nL.document.body;
        a
          ? a.appendChild(i)
          : nx &&
            Q.error(
              "Not injecting report dialog. No injection point found in HTML",
            );
      }
      function rZ() {}
      function rQ(e) {
        e();
      }
      function r0(e) {
        let t = eU();
        t && t.captureUserFeedback(e);
      }
      function r1(e) {
        let t = eN().getScopeData().contexts.flags,
          n = t ? t.values : [];
        return (
          n.length &&
            (void 0 === e.contexts && (e.contexts = {}),
            (e.contexts.flags = { values: [...n] })),
          e
        );
      }
      function r2(e, t, n = 100) {
        let r = eN().getScopeData().contexts;
        r.flags || (r.flags = { values: [] }),
          (function (e, t, n, r) {
            if ("boolean" != typeof n) return;
            if (e.length > r) {
              nx &&
                Q.error(
                  `[Feature Flags] insertToFlagBuffer called on a buffer larger than maxSize=${r}`,
                );
              return;
            }
            let i = e.findIndex((e) => e.flag === t);
            -1 !== i && e.splice(i, 1),
              e.length === r && e.shift(),
              e.push({ flag: t, result: n });
          })(r.flags.values, e, t, n);
      }
      let r3 = () => ({
          name: "FeatureFlags",
          processEvent: (e, t, n) => r1(e),
          addFeatureFlag(e, t) {
            r2(e, t);
          },
        }),
        r5 = !1;
      function r4() {
        r5 || ((r5 = !0), ru(r6), rh(r6));
      }
      function r6() {
        let e = tF(),
          t = e && t$(e);
        if (t) {
          let e = "internal_error";
          I && Q.log(`[Tracing] Root span: ${e} -> Global error occurred`),
            t.setStatus({ code: 2, message: e });
        }
      }
      function r8() {
        r4();
      }
      r6.tag = "sentry_tracingErrorCallback";
      let r7 = (e = {}) => {
        let t = e.levels || J,
          n = !!e.handled;
        return {
          name: "CaptureConsole",
          setup(e) {
            "console" in M &&
              nQ(({ args: r, level: i }) => {
                var o, a, s;
                let l;
                eU() === e &&
                  t.includes(i) &&
                  ((o = r),
                  (a = i),
                  (s = n),
                  (l = { level: n7(a), extra: { arguments: o } }),
                  e$((e) => {
                    if (
                      (e.addEventProcessor(
                        (e) => (
                          (e.logger = "console"),
                          ev(e, { handled: s, type: "console" }),
                          e
                        ),
                      ),
                      "assert" === a)
                    ) {
                      if (!o[0]) {
                        let t = `Assertion failed: ${en(o.slice(1), " ") || "console.assert"}`;
                        e.setExtra("arguments", o.slice(1)), tK(t, l);
                      }
                      return;
                    }
                    let t = o.find((e) => e instanceof Error);
                    t ? tJ(t, l) : tK(en(o, " "), l);
                  }));
              });
          },
        };
      };
      function r9(e, t = {}, n = eN()) {
        let {
            message: r,
            name: i,
            email: o,
            url: a,
            source: s,
            associatedEventId: l,
            tags: c,
          } = e,
          u = {
            contexts: {
              feedback: ed({
                contact_email: o,
                name: i,
                message: r,
                url: a,
                source: s,
                associated_event_id: l,
              }),
            },
            type: "feedback",
            level: "info",
            tags: c,
          },
          d = (n && n.getClient()) || eU();
        return d && d.emit("beforeSendFeedback", u, t), n.captureEvent(u, t);
      }
      function ie(e, t, n = () => {}) {
        var r, i, o;
        let a;
        try {
          a = e();
        } catch (e) {
          throw (t(e), n(), e);
        }
        return (
          (r = a),
          (i = t),
          (o = n),
          z(r)
            ? r.then(
                (e) => (o(), e),
                (e) => {
                  throw (i(e), o(), e);
                },
              )
            : (o(), r)
        );
      }
      class it {
        constructor(e = {}) {
          (this._traceId = e.traceId || em()),
            (this._spanId = e.spanId || ew());
        }
        spanContext() {
          return {
            spanId: this._spanId,
            traceId: this._traceId,
            traceFlags: 0,
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
      function ir(e, t, n, r = tF()) {
        let i = r && t$(r);
        i &&
          (I &&
            Q.log(
              `[Measurement] Setting measurement on root span: ${e} = ${t} ${n}`,
            ),
          i.addEvent(e, { [tp]: t, [td]: n }));
      }
      function ii(e) {
        if (!e || 0 === e.length) return;
        let t = {};
        return (
          e.forEach((e) => {
            let n = e.attributes || {},
              r = n[td],
              i = n[tp];
            "string" == typeof r &&
              "number" == typeof i &&
              (t[e.name] = { value: i, unit: r });
          }),
          t
        );
      }
      let io = "_sentryScope",
        ia = "_sentryIsolationScope";
      function is(e) {
        return { scope: e[io], isolationScope: e[ia] };
      }
      class il {
        constructor(e = {}) {
          (this._traceId = e.traceId || em()),
            (this._spanId = e.spanId || ew()),
            (this._startTime = e.startTimestamp || eh()),
            (this._attributes = {}),
            this.setAttributes({ [tc]: "manual", [tl]: e.op, ...e.attributes }),
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
          return { spanId: e, traceId: t, traceFlags: +!!n };
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
          this._startTime = tI(e);
        }
        setStatus(e) {
          return (this._status = e), this;
        }
        updateName(e) {
          return (this._name = e), this.setAttribute(ta, "custom"), this;
        }
        end(e) {
          this._endTime ||
            ((this._endTime = tI(e)),
            (function (e) {
              if (!I) return;
              let {
                  description: t = "< unknown name >",
                  op: n = "< unknown op >",
                } = tR(e),
                { spanId: r } = e.spanContext(),
                i = t$(e) === e,
                o = `[Tracing] Finishing "${n}" ${i ? "root " : ""}span "${t}" with ID ${r}`;
              Q.log(o);
            })(this),
            this._onSpanEnded());
        }
        getSpanJSON() {
          return ed({
            data: this._attributes,
            description: this._name,
            op: this._attributes[tl],
            parent_span_id: this._parentSpanId,
            span_id: this._spanId,
            start_timestamp: this._startTime,
            status: tO(this._status),
            timestamp: this._endTime,
            trace_id: this._traceId,
            origin: this._attributes[tc],
            _metrics_summary: tw(this),
            profile_id: this._attributes["sentry.profile_id"],
            exclusive_time: this._attributes[tf],
            measurements: ii(this._events),
            is_segment: (this._isStandaloneSpan && t$(this) === this) || void 0,
            segment_id: this._isStandaloneSpan
              ? t$(this).spanContext().spanId
              : void 0,
          });
        }
        isRecording() {
          return !this._endTime && !!this._sampled;
        }
        addEvent(e, t, n) {
          I && Q.log("[Tracing] Adding an event to span:", e);
          let r = ic(t) ? t : n || eh(),
            i = ic(t) ? {} : t || {},
            o = { name: e, time: tI(r), attributes: i };
          return this._events.push(o), this;
        }
        isStandaloneSpan() {
          return !!this._isStandaloneSpan;
        }
        _onSpanEnded() {
          let e = eU();
          if (
            (e && e.emit("spanEnd", this),
            !(this._isStandaloneSpan || this === t$(this)))
          )
            return;
          if (this._isStandaloneSpan)
            return void (this._sampled
              ? (function (e) {
                  let t = eU();
                  if (!t) return;
                  let n = e[1];
                  n && 0 !== n.length
                    ? t.sendEnvelope(e)
                    : t.recordDroppedEvent("before_send", "span");
                })(
                  (function (e, t) {
                    let n = tW(e[0]),
                      r = t && t.getDsn(),
                      i = t && t.getOptions().tunnel,
                      o = {
                        sent_at: new Date().toISOString(),
                        ...(!!n.trace_id && !!n.public_key && { trace: n }),
                        ...(!!i && r && { dsn: no(r) }),
                      },
                      a = t && t.getOptions().beforeSendSpan,
                      s = a
                        ? (e) => {
                            let t = a(tR(e));
                            return t || tU(), t;
                          }
                        : (e) => tR(e),
                      l = [];
                    for (let t of e) {
                      let e = s(t);
                      e && l.push([{ type: "span" }, e]);
                    }
                    return nd(o, l);
                  })([this], e),
                )
              : (I &&
                  Q.log(
                    "[Tracing] Discarding standalone span because its trace was not chosen to be sampled.",
                  ),
                e && e.recordDroppedEvent("sample_rate", "span")));
          let t = this._convertSpanToTransaction();
          t && (is(this).scope || eN()).captureEvent(t);
        }
        _convertSpanToTransaction() {
          if (!iu(tR(this))) return;
          this._name ||
            (I &&
              Q.warn(
                "Transaction has no name, falling back to `<unlabeled transaction>`.",
              ),
            (this._name = "<unlabeled transaction>"));
          let { scope: e, isolationScope: t } = is(this),
            n = (e || eN()).getClient() || eU();
          if (!0 !== this._sampled) {
            I &&
              Q.log(
                "[Tracing] Discarding transaction because its trace was not chosen to be sampled.",
              ),
              n && n.recordDroppedEvent("sample_rate", "transaction");
            return;
          }
          let r = tP(this)
              .filter((e) => {
                var t;
                return (
                  e !== this && !((t = e) instanceof il && t.isStandaloneSpan())
                );
              })
              .map((e) => tR(e))
              .filter(iu),
            i = this._attributes[ta];
          delete this._attributes[th],
            r.forEach((e) => {
              e.data && delete e.data[th];
            });
          let o = {
              contexts: {
                trace: (function (e) {
                  let { spanId: t, traceId: n } = e.spanContext(),
                    {
                      data: r,
                      op: i,
                      parent_span_id: o,
                      status: a,
                      origin: s,
                    } = tR(e);
                  return ed({
                    parent_span_id: o,
                    span_id: t,
                    trace_id: n,
                    data: r,
                    op: i,
                    status: a,
                    origin: s,
                  });
                })(this),
              },
              spans:
                r.length > 1e3
                  ? r
                      .sort((e, t) => e.start_timestamp - t.start_timestamp)
                      .slice(0, 1e3)
                  : r,
              start_timestamp: this._startTime,
              timestamp: this._endTime,
              transaction: this._name,
              type: "transaction",
              sdkProcessingMetadata: {
                capturedSpanScope: e,
                capturedSpanIsolationScope: t,
                ...ed({ dynamicSamplingContext: tW(this) }),
              },
              _metrics_summary: tw(this),
              ...(i && { transaction_info: { source: i } }),
            },
            a = ii(this._events);
          return (
            a &&
              Object.keys(a).length &&
              (I &&
                Q.log(
                  "[Measurements] Adding measurements to transaction event",
                  JSON.stringify(a, void 0, 2),
                ),
              (o.measurements = a)),
            o
          );
        }
      }
      function ic(e) {
        return (
          (e && "number" == typeof e) || e instanceof Date || Array.isArray(e)
        );
      }
      function iu(e) {
        return (
          !!e.start_timestamp && !!e.timestamp && !!e.span_id && !!e.trace_id
        );
      }
      let id = "__SENTRY_SUPPRESS_TRACING__";
      function ip(e, t) {
        let n = iw();
        if (n.startSpan) return n.startSpan(e, t);
        let r = iS(e),
          { forceTransaction: i, parentSpan: o } = e;
        return e$(e.scope, () =>
          ix(o)(() => {
            let n = eN(),
              o = ik(n),
              a =
                e.onlyIfParent && !o
                  ? new it()
                  : ib({
                      parentSpan: o,
                      spanArguments: r,
                      forceTransaction: i,
                      scope: n,
                    });
            return (
              ex(n, a),
              ie(
                () => t(a),
                () => {
                  let { status: e } = tR(a);
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
      function ih(e, t) {
        let n = iw();
        if (n.startSpanManual) return n.startSpanManual(e, t);
        let r = iS(e),
          { forceTransaction: i, parentSpan: o } = e;
        return e$(e.scope, () =>
          ix(o)(() => {
            let n = eN(),
              o = ik(n),
              a =
                e.onlyIfParent && !o
                  ? new it()
                  : ib({
                      parentSpan: o,
                      spanArguments: r,
                      forceTransaction: i,
                      scope: n,
                    });
            function s() {
              a.end();
            }
            return (
              ex(n, a),
              ie(
                () => t(a, s),
                () => {
                  let { status: e } = tR(a);
                  a.isRecording() &&
                    (!e || "ok" === e) &&
                    a.setStatus({ code: 2, message: "internal_error" });
                },
              )
            );
          }),
        );
      }
      function im(e) {
        let t = iw();
        if (t.startInactiveSpan) return t.startInactiveSpan(e);
        let n = iS(e),
          { forceTransaction: r, parentSpan: i } = e;
        return (
          e.scope
            ? (t) => e$(e.scope, t)
            : void 0 !== i
              ? (e) => i_(i, e)
              : (e) => e()
        )(() => {
          let t = eN(),
            i = ik(t);
          return e.onlyIfParent && !i
            ? new it()
            : ib({
                parentSpan: i,
                spanArguments: n,
                forceTransaction: r,
                scope: t,
              });
        });
      }
      let ig = (e, t) => {
        let n = eD(A());
        if (n.continueTrace) return n.continueTrace(e, t);
        let { sentryTrace: r, baggage: i } = e;
        return e$((e) => {
          let n = tk(r, i);
          return e.setPropagationContext(n), t();
        });
      };
      function i_(e, t) {
        let n = iw();
        return n.withActiveSpan
          ? n.withActiveSpan(e, t)
          : e$((n) => (ex(n, e || void 0), t(n)));
      }
      function iy(e) {
        let t = iw();
        return t.suppressTracing
          ? t.suppressTracing(e)
          : e$((t) => (t.setSDKProcessingMetadata({ [id]: !0 }), e()));
      }
      function iv(e) {
        return e$(
          (t) => (
            t.setPropagationContext({ traceId: em() }),
            I &&
              Q.info(
                `Starting a new trace with id ${t.getPropagationContext().traceId}`,
              ),
            i_(null, e)
          ),
        );
      }
      function ib({
        parentSpan: e,
        spanArguments: t,
        forceTransaction: n,
        scope: r,
      }) {
        var i;
        let o;
        if (!tb()) return new it();
        let a = eL();
        if (e && !n)
          (o = (function (e, t, n) {
            let { spanId: r, traceId: i } = e.spanContext(),
              o = !t.getScopeData().sdkProcessingMetadata[id] && tA(e),
              a = o
                ? new il({ ...n, parentSpanId: r, traceId: i, sampled: o })
                : new it({ traceId: i });
            tL(e, a);
            let s = eU();
            return (
              s &&
                (s.emit("spanStart", a),
                n.endTimestamp && s.emit("spanEnd", a)),
              a
            );
          })(e, r, t)),
            tL(e, o);
        else if (e) {
          let n = tW(e),
            { traceId: i, spanId: a } = e.spanContext(),
            s = tA(e);
          eo((o = iE({ traceId: i, parentSpanId: a, ...t }, r, s)), tB, n);
        } else {
          let {
            traceId: e,
            dsc: n,
            parentSpanId: i,
            sampled: s,
          } = { ...a.getPropagationContext(), ...r.getPropagationContext() };
          (o = iE({ traceId: e, parentSpanId: i, ...t }, r, s)),
            n && eo(o, tB, n);
        }
        return (
          !(function (e) {
            if (!I) return;
            let {
                description: t = "< unknown name >",
                op: n = "< unknown op >",
                parent_span_id: r,
              } = tR(e),
              { spanId: i } = e.spanContext(),
              o = tA(e),
              a = t$(e),
              s = a === e,
              l = `[Tracing] Starting ${o ? "sampled" : "unsampled"} ${s ? "root " : ""}span`,
              c = [`op: ${n}`, `name: ${t}`, `ID: ${i}`];
            if ((r && c.push(`parent ID: ${r}`), !s)) {
              let { op: e, description: t } = tR(a);
              c.push(`root ID: ${a.spanContext().spanId}`),
                e && c.push(`root op: ${e}`),
                t && c.push(`root description: ${t}`);
            }
            Q.log(`${l}
  ${c.join("\n  ")}`);
          })(o),
          (i = o) && (eo(i, ia, a), eo(i, io, r)),
          o
        );
      }
      function iS(e) {
        let t = { isStandalone: (e.experimental || {}).standalone, ...e };
        if (e.startTime) {
          let n = { ...t };
          return (n.startTimestamp = tI(e.startTime)), delete n.startTime, n;
        }
        return t;
      }
      function iw() {
        return eD(A());
      }
      function iE(e, t, n) {
        let r = eU(),
          i = (r && r.getOptions()) || {},
          { name: o = "", attributes: a } = e,
          [s, l] = t.getScopeData().sdkProcessingMetadata[id]
            ? [!1]
            : (function (e, t) {
                let n;
                if (!tb(e)) return [!1];
                let r =
                    eL().getScopeData().sdkProcessingMetadata.normalizedRequest,
                  i = { ...t, normalizedRequest: t.normalizedRequest || r },
                  o = nb(
                    (n =
                      "function" == typeof e.tracesSampler
                        ? e.tracesSampler(i)
                        : void 0 !== i.parentSampled
                          ? i.parentSampled
                          : void 0 !== e.tracesSampleRate
                            ? e.tracesSampleRate
                            : 1),
                  );
                return void 0 === o
                  ? (I &&
                      Q.warn(
                        "[Tracing] Discarding transaction because of invalid sample rate.",
                      ),
                    [!1])
                  : o
                    ? Math.random() < o
                      ? [!0, o]
                      : (I &&
                          Q.log(
                            `[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(n)})`,
                          ),
                        [!1, o])
                    : (I &&
                        Q.log(
                          `[Tracing] Discarding transaction because ${"function" == typeof e.tracesSampler ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0"}`,
                        ),
                      [!1, o]);
              })(i, {
                name: o,
                parentSampled: n,
                attributes: a,
                transactionContext: { name: o, parentSampled: n },
              }),
          c = new il({
            ...e,
            attributes: { [ta]: "custom", ...e.attributes },
            sampled: s,
          });
        return (
          void 0 !== l && c.setAttribute(ts, l), r && r.emit("spanStart", c), c
        );
      }
      function ik(e) {
        let t = e[ek];
        if (!t) return;
        let n = eU();
        return (n ? n.getOptions() : {}).parentSpanIsAlwaysRootSpan ? t$(t) : t;
      }
      function ix(e) {
        return void 0 !== e ? (t) => i_(e, t) : (e) => e();
      }
      let iC = (e = {}) => {
          let t = { debugger: !1, stringify: !1, ...e };
          return {
            name: "Debug",
            setup(e) {
              e.on("beforeSendEvent", (e, n) => {
                t.debugger,
                  Z(() => {
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
        },
        iT = (e = {}) => {
          let { depth: t = 3, captureErrorCause: n = !0 } = e;
          return {
            name: "ExtraErrorData",
            processEvent(e, r, i) {
              let { maxValueLength: o = 250 } = i.getOptions();
              return (function (e, t = {}, n, r, i) {
                if (!t.originalException || !N(t.originalException)) return e;
                let o =
                    t.originalException.name ||
                    t.originalException.constructor.name,
                  a = (function (e, t, n) {
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
                        let o = e[t];
                        i[t] = N(o) || "string" == typeof o ? ee(`${o}`, n) : o;
                      }
                      if (
                        (t &&
                          void 0 !== e.cause &&
                          (i.cause = N(e.cause) ? e.cause.toString() : e.cause),
                        "function" == typeof e.toJSON)
                      ) {
                        let t = e.toJSON();
                        for (let e of Object.keys(t)) {
                          let n = t[e];
                          i[e] = N(n) ? n.toString() : n;
                        }
                      }
                      return i;
                    } catch (e) {
                      I &&
                        Q.error(
                          "Unable to extract extra data from the Error object:",
                          e,
                        );
                    }
                    return null;
                  })(t.originalException, r, i);
                if (a) {
                  let t = { ...e.contexts },
                    r = to(a, n);
                  return (
                    B(r) &&
                      (eo(r, "__sentry_skip_normalization__", !0), (t[o] = r)),
                    { ...e, contexts: t }
                  );
                }
                return e;
              })(e, r, t, n, o);
            },
          };
        },
        iI = function () {
          return {
            bindClient(e) {
              eN().setClient(e);
            },
            withScope: e$,
            getClient: () => eU(),
            getScope: eN,
            getIsolationScope: eL,
            captureException: (e, t) => eN().captureException(e, t),
            captureMessage: (e, t, n) => eN().captureMessage(e, t, n),
            captureEvent: tZ,
            addBreadcrumb: n8,
            setUser: t5,
            setTags: t2,
            setTag: t3,
            setExtra: t1,
            setExtras: t0,
            setContext: tQ,
            getIntegration(e) {
              let t = eU();
              return (t && t.getIntegrationByName(e.id)) || null;
            },
            startSession: ne,
            endSession: nt,
            captureSession(e) {
              let t, n, r;
              if (e) return nt();
              (t = eN()),
                (n = eU()),
                (r = t.getSession()),
                n && r && n.captureSession(r);
            },
          };
        };
      function iM(e) {
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
      function iR(e, t) {
        e.setAttribute("http.response.status_code", t);
        let n = iM(t);
        "unknown_error" !== n.message && e.setStatus(n);
      }
      function iA(e, t) {
        let n;
        return (
          np(
            e,
            (e, r) => (
              t.includes(r) && (n = Array.isArray(e) ? e[1] : void 0), !!n
            ),
          ),
          n
        );
      }
      function iO(e, t) {
        return (n) => {
          let r = e(n),
            i = new Map();
          function o(t, r) {
            let o = r ? `${t}:${r}` : t,
              a = i.get(o);
            if (!a) {
              let s = na(t);
              if (!s) return;
              let l = nu(s, n.tunnel);
              (a = r
                ? ((t) => {
                    let n = e(t);
                    return {
                      ...n,
                      send: async (e) => {
                        let t = iA(e, [
                          "event",
                          "transaction",
                          "profile",
                          "replay_event",
                        ]);
                        return t && (t.release = r), n.send(e);
                      },
                    };
                  })({ ...n, url: l })
                : e({ ...n, url: l })),
                i.set(o, a);
            }
            return [t, a];
          }
          return {
            send: async function (e) {
              let n = t({
                  envelope: e,
                  getEvent: function (t) {
                    return iA(e, t && t.length ? t : ["event"]);
                  },
                })
                  .map((e) =>
                    "string" == typeof e ? o(e, void 0) : o(e.dsn, e.release),
                  )
                  .filter((e) => !!e),
                i = n.length ? n : [["", r]];
              return (
                await Promise.all(
                  i.map(([t, n]) =>
                    n.send(nd(t ? { ...e[0], dsn: t } : e[0], e[1])),
                  ),
                )
              )[0];
            },
            flush: async function (e) {
              let t = [...i.values(), r];
              return (await Promise.all(t.map((t) => t.flush(e)))).every(
                (e) => e,
              );
            },
          };
        };
      }
      let iD = new Map(),
        iN = new Set();
      function iL(e, t) {
        try {
          t.exception.values.forEach((t) => {
            if (t.stacktrace)
              for (let n of t.stacktrace.frames || []) {
                if (!n.filename || n.module_metadata) continue;
                let t = (function (e, t) {
                  if (M._sentryModuleMetadata)
                    for (let t of Object.keys(M._sentryModuleMetadata)) {
                      let n = M._sentryModuleMetadata[t];
                      if (!iN.has(t)) {
                        for (let r of (iN.add(t), e(t).reverse()))
                          if (r.filename) {
                            iD.set(r.filename, n);
                            break;
                          }
                      }
                    }
                  return iD.get(t);
                })(e, n.filename);
                t && (n.module_metadata = t);
              }
          });
        } catch (e) {}
      }
      function iP(e) {
        try {
          e.exception.values.forEach((e) => {
            if (e.stacktrace)
              for (let t of e.stacktrace.frames || []) delete t.module_metadata;
          });
        } catch (e) {}
      }
      let i$ = () => ({
        name: "ModuleMetadata",
        setup(e) {
          e.on("beforeEnvelope", (e) => {
            np(e, (e, t) => {
              if ("event" === t) {
                let t = Array.isArray(e) ? e[1] : void 0;
                t && (iP(t), (e[1] = t));
              }
            });
          }),
            e.on("applyFrameMetadata", (t) => {
              t.type || iL(e.getOptions().stackParser, t);
            });
        },
      });
      function iF(e, ...t) {
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
      let iU =
        /^(\S+:\\|\/?)([\s\S]*?)((?:\.{1,2}|[^/\\]+?|)(\.[^./\\]*|))(?:[/\\]*)$/;
      function ij(...e) {
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
      function iB(e) {
        let t = 0;
        for (; t < e.length && "" === e[t]; t++);
        let n = e.length - 1;
        for (; n >= 0 && "" === e[n]; n--);
        return t > n ? [] : e.slice(t, n - t + 1);
      }
      let iH = (e = {}) => {
          let t = e.root,
            n = e.prefix || "app:///",
            r = "window" in M && void 0 !== M.window,
            i =
              e.iteratee ||
              (function ({ isBrowser: e, root: t, prefix: n }) {
                return (r) => {
                  if (!r.filename) return r;
                  let i =
                      /^[a-zA-Z]:\\/.test(r.filename) ||
                      (r.filename.includes("\\") && !r.filename.includes("/")),
                    o = /^\//.test(r.filename);
                  if (e) {
                    if (t) {
                      let e = r.filename;
                      0 === e.indexOf(t) && (r.filename = e.replace(t, n));
                    }
                  } else if (i || o) {
                    let e,
                      o,
                      a = i
                        ? r.filename
                            .replace(/^[a-zA-Z]:/, "")
                            .replace(/\\/g, "/")
                        : r.filename,
                      s = t
                        ? (function (e, t) {
                            (e = ij(e).slice(1)), (t = ij(t).slice(1));
                            let n = iB(e.split("/")),
                              r = iB(t.split("/")),
                              i = Math.min(n.length, r.length),
                              o = i;
                            for (let e = 0; e < i; e++)
                              if (n[e] !== r[e]) {
                                o = e;
                                break;
                              }
                            let a = [];
                            for (let e = o; e < n.length; e++) a.push("..");
                            return (a = a.concat(r.slice(o))).join("/");
                          })(t, a)
                        : ((e =
                            a.length > 1024
                              ? `<truncated>${a.slice(-1024)}`
                              : a),
                          (o = iU.exec(e)) ? o.slice(1) : [])[2] || "";
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
                                    t && t.frames && t.frames.map((e) => i(e)),
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
        },
        iz = () => {
          let e = 1e3 * eh();
          return {
            name: "SessionTiming",
            processEvent(t) {
              let n = 1e3 * eh();
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
        },
        iW = (e) => ({
          name: "ThirdPartyErrorsFilter",
          setup(e) {
            e.on("beforeEnvelope", (e) => {
              np(e, (e, t) => {
                if ("event" === t) {
                  let t = Array.isArray(e) ? e[1] : void 0;
                  t && (iP(t), (e[1] = t));
                }
              });
            }),
              e.on("applyFrameMetadata", (t) => {
                t.type || iL(e.getOptions().stackParser, t);
              });
          },
          processEvent(t) {
            let n = (function (e) {
              let t = e1(e);
              if (t)
                return t
                  .filter((e) => !!e.filename)
                  .map((e) =>
                    e.module_metadata
                      ? Object.keys(e.module_metadata)
                          .filter((e) => e.startsWith(iq))
                          .map((e) => e.slice(iq.length))
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
        }),
        iq = "_sentryBundlerPluginAppKey:";
      function iY(e) {
        return {
          ...e,
          path:
            "path" in e && Array.isArray(e.path) ? e.path.join(".") : void 0,
          keys: "keys" in e ? JSON.stringify(e.keys) : void 0,
          unionErrors:
            "unionErrors" in e ? JSON.stringify(e.unionErrors) : void 0,
        };
      }
      let iV = (e = {}) => {
          let t = void 0 === e.limit ? 10 : e.limit;
          return {
            name: "ZodErrors",
            processEvent: (n, r) =>
              (function (e, t = !1, n, r) {
                var i;
                if (
                  !n.exception ||
                  !n.exception.values ||
                  !r ||
                  !r.originalException ||
                  !(
                    N((i = r.originalException)) &&
                    "ZodError" === i.name &&
                    Array.isArray(i.issues)
                  ) ||
                  0 === r.originalException.issues.length
                )
                  return n;
                try {
                  let i = (
                    t
                      ? r.originalException.issues
                      : r.originalException.issues.slice(0, e)
                  ).map(iY);
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
                              return `Failed to validate keys: ${ee(n.join(", "), 100)}`;
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
        },
        iG = {
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
        };
      async function iX(e, t) {
        var n;
        let r,
          i,
          o = iG[e],
          a = (nL.Sentry = nL.Sentry || {});
        if (!o) throw Error(`Cannot lazy load integration: ${e}`);
        let s = a[e];
        if ("function" == typeof s && !("_isShim" in s)) return s;
        let l =
            ((n = o),
            new URL(
              `/8.55.0/${n}.min.js`,
              ((i = (r = eU()) && r.getOptions()) && i.cdnBaseUrl) ||
                "https://browser.sentry-cdn.com",
            ).toString()),
          c = nL.document.createElement("script");
        (c.src = l),
          (c.crossOrigin = "anonymous"),
          (c.referrerPolicy = "origin"),
          t && c.setAttribute("nonce", t);
        let u = new Promise((e, t) => {
            c.addEventListener("load", () => e()),
              c.addEventListener("error", t);
          }),
          d = nL.document.currentScript,
          p = nL.document.body || nL.document.head || (d && d.parentElement);
        if (p) p.appendChild(c);
        else
          throw Error(
            `Could not find parent element to insert lazy-loaded ${e} script`,
          );
        try {
          await u;
        } catch (t) {
          throw Error(`Error when loading integration: ${e}`);
        }
        let h = a[e];
        if ("function" != typeof h)
          throw Error(`Could not load integration: ${e}`);
        return h;
      }
      let iJ = new WeakMap(),
        iK = (e = {}) => {
          let t = e.types || ["crash", "deprecation", "intervention"];
          function n(e) {
            if (iJ.has(eU()))
              for (let t of e)
                e$((e) => {
                  e.setExtra("url", t.url);
                  let n = `ReportingObserver [${t.type}]`,
                    r = "No details available";
                  if (t.body) {
                    let n = {};
                    for (let e in t.body) n[e] = t.body[e];
                    if ((e.setExtra("body", n), "crash" === t.type)) {
                      let e = t.body;
                      r =
                        [e.crashId || "", e.reason || ""].join(" ").trim() || r;
                    } else r = t.body.message || r;
                  }
                  tK(`${n}: ${r}`);
                });
          }
          return {
            name: "ReportingObserver",
            setupOnce() {
              "ReportingObserver" in M &&
                new M.ReportingObserver(n, {
                  buffered: !0,
                  types: t,
                }).observe();
            },
            setup(e) {
              iJ.set(e, !0);
            },
          };
        };
      function iZ(e, t) {
        var n, r, i, o;
        let a = t && t.getDsn(),
          s = t && t.getOptions().tunnel;
        return (
          (n = e),
          (!!(r = a) && n.includes(r.host)) ||
            ((i = e), !!(o = s) && iQ(i) === iQ(o))
        );
      }
      function iQ(e) {
        return "/" === e[e.length - 1] ? e.slice(0, -1) : e;
      }
      let i0 = (e = {}) => {
        let t = {
          failedRequestStatusCodes: [[500, 599]],
          failedRequestTargets: [/.*/],
          ...e,
        };
        return {
          name: "HttpClient",
          setup(e) {
            var n, r, i, o;
            (n = e),
              (r = t),
              e7() &&
                n1((e) => {
                  if (eU() !== n) return;
                  let { response: t, args: i, error: o, virtualError: a } = e,
                    [s, l] = i;
                  t &&
                    (function (e, t, n, r, i) {
                      if (i3(e, n.status, n.url)) {
                        var o, a;
                        let e,
                          s,
                          l,
                          c,
                          u =
                            ((o = t),
                            (!(a = r) && o instanceof Request) ||
                            (o instanceof Request && o.bodyUsed)
                              ? o
                              : new Request(o, a));
                        i4() &&
                          (([e, l] = i1("Cookie", u)),
                          ([s, c] = i1("Set-Cookie", n))),
                          tZ(
                            i5({
                              url: u.url,
                              method: u.method,
                              status: n.status,
                              requestHeaders: e,
                              responseHeaders: s,
                              requestCookies: l,
                              responseCookies: c,
                              error: i,
                            }),
                          );
                      }
                    })(r, s, t, l, o || a);
                }, !1),
              (i = e),
              (o = t),
              "XMLHttpRequest" in M &&
                nX((e) => {
                  if (eU() !== i) return;
                  let { error: t, virtualError: n } = e,
                    r = e.xhr,
                    a = r[nG];
                  if (!a) return;
                  let { method: s, request_headers: l } = a;
                  try {
                    !(function (e, t, n, r, i) {
                      if (i3(e, t.status, t.responseURL)) {
                        let e, o, a;
                        if (i4()) {
                          try {
                            let e =
                              t.getResponseHeader("Set-Cookie") ||
                              t.getResponseHeader("set-cookie") ||
                              void 0;
                            e && (o = i2(e));
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
                        tZ(
                          i5({
                            url: t.responseURL,
                            method: n,
                            status: t.status,
                            requestHeaders: e,
                            responseHeaders: a,
                            responseCookies: o,
                            error: i,
                          }),
                        );
                      }
                    })(o, r, s, l, t || n);
                  } catch (e) {
                    nx &&
                      Q.warn(
                        "Error while extracting response event form XHR response",
                        e,
                      );
                  }
                });
          },
        };
      };
      function i1(e, t) {
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
          t && (i = i2(t));
        } catch (e) {}
        return [o, i];
      }
      function i2(e) {
        return e.split("; ").reduce((e, t) => {
          let [n, r] = t.split("=");
          return n && r && (e[n] = r), e;
        }, {});
      }
      function i3(e, t, n) {
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
            !iZ(n, eU())
        );
      }
      function i5(e) {
        let t = eU(),
          n = t && e.error && e.error instanceof Error ? e.error.stack : void 0,
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
        return ev(o, { type: "http.client", handled: !1 }), o;
      }
      function i4() {
        let e = eU();
        return !!e && !!e.getOptions().sendDefaultPii;
      }
      let i6 = (e = {}) => {
        let t = null != e.frameContextLines ? e.frameContextLines : 7;
        return {
          name: "ContextLines",
          processEvent: (e) =>
            (function (e, t) {
              let n = M.document,
                r = M.location && M.location.href.split(/[?#]/, 1)[0];
              if (!n || !r) return e;
              let i = e.exception && e.exception.values;
              if (!i || !i.length) return e;
              let o = n.documentElement.innerHTML;
              if (!o) return e;
              let a = [
                "<!DOCTYPE html>",
                "<html>",
                ...o.split("\n"),
                "</html>",
              ];
              return (
                i.forEach((e) => {
                  let n = e.stacktrace;
                  n &&
                    n.frames &&
                    (n.frames = n.frames.map((e) => {
                      var n, i, o, s;
                      return (
                        (n = e),
                        (i = a),
                        (o = r),
                        (s = t),
                        n.filename === o &&
                          n.lineno &&
                          i.length &&
                          !(function (e, t, n = 5) {
                            if (void 0 === t.lineno) return;
                            let r = e.length,
                              i = Math.max(Math.min(r - 1, t.lineno - 1), 0);
                            (t.pre_context = e
                              .slice(Math.max(0, i - n), i)
                              .map((e) => et(e, 0))),
                              (t.context_line = et(
                                e[Math.min(r - 1, i)],
                                t.colno || 0,
                              )),
                              (t.post_context = e
                                .slice(Math.min(i + 1, r), i + 1 + n)
                                .map((e) => et(e, 0)));
                          })(i, n, s),
                        n
                      );
                    }));
                }),
                e
              );
            })(e, t),
        };
      };
      function i8(e) {
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
      var i7 = n(72290);
      function i9() {
        let e;
        return (
          "u" > typeof window &&
          (!(
            !(
              "u" > typeof __SENTRY_BROWSER_BUNDLE__ &&
              __SENTRY_BROWSER_BUNDLE__
            ) &&
            "[object process]" ===
              Object.prototype.toString.call(void 0 !== i7 ? i7 : 0)
          ) ||
            (!!(e = M.process) && "renderer" === e.type))
        );
      }
      let oe = (e, t, n, r) => {
          let i, o;
          return (a) => {
            if (
              t.value >= 0 &&
              (a || r) &&
              ((o = t.value - (i || 0)) || void 0 === i)
            ) {
              var s;
              (i = t.value),
                (t.delta = o),
                (s = t.value),
                (t.rating =
                  s > n[1] ? "poor" : s > n[0] ? "needs-improvement" : "good"),
                e(t);
            }
          };
        },
        ot = (e = !0) => {
          let t =
            M.performance &&
            M.performance.getEntriesByType &&
            M.performance.getEntriesByType("navigation")[0];
          if (
            !e ||
            (t && t.responseStart > 0 && t.responseStart < performance.now())
          )
            return t;
        },
        on = () => {
          let e = ot();
          return (e && e.activationStart) || 0;
        },
        or = (e, t) => {
          let n = ot(),
            r = "navigate";
          return (
            n &&
              ((M.document && M.document.prerendering) || on() > 0
                ? (r = "prerender")
                : M.document && M.document.wasDiscarded
                  ? (r = "restore")
                  : n.type && (r = n.type.replace(/_/g, "-"))),
            {
              name: e,
              value: void 0 === t ? -1 : t,
              rating: "good",
              delta: 0,
              entries: [],
              id: `v4-${Date.now()}-${Math.floor(Math.random() * (9e12 - 1)) + 1e12}`,
              navigationType: r,
            }
          );
        },
        oi = (e, t, n) => {
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
        },
        oo = (e) => {
          let t = (t) => {
            ("pagehide" === t.type ||
              (M.document && "hidden" === M.document.visibilityState)) &&
              e(t);
          };
          M.document &&
            (addEventListener("visibilitychange", t, !0),
            addEventListener("pagehide", t, !0));
        },
        oa = (e) => {
          let t = !1;
          return () => {
            t || (e(), (t = !0));
          };
        },
        os = -1,
        ol = (e) => {
          "hidden" === M.document.visibilityState &&
            os > -1 &&
            ((os = "visibilitychange" === e.type ? e.timeStamp : 0), oc());
        },
        oc = () => {
          removeEventListener("visibilitychange", ol, !0),
            removeEventListener("prerenderingchange", ol, !0);
        },
        ou = () => (
          M.document &&
            os < 0 &&
            ((os =
              "hidden" !== M.document.visibilityState || M.document.prerendering
                ? 1 / 0
                : 0),
            addEventListener("visibilitychange", ol, !0),
            addEventListener("prerenderingchange", ol, !0)),
          {
            get firstHiddenTime() {
              return os;
            },
          }
        ),
        od = (e) => {
          M.document && M.document.prerendering
            ? addEventListener("prerenderingchange", () => e(), !0)
            : e();
        },
        op = [1800, 3e3],
        oh = [0.1, 0.25],
        of = [100, 300],
        om = 0,
        og = 1 / 0,
        o_ = 0,
        oy = (e) => {
          e.forEach((e) => {
            e.interactionId &&
              ((og = Math.min(og, e.interactionId)),
              (om = (o_ = Math.max(o_, e.interactionId))
                ? (o_ - og) / 7 + 1
                : 0));
          });
        },
        ov = [],
        ob = new Map(),
        oS = [],
        ow = (e) => {
          if (
            (oS.forEach((t) => t(e)),
            !(e.interactionId || "first-input" === e.entryType))
          )
            return;
          let t = ov[ov.length - 1],
            n = ob.get(e.interactionId);
          if (n || ov.length < 10 || (t && e.duration > t.latency)) {
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
              ob.set(t.id, t), ov.push(t);
            }
            ov.sort((e, t) => t.latency - e.latency),
              ov.length > 10 && ov.splice(10).forEach((e) => ob.delete(e.id));
          }
        },
        oE = (e) => {
          let t = M.requestIdleCallback || M.setTimeout,
            n = -1;
          return (
            (e = oa(e)),
            M.document && "hidden" === M.document.visibilityState
              ? e()
              : ((n = t(e)), oo(e)),
            n
          );
        },
        ok = [200, 500],
        ox = [2500, 4e3],
        oC = {},
        oT = [800, 1800],
        oI = (e) => {
          M.document && M.document.prerendering
            ? od(() => oI(e))
            : M.document && "complete" !== M.document.readyState
              ? addEventListener("load", () => oI(e), !0)
              : setTimeout(e, 0);
        },
        oM = {},
        oR = {};
      function oA(e, t = !1) {
        return oH("cls", e, o$, u, t);
      }
      function oO(e, t = !1) {
        return oH("lcp", e, oU, p, t);
      }
      function oD(e) {
        return oH("fid", e, oF, d);
      }
      function oN(e) {
        return oH("inp", e, oB, f);
      }
      function oL(e, t) {
        var n;
        let r;
        return (
          oz(e, t),
          oR[e] ||
            ((r = {}),
            "event" === (n = e) && (r.durationThreshold = 0),
            oi(
              n,
              (e) => {
                oP(n, { entries: e });
              },
              r,
            ),
            (oR[e] = !0)),
          oW(e, t)
        );
      }
      function oP(e, t) {
        let n = oM[e];
        if (n && n.length)
          for (let r of n)
            try {
              r(t);
            } catch (t) {
              rU &&
                Q.error(
                  `Error while triggering instrumentation handler.
Type: ${e}
Name: ${e0(r)}
Error:`,
                  t,
                );
            }
      }
      function o$() {
        return ((e, t = {}) => {
          ((e, t = {}) => {
            od(() => {
              let n,
                r = ou(),
                i = or("FCP"),
                o = oi("paint", (e) => {
                  e.forEach((e) => {
                    "first-contentful-paint" === e.name &&
                      (o.disconnect(),
                      e.startTime < r.firstHiddenTime &&
                        ((i.value = Math.max(e.startTime - on(), 0)),
                        i.entries.push(e),
                        n(!0)));
                  });
                });
              o && (n = oe(e, i, op, t.reportAllChanges));
            });
          })(
            oa(() => {
              let n,
                r = or("CLS", 0),
                i = 0,
                o = [],
                a = (e) => {
                  e.forEach((e) => {
                    if (!e.hadRecentInput) {
                      let t = o[0],
                        n = o[o.length - 1];
                      i &&
                      t &&
                      n &&
                      e.startTime - n.startTime < 1e3 &&
                      e.startTime - t.startTime < 5e3
                        ? ((i += e.value), o.push(e))
                        : ((i = e.value), (o = [e]));
                    }
                  }),
                    i > r.value && ((r.value = i), (r.entries = o), n());
                },
                s = oi("layout-shift", a);
              s &&
                ((n = oe(e, r, oh, t.reportAllChanges)),
                oo(() => {
                  a(s.takeRecords()), n(!0);
                }),
                setTimeout(n, 0));
            }),
          );
        })(
          (e) => {
            oP("cls", { metric: e }), (u = e);
          },
          { reportAllChanges: !0 },
        );
      }
      function oF() {
        return ((e, t = {}) => {
          od(() => {
            let n,
              r = ou(),
              i = or("FID"),
              o = (e) => {
                e.startTime < r.firstHiddenTime &&
                  ((i.value = e.processingStart - e.startTime),
                  i.entries.push(e),
                  n(!0));
              },
              a = (e) => {
                e.forEach(o);
              },
              s = oi("first-input", a);
            (n = oe(e, i, of, t.reportAllChanges)),
              s &&
                oo(
                  oa(() => {
                    a(s.takeRecords()), s.disconnect();
                  }),
                );
          });
        })((e) => {
          oP("fid", { metric: e }), (d = e);
        });
      }
      function oU() {
        return ((e, t = {}) => {
          od(() => {
            let n,
              r = ou(),
              i = or("LCP"),
              o = (e) => {
                t.reportAllChanges || (e = e.slice(-1)),
                  e.forEach((e) => {
                    e.startTime < r.firstHiddenTime &&
                      ((i.value = Math.max(e.startTime - on(), 0)),
                      (i.entries = [e]),
                      n());
                  });
              },
              a = oi("largest-contentful-paint", o);
            if (a) {
              n = oe(e, i, ox, t.reportAllChanges);
              let r = oa(() => {
                oC[i.id] ||
                  (o(a.takeRecords()), a.disconnect(), (oC[i.id] = !0), n(!0));
              });
              ["keydown", "click"].forEach((e) => {
                M.document &&
                  addEventListener(e, () => oE(r), { once: !0, capture: !0 });
              }),
                oo(r);
            }
          });
        })(
          (e) => {
            oP("lcp", { metric: e }), (p = e);
          },
          { reportAllChanges: !0 },
        );
      }
      function oj() {
        return ((e, t = {}) => {
          let n = or("TTFB"),
            r = oe(e, n, oT, t.reportAllChanges);
          oI(() => {
            let e = ot();
            e &&
              ((n.value = Math.max(e.responseStart - on(), 0)),
              (n.entries = [e]),
              r(!0));
          });
        })((e) => {
          oP("ttfb", { metric: e }), (h = e);
        });
      }
      function oB() {
        return ((e, t = {}) => {
          "PerformanceEventTiming" in M &&
            "interactionId" in PerformanceEventTiming.prototype &&
            od(() => {
              let n;
              "interactionCount" in performance ||
                c ||
                (c = oi("event", oy, {
                  type: "event",
                  buffered: !0,
                  durationThreshold: 0,
                }));
              let r = or("INP"),
                i = (e) => {
                  oE(() => {
                    let t;
                    e.forEach(ow);
                    let i =
                      ((t = Math.min(
                        ov.length - 1,
                        Math.floor(
                          ((c ? om : performance.interactionCount || 0) - 0) /
                            50,
                        ),
                      )),
                      ov[t]);
                    i &&
                      i.latency !== r.value &&
                      ((r.value = i.latency), (r.entries = i.entries), n());
                  });
                },
                o = oi("event", i, {
                  durationThreshold:
                    null != t.durationThreshold ? t.durationThreshold : 40,
                });
              (n = oe(e, r, ok, t.reportAllChanges)),
                o &&
                  (o.observe({ type: "first-input", buffered: !0 }),
                  oo(() => {
                    i(o.takeRecords()), n(!0);
                  }));
            });
        })((e) => {
          oP("inp", { metric: e }), (f = e);
        });
      }
      function oH(e, t, n, r, i = !1) {
        let o;
        return (
          oz(e, t),
          oR[e] || ((o = n()), (oR[e] = !0)),
          r && t({ metric: r }),
          oW(e, t, i ? o : void 0)
        );
      }
      function oz(e, t) {
        (oM[e] = oM[e] || []), oM[e].push(t);
      }
      function oW(e, t, n) {
        return () => {
          n && n();
          let r = oM[e];
          if (!r) return;
          let i = r.indexOf(t);
          -1 !== i && r.splice(i, 1);
        };
      }
      let oq = "sentryReplaySession",
        oY = "Unable to send Replay";
      function oV(e, t) {
        return null != e ? e : t();
      }
      function oG(e) {
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
      function oX(e) {
        let t = oG([e, "optionalAccess", (e) => e.host]);
        return oG([t, "optionalAccess", (e) => e.shadowRoot]) === e;
      }
      function oJ(e) {
        return "[object ShadowRoot]" === Object.prototype.toString.call(e);
      }
      function oK(e) {
        try {
          var t;
          let n = e.rules || e.cssRules;
          return n
            ? ((t = Array.from(n, oZ).join("")).includes(
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
      function oZ(e) {
        let t;
        if ("styleSheet" in e)
          try {
            t =
              oK(e.styleSheet) ||
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
              (t = t.replace(/(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm, "$1\\$2")),
            n || r)
          )
            return t;
        }
        return t || e.cssText;
      }
      ((cR = cB || (cB = {}))[(cR.Document = 0)] = "Document"),
        (cR[(cR.DocumentType = 1)] = "DocumentType"),
        (cR[(cR.Element = 2)] = "Element"),
        (cR[(cR.Text = 3)] = "Text"),
        (cR[(cR.CDATA = 4)] = "CDATA"),
        (cR[(cR.Comment = 5)] = "Comment");
      class oQ {
        constructor() {
          (this.idNodeMap = new Map()), (this.nodeMetaMap = new WeakMap());
        }
        getId(e) {
          return e
            ? oV(
                oG([
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
      function o0({ maskInputOptions: e, tagName: t, type: n }) {
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
      function o1({ isMasked: e, element: t, value: n, maskInputFn: r }) {
        let i = n || "";
        return e ? (r && (i = r(i, t)), "*".repeat(i.length)) : i;
      }
      function o2(e) {
        return e.toLowerCase();
      }
      function o3(e) {
        return e.toUpperCase();
      }
      let o5 = "__rrweb_original__";
      function o4(e) {
        let t = e.type;
        return e.hasAttribute("data-rr-is-password")
          ? "password"
          : t
            ? o2(t)
            : null;
      }
      function o6(e, t, n) {
        return "INPUT" === t && ("radio" === n || "checkbox" === n)
          ? e.getAttribute("value") || ""
          : e.value;
      }
      function o8(e, t) {
        let n;
        try {
          n = new URL(
            e,
            oV(t, () => window.location.href),
          );
        } catch (e) {
          return null;
        }
        return oV(
          oG([
            n.pathname.match(/\.([0-9a-z]+)(?:$)/i),
            "optionalAccess",
            (e) => e[1],
          ]),
          () => null,
        );
      }
      let o7 = {};
      function o9(e) {
        let t = o7[e];
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
        return (o7[e] = r.bind(window));
      }
      function ae(...e) {
        return o9("setTimeout")(...e);
      }
      function at(...e) {
        return o9("clearTimeout")(...e);
      }
      function an(e) {
        try {
          return e.contentDocument;
        } catch (e) {}
      }
      let ar = 1,
        ai = RegExp("[^a-z0-9-_:]");
      function ao() {
        return ar++;
      }
      let aa = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
        as = /^(?:[a-z+]+:)?\/\//i,
        al = /^www\..*/i,
        ac = /^(data:)([^,]*),(.*)/i;
      function au(e, t) {
        return (e || "").replace(aa, (e, n, r, i, o, a) => {
          let s = r || o || a,
            l = n || i || "";
          if (!s) return e;
          if (as.test(s) || al.test(s) || ac.test(s))
            return `url(${l}${s}${l})`;
          if ("/" === s[0])
            return `url(${l}${(t.indexOf("//") > -1 ? t.split("/").slice(0, 3).join("/") : t.split("/")[0]).split("?")[0] + s}${l})`;
          let c = t.split("/"),
            u = s.split("/");
          for (let e of (c.pop(), u))
            if ("." === e) continue;
            else ".." === e ? c.pop() : c.push(e);
          return `url(${l}${c.join("/")}${l})`;
        });
      }
      let ad = /^[^ \t\n\r\u000c]+/,
        ap = /^[, \t\n\r\u000c]+/,
        ah = new WeakMap();
      function af(e, t) {
        return t && "" !== t.trim() ? am(e, t) : t;
      }
      function am(e, t) {
        let n = ah.get(e);
        if ((n || ((n = e.createElement("a")), ah.set(e, n)), t)) {
          if (t.startsWith("blob:") || t.startsWith("data:")) return t;
        } else t = "";
        return n.setAttribute("href", t), n.href;
      }
      function ag(e, t, n, r, i, o) {
        if (!r) return r;
        if (
          "src" === n ||
          ("href" === n && ("use" !== t || "#" !== r[0])) ||
          ("xlink:href" === n && "#" !== r[0])
        )
          return af(e, r);
        if ("background" === n && ("table" === t || "td" === t || "th" === t))
          return af(e, r);
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
            for (; r(ap), !(n >= t.length); ) {
              let o = r(ad);
              if ("," === o.slice(-1))
                (o = af(e, o.substring(0, o.length - 1))), i.push(o);
              else {
                let r = "";
                o = af(e, o);
                let a = !1;
                for (;;) {
                  let e = t.charAt(n);
                  if ("" === e) {
                    i.push((o + r).trim());
                    break;
                  }
                  if (a) ")" === e && (a = !1);
                  else if ("," === e) {
                    (n += 1), i.push((o + r).trim());
                    break;
                  } else "(" === e && (a = !0);
                  (r += e), (n += 1);
                }
              }
            }
            return i.join(", ");
          })(e, r);
        if ("style" === n) return au(r, am(e));
        else if ("object" === t && "data" === n) return af(e, r);
        return "function" == typeof o ? o(n, r, i) : r;
      }
      function a_(e, t, n) {
        return ("video" === e || "audio" === e) && "autoplay" === t;
      }
      function ay(e, t, n = 1 / 0, r = 0) {
        return !e || e.nodeType !== e.ELEMENT_NODE || r > n
          ? -1
          : t(e)
            ? r
            : ay(e.parentNode, t, n, r + 1);
      }
      function av(e, t) {
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
      function ab(e, t, n, r, i, o) {
        try {
          let a = e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
          if (null === a) return !1;
          if ("INPUT" === a.tagName) {
            let e = a.getAttribute("autocomplete");
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
          let s = -1,
            l = -1;
          if (o) {
            if ((l = ay(a, av(r, i))) < 0) return !0;
            s = ay(a, av(t, n), l >= 0 ? l : 1 / 0);
          } else {
            if ((s = ay(a, av(t, n))) < 0) return !1;
            l = ay(a, av(r, i), s >= 0 ? s : 1 / 0);
          }
          return s >= 0 ? !(l >= 0) || s <= l : !(l >= 0) && !!o;
        } catch (e) {}
        return !!o;
      }
      function aS(e) {
        return null == e ? "" : e.toLowerCase();
      }
      function aw(e, t) {
        let n,
          {
            doc: r,
            mirror: i,
            blockClass: o,
            blockSelector: a,
            unblockSelector: s,
            maskAllText: l,
            maskTextClass: c,
            unmaskTextClass: u,
            maskTextSelector: d,
            unmaskTextSelector: p,
            skipChild: h = !1,
            inlineStylesheet: f = !0,
            maskInputOptions: _ = {},
            maskAttributeFn: y,
            maskTextFn: v,
            maskInputFn: b,
            slimDOMOptions: S,
            dataURLOptions: w = {},
            inlineImages: E = !1,
            recordCanvas: k = !1,
            onSerialize: x,
            onIframeLoad: C,
            iframeLoadTimeout: T = 5e3,
            onStylesheetLoad: I,
            stylesheetLoadTimeout: M = 5e3,
            keepIframeSrcFn: R = () => !1,
            newlyAddedElement: A = !1,
          } = t,
          { preserveWhiteSpace: O = !0 } = t,
          D = (function (e, t) {
            let {
                doc: n,
                mirror: r,
                blockClass: i,
                blockSelector: o,
                unblockSelector: a,
                maskAllText: s,
                maskAttributeFn: l,
                maskTextClass: c,
                unmaskTextClass: u,
                maskTextSelector: d,
                unmaskTextSelector: p,
                inlineStylesheet: h,
                maskInputOptions: f = {},
                maskTextFn: _,
                maskInputFn: y,
                dataURLOptions: v = {},
                inlineImages: b,
                recordCanvas: S,
                keepIframeSrcFn: w,
                newlyAddedElement: E = !1,
              } = t,
              k = (function (e, t) {
                if (!t.hasNode(e)) return;
                let n = t.getId(e);
                return 1 === n ? void 0 : n;
              })(n, r);
            switch (e.nodeType) {
              case e.DOCUMENT_NODE:
                if ("CSS1Compat" !== e.compatMode)
                  return {
                    type: cB.Document,
                    childNodes: [],
                    compatMode: e.compatMode,
                  };
                return { type: cB.Document, childNodes: [] };
              case e.DOCUMENT_TYPE_NODE:
                return {
                  type: cB.DocumentType,
                  name: e.name,
                  publicId: e.publicId,
                  systemId: e.systemId,
                  rootId: k,
                };
              case e.ELEMENT_NODE:
                return (function (e, t) {
                  let n,
                    {
                      doc: r,
                      blockClass: i,
                      blockSelector: o,
                      unblockSelector: a,
                      inlineStylesheet: s,
                      maskInputOptions: l = {},
                      maskAttributeFn: c,
                      maskInputFn: u,
                      dataURLOptions: d = {},
                      inlineImages: p,
                      recordCanvas: h,
                      keepIframeSrcFn: f,
                      newlyAddedElement: _ = !1,
                      rootId: y,
                      maskAllText: v,
                      maskTextClass: b,
                      unmaskTextClass: S,
                      maskTextSelector: w,
                      unmaskTextSelector: E,
                    } = t,
                    k = (function (e, t, n, r) {
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
                    })(e, i, o, a),
                    x = (function (e) {
                      if (e instanceof HTMLFormElement) return "form";
                      let t = o2(e.tagName);
                      return ai.test(t) ? "div" : t;
                    })(e),
                    C = {},
                    T = e.attributes.length;
                  for (let t = 0; t < T; t++) {
                    let n = e.attributes[t];
                    n.name &&
                      !a_(x, n.name, n.value) &&
                      (C[n.name] = ag(r, x, o2(n.name), n.value, e, c));
                  }
                  if ("link" === x && s) {
                    let t = Array.from(r.styleSheets).find(
                        (t) => t.href === e.href,
                      ),
                      n = null;
                    t && (n = oK(t)),
                      n &&
                        ((C.rel = null),
                        (C.href = null),
                        (C.crossorigin = null),
                        (C._cssText = au(n, t.href)));
                  }
                  if (
                    "style" === x &&
                    e.sheet &&
                    !(e.innerText || e.textContent || "").trim().length
                  ) {
                    let t = oK(e.sheet);
                    t && (C._cssText = au(t, am(r)));
                  }
                  if (
                    "input" === x ||
                    "textarea" === x ||
                    "select" === x ||
                    "option" === x
                  ) {
                    let t = o4(e),
                      n = o6(e, o3(x), t),
                      r = e.checked;
                    if ("submit" !== t && "button" !== t && n) {
                      let r = ab(
                        e,
                        b,
                        w,
                        S,
                        E,
                        o0({ type: t, tagName: o3(x), maskInputOptions: l }),
                      );
                      C.value = o1({
                        isMasked: r,
                        element: e,
                        value: n,
                        maskInputFn: u,
                      });
                    }
                    r && (C.checked = r);
                  }
                  if (
                    ("option" === x &&
                      (e.selected && !l.select
                        ? (C.selected = !0)
                        : delete C.selected),
                    "canvas" === x && h)
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
                                (o5 in i ? i[o5] : i).call(
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
                      })(e) && (C.rr_dataURL = e.toDataURL(d.type, d.quality));
                    else if (!("__context" in e)) {
                      let t = e.toDataURL(d.type, d.quality),
                        n = r.createElement("canvas");
                      (n.width = e.width),
                        (n.height = e.height),
                        t !== n.toDataURL(d.type, d.quality) &&
                          (C.rr_dataURL = t);
                    }
                  }
                  if ("img" === x && p) {
                    m || (g = (m = r.createElement("canvas")).getContext("2d"));
                    let t =
                        e.currentSrc ||
                        e.getAttribute("src") ||
                        "<unknown-src>",
                      n = e.crossOrigin,
                      i = () => {
                        e.removeEventListener("load", i);
                        try {
                          (m.width = e.naturalWidth),
                            (m.height = e.naturalHeight),
                            g.drawImage(e, 0, 0),
                            (C.rr_dataURL = m.toDataURL(d.type, d.quality));
                        } catch (n) {
                          if ("anonymous" !== e.crossOrigin) {
                            (e.crossOrigin = "anonymous"),
                              e.complete && 0 !== e.naturalWidth
                                ? i()
                                : e.addEventListener("load", i);
                            return;
                          }
                          console.warn(
                            `Cannot inline img src=${t}! Error: ${n}`,
                          );
                        }
                        "anonymous" === e.crossOrigin &&
                          (n
                            ? (C.crossOrigin = n)
                            : e.removeAttribute("crossorigin"));
                      };
                    e.complete && 0 !== e.naturalWidth
                      ? i()
                      : e.addEventListener("load", i);
                  }
                  if (
                    (("audio" === x || "video" === x) &&
                      ((C.rr_mediaState = e.paused ? "paused" : "played"),
                      (C.rr_mediaCurrentTime = e.currentTime)),
                    !_ &&
                      (e.scrollLeft && (C.rr_scrollLeft = e.scrollLeft),
                      e.scrollTop && (C.rr_scrollTop = e.scrollTop)),
                    k)
                  ) {
                    let { width: t, height: n } = e.getBoundingClientRect();
                    C = {
                      class: C.class,
                      rr_width: `${t}px`,
                      rr_height: `${n}px`,
                    };
                  }
                  "iframe" !== x ||
                    f(C.src) ||
                    (k || an(e) || (C.rr_src = C.src), delete C.src);
                  try {
                    customElements.get(x) && (n = !0);
                  } catch (e) {}
                  return {
                    type: cB.Element,
                    tagName: x,
                    attributes: C,
                    childNodes: [],
                    isSVG:
                      !!("svg" === e.tagName || e.ownerSVGElement) || void 0,
                    needBlock: k,
                    rootId: y,
                    isCustom: n,
                  };
                })(e, {
                  doc: n,
                  blockClass: i,
                  blockSelector: o,
                  unblockSelector: a,
                  inlineStylesheet: h,
                  maskAttributeFn: l,
                  maskInputOptions: f,
                  maskInputFn: y,
                  dataURLOptions: v,
                  inlineImages: b,
                  recordCanvas: S,
                  keepIframeSrcFn: w,
                  newlyAddedElement: E,
                  rootId: k,
                  maskAllText: s,
                  maskTextClass: c,
                  unmaskTextClass: u,
                  maskTextSelector: d,
                  unmaskTextSelector: p,
                });
              case e.TEXT_NODE:
                return (function (e, t) {
                  let {
                      maskAllText: n,
                      maskTextClass: r,
                      unmaskTextClass: i,
                      maskTextSelector: o,
                      unmaskTextSelector: a,
                      maskTextFn: s,
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
                        (oG([
                          e,
                          "access",
                          (e) => e.parentNode,
                          "access",
                          (e) => e.sheet,
                          "optionalAccess",
                          (e) => e.cssRules,
                        ]) &&
                          (p = oK(e.parentNode.sheet)));
                    } catch (t) {
                      console.warn(
                        `Cannot get CSS styles from text's parentNode. Error: ${t}`,
                        e,
                      );
                    }
                    p = au(p, am(t.doc));
                  }
                  f && (p = "SCRIPT_PLACEHOLDER");
                  let g = ab(e, r, o, i, a, n);
                  return (
                    h ||
                      f ||
                      m ||
                      !p ||
                      !g ||
                      (p = s ? s(p, e.parentElement) : p.replace(/[\S]/g, "*")),
                    m &&
                      p &&
                      (l.textarea || g) &&
                      (p = c ? c(p, e.parentNode) : p.replace(/[\S]/g, "*")),
                    "OPTION" === d &&
                      p &&
                      (p = o1({
                        isMasked: ab(
                          e,
                          r,
                          o,
                          i,
                          a,
                          o0({ type: null, tagName: d, maskInputOptions: l }),
                        ),
                        element: e,
                        value: p,
                        maskInputFn: c,
                      })),
                    {
                      type: cB.Text,
                      textContent: p || "",
                      isStyle: h,
                      rootId: u,
                    }
                  );
                })(e, {
                  doc: n,
                  maskAllText: s,
                  maskTextClass: c,
                  unmaskTextClass: u,
                  maskTextSelector: d,
                  unmaskTextSelector: p,
                  maskTextFn: _,
                  maskInputOptions: f,
                  maskInputFn: y,
                  rootId: k,
                });
              case e.CDATA_SECTION_NODE:
                return { type: cB.CDATA, textContent: "", rootId: k };
              case e.COMMENT_NODE:
                return {
                  type: cB.Comment,
                  textContent: e.textContent || "",
                  rootId: k,
                };
              default:
                return !1;
            }
          })(e, {
            doc: r,
            mirror: i,
            blockClass: o,
            blockSelector: a,
            maskAllText: l,
            unblockSelector: s,
            maskTextClass: c,
            unmaskTextClass: u,
            maskTextSelector: d,
            unmaskTextSelector: p,
            inlineStylesheet: f,
            maskInputOptions: _,
            maskAttributeFn: y,
            maskTextFn: v,
            maskInputFn: b,
            dataURLOptions: w,
            inlineImages: E,
            recordCanvas: k,
            keepIframeSrcFn: R,
            newlyAddedElement: A,
          });
        if (!D) return console.warn(e, "not serialized"), null;
        n = i.hasNode(e)
          ? i.getId(e)
          : !(function (e, t) {
                if (t.comment && e.type === cB.Comment) return !0;
                if (e.type === cB.Element) {
                  if (
                    t.script &&
                    ("script" === e.tagName ||
                      ("link" === e.tagName &&
                        ("preload" === e.attributes.rel ||
                          "modulepreload" === e.attributes.rel)) ||
                      ("link" === e.tagName &&
                        "prefetch" === e.attributes.rel &&
                        "string" == typeof e.attributes.href &&
                        "js" === o8(e.attributes.href)))
                  )
                    return !0;
                  else if (
                    t.headFavicon &&
                    (("link" === e.tagName &&
                      "shortcut icon" === e.attributes.rel) ||
                      ("meta" === e.tagName &&
                        (aS(e.attributes.name).match(
                          /^msapplication-tile(image|color)$/,
                        ) ||
                          "application-name" === aS(e.attributes.name) ||
                          "icon" === aS(e.attributes.rel) ||
                          "apple-touch-icon" === aS(e.attributes.rel) ||
                          "shortcut icon" === aS(e.attributes.rel))))
                  )
                    return !0;
                  else if ("meta" === e.tagName) {
                    if (
                      t.headMetaDescKeywords &&
                      aS(e.attributes.name).match(/^description|keywords$/)
                    )
                      return !0;
                    else if (
                      t.headMetaSocial &&
                      (aS(e.attributes.property).match(/^(og|twitter|fb):/) ||
                        aS(e.attributes.name).match(/^(og|twitter):/) ||
                        "pinterest" === aS(e.attributes.name))
                    )
                      return !0;
                    else if (
                      t.headMetaRobots &&
                      ("robots" === aS(e.attributes.name) ||
                        "googlebot" === aS(e.attributes.name) ||
                        "bingbot" === aS(e.attributes.name))
                    )
                      return !0;
                    else if (
                      t.headMetaHttpEquiv &&
                      void 0 !== e.attributes["http-equiv"]
                    )
                      return !0;
                    else if (
                      t.headMetaAuthorship &&
                      ("author" === aS(e.attributes.name) ||
                        "generator" === aS(e.attributes.name) ||
                        "framework" === aS(e.attributes.name) ||
                        "publisher" === aS(e.attributes.name) ||
                        "progid" === aS(e.attributes.name) ||
                        aS(e.attributes.property).match(/^article:/) ||
                        aS(e.attributes.property).match(/^product:/))
                    )
                      return !0;
                    else if (
                      t.headMetaVerification &&
                      ("google-site-verification" === aS(e.attributes.name) ||
                        "yandex-verification" === aS(e.attributes.name) ||
                        "csrf-token" === aS(e.attributes.name) ||
                        "p:domain_verify" === aS(e.attributes.name) ||
                        "verify-v1" === aS(e.attributes.name) ||
                        "verification" === aS(e.attributes.name) ||
                        "shopify-checkout-api-token" === aS(e.attributes.name))
                    )
                      return !0;
                  }
                }
                return !1;
              })(D, S) &&
              (O ||
                D.type !== cB.Text ||
                D.isStyle ||
                D.textContent.replace(/^\s+|\s+$/gm, "").length)
            ? ao()
            : -2;
        let N = Object.assign(D, { id: n });
        if ((i.add(e, N), -2 === n)) return null;
        x && x(e);
        let L = !h;
        if (N.type === cB.Element) {
          (L = L && !N.needBlock), delete N.needBlock;
          let t = e.shadowRoot;
          t && oJ(t) && (N.isShadowHost = !0);
        }
        if ((N.type === cB.Document || N.type === cB.Element) && L) {
          S.headWhitespace &&
            N.type === cB.Element &&
            "head" === N.tagName &&
            (O = !1);
          let t = {
            doc: r,
            mirror: i,
            blockClass: o,
            blockSelector: a,
            maskAllText: l,
            unblockSelector: s,
            maskTextClass: c,
            unmaskTextClass: u,
            maskTextSelector: d,
            unmaskTextSelector: p,
            skipChild: h,
            inlineStylesheet: f,
            maskInputOptions: _,
            maskAttributeFn: y,
            maskTextFn: v,
            maskInputFn: b,
            slimDOMOptions: S,
            dataURLOptions: w,
            inlineImages: E,
            recordCanvas: k,
            preserveWhiteSpace: O,
            onSerialize: x,
            onIframeLoad: C,
            iframeLoadTimeout: T,
            onStylesheetLoad: I,
            stylesheetLoadTimeout: M,
            keepIframeSrcFn: R,
          };
          for (let n of Array.from(e.childNodes)) {
            let e = aw(n, t);
            e && N.childNodes.push(e);
          }
          if (e.nodeType === e.ELEMENT_NODE && e.shadowRoot)
            for (let n of Array.from(e.shadowRoot.childNodes)) {
              let r = aw(n, t);
              r &&
                (oJ(e.shadowRoot) && (r.isShadow = !0), N.childNodes.push(r));
            }
        }
        return (
          e.parentNode &&
            oX(e.parentNode) &&
            oJ(e.parentNode) &&
            (N.isShadow = !0),
          N.type === cB.Element &&
            "iframe" === N.tagName &&
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
                let r = ae(() => {
                  o || (t(), (o = !0));
                }, n);
                e.addEventListener("load", () => {
                  at(r), (o = !0), t();
                });
                return;
              }
              let a = "about:blank";
              if (i.location.href !== a || e.src === a || "" === e.src)
                return ae(t, 0), e.addEventListener("load", t);
              e.addEventListener("load", t);
            })(
              e,
              () => {
                let t = an(e);
                if (t && C) {
                  let n = aw(t, {
                    doc: t,
                    mirror: i,
                    blockClass: o,
                    blockSelector: a,
                    unblockSelector: s,
                    maskAllText: l,
                    maskTextClass: c,
                    unmaskTextClass: u,
                    maskTextSelector: d,
                    unmaskTextSelector: p,
                    skipChild: !1,
                    inlineStylesheet: f,
                    maskInputOptions: _,
                    maskAttributeFn: y,
                    maskTextFn: v,
                    maskInputFn: b,
                    slimDOMOptions: S,
                    dataURLOptions: w,
                    inlineImages: E,
                    recordCanvas: k,
                    preserveWhiteSpace: O,
                    onSerialize: x,
                    onIframeLoad: C,
                    iframeLoadTimeout: T,
                    onStylesheetLoad: I,
                    stylesheetLoadTimeout: M,
                    keepIframeSrcFn: R,
                  });
                  n && C(e, n);
                }
              },
              T,
            ),
          N.type === cB.Element &&
            "link" === N.tagName &&
            "string" == typeof N.attributes.rel &&
            ("stylesheet" === N.attributes.rel ||
              ("preload" === N.attributes.rel &&
                "string" == typeof N.attributes.href &&
                "css" === o8(N.attributes.href))) &&
            (function (e, t, n) {
              let r,
                i = !1;
              try {
                r = e.sheet;
              } catch (e) {
                return;
              }
              if (r) return;
              let o = ae(() => {
                i || (t(), (i = !0));
              }, n);
              e.addEventListener("load", () => {
                at(o), (i = !0), t();
              });
            })(
              e,
              () => {
                if (I) {
                  let t = aw(e, {
                    doc: r,
                    mirror: i,
                    blockClass: o,
                    blockSelector: a,
                    unblockSelector: s,
                    maskAllText: l,
                    maskTextClass: c,
                    unmaskTextClass: u,
                    maskTextSelector: d,
                    unmaskTextSelector: p,
                    skipChild: !1,
                    inlineStylesheet: f,
                    maskInputOptions: _,
                    maskAttributeFn: y,
                    maskTextFn: v,
                    maskInputFn: b,
                    slimDOMOptions: S,
                    dataURLOptions: w,
                    inlineImages: E,
                    recordCanvas: k,
                    preserveWhiteSpace: O,
                    onSerialize: x,
                    onIframeLoad: C,
                    iframeLoadTimeout: T,
                    onStylesheetLoad: I,
                    stylesheetLoadTimeout: M,
                    keepIframeSrcFn: R,
                  });
                  t && I(e, t);
                }
              },
              M,
            ),
          N
        );
      }
      function aE(e) {
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
      function ak(e, t, n = document) {
        let r = { capture: !0, passive: !0 };
        return (
          n.addEventListener(e, t, r), () => n.removeEventListener(e, t, r)
        );
      }
      let ax =
          "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.",
        aC = {
          map: {},
          getId: () => (console.error(ax), -1),
          getNode: () => (console.error(ax), null),
          removeNodeFromMap() {
            console.error(ax);
          },
          has: () => (console.error(ax), !1),
          reset() {
            console.error(ax);
          },
        };
      function aT(e, t, n = {}) {
        let r = null,
          i = 0;
        return function (...o) {
          let a = Date.now();
          i || !1 !== n.leading || (i = a);
          let s = t - (a - i),
            l = this;
          s <= 0 || s > t
            ? (r &&
                ((function (...e) {
                  aW("clearTimeout")(...e);
                })(r),
                (r = null)),
              (i = a),
              e.apply(l, o))
            : r ||
              !1 === n.trailing ||
              (r = aq(() => {
                (i = !1 === n.leading ? 0 : Date.now()),
                  (r = null),
                  e.apply(l, o);
              }, s));
        };
      }
      function aI(e, t, n) {
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
        (aC = new Proxy(aC, {
          get: (e, t, n) => (
            "map" === t && console.error(ax), Reflect.get(e, t, n)
          ),
        }));
      let aM = Date.now;
      function aR(e) {
        let t = e.document;
        return {
          left: t.scrollingElement
            ? t.scrollingElement.scrollLeft
            : void 0 !== e.pageXOffset
              ? e.pageXOffset
              : aE([
                  t,
                  "optionalAccess",
                  (e) => e.documentElement,
                  "access",
                  (e) => e.scrollLeft,
                ]) ||
                aE([
                  t,
                  "optionalAccess",
                  (e) => e.body,
                  "optionalAccess",
                  (e) => e.parentElement,
                  "optionalAccess",
                  (e) => e.scrollLeft,
                ]) ||
                aE([
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
              : aE([
                  t,
                  "optionalAccess",
                  (e) => e.documentElement,
                  "access",
                  (e) => e.scrollTop,
                ]) ||
                aE([
                  t,
                  "optionalAccess",
                  (e) => e.body,
                  "optionalAccess",
                  (e) => e.parentElement,
                  "optionalAccess",
                  (e) => e.scrollTop,
                ]) ||
                aE([
                  t,
                  "optionalAccess",
                  (e) => e.body,
                  "optionalAccess",
                  (e) => e.scrollTop,
                ]) ||
                0,
        };
      }
      function aA() {
        return (
          window.innerHeight ||
          (document.documentElement && document.documentElement.clientHeight) ||
          (document.body && document.body.clientHeight)
        );
      }
      function aO() {
        return (
          window.innerWidth ||
          (document.documentElement && document.documentElement.clientWidth) ||
          (document.body && document.body.clientWidth)
        );
      }
      function aD(e) {
        return e ? (e.nodeType === e.ELEMENT_NODE ? e : e.parentElement) : null;
      }
      function aN(e, t, n, r, i) {
        if (!e) return !1;
        let o = aD(e);
        if (!o) return !1;
        let a = av(t, n);
        if (!i) {
          let e = r && o.matches(r);
          return a(o) && !e;
        }
        let s = ay(o, a),
          l = -1;
        return (
          !(s < 0) &&
          (r && (l = ay(o, av(null, r))), (s > -1 && l < 0) || s < l)
        );
      }
      function aL(e, t) {
        return -2 === t.getId(e);
      }
      function aP(e) {
        return !!e.changedTouches;
      }
      function a$(e, t) {
        return !!("IFRAME" === e.nodeName && t.getMeta(e));
      }
      function aF(e, t) {
        return !!(
          "LINK" === e.nodeName &&
          e.nodeType === e.ELEMENT_NODE &&
          e.getAttribute &&
          "stylesheet" === e.getAttribute("rel") &&
          t.getMeta(e)
        );
      }
      function aU(e) {
        return !!aE([e, "optionalAccess", (e) => e.shadowRoot]);
      }
      /[1-9][0-9]{12}/.test(Date.now().toString()) ||
        (aM = () => new Date().getTime());
      class aj {
        constructor() {
          (this.id = 1),
            (this.styleIDMap = new WeakMap()),
            (this.idStyleMap = new Map());
        }
        getId(e) {
          var t, n;
          return (
            (t = this.styleIDMap.get(e)), (n = () => -1), null != t ? t : n()
          );
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
      function aB(e) {
        let t = null;
        return (
          aE([
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
      function aH(e) {
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
                for (; (t = aB(n)); ) n = t;
                return n;
              })(e);
              return t.contains(n);
            })(e))
        );
      }
      let az = {};
      function aW(e) {
        let t = az[e];
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
        return (az[e] = r.bind(window));
      }
      function aq(...e) {
        return aW("setTimeout")(...e);
      }
      var aY =
          (((cA = aY || {})[(cA.DomContentLoaded = 0)] = "DomContentLoaded"),
          (cA[(cA.Load = 1)] = "Load"),
          (cA[(cA.FullSnapshot = 2)] = "FullSnapshot"),
          (cA[(cA.IncrementalSnapshot = 3)] = "IncrementalSnapshot"),
          (cA[(cA.Meta = 4)] = "Meta"),
          (cA[(cA.Custom = 5)] = "Custom"),
          (cA[(cA.Plugin = 6)] = "Plugin"),
          cA),
        aV =
          (((cO = aV || {})[(cO.Mutation = 0)] = "Mutation"),
          (cO[(cO.MouseMove = 1)] = "MouseMove"),
          (cO[(cO.MouseInteraction = 2)] = "MouseInteraction"),
          (cO[(cO.Scroll = 3)] = "Scroll"),
          (cO[(cO.ViewportResize = 4)] = "ViewportResize"),
          (cO[(cO.Input = 5)] = "Input"),
          (cO[(cO.TouchMove = 6)] = "TouchMove"),
          (cO[(cO.MediaInteraction = 7)] = "MediaInteraction"),
          (cO[(cO.StyleSheetRule = 8)] = "StyleSheetRule"),
          (cO[(cO.CanvasMutation = 9)] = "CanvasMutation"),
          (cO[(cO.Font = 10)] = "Font"),
          (cO[(cO.Log = 11)] = "Log"),
          (cO[(cO.Drag = 12)] = "Drag"),
          (cO[(cO.StyleDeclaration = 13)] = "StyleDeclaration"),
          (cO[(cO.Selection = 14)] = "Selection"),
          (cO[(cO.AdoptedStyleSheet = 15)] = "AdoptedStyleSheet"),
          (cO[(cO.CustomElement = 16)] = "CustomElement"),
          cO),
        aG =
          (((cD = aG || {})[(cD.MouseUp = 0)] = "MouseUp"),
          (cD[(cD.MouseDown = 1)] = "MouseDown"),
          (cD[(cD.Click = 2)] = "Click"),
          (cD[(cD.ContextMenu = 3)] = "ContextMenu"),
          (cD[(cD.DblClick = 4)] = "DblClick"),
          (cD[(cD.Focus = 5)] = "Focus"),
          (cD[(cD.Blur = 6)] = "Blur"),
          (cD[(cD.TouchStart = 7)] = "TouchStart"),
          (cD[(cD.TouchMove_Departed = 8)] = "TouchMove_Departed"),
          (cD[(cD.TouchEnd = 9)] = "TouchEnd"),
          (cD[(cD.TouchCancel = 10)] = "TouchCancel"),
          cD),
        aX =
          (((cN = aX || {})[(cN.Mouse = 0)] = "Mouse"),
          (cN[(cN.Pen = 1)] = "Pen"),
          (cN[(cN.Touch = 2)] = "Touch"),
          cN);
      function aJ(e) {
        try {
          return e.contentDocument;
        } catch (e) {}
      }
      ((cL = cH || (cH = {}))[(cL.Document = 0)] = "Document"),
        (cL[(cL.DocumentType = 1)] = "DocumentType"),
        (cL[(cL.Element = 2)] = "Element"),
        (cL[(cL.Text = 3)] = "Text"),
        (cL[(cL.CDATA = 4)] = "CDATA"),
        (cL[(cL.Comment = 5)] = "Comment"),
        ((cP = cz || (cz = {}))[(cP.PLACEHOLDER = 0)] = "PLACEHOLDER"),
        (cP[(cP.ELEMENT_NODE = 1)] = "ELEMENT_NODE"),
        (cP[(cP.ATTRIBUTE_NODE = 2)] = "ATTRIBUTE_NODE"),
        (cP[(cP.TEXT_NODE = 3)] = "TEXT_NODE"),
        (cP[(cP.CDATA_SECTION_NODE = 4)] = "CDATA_SECTION_NODE"),
        (cP[(cP.ENTITY_REFERENCE_NODE = 5)] = "ENTITY_REFERENCE_NODE"),
        (cP[(cP.ENTITY_NODE = 6)] = "ENTITY_NODE"),
        (cP[(cP.PROCESSING_INSTRUCTION_NODE = 7)] =
          "PROCESSING_INSTRUCTION_NODE"),
        (cP[(cP.COMMENT_NODE = 8)] = "COMMENT_NODE"),
        (cP[(cP.DOCUMENT_NODE = 9)] = "DOCUMENT_NODE"),
        (cP[(cP.DOCUMENT_TYPE_NODE = 10)] = "DOCUMENT_TYPE_NODE"),
        (cP[(cP.DOCUMENT_FRAGMENT_NODE = 11)] = "DOCUMENT_FRAGMENT_NODE");
      class aK {
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
      let aZ = (e, t) => `${e}@${t}`;
      class aQ {
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
                n = new aK(),
                r = (e) => {
                  let t = e,
                    n = -2;
                  for (; -2 === n; )
                    n = (t = t && t.nextSibling) && this.mirror.getId(t);
                  return n;
                },
                i = (i) => {
                  if (!i.parentNode || !aH(i)) return;
                  let o = oX(i.parentNode)
                      ? this.mirror.getId(aB(i))
                      : this.mirror.getId(i.parentNode),
                    a = r(i);
                  if (-1 === o || -1 === a) return n.addNode(i);
                  let s = aw(i, {
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
                      a$(e, this.mirror) &&
                        !aN(
                          e,
                          this.blockClass,
                          this.blockSelector,
                          this.unblockSelector,
                          !1,
                        ) &&
                        this.iframeManager.addIframe(e),
                        aF(e, this.mirror) &&
                          this.stylesheetManager.trackLinkElement(e),
                        aU(i) &&
                          this.shadowDomManager.addShadowRoot(
                            i.shadowRoot,
                            this.doc,
                          );
                    },
                    onIframeLoad: (e, t) => {
                      aN(
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
                  s &&
                    (e.push({ parentId: o, nextId: a, node: s }), t.add(s.id));
                };
              for (; this.mapRemoves.length; )
                this.mirror.removeNodeFromMap(this.mapRemoves.shift());
              for (let e of this.movedSet)
                (!a1(this.removes, e, this.mirror) ||
                  this.movedSet.has(e.parentNode)) &&
                  i(e);
              for (let e of this.addedSet)
                a2(this.droppedSet, e) || a1(this.removes, e, this.mirror)
                  ? a2(this.movedSet, e)
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
                          t.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE
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
              let a = {
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
              (a.texts.length ||
                a.attributes.length ||
                a.removes.length ||
                a.adds.length) &&
                ((this.texts = []),
                (this.attributes = []),
                (this.attributeMap = new WeakMap()),
                (this.removes = []),
                (this.addedSet = new Set()),
                (this.movedSet = new Set()),
                (this.droppedSet = new Set()),
                (this.movedMap = {}),
                this.mutationCb(a));
            }),
            (this.processMutation = (e) => {
              if (!aL(e.target, this.mirror))
                switch (e.type) {
                  case "characterData": {
                    let t = e.target.textContent;
                    aN(
                      e.target,
                      this.blockClass,
                      this.blockSelector,
                      this.unblockSelector,
                      !1,
                    ) ||
                      t === e.oldValue ||
                      this.texts.push({
                        value:
                          ab(
                            e.target,
                            this.maskTextClass,
                            this.maskTextSelector,
                            this.unmaskTextClass,
                            this.unmaskTextSelector,
                            this.maskAllText,
                          ) && t
                            ? this.maskTextFn
                              ? this.maskTextFn(t, aD(e.target))
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
                      let n = o4(t),
                        i = t.tagName;
                      r = o6(t, i, n);
                      let o = o0({
                        maskInputOptions: this.maskInputOptions,
                        tagName: i,
                        type: n,
                      });
                      r = o1({
                        isMasked: ab(
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
                      aN(
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
                      if (aJ(t)) return;
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
                      !a_(t.tagName, n) &&
                        ((i.attributes[n] = ag(
                          this.doc,
                          o2(t.tagName),
                          o2(n),
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
                      aN(
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
                          r = oX(e.target)
                            ? this.mirror.getId(e.target.host)
                            : this.mirror.getId(e.target);
                        aN(
                          e.target,
                          this.blockClass,
                          this.blockSelector,
                          this.unblockSelector,
                          !1,
                        ) ||
                          aL(t, this.mirror) ||
                          -1 === this.mirror.getId(t) ||
                          (this.addedSet.has(t)
                            ? (a0(this.addedSet, t), this.droppedSet.add(t))
                            : (this.addedSet.has(e.target) && -1 === n) ||
                              (function e(t, n) {
                                if (oX(t)) return !1;
                                let r = n.getId(t);
                                return (
                                  !n.has(r) ||
                                  ((!t.parentNode ||
                                    t.parentNode.nodeType !==
                                      t.DOCUMENT_NODE) &&
                                    (!t.parentNode || e(t.parentNode, n)))
                                );
                              })(e.target, this.mirror) ||
                              (this.movedSet.has(t) && this.movedMap[aZ(n, r)]
                                ? a0(this.movedSet, t)
                                : this.removes.push({
                                    parentId: r,
                                    id: n,
                                    isShadow:
                                      !!(oX(e.target) && oJ(e.target)) ||
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
                  if (aL(e, this.mirror)) return;
                  this.movedSet.add(e);
                  let n = null;
                  t && this.mirror.hasNode(t) && (n = this.mirror.getId(t)),
                    n &&
                      -1 !== n &&
                      (this.movedMap[aZ(this.mirror.getId(e), n)] = !0);
                } else this.addedSet.add(e), this.droppedSet.delete(e);
                !aN(
                  e,
                  this.blockClass,
                  this.blockSelector,
                  this.unblockSelector,
                  !1,
                ) &&
                  (e.childNodes.forEach((e) => this.genAdds(e)),
                  aU(e) &&
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
      function a0(e, t) {
        e.delete(t), t.childNodes.forEach((t) => a0(e, t));
      }
      function a1(e, t, n) {
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
      function a2(e, t) {
        return (
          0 !== e.size &&
          (function e(t, n) {
            let { parentNode: r } = n;
            return !!r && (!!t.has(r) || e(t, r));
          })(e, t)
        );
      }
      let a3 = (e) =>
        _
          ? (...t) => {
              try {
                return e(...t);
              } catch (e) {
                if (_ && !0 === _(e)) return () => {};
                throw e;
              }
            }
          : e;
      function a5(e) {
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
      let a4 = [];
      function a6(e) {
        try {
          if ("composedPath" in e) {
            let t = e.composedPath();
            if (t.length) return t[0];
          } else if ("path" in e && e.path.length) return e.path[0];
        } catch (e) {}
        return e && e.target;
      }
      function a8(e, t) {
        let n = new aQ();
        a4.push(n), n.init(e);
        let r = window.MutationObserver || window.__rrMutationObserver,
          i = a5([
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
          a3((t) => {
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
      function a7({
        scrollCb: e,
        doc: t,
        mirror: n,
        blockClass: r,
        blockSelector: i,
        unblockSelector: o,
        sampling: a,
      }) {
        return ak(
          "scroll",
          a3(
            aT(
              a3((a) => {
                let s = a6(a);
                if (!s || aN(s, r, i, o, !0)) return;
                let l = n.getId(s);
                if (s === t && t.defaultView) {
                  let n = aR(t.defaultView);
                  e({ id: l, x: n.left, y: n.top });
                } else e({ id: l, x: s.scrollLeft, y: s.scrollTop });
              }),
              a.scroll || 100,
            ),
          ),
          t,
        );
      }
      let a9 = ["INPUT", "TEXTAREA", "SELECT"],
        se = new WeakMap();
      function st(e) {
        var t = [];
        if (
          (so("CSSGroupingRule") && e.parentRule instanceof CSSGroupingRule) ||
          (so("CSSMediaRule") && e.parentRule instanceof CSSMediaRule) ||
          (so("CSSSupportsRule") && e.parentRule instanceof CSSSupportsRule) ||
          (so("CSSConditionRule") && e.parentRule instanceof CSSConditionRule)
        ) {
          let n = Array.from(e.parentRule.cssRules).indexOf(e);
          t.unshift(n);
        } else if (e.parentStyleSheet) {
          let n = Array.from(e.parentStyleSheet.cssRules).indexOf(e);
          t.unshift(n);
        }
        return t;
      }
      function sn(e, t, n) {
        let r, i;
        return e
          ? (e.ownerNode ? (r = t.getId(e.ownerNode)) : (i = n.getId(e)),
            { styleId: i, id: r })
          : {};
      }
      function sr({ mirror: e, stylesheetManager: t }, n) {
        let r = null;
        r = "#document" === n.nodeName ? e.getId(n) : e.getId(n.host);
        let i =
            "#document" === n.nodeName
              ? a5([
                  n,
                  "access",
                  (e) => e.defaultView,
                  "optionalAccess",
                  (e) => e.Document,
                ])
              : a5([
                  n,
                  "access",
                  (e) => e.ownerDocument,
                  "optionalAccess",
                  (e) => e.defaultView,
                  "optionalAccess",
                  (e) => e.ShadowRoot,
                ]),
          o = a5([i, "optionalAccess", (e) => e.prototype])
            ? Object.getOwnPropertyDescriptor(
                a5([i, "optionalAccess", (e) => e.prototype]),
                "adoptedStyleSheets",
              )
            : void 0;
        return null !== r && -1 !== r && i && o
          ? (Object.defineProperty(n, "adoptedStyleSheets", {
              configurable: o.configurable,
              enumerable: o.enumerable,
              get() {
                return a5([
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
                let n = a5([
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
            a3(() => {
              Object.defineProperty(n, "adoptedStyleSheets", {
                configurable: o.configurable,
                enumerable: o.enumerable,
                get: o.get,
                set: o.set,
              });
            }))
          : () => {};
      }
      function si(e, t = {}) {
        let n,
          r = e.doc.defaultView;
        if (!r) return () => {};
        e.recordDOM && (n = a8(e, e.doc));
        let i = (function ({ mousemoveCb: e, sampling: t, doc: n, mirror: r }) {
            let i;
            if (!1 === t.mousemove) return () => {};
            let o = "number" == typeof t.mousemove ? t.mousemove : 50,
              a =
                "number" == typeof t.mousemoveCallback
                  ? t.mousemoveCallback
                  : 500,
              s = [],
              l = aT(
                a3((t) => {
                  let n = Date.now() - i;
                  e(
                    s.map((e) => ((e.timeOffset -= n), e)),
                    t,
                  ),
                    (s = []),
                    (i = null);
                }),
                a,
              ),
              c = a3(
                aT(
                  a3((e) => {
                    let t = a6(e),
                      { clientX: n, clientY: o } = aP(e)
                        ? e.changedTouches[0]
                        : e;
                    i || (i = aM()),
                      s.push({
                        x: n,
                        y: o,
                        id: r.getId(t),
                        timeOffset: aM() - i,
                      }),
                      l(
                        "u" > typeof DragEvent && e instanceof DragEvent
                          ? aV.Drag
                          : e instanceof MouseEvent
                            ? aV.MouseMove
                            : aV.TouchMove,
                      );
                  }),
                  o,
                  { trailing: !1 },
                ),
              ),
              u = [
                ak("mousemove", c, n),
                ak("touchmove", c, n),
                ak("drag", c, n),
              ];
            return a3(() => {
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
            sampling: a,
          }) {
            if (!1 === a.mouseInteraction) return () => {};
            let s =
                !0 === a.mouseInteraction || void 0 === a.mouseInteraction
                  ? {}
                  : a.mouseInteraction,
              l = [],
              c = null;
            return (
              Object.keys(aG)
                .filter(
                  (e) =>
                    Number.isNaN(Number(e)) &&
                    !e.endsWith("_Departed") &&
                    !1 !== s[e],
                )
                .forEach((a) => {
                  let s = o2(a),
                    u = (t) => {
                      let s = a6(t);
                      if (aN(s, r, i, o, !0)) return;
                      let l = null,
                        u = a;
                      if ("pointerType" in t) {
                        switch (t.pointerType) {
                          case "mouse":
                            l = aX.Mouse;
                            break;
                          case "touch":
                            l = aX.Touch;
                            break;
                          case "pen":
                            l = aX.Pen;
                        }
                        l === aX.Touch
                          ? aG[a] === aG.MouseDown
                            ? (u = "TouchStart")
                            : aG[a] === aG.MouseUp && (u = "TouchEnd")
                          : aX.Pen;
                      } else aP(t) && (l = aX.Touch);
                      null !== l
                        ? ((c = l),
                          ((u.startsWith("Touch") && l === aX.Touch) ||
                            (u.startsWith("Mouse") && l === aX.Mouse)) &&
                            (l = null))
                        : aG[a] === aG.Click && ((l = c), (c = null));
                      let d = aP(t) ? t.changedTouches[0] : t;
                      if (!d) return;
                      let p = n.getId(s),
                        { clientX: h, clientY: f } = d;
                      a3(e)({
                        type: aG[u],
                        id: p,
                        x: h,
                        y: f,
                        ...(null !== l && { pointerType: l }),
                      });
                    };
                  if (window.PointerEvent)
                    switch (aG[a]) {
                      case aG.MouseDown:
                      case aG.MouseUp:
                        s = s.replace("mouse", "pointer");
                        break;
                      case aG.TouchStart:
                      case aG.TouchEnd:
                        return;
                    }
                  l.push(ak(s, u, t));
                }),
              a3(() => {
                l.forEach((e) => e());
              })
            );
          })(e),
          a = a7(e),
          s = (function ({ viewportResizeCb: e }, { win: t }) {
            let n = -1,
              r = -1;
            return ak(
              "resize",
              a3(
                aT(
                  a3(() => {
                    let t = aA(),
                      i = aO();
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
            ignoreClass: a,
            ignoreSelector: s,
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
              let n = a6(e),
                u = e.isTrusted,
                g = n && o3(n.tagName);
              if (
                ("OPTION" === g && (n = n.parentElement),
                !n || !g || 0 > a9.indexOf(g) || aN(n, r, i, o, !0))
              )
                return;
              let y = n;
              if (y.classList.contains(a) || (s && y.matches(s))) return;
              let v = o4(n),
                b = o6(y, g, v),
                S = !1,
                w = o0({ maskInputOptions: l, tagName: g, type: v }),
                E = ab(n, p, f, h, m, w);
              ("radio" === v || "checkbox" === v) && (S = n.checked),
                (b = o1({ isMasked: E, element: n, value: b, maskInputFn: c })),
                _(
                  n,
                  d
                    ? { text: b, isChecked: S, userTriggered: u }
                    : { text: b, isChecked: S },
                );
              let k = n.name;
              "radio" === v &&
                k &&
                S &&
                t
                  .querySelectorAll(`input[type="radio"][name="${k}"]`)
                  .forEach((e) => {
                    if (e !== n) {
                      let t = o1({
                        isMasked: E,
                        element: e,
                        value: o6(e, g, v),
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
              let i = se.get(t);
              if (!i || i.text !== r.text || i.isChecked !== r.isChecked) {
                se.set(t, r);
                let i = n.getId(t);
                a3(e)({ ...r, id: i });
              }
            }
            let y = ("last" === u.input ? ["change"] : ["input", "change"]).map(
                (e) => ak(e, a3(g), t),
              ),
              v = t.defaultView;
            if (!v)
              return () => {
                y.forEach((e) => e());
              };
            let b = v.Object.getOwnPropertyDescriptor(
                v.HTMLInputElement.prototype,
                "value",
              ),
              S = [
                [v.HTMLInputElement.prototype, "value"],
                [v.HTMLInputElement.prototype, "checked"],
                [v.HTMLSelectElement.prototype, "value"],
                [v.HTMLTextAreaElement.prototype, "value"],
                [v.HTMLSelectElement.prototype, "selectedIndex"],
                [v.HTMLOptionElement.prototype, "selected"],
              ];
            return (
              b &&
                b.set &&
                y.push(
                  ...S.map((e) =>
                    (function e(t, n, r, i, o = window) {
                      let a = o.Object.getOwnPropertyDescriptor(t, n);
                      return (
                        o.Object.defineProperty(
                          t,
                          n,
                          i
                            ? r
                            : {
                                set(e) {
                                  aq(() => {
                                    r.set.call(this, e);
                                  }, 0),
                                    a && a.set && a.set.call(this, e);
                                },
                              },
                        ),
                        () => e(t, n, a || {}, !0)
                      );
                    })(
                      e[0],
                      e[1],
                      {
                        set() {
                          a3(g)({ target: this, isTrusted: !1 });
                        },
                      },
                      !1,
                      v,
                    ),
                  ),
                ),
              a3(() => {
                y.forEach((e) => e());
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
            doc: a,
          }) {
            let s = a3((a) =>
                aT(
                  a3((o) => {
                    let s = a6(o);
                    if (!s || aN(s, t, n, r, !0)) return;
                    let {
                      currentTime: l,
                      volume: c,
                      muted: u,
                      playbackRate: d,
                    } = s;
                    e({
                      type: a,
                      id: i.getId(s),
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
                ak("play", s(0), a),
                ak("pause", s(1), a),
                ak("seeked", s(2), a),
                ak("volumechange", s(3), a),
                ak("ratechange", s(4), a),
              ];
            return a3(() => {
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
            if (!r.CSSStyleSheet || !r.CSSStyleSheet.prototype) return () => {};
            let a = r.CSSStyleSheet.prototype.insertRule;
            r.CSSStyleSheet.prototype.insertRule = new Proxy(a, {
              apply: a3((r, i, o) => {
                let [a, s] = o,
                  { id: l, styleId: c } = sn(i, t, n.styleMirror);
                return (
                  ((l && -1 !== l) || (c && -1 !== c)) &&
                    e({ id: l, styleId: c, adds: [{ rule: a, index: s }] }),
                  r.apply(i, o)
                );
              }),
            });
            let s = r.CSSStyleSheet.prototype.deleteRule;
            (r.CSSStyleSheet.prototype.deleteRule = new Proxy(s, {
              apply: a3((r, i, o) => {
                let [a] = o,
                  { id: s, styleId: l } = sn(i, t, n.styleMirror);
                return (
                  ((s && -1 !== s) || (l && -1 !== l)) &&
                    e({ id: s, styleId: l, removes: [{ index: a }] }),
                  r.apply(i, o)
                );
              }),
            })),
              r.CSSStyleSheet.prototype.replace &&
                ((i = r.CSSStyleSheet.prototype.replace),
                (r.CSSStyleSheet.prototype.replace = new Proxy(i, {
                  apply: a3((r, i, o) => {
                    let [a] = o,
                      { id: s, styleId: l } = sn(i, t, n.styleMirror);
                    return (
                      ((s && -1 !== s) || (l && -1 !== l)) &&
                        e({ id: s, styleId: l, replace: a }),
                      r.apply(i, o)
                    );
                  }),
                }))),
              r.CSSStyleSheet.prototype.replaceSync &&
                ((o = r.CSSStyleSheet.prototype.replaceSync),
                (r.CSSStyleSheet.prototype.replaceSync = new Proxy(o, {
                  apply: a3((r, i, o) => {
                    let [a] = o,
                      { id: s, styleId: l } = sn(i, t, n.styleMirror);
                    return (
                      ((s && -1 !== s) || (l && -1 !== l)) &&
                        e({ id: s, styleId: l, replaceSync: a }),
                      r.apply(i, o)
                    );
                  }),
                })));
            let l = {};
            sa("CSSGroupingRule")
              ? (l.CSSGroupingRule = r.CSSGroupingRule)
              : (sa("CSSMediaRule") && (l.CSSMediaRule = r.CSSMediaRule),
                sa("CSSConditionRule") &&
                  (l.CSSConditionRule = r.CSSConditionRule),
                sa("CSSSupportsRule") &&
                  (l.CSSSupportsRule = r.CSSSupportsRule));
            let c = {};
            return (
              Object.entries(l).forEach(([r, i]) => {
                (c[r] = {
                  insertRule: i.prototype.insertRule,
                  deleteRule: i.prototype.deleteRule,
                }),
                  (i.prototype.insertRule = new Proxy(c[r].insertRule, {
                    apply: a3((r, i, o) => {
                      let [a, s] = o,
                        { id: l, styleId: c } = sn(
                          i.parentStyleSheet,
                          t,
                          n.styleMirror,
                        );
                      return (
                        ((l && -1 !== l) || (c && -1 !== c)) &&
                          e({
                            id: l,
                            styleId: c,
                            adds: [{ rule: a, index: [...st(i), s || 0] }],
                          }),
                        r.apply(i, o)
                      );
                    }),
                  })),
                  (i.prototype.deleteRule = new Proxy(c[r].deleteRule, {
                    apply: a3((r, i, o) => {
                      let [a] = o,
                        { id: s, styleId: l } = sn(
                          i.parentStyleSheet,
                          t,
                          n.styleMirror,
                        );
                      return (
                        ((s && -1 !== s) || (l && -1 !== l)) &&
                          e({
                            id: s,
                            styleId: l,
                            removes: [{ index: [...st(i), a] }],
                          }),
                        r.apply(i, o)
                      );
                    }),
                  }));
              }),
              a3(() => {
                (r.CSSStyleSheet.prototype.insertRule = a),
                  (r.CSSStyleSheet.prototype.deleteRule = s),
                  i && (r.CSSStyleSheet.prototype.replace = i),
                  o && (r.CSSStyleSheet.prototype.replaceSync = o),
                  Object.entries(l).forEach(([e, t]) => {
                    (t.prototype.insertRule = c[e].insertRule),
                      (t.prototype.deleteRule = c[e].deleteRule);
                  });
              })
            );
          })(e, { win: r })),
          (d = sr(e, e.doc)),
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
              apply: a3((i, a, s) => {
                let [l, c, u] = s;
                if (n.has(l)) return o.apply(a, [l, c, u]);
                let { id: d, styleId: p } = sn(
                  a5([
                    a,
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
                      index: st(a.parentRule),
                    }),
                  i.apply(a, s)
                );
              }),
            });
            let a = i.CSSStyleDeclaration.prototype.removeProperty;
            return (
              (i.CSSStyleDeclaration.prototype.removeProperty = new Proxy(a, {
                apply: a3((i, o, s) => {
                  let [l] = s;
                  if (n.has(l)) return a.apply(o, [l]);
                  let { id: c, styleId: u } = sn(
                    a5([
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
                        index: st(o.parentRule),
                      }),
                    i.apply(o, s)
                  );
                }),
              })),
              a3(() => {
                (i.CSSStyleDeclaration.prototype.setProperty = o),
                  (i.CSSStyleDeclaration.prototype.removeProperty = a);
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
              let a = aI(t.fonts, "add", function (t) {
                return function (n) {
                  return (
                    aq(
                      a3(() => {
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
                r.push(a),
                a3(() => {
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
                selectionCb: a,
              } = e,
              s = !0,
              l = a3(() => {
                let e = t.getSelection();
                if (
                  !e ||
                  (s && a5([e, "optionalAccess", (e) => e.isCollapsed]))
                )
                  return;
                s = e.isCollapsed || !1;
                let l = [],
                  c = e.rangeCount || 0;
                for (let t = 0; t < c; t++) {
                  let {
                    startContainer: a,
                    startOffset: s,
                    endContainer: c,
                    endOffset: u,
                  } = e.getRangeAt(t);
                  aN(a, r, i, o, !0) ||
                    aN(c, r, i, o, !0) ||
                    l.push({
                      start: n.getId(a),
                      startOffset: s,
                      end: n.getId(c),
                      endOffset: u,
                    });
                }
                a({ ranges: l });
              });
            return l(), ak("selectionchange", l);
          })(e),
          m = (function ({ doc: e, customElementCb: t }) {
            let n = e.defaultView;
            return n && n.customElements
              ? aI(n.customElements, "define", function (e) {
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
        return a3(() => {
          a4.forEach((e) => e.reset()),
            a5([n, "optionalAccess", (e) => e.disconnect, "call", (e) => e()]),
            i(),
            o(),
            a(),
            s(),
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
      function so(e) {
        return void 0 !== window[e];
      }
      function sa(e) {
        return !!(
          void 0 !== window[e] &&
          window[e].prototype &&
          "insertRule" in window[e].prototype &&
          "deleteRule" in window[e].prototype
        );
      }
      class ss {
        constructor(e) {
          (this.generateIdFn = e),
            (this.iframeIdToRemoteIdMap = new WeakMap()),
            (this.iframeRemoteIdToIdMap = new WeakMap());
        }
        getId(e, t, n, r) {
          let i = n || this.getIdToRemoteIdMap(e),
            o = r || this.getRemoteIdToIdMap(e),
            a = i.get(t);
          return a || ((a = this.generateIdFn()), i.set(t, a), o.set(a, t)), a;
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
      function sl(e) {
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
      class sc {
        constructor() {
          (this.crossOriginIframeMirror = new ss(ao)),
            (this.crossOriginIframeRootIdMap = new WeakMap());
        }
        addIframe() {}
        addLoadListener() {}
        attachIframe() {}
      }
      class su {
        constructor(e) {
          (this.iframes = new WeakMap()),
            (this.crossOriginIframeMap = new WeakMap()),
            (this.crossOriginIframeMirror = new ss(ao)),
            (this.crossOriginIframeRootIdMap = new WeakMap()),
            (this.mutationCb = e.mutationCb),
            (this.wrappedEmit = e.wrappedEmit),
            (this.stylesheetManager = e.stylesheetManager),
            (this.recordCrossOriginIframes = e.recordCrossOriginIframes),
            (this.crossOriginIframeStyleMirror = new ss(
              this.stylesheetManager.styleMirror.generateId.bind(
                this.stylesheetManager.styleMirror,
              ),
            )),
            (this.mirror = e.mirror),
            this.recordCrossOriginIframes &&
              window.addEventListener("message", this.handleMessage.bind(this));
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
            sl([
              this,
              "access",
              (e) => e.loadListener,
              "optionalCall",
              (t) => t(e),
            ]);
          let n = aJ(e);
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
            case aY.FullSnapshot: {
              this.crossOriginIframeMirror.reset(e),
                this.crossOriginIframeStyleMirror.reset(e),
                this.replaceIdOnNode(t.data.node, e);
              let n = t.data.node.id;
              return (
                this.crossOriginIframeRootIdMap.set(e, n),
                this.patchRootIdOnNode(t.data.node, n),
                {
                  timestamp: t.timestamp,
                  type: aY.IncrementalSnapshot,
                  data: {
                    source: aV.Mutation,
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
            case aY.Meta:
            case aY.Load:
            case aY.DomContentLoaded:
              break;
            case aY.Plugin:
              return t;
            case aY.Custom:
              return (
                this.replaceIds(t.data.payload, e, [
                  "id",
                  "parentId",
                  "previousId",
                  "nextId",
                ]),
                t
              );
            case aY.IncrementalSnapshot:
              switch (t.data.source) {
                case aV.Mutation:
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
                case aV.Drag:
                case aV.TouchMove:
                case aV.MouseMove:
                  return (
                    t.data.positions.forEach((t) => {
                      this.replaceIds(t, e, ["id"]);
                    }),
                    t
                  );
                case aV.ViewportResize:
                  return !1;
                case aV.MediaInteraction:
                case aV.MouseInteraction:
                case aV.Scroll:
                case aV.CanvasMutation:
                case aV.Input:
                  return this.replaceIds(t.data, e, ["id"]), t;
                case aV.StyleSheetRule:
                case aV.StyleDeclaration:
                  return (
                    this.replaceIds(t.data, e, ["id"]),
                    this.replaceStyleIds(t.data, e, ["styleId"]),
                    t
                  );
                case aV.Font:
                  return t;
                case aV.Selection:
                  return (
                    t.data.ranges.forEach((t) => {
                      this.replaceIds(t, e, ["start", "end"]);
                    }),
                    t
                  );
                case aV.AdoptedStyleSheet:
                  return (
                    this.replaceIds(t.data, e, ["id"]),
                    this.replaceStyleIds(t.data, e, ["styleIds"]),
                    sl([
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
          e.type === cB.Document || e.rootId || (e.rootId = t),
            "childNodes" in e &&
              e.childNodes.forEach((e) => {
                this.patchRootIdOnNode(e, t);
              });
        }
      }
      class sd {
        init() {}
        addShadowRoot() {}
        observeAttachShadow() {}
        reset() {}
      }
      class sp {
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
          if (!oJ(e) || this.shadowDoms.has(e)) return;
          this.shadowDoms.add(e),
            this.bypassOptions.canvasManager.addShadowRoot(e);
          let n = a8(
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
              a7({
                ...this.bypassOptions,
                scrollCb: this.scrollCb,
                doc: e,
                mirror: this.mirror,
              }),
            ),
            aq(() => {
              e.adoptedStyleSheets &&
                e.adoptedStyleSheets.length > 0 &&
                this.bypassOptions.stylesheetManager.adoptStyleSheets(
                  e.adoptedStyleSheets,
                  this.mirror.getId(e.host),
                ),
                this.restoreHandlers.push(
                  sr(
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
          let t = aJ(e),
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
            aI(e.prototype, "attachShadow", function (e) {
              return function (r) {
                let i = e.call(this, r);
                return (
                  this.shadowRoot &&
                    aH(this) &&
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
      class sh {
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
      class sf {
        constructor(e) {
          (this.trackedLinkElements = new WeakSet()),
            (this.styleMirror = new aj()),
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
                    rule: oZ(e),
                    index: t,
                  })),
                })),
              n.styleIds.push(e);
          }
          r.length > 0 && (n.styles = r), this.adoptedStyleSheetCb(n);
        }
        reset() {
          this.styleMirror.reset(), (this.trackedLinkElements = new WeakSet());
        }
        trackStylesheetInLinkElement(e) {}
      }
      class sm {
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
              aW("requestAnimationFrame")(...e);
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
              i8([
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
      let sg = new oQ();
      function s_(e = {}) {
        let t,
          {
            emit: n,
            checkoutEveryNms: r,
            checkoutEveryNth: i,
            blockClass: o = "rr-block",
            blockSelector: a = null,
            unblockSelector: s = null,
            ignoreClass: l = "rr-ignore",
            ignoreSelector: c = null,
            maskAllText: u = !1,
            maskTextClass: d = "rr-mask",
            unmaskTextClass: p = null,
            maskTextSelector: h = null,
            unmaskTextSelector: f = null,
            inlineStylesheet: m = !0,
            maskAllInputs: g,
            maskInputOptions: b,
            slimDOMOptions: S,
            maskAttributeFn: w,
            maskInputFn: E,
            maskTextFn: k,
            maxCanvasSize: x = null,
            packFn: C,
            sampling: T = {},
            dataURLOptions: I = {},
            mousemoveWait: M,
            recordDOM: R = !0,
            recordCanvas: A = !1,
            recordCrossOriginIframes: O = !1,
            recordAfter: D = "DOMContentLoaded" === e.recordAfter
              ? e.recordAfter
              : "load",
            userTriggeredOnInput: N = !1,
            collectFonts: L = !1,
            inlineImages: P = !1,
            plugins: $,
            keepIframeSrcFn: F = () => !1,
            ignoreCSSAttributes: U = new Set([]),
            errorHandler: j,
            onMutation: B,
            getCanvasManager: H,
          } = e;
        _ = j;
        let z = !O || window.parent === window,
          W = !1;
        if (!z)
          try {
            window.parent.document && (W = !1);
          } catch (e) {
            W = !0;
          }
        if (z && !n) throw Error("emit function is required");
        if (!z && !W) return () => {};
        void 0 !== M && void 0 === T.mousemove && (T.mousemove = M), sg.reset();
        let q =
            !0 === g
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
          Y =
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
            for (let t of $ || [])
              t.eventProcessor && (e = t.eventProcessor(e));
            return C && !W && (e = C(e)), e;
          };
        y = (e, o) => {
          if (
            ((e.timestamp = aM()),
            i8([
              a4,
              "access",
              (e) => e[0],
              "optionalAccess",
              (e) => e.isFrozen,
              "call",
              (e) => e(),
            ]) &&
              e.type !== aY.FullSnapshot &&
              (e.type !== aY.IncrementalSnapshot ||
                e.data.source !== aV.Mutation) &&
              a4.forEach((e) => e.unfreeze()),
            z)
          )
            i8([n, "optionalCall", (t) => t(G(e), o)]);
          else if (W) {
            let t = {
              type: "rrweb",
              event: G(e),
              origin: window.location.origin,
              isCheckout: o,
            };
            window.parent.postMessage(t, "*");
          }
          if (e.type === aY.FullSnapshot) (t = e), (V = 0);
          else if (e.type === aY.IncrementalSnapshot) {
            if (e.data.source === aV.Mutation && e.data.isAttachIframe) return;
            V++;
            let n = i && V >= i,
              o = r && t && e.timestamp - t.timestamp > r;
            (n || o) && er(!0);
          }
        };
        let X = (e) => {
            y({
              type: aY.IncrementalSnapshot,
              data: { source: aV.Mutation, ...e },
            });
          },
          J = (e) =>
            y({
              type: aY.IncrementalSnapshot,
              data: { source: aV.Scroll, ...e },
            }),
          K = (e) =>
            y({
              type: aY.IncrementalSnapshot,
              data: { source: aV.CanvasMutation, ...e },
            }),
          Z = new sf({
            mutationCb: X,
            adoptedStyleSheetCb: (e) =>
              y({
                type: aY.IncrementalSnapshot,
                data: { source: aV.AdoptedStyleSheet, ...e },
              }),
          }),
          Q =
            "boolean" == typeof __RRWEB_EXCLUDE_IFRAME__ &&
            __RRWEB_EXCLUDE_IFRAME__
              ? new sc()
              : new su({
                  mirror: sg,
                  mutationCb: X,
                  stylesheetManager: Z,
                  recordCrossOriginIframes: O,
                  wrappedEmit: y,
                });
        for (let e of $ || [])
          e.getMirror &&
            e.getMirror({
              nodeMirror: sg,
              crossOriginIframeMirror: Q.crossOriginIframeMirror,
              crossOriginIframeStyleMirror: Q.crossOriginIframeStyleMirror,
            });
        let ee = new sm(),
          et = (function (e, t) {
            try {
              return e ? e(t) : new sh();
            } catch (e) {
              return (
                console.warn("Unable to initialize CanvasManager"), new sh()
              );
            }
          })(H, {
            mirror: sg,
            win: window,
            mutationCb: (e) =>
              y({
                type: aY.IncrementalSnapshot,
                data: { source: aV.CanvasMutation, ...e },
              }),
            recordCanvas: A,
            blockClass: o,
            blockSelector: a,
            unblockSelector: s,
            maxCanvasSize: x,
            sampling: T.canvas,
            dataURLOptions: I,
            errorHandler: j,
          }),
          en =
            "boolean" == typeof __RRWEB_EXCLUDE_SHADOW_DOM__ &&
            __RRWEB_EXCLUDE_SHADOW_DOM__
              ? new sd()
              : new sp({
                  mutationCb: X,
                  scrollCb: J,
                  bypassOptions: {
                    onMutation: B,
                    blockClass: o,
                    blockSelector: a,
                    unblockSelector: s,
                    maskAllText: u,
                    maskTextClass: d,
                    unmaskTextClass: p,
                    maskTextSelector: h,
                    unmaskTextSelector: f,
                    inlineStylesheet: m,
                    maskInputOptions: q,
                    dataURLOptions: I,
                    maskAttributeFn: w,
                    maskTextFn: k,
                    maskInputFn: E,
                    recordCanvas: A,
                    inlineImages: P,
                    sampling: T,
                    slimDOMOptions: Y,
                    iframeManager: Q,
                    stylesheetManager: Z,
                    canvasManager: et,
                    keepIframeSrcFn: F,
                    processedNodeManager: ee,
                  },
                  mirror: sg,
                }),
          er = (e = !1) => {
            if (!R) return;
            y(
              {
                type: aY.Meta,
                data: { href: window.location.href, width: aO(), height: aA() },
              },
              e,
            ),
              Z.reset(),
              en.init(),
              a4.forEach((e) => e.lock());
            let t = (function (e, t) {
              let {
                mirror: n = new oQ(),
                blockClass: r = "rr-block",
                blockSelector: i = null,
                unblockSelector: o = null,
                maskAllText: a = !1,
                maskTextClass: s = "rr-mask",
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
                slimDOM: y = !1,
                dataURLOptions: v,
                preserveWhiteSpace: b,
                onSerialize: S,
                onIframeLoad: w,
                iframeLoadTimeout: E,
                onStylesheetLoad: k,
                stylesheetLoadTimeout: x,
                keepIframeSrcFn: C = () => !1,
              } = t || {};
              return aw(e, {
                doc: e,
                mirror: n,
                blockClass: r,
                blockSelector: i,
                unblockSelector: o,
                maskAllText: a,
                maskTextClass: s,
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
                  !0 === y || "all" === y
                    ? {
                        script: !0,
                        comment: !0,
                        headFavicon: !0,
                        headWhitespace: !0,
                        headMetaDescKeywords: "all" === y,
                        headMetaSocial: !0,
                        headMetaRobots: !0,
                        headMetaHttpEquiv: !0,
                        headMetaAuthorship: !0,
                        headMetaVerification: !0,
                      }
                    : !1 === y
                      ? {}
                      : y,
                dataURLOptions: v,
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
              mirror: sg,
              blockClass: o,
              blockSelector: a,
              unblockSelector: s,
              maskAllText: u,
              maskTextClass: d,
              unmaskTextClass: p,
              maskTextSelector: h,
              unmaskTextSelector: f,
              inlineStylesheet: m,
              maskAllInputs: q,
              maskAttributeFn: w,
              maskInputFn: E,
              maskTextFn: k,
              slimDOM: Y,
              dataURLOptions: I,
              recordCanvas: A,
              inlineImages: P,
              onSerialize: (e) => {
                a$(e, sg) && Q.addIframe(e),
                  aF(e, sg) && Z.trackLinkElement(e),
                  aU(e) && en.addShadowRoot(e.shadowRoot, document);
              },
              onIframeLoad: (e, t) => {
                Q.attachIframe(e, t),
                  e.contentWindow && et.addWindow(e.contentWindow),
                  en.observeAttachShadow(e);
              },
              onStylesheetLoad: (e, t) => {
                Z.attachLinkElement(e, t);
              },
              keepIframeSrcFn: F,
            });
            if (!t) return console.warn("Failed to snapshot the document");
            y({
              type: aY.FullSnapshot,
              data: { node: t, initialOffset: aR(window) },
            }),
              a4.forEach((e) => e.unlock()),
              document.adoptedStyleSheets &&
                document.adoptedStyleSheets.length > 0 &&
                Z.adoptStyleSheets(
                  document.adoptedStyleSheets,
                  sg.getId(document),
                );
          };
        v = er;
        try {
          let e = [],
            t = (e) =>
              a3(si)(
                {
                  onMutation: B,
                  mutationCb: X,
                  mousemoveCb: (e, t) =>
                    y({
                      type: aY.IncrementalSnapshot,
                      data: { source: t, positions: e },
                    }),
                  mouseInteractionCb: (e) =>
                    y({
                      type: aY.IncrementalSnapshot,
                      data: { source: aV.MouseInteraction, ...e },
                    }),
                  scrollCb: J,
                  viewportResizeCb: (e) =>
                    y({
                      type: aY.IncrementalSnapshot,
                      data: { source: aV.ViewportResize, ...e },
                    }),
                  inputCb: (e) =>
                    y({
                      type: aY.IncrementalSnapshot,
                      data: { source: aV.Input, ...e },
                    }),
                  mediaInteractionCb: (e) =>
                    y({
                      type: aY.IncrementalSnapshot,
                      data: { source: aV.MediaInteraction, ...e },
                    }),
                  styleSheetRuleCb: (e) =>
                    y({
                      type: aY.IncrementalSnapshot,
                      data: { source: aV.StyleSheetRule, ...e },
                    }),
                  styleDeclarationCb: (e) =>
                    y({
                      type: aY.IncrementalSnapshot,
                      data: { source: aV.StyleDeclaration, ...e },
                    }),
                  canvasMutationCb: K,
                  fontCb: (e) =>
                    y({
                      type: aY.IncrementalSnapshot,
                      data: { source: aV.Font, ...e },
                    }),
                  selectionCb: (e) => {
                    y({
                      type: aY.IncrementalSnapshot,
                      data: { source: aV.Selection, ...e },
                    });
                  },
                  customElementCb: (e) => {
                    y({
                      type: aY.IncrementalSnapshot,
                      data: { source: aV.CustomElement, ...e },
                    });
                  },
                  blockClass: o,
                  ignoreClass: l,
                  ignoreSelector: c,
                  maskAllText: u,
                  maskTextClass: d,
                  unmaskTextClass: p,
                  maskTextSelector: h,
                  unmaskTextSelector: f,
                  maskInputOptions: q,
                  inlineStylesheet: m,
                  sampling: T,
                  recordDOM: R,
                  recordCanvas: A,
                  inlineImages: P,
                  userTriggeredOnInput: N,
                  collectFonts: L,
                  doc: e,
                  maskAttributeFn: w,
                  maskInputFn: E,
                  maskTextFn: k,
                  keepIframeSrcFn: F,
                  blockSelector: a,
                  unblockSelector: s,
                  slimDOMOptions: Y,
                  dataURLOptions: I,
                  mirror: sg,
                  iframeManager: Q,
                  stylesheetManager: Z,
                  shadowDomManager: en,
                  processedNodeManager: ee,
                  canvasManager: et,
                  ignoreCSSAttributes: U,
                  plugins:
                    i8([
                      $,
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
                            y({
                              type: aY.Plugin,
                              data: { plugin: e.name, payload: t },
                            }),
                        })),
                    ]) || [],
                },
                {},
              );
          Q.addLoadListener((n) => {
            try {
              e.push(t(n.contentDocument));
            } catch (e) {
              console.warn(e);
            }
          });
          let n = () => {
            er(), e.push(t(document));
          };
          return (
            "interactive" === document.readyState ||
            "complete" === document.readyState
              ? n()
              : (e.push(
                  ak("DOMContentLoaded", () => {
                    y({ type: aY.DomContentLoaded, data: {} }),
                      "DOMContentLoaded" === D && n();
                  }),
                ),
                e.push(
                  ak(
                    "load",
                    () => {
                      y({ type: aY.Load, data: {} }), "load" === D && n();
                    },
                    window,
                  ),
                )),
            () => {
              e.forEach((e) => e()), ee.destroy(), (v = void 0), (_ = void 0);
            }
          );
        } catch (e) {
          console.warn(e);
        }
      }
      function sy(e) {
        return e > 0x2540be3ff ? e : 1e3 * e;
      }
      function sv(e) {
        return e > 0x2540be3ff ? e / 1e3 : e;
      }
      function sb(e, t) {
        "sentry.transaction" !== t.category &&
          (["ui.click", "ui.input"].includes(t.category)
            ? e.triggerUserActivity()
            : e.checkAndHandleExpiredSession(),
          e.addUpdate(
            () => (
              e.throttledAddEvent({
                type: aY.Custom,
                timestamp: 1e3 * (t.timestamp || 0),
                data: { tag: "breadcrumb", payload: to(t, 10, 1e3) },
              }),
              "console" === t.category
            ),
          ));
      }
      function sS(e) {
        return e.closest("button,a") || e;
      }
      function sw(e) {
        let t = sE(e);
        return t && t instanceof Element ? sS(t) : t;
      }
      function sE(e) {
        var t;
        return "object" == typeof (t = e) && t && "target" in t ? e.target : e;
      }
      (s_.mirror = sg),
        (s_.takeFullSnapshot = function (e) {
          if (!v)
            throw Error("please take full snapshot after start recording");
          v(e);
        });
      let sk = new Set([
        aV.Mutation,
        aV.StyleSheetRule,
        aV.StyleDeclaration,
        aV.AdoptedStyleSheet,
        aV.CanvasMutation,
        aV.Selection,
        aV.MediaInteraction,
      ]);
      class sx {
        constructor(e, t, n = sb) {
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
              this._lastMutation = sT();
            }),
            b ||
              ((b = []),
              ei(M, "open", function (e) {
                return function (...t) {
                  if (b)
                    try {
                      b.forEach((e) => e());
                    } catch (e) {}
                  return e.apply(M, t);
                };
              })),
            b.push(e),
            () => {
              let t = b ? b.indexOf(e) : -1;
              t > -1 && b.splice(t, 1);
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
            !sC.includes(n.tagName) ||
              ("INPUT" === n.tagName &&
                !["submit", "button"].includes(n.getAttribute("type") || "")) ||
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
            timestamp: sv(e.timestamp),
            clickBreadcrumb: e,
            clickCount: 0,
            node: t,
          };
          this._clicks.some(
            (e) => e.node === o.node && 1 > Math.abs(e.timestamp - o.timestamp),
          ) ||
            (this._clicks.push(o),
            1 === this._clicks.length && this._scheduleCheckClicks());
        }
        registerMutation(e = Date.now()) {
          this._lastMutation = sv(e);
        }
        registerScroll(e = Date.now()) {
          this._lastScroll = sv(e);
        }
        registerClick(e) {
          let t = sS(e);
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
            t = sT();
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
            e > -1 && (this._generateBreadcrumbs(n), this._clicks.splice(e, 1));
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
                1e3 * Math.min(e.mutationAfter || this._timeout, this._timeout),
              r = n < 1e3 * this._timeout ? "mutation" : "timeout",
              a = {
                type: "default",
                message: o.message,
                timestamp: o.timestamp,
                category: "ui.slowClickDetected",
                data: {
                  ...o.data,
                  url: M.location.href,
                  route: t.getCurrentRoute(),
                  timeAfterClickMs: n,
                  endReason: r,
                  clickCount: i || 1,
                },
              };
            this._addBreadcrumbEvent(t, a);
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
                url: M.location.href,
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
            (this._checkClickTimeout = rH(() => this._checkClicks(), 1e3));
        }
      }
      let sC = ["A", "BUTTON", "INPUT"];
      function sT() {
        return Date.now() / 1e3;
      }
      function sI(e) {
        return { timestamp: Date.now() / 1e3, type: "default", ...e };
      }
      ((c$ = cW || (cW = {}))[(c$.Document = 0)] = "Document"),
        (c$[(c$.DocumentType = 1)] = "DocumentType"),
        (c$[(c$.Element = 2)] = "Element"),
        (c$[(c$.Text = 3)] = "Text"),
        (c$[(c$.CDATA = 4)] = "CDATA"),
        (c$[(c$.Comment = 5)] = "Comment");
      let sM = new Set([
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
      function sR(e, t) {
        let n = s_.mirror.getId(e),
          r = n && s_.mirror.getNode(n),
          i = r && s_.mirror.getMeta(r),
          o = i && i.type === cW.Element ? i : null;
        return {
          message: t,
          data: o
            ? {
                nodeId: n,
                node: {
                  id: n,
                  tagName: o.tagName,
                  textContent: Array.from(o.childNodes)
                    .map((e) => e.type === cW.Text && e.textContent)
                    .filter(Boolean)
                    .map((e) => e.trim())
                    .join(""),
                  attributes: (function (e) {
                    let t = {};
                    for (let n in (!e["data-sentry-component"] &&
                      e["data-sentry-element"] &&
                      (e["data-sentry-component"] = e["data-sentry-element"]),
                    e))
                      if (sM.has(n)) {
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
      let sA = {
        resource: function (e) {
          let {
            entryType: t,
            initiatorType: n,
            name: r,
            responseEnd: i,
            startTime: o,
            decodedBodySize: a,
            encodedBodySize: s,
            responseStatus: l,
            transferSize: c,
          } = e;
          return ["fetch", "xmlhttprequest"].includes(n)
            ? null
            : {
                type: `${t}.${n}`,
                start: sN(o),
                end: sN(i),
                name: r,
                data: {
                  size: c,
                  statusCode: l,
                  decodedBodySize: a,
                  encodedBodySize: s,
                },
              };
        },
        paint: function (e) {
          let { duration: t, entryType: n, name: r, startTime: i } = e,
            o = sN(i);
          return { type: n, name: r, start: o, end: o + t, data: void 0 };
        },
        navigation: function (e) {
          let {
            entryType: t,
            name: n,
            decodedBodySize: r,
            duration: i,
            domComplete: o,
            encodedBodySize: a,
            domContentLoadedEventStart: s,
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
                start: sN(h),
                end: sN(o),
                name: n,
                data: {
                  size: f,
                  decodedBodySize: r,
                  encodedBodySize: a,
                  duration: i,
                  domInteractive: c,
                  domContentLoadedEventStart: s,
                  domContentLoadedEventEnd: l,
                  loadEventStart: u,
                  loadEventEnd: d,
                  domComplete: o,
                  redirectCount: p,
                },
              };
        },
      };
      function sO(e, t) {
        return ({ metric: n }) => void t.replayPerformanceEntries.push(e(n));
      }
      function sD(e) {
        let t = sA[e.entryType];
        return t ? t(e) : null;
      }
      function sN(e) {
        return ((ef || M.performance.timeOrigin) + e) / 1e3;
      }
      function sL(e) {
        let t = e.entries[e.entries.length - 1];
        return sU(
          e,
          "largest-contentful-paint",
          t && t.element ? [t.element] : void 0,
        );
      }
      function sP(e) {
        let t = [],
          n = [];
        for (let r of e.entries)
          if (void 0 !== r.sources) {
            let e = [];
            for (let t of r.sources)
              if (t.node) {
                n.push(t.node);
                let r = s_.mirror.getId(t.node);
                r && e.push(r);
              }
            t.push({ value: r.value, nodeIds: e.length ? e : void 0 });
          }
        return sU(e, "cumulative-layout-shift", n, t);
      }
      function s$(e) {
        let t = e.entries[e.entries.length - 1];
        return sU(e, "first-input-delay", t && t.target ? [t.target] : void 0);
      }
      function sF(e) {
        let t = e.entries[e.entries.length - 1];
        return sU(
          e,
          "interaction-to-next-paint",
          t && t.target ? [t.target] : void 0,
        );
      }
      function sU(e, t, n, r) {
        let i = e.value,
          o = e.rating,
          a = sN(i);
        return {
          type: "web-vital",
          name: t,
          start: a,
          end: a,
          data: {
            value: i,
            size: i,
            rating: o,
            nodeIds: n ? n.map((e) => s_.mirror.getId(e)) : void 0,
            attributions: r,
          },
        };
      }
      let sj = "u" < typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
        sB = ["info", "warn", "error", "log"],
        sH = "[Replay] ";
      function sz(e, t = "info") {
        n8(
          {
            category: "console",
            data: { logger: "replay" },
            level: t,
            message: `${sH}${e}`,
          },
          { level: t },
        );
      }
      let sW =
        ((k = !1),
        (x = !1),
        (C = {
          exception: () => void 0,
          infoTick: () => void 0,
          setConfig: (e) => {
            (k = e.captureExceptions), (x = e.traceInternals);
          },
        }),
        sj
          ? (sB.forEach((e) => {
              C[e] = (...t) => {
                Q[e](sH, ...t), x && sz(t.join(""), n7(e));
              };
            }),
            (C.exception = (e, ...t) => {
              t.length && C.error && C.error(...t),
                Q.error(sH, e),
                k ? tJ(e) : x && sz(e, "error");
            }),
            (C.infoTick = (...e) => {
              Q.info(sH, ...e), x && setTimeout(() => sz(e[0]), 0);
            }))
          : sB.forEach((e) => {
              C[e] = () => void 0;
            }),
        C);
      class sq extends Error {
        constructor() {
          super("Event buffer exceeded maximum size of 20000000.");
        }
      }
      class sY {
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
          if (((this._totalSize += t), this._totalSize > 2e7)) throw new sq();
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
          return e ? sy(e) : null;
        }
      }
      class sV {
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
          sj && sW.info("Destroying compression worker"),
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
                  sj && sW.error("Error in compression worker: ", t.response),
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
      class sG {
        constructor(e) {
          (this._worker = new sV(e)),
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
          let t = sy(e.timestamp);
          (!this._earliestTimestamp || t < this._earliestTimestamp) &&
            (this._earliestTimestamp = t);
          let n = JSON.stringify(e);
          return ((this._totalSize += n.length), this._totalSize > 2e7)
            ? Promise.reject(new sq())
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
              sj &&
                sW.exception(e, 'Sending "clear" message to worker failed', e);
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
      class sX {
        constructor(e) {
          (this._fallback = new sY()),
            (this._compression = new sG(e)),
            (this._used = this._fallback),
            (this._ensureWorkerIsLoadedPromise = this._ensureWorkerIsLoaded());
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
            sj &&
              sW.exception(
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
            sj &&
              sW.exception(e, "Failed to add events when switching buffers.");
          }
        }
      }
      function sJ() {
        try {
          return "sessionStorage" in M && !!M.sessionStorage;
        } catch (e) {
          return !1;
        }
      }
      function sK(e) {
        return void 0 !== e && Math.random() < e;
      }
      function sZ(e) {
        let t = Date.now(),
          n = e.id || em(),
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
      function sQ(e) {
        if (sJ())
          try {
            M.sessionStorage.setItem(oq, JSON.stringify(e));
          } catch (e) {}
      }
      function s0(
        { sessionSampleRate: e, allowBuffering: t, stickySession: n = !1 },
        { previousSessionId: r } = {},
      ) {
        let i = sZ({
          sampled: sK(e) ? "session" : !!t && "buffer",
          previousSessionId: r,
        });
        return n && sQ(i), i;
      }
      function s1(e, t, n = +new Date()) {
        return null === e || void 0 === t || t < 0 || (0 !== t && e + t <= n);
      }
      function s2(
        e,
        {
          maxReplayDuration: t,
          sessionIdleExpire: n,
          targetTime: r = Date.now(),
        },
      ) {
        return s1(e.started, t, r) || s1(e.lastActivity, n, r);
      }
      function s3(e, { sessionIdleExpire: t, maxReplayDuration: n }) {
        return (
          !!s2(e, { sessionIdleExpire: t, maxReplayDuration: n }) &&
          ("buffer" !== e.sampled || 0 !== e.segmentId)
        );
      }
      function s5(
        { sessionIdleExpire: e, maxReplayDuration: t, previousSessionId: n },
        r,
      ) {
        let i =
          r.stickySession &&
          (function () {
            if (!sJ()) return null;
            try {
              let e = M.sessionStorage.getItem(oq);
              if (!e) return null;
              let t = JSON.parse(e);
              return sj && sW.infoTick("Loading existing session"), sZ(t);
            } catch (e) {
              return null;
            }
          })();
        return i
          ? s3(i, { sessionIdleExpire: e, maxReplayDuration: t })
            ? (sj &&
                sW.infoTick(
                  "Session in sessionStorage is expired, creating new one...",
                ),
              s0(r, { previousSessionId: i.id }))
            : i
          : (sj && sW.infoTick("Creating new session"),
            s0(r, { previousSessionId: n }));
      }
      function s4(e, t, n) {
        return !!s8(e, t) && (s6(e, t, n), !0);
      }
      async function s6(e, t, n) {
        let { eventBuffer: r } = e;
        if (!r || (r.waitForCheckout && !n)) return null;
        let i = "buffer" === e.recordingMode;
        try {
          n && i && r.clear(),
            n && ((r.hasCheckout = !0), (r.waitForCheckout = !1));
          let o = e.getOptions(),
            a = (function (e, t) {
              try {
                if ("function" == typeof t && e.type === aY.Custom) return t(e);
              } catch (e) {
                return (
                  sj &&
                    sW.exception(
                      e,
                      "An error occurred in the `beforeAddRecordingEvent` callback, skipping the event...",
                    ),
                  null
                );
              }
              return e;
            })(t, o.beforeAddRecordingEvent);
          if (!a) return;
          return await r.addEvent(a);
        } catch (o) {
          let t = o && o instanceof sq;
          if (t && i) return r.clear(), (r.waitForCheckout = !0), null;
          e.handleException(o),
            await e.stop({ reason: t ? "addEventSizeExceeded" : "addEvent" });
          let n = eU();
          n && n.recordDroppedEvent("internal_sdk_error", "replay");
        }
      }
      function s8(e, t) {
        if (!e.eventBuffer || e.isPaused() || !e.isEnabled()) return !1;
        let n = sy(t.timestamp);
        return (
          !(n + e.timeouts.sessionIdlePause < Date.now()) &&
          (!(
            n >
            e.getContext().initialTimestamp + e.getOptions().maxReplayDuration
          ) ||
            (sj &&
              sW.infoTick(
                `Skipping event with timestamp ${n} because it is after maxReplayDuration`,
              ),
            !1))
        );
      }
      function s7(e) {
        return "transaction" === e.type;
      }
      function s9(e) {
        return "feedback" === e.type;
      }
      function le(e) {
        return !!e.category;
      }
      function lt() {
        let e = eN().getPropagationContext().dsc;
        e && delete e.replay_id;
        let t = tF();
        if (t) {
          let e = tW(t);
          delete e.replay_id;
        }
      }
      function ln(e, t) {
        return t.map(({ type: t, start: n, end: r, name: i, data: o }) => {
          let a = e.throttledAddEvent({
            type: aY.Custom,
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
          return "string" == typeof a ? Promise.resolve(null) : a;
        });
      }
      function lr(e, t) {
        var n;
        e.isEnabled() &&
          null !== t &&
          ((n = t.name),
          ((!sj || !e.getOptions()._experiments.traceInternals) &&
            iZ(n, eU())) ||
            e.addUpdate(() => (ln(e, [t]), !0)));
      }
      function li(e) {
        if (!e) return;
        let t = new TextEncoder();
        try {
          if ("string" == typeof e) return t.encode(e).length;
          if (e instanceof URLSearchParams)
            return t.encode(e.toString()).length;
          if (e instanceof FormData) {
            let n = lp(e);
            return t.encode(n).length;
          }
          if (e instanceof Blob) return e.size;
          if (e instanceof ArrayBuffer) return e.byteLength;
        } catch (e) {}
      }
      function lo(e) {
        if (!e) return;
        let t = parseInt(e, 10);
        return isNaN(t) ? void 0 : t;
      }
      function la(e) {
        try {
          if ("string" == typeof e) return [e];
          if (e instanceof URLSearchParams) return [e.toString()];
          if (e instanceof FormData) return [lp(e)];
          if (!e) return [void 0];
        } catch (t) {
          return (
            sj && sW.exception(t, "Failed to serialize body", e),
            [void 0, "BODY_PARSE_ERROR"]
          );
        }
        return (
          sj && sW.info("Skipping network body because of body type", e),
          [void 0, "UNPARSEABLE_BODY_TYPE"]
        );
      }
      function ls(e, t) {
        if (!e) return { headers: {}, size: void 0, _meta: { warnings: [t] } };
        let n = { ...e._meta },
          r = n.warnings || [];
        return (n.warnings = [...r, t]), (e._meta = n), e;
      }
      function ll(e, t) {
        if (!t) return null;
        let {
          startTimestamp: n,
          endTimestamp: r,
          url: i,
          method: o,
          statusCode: a,
          request: s,
          response: l,
        } = t;
        return {
          type: e,
          start: n / 1e3,
          end: r / 1e3,
          name: i,
          data: ed({ method: o, statusCode: a, request: s, response: l }),
        };
      }
      function lc(e) {
        return { headers: {}, size: e, _meta: { warnings: ["URL_SKIPPED"] } };
      }
      function lu(e, t, n) {
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
                : { body: `${t}\u{2026}`, warnings: ["TEXT_TRUNCATED"] };
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
      function ld(e, t) {
        return Object.entries(e).reduce((n, [r, i]) => {
          let o = r.toLowerCase();
          return t.includes(o) && e[r] && (n[o] = i), n;
        }, {});
      }
      function lp(e) {
        return new URLSearchParams(e).toString();
      }
      function lh(e, t = M.document.baseURI) {
        if (
          e.startsWith("http://") ||
          e.startsWith("https://") ||
          e.startsWith(M.location.origin)
        )
          return e;
        let n = new URL(e, t);
        if (n.origin !== new URL(t).origin) return e;
        let r = n.href;
        return !e.endsWith("/") && r.endsWith("/") ? r.slice(0, -1) : r;
      }
      async function lf(e, t, n) {
        try {
          let r = await lm(e, t, n),
            i = ll("resource.fetch", r);
          lr(n.replay, i);
        } catch (e) {
          sj && sW.exception(e, "Failed to capture fetch breadcrumb");
        }
      }
      async function lm(e, t, n) {
        var r, i;
        let o = Date.now(),
          { startTimestamp: a = o, endTimestamp: s = o } = t,
          {
            url: l,
            method: c,
            status_code: u = 0,
            request_body_size: d,
            response_body_size: p,
          } = e.data,
          h =
            ((r = n.networkDetailAllowUrls),
            er(lh(l), r) && ((i = n.networkDetailDenyUrls), !er(lh(l), i)));
        return {
          startTimestamp: a,
          endTimestamp: s,
          url: l,
          method: c,
          statusCode: u,
          request: h
            ? (function (
                { networkCaptureBodies: e, networkRequestHeaders: t },
                n,
                r,
              ) {
                var i, o;
                let a = n
                  ? ((i = n),
                    (o = t),
                    1 === i.length && "string" != typeof i[0]
                      ? lb(i[0], o)
                      : 2 === i.length
                        ? lb(i[1], o)
                        : {})
                  : {};
                if (!e) return lu(a, r, void 0);
                let [s, l] = la(ly(n)),
                  c = lu(a, r, s);
                return l ? ls(c, l) : c;
              })(n, t.input, d)
            : lc(d),
          response: await lg(h, n, t.response, p),
        };
      }
      async function lg(
        e,
        { networkCaptureBodies: t, networkResponseHeaders: n },
        r,
        i,
      ) {
        if (!e && void 0 !== i) return lc(i);
        let o = r ? lv(r.headers, n) : {};
        if (!r || (!t && void 0 !== i)) return lu(o, i, void 0);
        let [a, s] = await l_(r),
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
              let o = e && e.length && void 0 === n ? li(e) : n;
              if (!r) return lc(o);
              if (t) return lu(i, o, e);
              return lu(i, o, void 0);
            } catch (e) {
              return (
                sj && sW.exception(e, "Failed to serialize response body"),
                lu(i, n, void 0)
              );
            }
          })(a, {
            networkCaptureBodies: t,
            responseBodySize: i,
            captureDetails: e,
            headers: o,
          });
        return s ? ls(l, s) : l;
      }
      async function l_(e) {
        let t = (function (e) {
          try {
            return e.clone();
          } catch (e) {
            sj && sW.exception(e, "Failed to clone response body");
          }
        })(e);
        if (!t) return [void 0, "BODY_PARSE_ERROR"];
        try {
          var n;
          return [
            await ((n = t),
            new Promise((e, t) => {
              let r = rH(
                () => t(Error("Timeout while trying to read response body")),
                500,
              );
              lS(n)
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
              sj && sW.warn("Parsing text body from response timed out"),
              [void 0, "BODY_PARSE_TIMEOUT"]
            );
          return (
            sj && sW.exception(e, "Failed to get text body from response"),
            [void 0, "BODY_PARSE_ERROR"]
          );
        }
      }
      function ly(e = []) {
        if (2 === e.length && "object" == typeof e[1]) return e[1].body;
      }
      function lv(e, t) {
        let n = {};
        return (
          t.forEach((t) => {
            e.get(t) && (n[t] = e.get(t));
          }),
          n
        );
      }
      function lb(e, t) {
        if (!e) return {};
        let n = e.headers;
        return n
          ? n instanceof Headers
            ? lv(n, t)
            : Array.isArray(n)
              ? {}
              : ld(n, t)
          : {};
      }
      async function lS(e) {
        return await e.text();
      }
      async function lw(e, t, n) {
        try {
          let r = (function (e, t, n) {
              var r, i;
              let o,
                a = Date.now(),
                {
                  startTimestamp: s = a,
                  endTimestamp: l = a,
                  input: c,
                  xhr: u,
                } = t,
                {
                  url: d,
                  method: p,
                  status_code: h = 0,
                  request_body_size: f,
                  response_body_size: m,
                } = e.data;
              if (!d) return null;
              if (
                !u ||
                ((r = n.networkDetailAllowUrls), !er(lh(d), r)) ||
                ((i = n.networkDetailDenyUrls), er(lh(d), i))
              ) {
                let e = lc(f);
                return {
                  startTimestamp: s,
                  endTimestamp: l,
                  url: d,
                  method: p,
                  statusCode: h,
                  request: e,
                  response: lc(m),
                };
              }
              let g = u[nG],
                _ = g ? ld(g.request_headers, n.networkRequestHeaders) : {},
                y = ld(
                  (o = u.getAllResponseHeaders())
                    ? o.split("\r\n").reduce((e, t) => {
                        let [n, r] = t.split(": ");
                        return r && (e[n.toLowerCase()] = r), e;
                      }, {})
                    : {},
                  n.networkResponseHeaders,
                ),
                [v, b] = n.networkCaptureBodies ? la(c) : [void 0],
                [S, w] = n.networkCaptureBodies
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
                          if (n instanceof Document) return [n.body.outerHTML];
                          if ("json" === r && n && "object" == typeof n)
                            return [JSON.stringify(n)];
                          if (!n) return [void 0];
                        } catch (e) {
                          return (
                            sj &&
                              sW.exception(e, "Failed to serialize body", n),
                            [void 0, "BODY_PARSE_ERROR"]
                          );
                        }
                        return (
                          sj &&
                            sW.info(
                              "Skipping network body because of body type",
                              n,
                            ),
                          [void 0, "UNPARSEABLE_BODY_TYPE"]
                        );
                      } catch (e) {
                        t.push(e);
                      }
                      return (
                        sj && sW.warn("Failed to get xhr response body", ...t),
                        [void 0]
                      );
                    })(u)
                  : [void 0],
                E = lu(_, f, v),
                k = lu(y, m, S);
              return {
                startTimestamp: s,
                endTimestamp: l,
                url: d,
                method: p,
                statusCode: h,
                request: b ? ls(E, b) : E,
                response: w ? ls(k, w) : k,
              };
            })(e, t, n),
            i = ll("resource.xhr", r);
          lr(n.replay, i);
        } catch (e) {
          sj && sW.exception(e, "Failed to capture xhr breadcrumb");
        }
      }
      async function lE(e) {
        try {
          return Promise.all(
            ln(e, [
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
              })(M.performance.memory),
            ]),
          );
        } catch (e) {
          return [];
        }
      }
      let lk = M.navigator;
      async function lx({ client: e, scope: t, replayId: n, event: r }) {
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
        let o = await tG(e.getOptions(), r, i, t, e, eL());
        if (!o) return null;
        o.platform = o.platform || "javascript";
        let a = e.getSdkMetadata(),
          { name: s, version: l } = (a && a.sdk) || {};
        return (
          (o.sdk = {
            ...o.sdk,
            name: s || "sentry.javascript.unknown",
            version: l || "0.0.0",
          }),
          o
        );
      }
      async function lC({
        recordingData: e,
        replayId: t,
        segmentId: n,
        eventContext: r,
        timestamp: i,
        session: o,
      }) {
        var a;
        let s,
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
          h = eU(),
          f = eN(),
          m = h && h.getTransport(),
          g = h && h.getDsn();
        if (!h || !m || !g || !o.sampled) return tt({});
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
          y = await lx({ scope: f, client: h, replayId: t, event: _ });
        if (!y)
          return (
            h.recordDroppedEvent("event_processor", "replay", _),
            sj &&
              sW.info(
                "An event processor returned `null`, will not send event.",
              ),
            tt({})
          );
        delete y.sdkProcessingMetadata;
        let v =
          ((a = h.getOptions().tunnel),
          nd(ny(y, n_(y), a, g), [
            [{ type: "replay_event" }, y],
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
          s = await m.send(v);
        } catch (t) {
          let e = Error(oY);
          try {
            e.cause = t;
          } catch (e) {}
          throw e;
        }
        if (
          "number" == typeof s.statusCode &&
          (s.statusCode < 200 || s.statusCode >= 300)
        )
          throw new lT(s.statusCode);
        let b = rq({}, s);
        if (rW(b, "replay")) throw new lI(b);
        return s;
      }
      class lT extends Error {
        constructor(e) {
          super(`Transport returned status code ${e}`);
        }
      }
      class lI extends Error {
        constructor(e) {
          super("Rate limit hit"), (this.rateLimits = e);
        }
      }
      async function lM(e, t = { count: 0, interval: 5e3 }) {
        let { recordingData: n, onError: r } = e;
        if (n.length)
          try {
            return await lC(e), !0;
          } catch (n) {
            if (n instanceof lT || n instanceof lI) throw n;
            if (
              (tQ("Replays", { _retryCount: t.count }), r && r(n), t.count >= 3)
            ) {
              let e = Error(`${oY} - max retries exceeded`);
              try {
                e.cause = n;
              } catch (e) {}
              throw e;
            }
            return (
              (t.interval *= ++t.count),
              new Promise((n, r) => {
                rH(async () => {
                  try {
                    await lM(e, t), n(!0);
                  } catch (e) {
                    r(e);
                  }
                }, t.interval);
              })
            );
          }
      }
      let lR = "__THROTTLED";
      class lA {
        constructor({ options: e, recordingOptions: t }) {
          lA.prototype.__init.call(this),
            lA.prototype.__init2.call(this),
            lA.prototype.__init3.call(this),
            lA.prototype.__init4.call(this),
            lA.prototype.__init5.call(this),
            lA.prototype.__init6.call(this),
            (this.eventBuffer = null),
            (this.performanceEntries = []),
            (this.replayPerformanceEntries = []),
            (this.recordingMode = "session"),
            (this.timeouts = { sessionIdlePause: 3e5, sessionIdleExpire: 9e5 }),
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
                a = n && n.maxWait ? Math.max(n.maxWait, t) : 0;
              function s() {
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
                  (i = rH(s, t)),
                  a && void 0 === o && (o = rH(s, a)),
                  r
                );
              }
              return (
                (c.cancel = l),
                (c.flush = function () {
                  return void 0 !== i || void 0 !== o ? s() : r;
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
                  return (n = !0), e ? "__SKIPPED" : lR;
                }
                n = !1;
                let a = t.get(o) || 0;
                return t.set(o, a + 1), e(...r);
              };
            })((e, t) =>
              s8(this, e) ? s6(this, e, t) : Promise.resolve(null),
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
          if ((i && (this.clickDetector = new sx(this, i)), sj)) {
            const t = e._experiments;
            sW.setConfig({
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
          sj && sW.exception(e),
            this._options.onError && this._options.onError(e);
        }
        initializeSampling(e) {
          let { errorSampleRate: t, sessionSampleRate: n } = this._options,
            r = t <= 0 && n <= 0;
          if (((this._requiresManualStart = r), !r)) {
            if ((this._initializeSessionForSampling(e), !this.session)) {
              sj &&
                sW.exception(Error("Unable to initialize and create session"));
              return;
            }
            !1 !== this.session.sampled &&
              ((this.recordingMode =
                "buffer" === this.session.sampled &&
                0 === this.session.segmentId
                  ? "buffer"
                  : "session"),
              sj &&
                sW.infoTick(`Starting replay in ${this.recordingMode} mode`),
              this._initializeRecording());
          }
        }
        start() {
          if (this._isEnabled && "session" === this.recordingMode) {
            sj && sW.info("Recording is already in progress");
            return;
          }
          if (this._isEnabled && "buffer" === this.recordingMode) {
            sj &&
              sW.info(
                "Buffering is in progress, call `flush()` to save the replay",
              );
            return;
          }
          sj && sW.infoTick("Starting replay in session mode"),
            this._updateUserActivity();
          let e = s5(
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
            sj &&
              sW.info(
                "Buffering is in progress, call `flush()` to save the replay",
              );
            return;
          }
          sj && sW.infoTick("Starting replay in buffer mode");
          let e = s5(
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
            this._stopRecording = s_({
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
                    sj &&
                      sW.warn("Received replay event after session expired.");
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
                            (sk.has(r) && e.registerMutation(t.timestamp),
                            r === aV.Scroll && e.registerScroll(t.timestamp),
                            t.data.source === aV.MouseInteraction)
                          ) {
                            let { type: n, id: r } = t.data,
                              i = s_.mirror.getNode(r);
                            i instanceof HTMLElement &&
                              n === aG.Click &&
                              e.registerClick(i);
                          }
                        } catch (e) {}
                      })(e.clickDetector, n),
                    e.addUpdate(() => {
                      if (
                        ("buffer" === e.recordingMode &&
                          i &&
                          e.setInitialState(),
                        !s4(e, n, i))
                      )
                        return !0;
                      if (!i) return !1;
                      let t = e.session;
                      if (
                        ((function (e, t) {
                          if (t && e.session && 0 === e.session.segmentId) {
                            let t;
                            s4(
                              e,
                              ((t = e.getOptions()),
                              {
                                type: aY.Custom,
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
                          (sj &&
                            sW.info(
                              `Updating session start time to earliest event in buffer to ${new Date(n)}`,
                            ),
                          (t.started = n),
                          e.getOptions().stickySession && sQ(t));
                      }
                      return (
                        (!!t && !!t.previousSessionId) ||
                        ("session" === e.recordingMode && e.flush(), !0)
                      );
                    });
                }),
              ...(/iPhone|iPad|iPod/i.test((lk && lk.userAgent) || "") ||
              (/Macintosh/i.test((lk && lk.userAgent) || "") &&
                lk &&
                lk.maxTouchPoints &&
                lk.maxTouchPoints > 1)
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
              sj && sW.info(`Stopping Replay${t ? ` triggered by ${t}` : ""}`),
                lt(),
                this._removeListeners(),
                this.stopRecording(),
                this._debouncedFlush.cancel(),
                e && (await this._flush({ force: !0 })),
                this.eventBuffer && this.eventBuffer.destroy(),
                (this.eventBuffer = null),
                (function () {
                  if (sJ())
                    try {
                      M.sessionStorage.removeItem(oq);
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
            sj && sW.info("Pausing replay"));
        }
        resume() {
          this._isPaused &&
            this._checkSession() &&
            ((this._isPaused = !1),
            this.startRecording(),
            sj && sW.info("Resuming replay"));
        }
        async sendBufferedReplayOrFlush({ continueRecording: e = !0 } = {}) {
          if ("session" === this.recordingMode) return this.flushImmediate();
          let t = Date.now();
          sj && sW.info("Converting buffer to session"),
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
            s1(this._lastActivity, this.timeouts.sessionIdlePause) &&
            this.session &&
            "session" === this.session.sampled
            ? void this.pause()
            : !!this._checkSession();
        }
        setInitialState() {
          let e = `${M.location.pathname}${M.location.hash}${M.location.search}`,
            t = `${M.location.origin}${e}`;
          (this.performanceEntries = []),
            (this.replayPerformanceEntries = []),
            this._clearContext(),
            (this._context.initialUrl = t),
            (this._context.initialTimestamp = Date.now()),
            this._context.urls.push(t);
        }
        throttledAddEvent(e, t) {
          let n = this._throttledAddEvent(e, t);
          if (n === lR) {
            let e = sI({ category: "replay.throttled" });
            this.addUpdate(
              () =>
                !s4(this, {
                  type: 5,
                  timestamp: e.timestamp || 0,
                  data: { tag: "breadcrumb", payload: e, metric: !0 },
                }),
            );
          }
          return n;
        }
        getCurrentRoute() {
          let e = this.lastActiveSpan || tF(),
            t = e && t$(e),
            n = ((t && tR(t).data) || {})[ta];
          if (t && n && ["route", "custom"].includes(n))
            return tR(t).description;
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
                    sj &&
                      sW.info(
                        `Using compression worker${e ? ` from ${e}` : ""}`,
                      );
                    let n = new Worker(t);
                    return new sX(n);
                  } catch (e) {
                    sj &&
                      sW.exception(e, "Failed to create compression worker");
                  }
                })(t);
                if (e) return e;
              }
              return sj && sW.info("Using simple buffer"), new sY();
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
            n = s5(
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
            !s3(e, {
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
            M.document.addEventListener(
              "visibilitychange",
              this._handleVisibilityChange,
            ),
              M.addEventListener("blur", this._handleWindowBlur),
              M.addEventListener("focus", this._handleWindowFocus),
              M.addEventListener("keydown", this._handleKeyboardEvent),
              this.clickDetector && this.clickDetector.addListeners(),
              this._hasInitializedCoreListeners ||
                (!(function (e) {
                  let t,
                    n = eU();
                  nq((t) => {
                    var n, r;
                    if (!e.isEnabled()) return;
                    let i = (function (e) {
                      let { target: t, message: n } = (function (e) {
                        let t,
                          n = "click" === e.name,
                          r = null;
                        try {
                          (r = n ? sw(e.event) : sE(e.event)),
                            (t = Y(r, { maxStringLength: 200 }) || "<unknown>");
                        } catch (e) {
                          t = "<unknown>";
                        }
                        return { target: r, message: t };
                      })(e);
                      return sI({ category: `ui.${e.name}`, ...sR(t, n) });
                    })(t);
                    if (!i) return;
                    let o = "click" === t.name,
                      a = o ? t.event : void 0;
                    o &&
                      e.clickDetector &&
                      a &&
                      a.target &&
                      !a.altKey &&
                      !a.metaKey &&
                      !a.ctrlKey &&
                      !a.shiftKey &&
                      ((n = e.clickDetector),
                      (r = sw(t.event)),
                      n.handleClick(i, r)),
                      sb(e, i);
                  }),
                    nK((t) => {
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
                        e.addUpdate(() => (ln(e, [n]), !1)));
                    }),
                    (t = eU()) &&
                      t.on("beforeAddBreadcrumb", (t) =>
                        (function (e, t) {
                          var n;
                          if (!e.isEnabled() || !le(t)) return;
                          let r =
                            ((n = t),
                            !le(n) ||
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
                                      return sI(e);
                                    let n = !1,
                                      r = t.map((e) => {
                                        if (!e) return e;
                                        if ("string" == typeof e)
                                          return e.length > 5e3
                                            ? ((n = !0),
                                              `${e.slice(0, 5e3)}\u{2026}`)
                                            : e;
                                        if ("object" == typeof e)
                                          try {
                                            let t = to(e, 7);
                                            if (JSON.stringify(t).length > 5e3)
                                              return (
                                                (n = !0),
                                                `${JSON.stringify(t, null, 2).slice(0, 5e3)}\u{2026}`
                                              );
                                            return t;
                                          } catch (e) {}
                                        return e;
                                      });
                                    return sI({
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
                                : sI(n));
                          r && sb(e, r);
                        })(e, t),
                      );
                  let r = eU();
                  try {
                    let {
                        networkDetailAllowUrls: t,
                        networkDetailDenyUrls: n,
                        networkCaptureBodies: i,
                        networkRequestHeaders: o,
                        networkResponseHeaders: a,
                      } = e.getOptions(),
                      s = {
                        replay: e,
                        networkDetailAllowUrls: t,
                        networkDetailDenyUrls: n,
                        networkCaptureBodies: i,
                        networkRequestHeaders: o,
                        networkResponseHeaders: a,
                      };
                    r &&
                      r.on("beforeAddBreadcrumb", (e, t) =>
                        (function (e, t, n) {
                          if (t.data)
                            try {
                              var r, i, o, a;
                              (r = t),
                                "xhr" === r.category &&
                                  (i = n) &&
                                  i.xhr &&
                                  (!(function (e, t) {
                                    let { xhr: n, input: r } = t;
                                    if (!n) return;
                                    let i = li(r),
                                      o = n.getResponseHeader("content-length")
                                        ? lo(
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
                                              return li(n);
                                            } catch (e) {
                                              return;
                                            }
                                          })(n.response, n.responseType);
                                    void 0 !== i &&
                                      (e.data.request_body_size = i),
                                      void 0 !== o &&
                                        (e.data.response_body_size = o);
                                  })(t, n),
                                  lw(t, n, e)),
                                (o = t),
                                "fetch" === o.category &&
                                  (a = n) &&
                                  a.response &&
                                  (!(function (e, t) {
                                    let { input: n, response: r } = t,
                                      i = li(n ? ly(n) : void 0),
                                      o = r
                                        ? lo(r.headers.get("content-length"))
                                        : void 0;
                                    void 0 !== i &&
                                      (e.data.request_body_size = i),
                                      void 0 !== o &&
                                        (e.data.response_body_size = o);
                                  })(t, n),
                                  lf(t, n, e));
                            } catch (e) {
                              sj &&
                                sW.exception(
                                  e,
                                  "Error when enriching network breadcrumb",
                                );
                            }
                        })(s, e, t),
                      );
                  } catch (e) {}
                  t9(
                    Object.assign(
                      (t, n) =>
                        !e.isEnabled() || e.isPaused()
                          ? t
                          : "replay_event" === t.type
                            ? (delete t.breadcrumbs, t)
                            : !t.type || s7(t) || s9(t)
                              ? e.checkAndHandleExpiredSession()
                                ? s9(t)
                                  ? (e.flush(),
                                    (t.contexts.feedback.replay_id =
                                      e.getSessionId()),
                                    e.triggerUserActivity(),
                                    e.addUpdate(
                                      () =>
                                        !t.timestamp ||
                                        (e.throttledAddEvent({
                                          type: aY.Custom,
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
                                    ? (sj &&
                                        sW.log(
                                          "Ignoring error from rrweb internals",
                                          t,
                                        ),
                                      null)
                                    : ((("buffer" === e.recordingMode &&
                                        t.message !== oY &&
                                        t.exception &&
                                        !t.type &&
                                        sK(e.getOptions().errorSampleRate)) ||
                                        "session" === e.recordingMode) &&
                                        (t.tags = {
                                          ...t.tags,
                                          replayId: e.getSessionId(),
                                        }),
                                      t)
                                : (lt(), t)
                              : t,
                      { id: "Replay" },
                    ),
                  ),
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
                            sb(
                              n,
                              sI({
                                category: "replay.hydrate-error",
                                data: { url: V() },
                              }),
                            ));
                      }),
                      n.on("afterSendEvent", (t, n) => {
                        if (!e.isEnabled() || (t.type && !s7(t))) return;
                        let r = n && n.statusCode;
                        if (r && !(r < 200) && !(r >= 300)) {
                          if (s7(t)) {
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
                              rH(async () => {
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
              e.performanceEntries.includes(t) || e.performanceEntries.push(t);
            }
            function n({ entries: e }) {
              e.forEach(t);
            }
            let r = [];
            return (
              ["navigation", "paint", "resource"].forEach((e) => {
                r.push(oL(e, n));
              }),
              r.push(
                oO(sO(sL, e)),
                oA(sO(sP, e)),
                oD(sO(s$, e)),
                oN(sO(sF, e)),
              ),
              () => {
                r.forEach((e) => e());
              }
            );
          })(this);
        }
        _removeListeners() {
          try {
            M.document.removeEventListener(
              "visibilitychange",
              this._handleVisibilityChange,
            ),
              M.removeEventListener("blur", this._handleWindowBlur),
              M.removeEventListener("focus", this._handleWindowFocus),
              M.removeEventListener("keydown", this._handleKeyboardEvent),
              this.clickDetector && this.clickDetector.removeListeners(),
              this._performanceCleanupCallback &&
                this._performanceCleanupCallback();
          } catch (e) {
            this.handleException(e);
          }
        }
        __init() {
          this._handleVisibilityChange = () => {
            "visible" === M.document.visibilityState
              ? this._doChangeToForegroundTasks()
              : this._doChangeToBackgroundTasks();
          };
        }
        __init2() {
          this._handleWindowBlur = () => {
            let e = sI({ category: "ui.blur" });
            this._doChangeToBackgroundTasks(e);
          };
        }
        __init3() {
          this._handleWindowFocus = () => {
            let e = sI({ category: "ui.focus" });
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
                  key: a,
                  target: s,
                } = e;
                if (
                  !s ||
                  "INPUT" === (t = s).tagName ||
                  "TEXTAREA" === t.tagName ||
                  t.isContentEditable ||
                  !a
                )
                  return null;
                let l = n || i || o,
                  c = 1 === a.length;
                if (!l && c) return null;
                let u = Y(s, { maxStringLength: 200 }) || "<unknown>",
                  d = sR(s, u);
                return sI({
                  category: "ui.keyDown",
                  message: u,
                  data: {
                    ...d.data,
                    metaKey: n,
                    shiftKey: r,
                    ctrlKey: i,
                    altKey: o,
                    key: a,
                  },
                });
              })(t);
              n && sb(e, n);
            })(this, e);
          };
        }
        _doChangeToBackgroundTasks(e) {
          !this.session ||
            s2(this.session, {
              maxReplayDuration: this._options.maxReplayDuration,
              sessionIdleExpire: this.timeouts.sessionIdleExpire,
            }) ||
            (e && this._createCustomBreadcrumb(e), this.conditionalFlush());
        }
        _doChangeToForegroundTasks(e) {
          if (this.session) {
            if (!this.checkAndHandleExpiredSession()) {
              sj &&
                sW.info("Document has become active, but session has expired");
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
              type: aY.Custom,
              timestamp: e.timestamp || 0,
              data: { tag: "breadcrumb", payload: e },
            });
          });
        }
        _addPerformanceEntries() {
          let e = this.performanceEntries
            .map(sD)
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
          return Promise.all(ln(this, e));
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
            sj && sW.error("No session or eventBuffer found to flush.");
            return;
          }
          if (
            (await this._addPerformanceEntries(),
            this.eventBuffer && this.eventBuffer.hasEvents)
          ) {
            if ((await lE(this), this.eventBuffer) && e === this.getSessionId())
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
                await lM({
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
                let e = eU();
                e &&
                  e.recordDroppedEvent(
                    t instanceof lI ? "ratelimit_backoff" : "send_error",
                    "replay",
                  );
              }
          }
        }
        __init5() {
          this._flush = async ({ force: e = !1 } = {}) => {
            if (!this._isEnabled && !e) return;
            if (!this.checkAndHandleExpiredSession()) {
              sj &&
                sW.error(
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
              sj &&
                sW.info(
                  `Session duration (${Math.floor(n / 1e3)}s) is too ${r ? "short" : "long"}, not sending replay.`,
                ),
                r && this._debouncedFlush();
              return;
            }
            let o = this.eventBuffer;
            o &&
              0 === this.session.segmentId &&
              !o.hasCheckout &&
              sj &&
              sW.info("Flushing initial segment without checkout.");
            let a = !!this._flushLock;
            this._flushLock || (this._flushLock = this._runFlush());
            try {
              await this._flushLock;
            } catch (e) {
              this.handleException(e);
            } finally {
              (this._flushLock = void 0), a && this._debouncedFlush();
            }
          };
        }
        _maybeSaveSession() {
          this.session && this._options.stickySession && sQ(this.session);
        }
        __init6() {
          this._onMutationHandler = (e) => {
            let t = e.length,
              n = this._options.mutationLimit,
              r = this._options.mutationBreadcrumbLimit,
              i = n && t > n;
            if (t > r || i) {
              let e = sI({
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
      function lO(e, t) {
        return [...e, ...t].join(",");
      }
      let lD =
          'img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]',
        lN = ["content-length", "content-type", "accept"],
        lL = !1,
        lP = (e) => new l$(e);
      class l$ {
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
          workerUrl: a,
          _experiments: s = {},
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
          networkRequestHeaders: y = [],
          networkResponseHeaders: v = [],
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
          this.name = l$.id;
          const R = (function ({
            mask: e,
            unmask: t,
            block: n,
            unblock: r,
            ignore: i,
          }) {
            return {
              maskTextSelector: lO(e, [".sentry-mask", "[data-sentry-mask]"]),
              unmaskTextSelector: lO(t, []),
              blockSelector: lO(n, [
                ".sentry-block",
                "[data-sentry-block]",
                "base",
                "iframe[srcdoc]:not([src])",
              ]),
              unblockSelector: lO(r, []),
              ignoreSelector: lO(i, [
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
                  privacyOptions: R,
                  key: e,
                  value: t,
                  el: n,
                }),
              ...R,
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
              workerUrl: a,
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
              networkRequestHeaders: lF(y),
              networkResponseHeaders: lF(v),
              beforeAddRecordingEvent: T,
              beforeErrorSampling: I,
              onError: M,
              _experiments: s,
            }),
            this._initialOptions.blockAllMedia &&
              (this._recordingOptions.blockSelector = this._recordingOptions
                .blockSelector
                ? `${this._recordingOptions.blockSelector},${lD}`
                : lD),
            this._isInitialized && i9())
          )
            throw Error(
              "Multiple Sentry Session Replay instances are not supported",
            );
          this._isInitialized = !0;
        }
        get _isInitialized() {
          return lL;
        }
        set _isInitialized(e) {
          lL = e;
        }
        afterAllSetup(e) {
          i9() && !this._replay && (this._setup(e), this._initialize(e));
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
            a =
              ((t = this._initialOptions),
              (n = e.getOptions()),
              (r = { sessionSampleRate: 0, errorSampleRate: 0, ...ed(t) }),
              (i = nb(n.replaysSessionSampleRate)),
              (o = nb(n.replaysOnErrorSampleRate)),
              null == i &&
                null == o &&
                Z(() => {
                  console.warn(
                    "Replay is disabled because neither `replaysSessionSampleRate` nor `replaysOnErrorSampleRate` are set.",
                  );
                }),
              null != i && (r.sessionSampleRate = i),
              null != o && (r.errorSampleRate = o),
              r);
          this._replay = new lA({
            options: a,
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
      function lF(e) {
        return [...lN, ...e.map((e) => e.toLowerCase())];
      }
      function lU() {
        let e = eU();
        return e && e.getIntegrationByName("Replay");
      }
      function lj(e, t, n = 1 / 0, r = 0) {
        return !e || e.nodeType !== e.ELEMENT_NODE || r > n
          ? -1
          : t(e)
            ? r
            : lj(e.parentNode, t, n, r + 1);
      }
      function lB(e, t) {
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
      l$.__initStatic(),
        ((cF = cq || (cq = {}))[(cF.Document = 0)] = "Document"),
        (cF[(cF.DocumentType = 1)] = "DocumentType"),
        (cF[(cF.Element = 2)] = "Element"),
        (cF[(cF.Text = 3)] = "Text"),
        (cF[(cF.CDATA = 4)] = "CDATA"),
        (cF[(cF.Comment = 5)] = "Comment");
      let lH =
          "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.",
        lz = {
          map: {},
          getId: () => (console.error(lH), -1),
          getNode: () => (console.error(lH), null),
          removeNodeFromMap() {
            console.error(lH);
          },
          has: () => (console.error(lH), !1),
          reset() {
            console.error(lH);
          },
        };
      function lW(e, t, n, r, i = window) {
        let o = i.Object.getOwnPropertyDescriptor(e, t);
        return (
          i.Object.defineProperty(
            e,
            t,
            r
              ? n
              : {
                  set(e) {
                    lJ(() => {
                      n.set.call(this, e);
                    }, 0),
                      o && o.set && o.set.call(this, e);
                  },
                },
          ),
          () => lW(e, t, o || {}, !0)
        );
      }
      function lq(e, t, n) {
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
      function lY(e, t, n, r, i) {
        if (!e) return !1;
        let o = e
          ? e.nodeType === e.ELEMENT_NODE
            ? e
            : e.parentElement
          : null;
        if (!o) return !1;
        let a = lj(o, lB(t, n)),
          s = -1;
        return (
          !(a < 0) &&
          (r && (s = lj(o, lB(null, r))), (a > -1 && s < 0) || a < s)
        );
      }
      "u" > typeof window &&
        window.Proxy &&
        window.Reflect &&
        (lz = new Proxy(lz, {
          get: (e, t, n) => (
            "map" === t && console.error(lH), Reflect.get(e, t, n)
          ),
        })),
        /[1-9][0-9]{12}/.test(Date.now().toString());
      let lV = {};
      function lG(e) {
        let t = lV[e];
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
        return (lV[e] = r.bind(window));
      }
      function lX(...e) {
        return lG("requestAnimationFrame")(...e);
      }
      function lJ(...e) {
        return lG("setTimeout")(...e);
      }
      var lK =
        (((cU = lK || {})[(cU["2D"] = 0)] = "2D"),
        (cU[(cU.WebGL = 1)] = "WebGL"),
        (cU[(cU.WebGL2 = 2)] = "WebGL2"),
        cU);
      let lZ = (e) =>
        S
          ? (...t) => {
              try {
                return e(...t);
              } catch (e) {
                if (S && !0 === S(e)) return () => {};
                throw e;
              }
            }
          : e;
      for (
        var lQ =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          l0 = "u" < typeof Uint8Array ? [] : new Uint8Array(256),
          l1 = 0;
        l1 < lQ.length;
        l1++
      )
        l0[lQ.charCodeAt(l1)] = l1;
      var l2 = function (e) {
        var t,
          n = new Uint8Array(e),
          r = n.length,
          i = "";
        for (t = 0; t < r; t += 3)
          (i += lQ[n[t] >> 2]),
            (i += lQ[((3 & n[t]) << 4) | (n[t + 1] >> 4)]),
            (i += lQ[((15 & n[t + 1]) << 2) | (n[t + 2] >> 6)]),
            (i += lQ[63 & n[t + 2]]);
        return (
          r % 3 == 2
            ? (i = i.substring(0, i.length - 1) + "=")
            : r % 3 == 1 && (i = i.substring(0, i.length - 2) + "=="),
          i
        );
      };
      let l3 = new Map(),
        l5 = (e, t, n) => {
          let r;
          if (!e || !(l6(e, t) || "object" == typeof e)) return;
          let i = e.constructor.name,
            o =
              ((r = l3.get(n)) || ((r = new Map()), l3.set(n, r)),
              r.has(i) || r.set(i, []),
              r.get(i)),
            a = o.indexOf(e);
          return -1 === a && ((a = o.length), o.push(e)), a;
        },
        l4 = (e, t, n) =>
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
                return { rr_type: t.constructor.name, base64: l2(t) };
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
              else if (l6(t, n) || "object" == typeof t)
                return { rr_type: t.constructor.name, index: l5(t, n, r) };
              return t;
            })(e, t, n),
          ),
        l6 = (e, t) =>
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
      function l8(e, t, n, r, i) {
        let o = [];
        try {
          let a = lq(e.HTMLCanvasElement.prototype, "getContext", function (e) {
            return function (o, ...a) {
              if (!lY(this, t, n, r, !0)) {
                let e = "experimental-webgl" === o ? "webgl" : o;
                if (
                  ("__context" in this || (this.__context = e),
                  i && ["webgl", "webgl2"].includes(e))
                )
                  if (a[0] && "object" == typeof a[0]) {
                    let e = a[0];
                    e.preserveDrawingBuffer || (e.preserveDrawingBuffer = !0);
                  } else a.splice(0, 1, { preserveDrawingBuffer: !0 });
              }
              return e.apply(this, [o, ...a]);
            };
          });
          o.push(a);
        } catch (e) {
          console.error(
            "failed to patch HTMLCanvasElement.prototype.getContext",
          );
        }
        return () => {
          o.forEach((e) => e());
        };
      }
      function l7(e, t, n, r, i, o, a, s) {
        let l = [];
        for (let a of Object.getOwnPropertyNames(e))
          if (
            ![
              "isContextLost",
              "canvas",
              "drawingBufferWidth",
              "drawingBufferHeight",
            ].includes(a)
          )
            try {
              if ("function" != typeof e[a]) continue;
              let c = lq(e, a, function (e) {
                return function (...l) {
                  let c = e.apply(this, l);
                  if (
                    (l5(c, s, this),
                    "tagName" in this.canvas && !lY(this.canvas, r, i, o, !0))
                  ) {
                    let e = l4(l, s, this),
                      r = { type: t, property: a, args: e };
                    n(this.canvas, r);
                  }
                  return c;
                };
              });
              l.push(c);
            } catch (i) {
              let r = lW(e, a, {
                set(e) {
                  n(this.canvas, {
                    type: t,
                    property: a,
                    args: [e],
                    setter: !0,
                  });
                },
              });
              l.push(r);
            }
        return l;
      }
      class l9 {
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
            i8([
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
            blockClass: r,
            blockSelector: i,
            unblockSelector: o,
            maxCanvasSize: a,
            recordCanvas: s,
            dataURLOptions: l,
            errorHandler: c,
          } = e;
          if (
            ((this.mutationCb = e.mutationCb),
            (this.mirror = e.mirror),
            (this.options = e),
            c &&
              (function (e) {
                S = e;
              })(c),
            ((s && "number" == typeof t) || e.enableManualSnapshot) &&
              (this.worker = this.initFPSWorker()),
            this.addWindow(n),
            e.enableManualSnapshot)
          )
            return;
          lZ(() => {
            s &&
              "all" === t &&
              (this.startRAFTimestamping(),
              this.startPendingCanvasMutationFlusher()),
              s &&
                "number" == typeof t &&
                this.initCanvasFPSObserver(t, r, i, o, a, {
                  dataURLOptions: l,
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
            enableManualSnapshot: a,
          } = this.options;
          if (!this.windowsSet.has(e)) {
            if (a) {
              this.windowsSet.add(e), this.windows.push(new WeakRef(e));
              return;
            }
            lZ(() => {
              if (
                (o &&
                  "all" === t &&
                  this.initCanvasMutationObserver(e, n, r, i),
                o && "number" == typeof t)
              ) {
                let t = l8(e, n, r, i, !0);
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
              let { base64: r, type: i, width: o, height: a } = t;
              this.mutationCb({
                id: n,
                type: lK["2D"],
                commands: [
                  { property: "clearRect", args: [0, 0, o, a] },
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
                      a,
                    ],
                  },
                ],
              });
            }),
            t
          );
        }
        initCanvasFPSObserver(e, t, n, r, i, o) {
          let a = this.takeSnapshot(!1, e, t, n, r, i, o.dataURLOptions);
          this.restoreHandlers.push(() => {
            cancelAnimationFrame(a);
          });
        }
        initCanvasMutationObserver(e, t, n, r) {
          var i, o;
          let a,
            s = l8(e, t, n, r, !1),
            l = (function (e, t, n, r, i) {
              let o = [];
              for (let a of Object.getOwnPropertyNames(
                t.CanvasRenderingContext2D.prototype,
              ))
                try {
                  if (
                    "function" != typeof t.CanvasRenderingContext2D.prototype[a]
                  )
                    continue;
                  let s = lq(
                    t.CanvasRenderingContext2D.prototype,
                    a,
                    function (o) {
                      return function (...s) {
                        return (
                          lY(this.canvas, n, r, i, !0) ||
                            lJ(() => {
                              let n = l4(s, t, this);
                              e(this.canvas, {
                                type: lK["2D"],
                                property: a,
                                args: n,
                              });
                            }, 0),
                          o.apply(this, s)
                        );
                      };
                    },
                  );
                  o.push(s);
                } catch (r) {
                  let n = lW(t.CanvasRenderingContext2D.prototype, a, {
                    set(t) {
                      e(this.canvas, {
                        type: lK["2D"],
                        property: a,
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
              (a = []).push(
                ...l7(
                  e.WebGLRenderingContext.prototype,
                  lK.WebGL,
                  i,
                  t,
                  n,
                  r,
                  o,
                  e,
                ),
              ),
              void 0 !== e.WebGL2RenderingContext &&
                a.push(
                  ...l7(
                    e.WebGL2RenderingContext.prototype,
                    lK.WebGL2,
                    i,
                    t,
                    n,
                    r,
                    o,
                    e,
                  ),
                ),
              () => {
                a.forEach((e) => e());
              });
          this.restoreHandlers.push(() => {
            s(), l(), c();
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
        takeSnapshot(e, t, n, r, i, o, a, s) {
          let l = 1e3 / t,
            c = 0,
            u = (e) => {
              if (e) return [e];
              let t = [],
                o = (e) => {
                  e.querySelectorAll("canvas").forEach((e) => {
                    lY(e, n, r, i) || t.push(e);
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
            d = (t) => {
              if (this.windows.length) {
                if (c && t - c < l) return void lX(d);
                (c = t),
                  u(s).forEach((t) => {
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
                          i8([
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
                          i8([
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
                                  dataURLOptions: a,
                                  maxCanvasSize: o,
                                },
                                [e],
                              ),
                          ]);
                        })
                        .catch((e) => {
                          lZ(() => {
                            throw e;
                          })();
                        });
                    }
                  }),
                  e || lX(d);
              }
            };
          return lX(d);
        }
        startPendingCanvasMutationFlusher() {
          lX(() => this.flushPendingCanvasMutations());
        }
        startRAFTimestamping() {
          let e = (t) => {
            (this.rafStamps.latestId = t), lX(e);
          };
          lX(e);
        }
        flushPendingCanvasMutations() {
          this.pendingCanvasMutations.forEach((e, t) => {
            let n = this.mirror.getId(t);
            this.flushPendingCanvasMutationFor(t, n);
          }),
            lX(() => this.flushPendingCanvasMutations());
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
      let ce = {
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
        ct = (e = {}) => {
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
              let { quality: e, enableManualSnapshot: n, maxCanvasSize: r } = i;
              return {
                enableManualSnapshot: n,
                recordCanvas: !0,
                getCanvasManager: (e) => {
                  let i = new l9({
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
                ...(ce[e || "medium"] || ce.medium),
              };
            },
            async snapshot(e) {
              (await o).snapshot(e);
            },
          };
        },
        cn = M.document,
        cr = M.navigator,
        ci = "Report a Bug",
        co = "Cancel",
        ca = "Send Bug Report",
        cs = "Confirm",
        cl = "Report a Bug",
        cc = "your.email@example.org",
        cu = "Email",
        cd = "What's the bug? What did you expect?",
        cp = "Description",
        ch = "Your Name",
        cf = "Name",
        cm = "Thank you for your report!",
        cg = "(required)",
        c_ = "Add a screenshot",
        cy = "Remove screenshot",
        cv = (e, t = { includeReplay: !0 }) => {
          if (!e.message)
            throw Error("Unable to submit feedback with empty message");
          let n = eU();
          if (!n) throw Error("No client setup, cannot send feedback.");
          e.tags && Object.keys(e.tags).length && eN().setTags(e.tags);
          let r = r9({ source: "api", url: V(), ...e }, t);
          return new Promise((e, t) => {
            let i = setTimeout(
                () => t("Unable to determine if Feedback was correctly sent."),
                5e3,
              ),
              o = n.on("afterSendEvent", (n, a) => {
                if (n.event_id === r)
                  return (clearTimeout(i),
                  o(),
                  a &&
                    "number" == typeof a.statusCode &&
                    a.statusCode >= 200 &&
                    a.statusCode < 300)
                    ? e(r)
                    : a && "number" == typeof a.statusCode && 0 === a.statusCode
                      ? t(
                          "Unable to send Feedback. This is because of network issues, or because you are using an ad-blocker.",
                        )
                      : a &&
                          "number" == typeof a.statusCode &&
                          403 === a.statusCode
                        ? t(
                            "Unable to send Feedback. This could be because this domain is not in your list of allowed domains.",
                          )
                        : t(
                            "Unable to send Feedback. This could be because of network issues, or because you are using an ad-blocker",
                          );
              });
          });
        },
        cb = "u" < typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
      function cS(e, t) {
        return {
          ...e,
          ...t,
          tags: { ...e.tags, ...t.tags },
          onFormOpen: () => {
            t.onFormOpen && t.onFormOpen(), e.onFormOpen && e.onFormOpen();
          },
          onFormClose: () => {
            t.onFormClose && t.onFormClose(), e.onFormClose && e.onFormClose();
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
      function cw(e, t) {
        return (
          Object.entries(t).forEach(([t, n]) => {
            e.setAttributeNS(null, t, n);
          }),
          e
        );
      }
      let cE = "rgba(88, 74, 192, 1)",
        ck = {
          foreground: "#2b2233",
          background: "#ffffff",
          accentForeground: "white",
          accentBackground: cE,
          successColor: "#268d75",
          errorColor: "#df3338",
          border: "1.5px solid rgba(41, 35, 47, 0.13)",
          boxShadow: "0px 4px 24px 0px rgba(43, 34, 51, 0.12)",
          outline: "1px auto var(--accent-background)",
          interactiveFilter: "brightness(95%)",
        },
        cx = {
          foreground: "#ebe6ef",
          background: "#29232f",
          accentForeground: "white",
          accentBackground: cE,
          successColor: "#2da98c",
          errorColor: "#f55459",
          border: "1.5px solid rgba(235, 230, 239, 0.15)",
          boxShadow: "0px 4px 24px 0px rgba(43, 34, 51, 0.12)",
          outline: "1px auto var(--accent-background)",
          interactiveFilter: "brightness(150%)",
        };
      function cC(e) {
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
      let cT =
        ({
          lazyLoadIntegration: e,
          getModalIntegration: t,
          getScreenshotIntegration: n,
        }) =>
        ({
          id: r = "sentry-feedback",
          autoInject: i = !0,
          showBranding: o = !0,
          isEmailRequired: a = !1,
          isNameRequired: s = !1,
          showEmail: l = !0,
          showName: c = !0,
          enableScreenshot: u = !0,
          useSentryUser: d = { email: "email", name: "username" },
          tags: p,
          styleNonce: h,
          scriptNonce: f,
          colorScheme: m = "system",
          themeLight: g = {},
          themeDark: _ = {},
          addScreenshotButtonLabel: y = c_,
          cancelButtonLabel: v = co,
          confirmButtonLabel: b = cs,
          emailLabel: S = cu,
          emailPlaceholder: w = cc,
          formTitle: E = cl,
          isRequiredLabel: k = cg,
          messageLabel: x = cp,
          messagePlaceholder: C = cd,
          nameLabel: T = cf,
          namePlaceholder: I = ch,
          removeScreenshotButtonLabel: R = cy,
          submitButtonLabel: A = ca,
          successMessageText: O = cm,
          triggerLabel: D = ci,
          triggerAriaLabel: N = "",
          onFormOpen: L,
          onFormClose: P,
          onSubmitSuccess: $,
          onSubmitError: F,
          onFormSubmitted: U,
        } = {}) => {
          let j = {
              id: r,
              autoInject: i,
              showBranding: o,
              isEmailRequired: a,
              isNameRequired: s,
              showEmail: l,
              showName: c,
              enableScreenshot: u,
              useSentryUser: d,
              tags: p,
              styleNonce: h,
              scriptNonce: f,
              colorScheme: m,
              themeDark: _,
              themeLight: g,
              triggerLabel: D,
              triggerAriaLabel: N,
              cancelButtonLabel: v,
              submitButtonLabel: A,
              confirmButtonLabel: b,
              formTitle: E,
              emailLabel: S,
              emailPlaceholder: w,
              messageLabel: x,
              messagePlaceholder: C,
              nameLabel: T,
              namePlaceholder: I,
              successMessageText: O,
              isRequiredLabel: k,
              addScreenshotButtonLabel: y,
              removeScreenshotButtonLabel: R,
              onFormClose: P,
              onFormOpen: L,
              onSubmitError: F,
              onSubmitSuccess: $,
              onFormSubmitted: U,
            },
            B = null,
            H = [],
            z = (e) => {
              if (!B) {
                let t = cn.createElement("div");
                (t.id = String(e.id)),
                  cn.body.appendChild(t),
                  (B = t.attachShadow({ mode: "open" })).appendChild(
                    (function ({
                      colorScheme: e,
                      themeDark: t,
                      themeLight: n,
                      styleNonce: r,
                    }) {
                      let i = cn.createElement("style");
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

  ${cC("dark" === e ? { ...cx, ...t } : { ...ck, ...n })}
}

${
  "system" === e
    ? `
@media (prefers-color-scheme: dark) {
  :host {
    ${cC({ ...cx, ...t })}
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
              return B;
            },
            W = async (r) => {
              let i,
                o,
                a =
                  r.enableScreenshot &&
                  !(
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                      cr.userAgent,
                    ) ||
                    (/Macintosh/i.test(cr.userAgent) &&
                      cr.maxTouchPoints &&
                      cr.maxTouchPoints > 1)
                  ) &&
                  !!isSecureContext;
              try {
                (i = (t ? t() : await e("feedbackModalIntegration", f))()),
                  ez(i);
              } catch (e) {
                throw (
                  (cb &&
                    Q.error(
                      "[Feedback] Error when trying to load feedback integrations. Try using `feedbackSyncIntegration` in your `Sentry.init`.",
                    ),
                  Error("[Feedback] Missing feedback modal integration!"))
                );
              }
              try {
                let t = a
                  ? n
                    ? n()
                    : await e("feedbackScreenshotIntegration", f)
                  : void 0;
                t && ((o = t()), ez(o));
              } catch (e) {
                cb &&
                  Q.error(
                    "[Feedback] Missing feedback screenshot integration. Proceeding without screenshots.",
                  );
              }
              let s = i.createDialog({
                options: {
                  ...r,
                  onFormClose: () => {
                    s && s.close(), r.onFormClose && r.onFormClose();
                  },
                  onFormSubmitted: () => {
                    s && s.close(), r.onFormSubmitted && r.onFormSubmitted();
                  },
                },
                screenshotIntegration: o,
                sendFeedback: cv,
                shadow: z(r),
              });
              return s;
            },
            q = (e, t = {}) => {
              let n = cS(j, t),
                r =
                  "string" == typeof e
                    ? cn.querySelector(e)
                    : "function" == typeof e.addEventListener
                      ? e
                      : null;
              if (!r)
                throw (
                  (cb &&
                    Q.error("[Feedback] Unable to attach to target element"),
                  Error("Unable to attach to target element"))
                );
              let i = null,
                o = async () => {
                  i ||
                    (i = await W({
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
              let a = () => {
                (H = H.filter((e) => e !== a)),
                  i && i.removeFromDom(),
                  (i = null),
                  r.removeEventListener("click", o);
              };
              return H.push(a), a;
            },
            Y = (e = {}) => {
              let t = cS(j, e),
                n = z(t),
                r = (function ({
                  triggerLabel: e,
                  triggerAriaLabel: t,
                  shadow: n,
                  styleNonce: r,
                }) {
                  let i,
                    o,
                    a,
                    s,
                    l,
                    c,
                    u,
                    d,
                    p = cn.createElement("button");
                  if (
                    ((p.type = "button"),
                    (p.className = "widget__actor"),
                    (p.ariaHidden = "false"),
                    (p.ariaLabel = t || e || ci),
                    p.appendChild(
                      ((o = cw(
                        (i = (e) =>
                          M.document.createElementNS(
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
                      (a = cw(i("g"), { clipPath: "url(#clip0_57_80)" })),
                      (s = cw(i("path"), {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M15.6622 15H12.3997C12.2129 14.9959 12.031 14.9396 11.8747 14.8375L8.04965 12.2H7.49956V19.1C7.4875 19.3348 7.3888 19.5568 7.22256 19.723C7.05632 19.8892 6.83435 19.9879 6.59956 20H2.04956C1.80193 19.9968 1.56535 19.8969 1.39023 19.7218C1.21511 19.5467 1.1153 19.3101 1.11206 19.0625V12.2H0.949652C0.824431 12.2017 0.700142 12.1783 0.584123 12.1311C0.468104 12.084 0.362708 12.014 0.274155 11.9255C0.185602 11.8369 0.115689 11.7315 0.0685419 11.6155C0.0213952 11.4995 -0.00202913 11.3752 -0.00034808 11.25V3.75C-0.00900498 3.62067 0.0092504 3.49095 0.0532651 3.36904C0.0972798 3.24712 0.166097 3.13566 0.255372 3.04168C0.344646 2.94771 0.452437 2.87327 0.571937 2.82307C0.691437 2.77286 0.82005 2.74798 0.949652 2.75H8.04965L11.8747 0.1625C12.031 0.0603649 12.2129 0.00407221 12.3997 0H15.6622C15.9098 0.00323746 16.1464 0.103049 16.3215 0.278167C16.4966 0.453286 16.5964 0.689866 16.5997 0.9375V3.25269C17.3969 3.42959 18.1345 3.83026 18.7211 4.41679C19.5322 5.22788 19.9878 6.32796 19.9878 7.47502C19.9878 8.62209 19.5322 9.72217 18.7211 10.5333C18.1345 11.1198 17.3969 11.5205 16.5997 11.6974V14.0125C16.6047 14.1393 16.5842 14.2659 16.5395 14.3847C16.4948 14.5035 16.4268 14.6121 16.3394 14.7042C16.252 14.7962 16.147 14.8698 16.0307 14.9206C15.9144 14.9714 15.7891 14.9984 15.6622 15ZM1.89695 10.325H1.88715V4.625H8.33715C8.52423 4.62301 8.70666 4.56654 8.86215 4.4625L12.6872 1.875H14.7247V13.125H12.6872L8.86215 10.4875C8.70666 10.3835 8.52423 10.327 8.33715 10.325H2.20217C2.15205 10.3167 2.10102 10.3125 2.04956 10.3125C1.9981 10.3125 1.94708 10.3167 1.89695 10.325ZM2.98706 12.2V18.1625H5.66206V12.2H2.98706ZM16.5997 9.93612V5.01393C16.6536 5.02355 16.7072 5.03495 16.7605 5.04814C17.1202 5.13709 17.4556 5.30487 17.7425 5.53934C18.0293 5.77381 18.2605 6.06912 18.4192 6.40389C18.578 6.73866 18.6603 7.10452 18.6603 7.47502C18.6603 7.84552 18.578 8.21139 18.4192 8.54616C18.2605 8.88093 18.0293 9.17624 17.7425 9.41071C17.4556 9.64518 17.1202 9.81296 16.7605 9.90191C16.7072 9.91509 16.6536 9.9265 16.5997 9.93612Z",
                      })),
                      o.appendChild(a).appendChild(s),
                      (l = i("defs")),
                      (c = cw(i("clipPath"), { id: "clip0_57_80" })),
                      (u = cw(i("rect"), {
                        width: "20",
                        height: "20",
                        fill: "white",
                      })),
                      c.appendChild(u),
                      l.appendChild(c),
                      o.appendChild(l).appendChild(c).appendChild(u),
                      o),
                    ),
                    e)
                  ) {
                    let t = cn.createElement("span");
                    t.appendChild(cn.createTextNode(e)), p.appendChild(t);
                  }
                  let h =
                    (((d = cn.createElement("style")).textContent = `
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
                    r && d.setAttribute("nonce", r),
                    d);
                  return {
                    el: p,
                    appendToDom() {
                      n.appendChild(h), n.appendChild(p);
                    },
                    removeFromDom() {
                      n.removeChild(p), n.removeChild(h);
                    },
                    show() {
                      p.ariaHidden = "false";
                    },
                    hide() {
                      p.ariaHidden = "true";
                    },
                  };
                })({
                  triggerLabel: t.triggerLabel,
                  triggerAriaLabel: t.triggerAriaLabel,
                  shadow: n,
                  styleNonce: h,
                });
              return (
                q(r.el, {
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
              i9() &&
                j.autoInject &&
                ("loading" === cn.readyState
                  ? cn.addEventListener("DOMContentLoaded", () =>
                      Y().appendToDom(),
                    )
                  : Y().appendToDom());
            },
            attachTo: q,
            createWidget(e = {}) {
              let t = Y(cS(j, e));
              return t.appendToDom(), t;
            },
            createForm: async (e = {}) => W(cS(j, e)),
            remove() {
              B && (B.parentElement && B.parentElement.remove(), (B = null)),
                H.forEach((e) => e()),
                (H = []);
            },
          };
        };
      function cI() {
        let e = eU();
        return e && e.getIntegrationByName("Feedback");
      }
      var cM,
        cR,
        cA,
        cO,
        cD,
        cN,
        cL,
        cP,
        c$,
        cF,
        cU,
        cj,
        cB,
        cH,
        cz,
        cW,
        cq,
        cY,
        cV,
        cG,
        cX,
        cJ,
        cK,
        cZ,
        cQ = {},
        c0 = [],
        c1 =
          /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
        c2 = Array.isArray;
      function c3(e, t) {
        for (var n in t) e[n] = t[n];
        return e;
      }
      function c5(e) {
        var t = e.parentNode;
        t && t.removeChild(e);
      }
      function c4(e, t, n) {
        var r,
          i,
          o,
          a = {};
        for (o in t)
          "key" == o ? (r = t[o]) : "ref" == o ? (i = t[o]) : (a[o] = t[o]);
        if (
          (arguments.length > 2 &&
            (a.children = arguments.length > 3 ? cY.call(arguments, 2) : n),
          "function" == typeof e && null != e.defaultProps)
        )
          for (o in e.defaultProps)
            void 0 === a[o] && (a[o] = e.defaultProps[o]);
        return c6(e, a, r, i, null);
      }
      function c6(e, t, n, r, i) {
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
          __v: null == i ? ++cG : i,
          __i: -1,
          __u: 0,
        };
        return null == i && null != cV.vnode && cV.vnode(o), o;
      }
      function c8(e) {
        return e.children;
      }
      function c7(e, t) {
        (this.props = e), (this.context = t);
      }
      function c9(e, t) {
        if (null == t) return e.__ ? c9(e.__, e.__i + 1) : null;
        for (var n; t < e.__k.length; t++)
          if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
        return "function" == typeof e.type ? c9(e) : null;
      }
      function ue(e) {
        ((!e.__d && (e.__d = !0) && cX.push(e) && !ut.__r++) ||
          cJ !== cV.debounceRendering) &&
          ((cJ = cV.debounceRendering) || cK)(ut);
      }
      function ut() {
        var e,
          t,
          n,
          r = [],
          i = [];
        for (cX.sort(cZ); (e = cX.shift()); )
          e.__d &&
            ((n = cX.length),
            (t =
              (function (e, t, n) {
                var r,
                  i = e.__v,
                  o = i.__e,
                  a = e.__P;
                if (a)
                  return (
                    ((r = c3({}, i)).__v = i.__v + 1),
                    cV.vnode && cV.vnode(r),
                    us(
                      a,
                      r,
                      i,
                      e.__n,
                      void 0 !== a.ownerSVGElement,
                      32 & i.__u ? [o] : null,
                      t,
                      null == o ? c9(i) : o,
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
            0 === n || cX.length > n
              ? (ul(r, t, i),
                (i.length = r.length = 0),
                (t = void 0),
                cX.sort(cZ))
              : t && cV.__c && cV.__c(t, c0));
        t && ul(r, t, i), (ut.__r = 0);
      }
      function un(e, t, n, r, i, o, a, s, l, c, u) {
        var d,
          p,
          h,
          f,
          m,
          g = (r && r.__k) || c0,
          _ = t.length;
        for (
          n.__d = l,
            (function (e, t, n) {
              var r,
                i,
                o,
                a,
                s,
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
                      ? c6(null, i, null, null, i)
                      : c2(i)
                        ? c6(c8, { children: i }, null, null, null)
                        : void 0 === i.constructor && i.__b > 0
                          ? c6(
                              i.type,
                              i.props,
                              i.key,
                              i.ref ? i.ref : null,
                              i.__v,
                            )
                          : i)
                  ? ((i.__ = e),
                    (i.__b = e.__b + 1),
                    (s = (function (e, t, n, r) {
                      var i = e.key,
                        o = e.type,
                        a = n - 1,
                        s = n + 1,
                        l = t[n];
                      if (null === l || (l && i == l.key && o === l.type))
                        return n;
                      if (r > +(null != l && 0 == (131072 & l.__u)))
                        for (; a >= 0 || s < t.length; ) {
                          if (a >= 0) {
                            if (
                              (l = t[a]) &&
                              0 == (131072 & l.__u) &&
                              i == l.key &&
                              o === l.type
                            )
                              return a;
                            a--;
                          }
                          if (s < t.length) {
                            if (
                              (l = t[s]) &&
                              0 == (131072 & l.__u) &&
                              i == l.key &&
                              o === l.type
                            )
                              return s;
                            s++;
                          }
                        }
                      return -1;
                    })(i, n, (a = r + d), u)),
                    (i.__i = s),
                    (o = null),
                    -1 !== s && (u--, (o = n[s]) && (o.__u |= 131072)),
                    null == o || null === o.__v
                      ? (-1 == s && d--,
                        "function" != typeof i.type && (i.__u |= 65536))
                      : s !== a &&
                        (s === a + 1
                          ? d++
                          : s > a
                            ? u > l - a
                              ? (d += s - a)
                              : d--
                            : (d = s < a && s == a - 1 ? s - a : 0),
                        s !== r + d && (i.__u |= 65536)))
                  : (o = n[r]) &&
                    null == o.key &&
                    o.__e &&
                    (o.__e == e.__d && (e.__d = c9(o)),
                    uu(o, o, !1),
                    (n[r] = null),
                    u--);
              if (u)
                for (r = 0; r < c; r++)
                  null != (o = n[r]) &&
                    0 == (131072 & o.__u) &&
                    (o.__e == e.__d && (e.__d = c9(o)), uu(o, o));
            })(n, t, g),
            l = n.__d,
            d = 0;
          d < _;
          d++
        )
          null != (h = n.__k[d]) &&
            "boolean" != typeof h &&
            "function" != typeof h &&
            ((p = -1 === h.__i ? cQ : g[h.__i] || cQ),
            (h.__i = d),
            us(e, h, p, i, o, a, s, l, c, u),
            (f = h.__e),
            h.ref &&
              p.ref != h.ref &&
              (p.ref && uc(p.ref, null, h), u.push(h.ref, h.__c || f, h)),
            null == m && null != f && (m = f),
            65536 & h.__u || p.__k === h.__k
              ? (l = (function e(t, n, r) {
                  var i, o;
                  if ("function" == typeof t.type) {
                    for (i = t.__k, o = 0; i && o < i.length; o++)
                      i[o] && ((i[o].__ = t), (n = e(i[o], n, r)));
                    return n;
                  }
                  t.__e != n && (r.insertBefore(t.__e, n || null), (n = t.__e));
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
      function ur(e, t, n) {
        "-" === t[0]
          ? e.setProperty(t, null == n ? "" : n)
          : (e[t] =
              null == n
                ? ""
                : "number" != typeof n || c1.test(t)
                  ? n
                  : n + "px");
      }
      function ui(e, t, n, r, i) {
        var o;
        e: if ("style" === t)
          if ("string" == typeof n) e.style.cssText = n;
          else {
            if (("string" == typeof r && (e.style.cssText = r = ""), r))
              for (t in r) (n && t in n) || ur(e.style, t, "");
            if (n) for (t in n) (r && n[t] === r[t]) || ur(e.style, t, n[t]);
          }
        else if ("o" === t[0] && "n" === t[1])
          (o = t !== (t = t.replace(/(PointerCapture)$|Capture$/i, "$1"))),
            (t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2)),
            e.l || (e.l = {}),
            (e.l[t + o] = n),
            n
              ? r
                ? (n.u = r.u)
                : ((n.u = Date.now()), e.addEventListener(t, o ? ua : uo, o))
              : e.removeEventListener(t, o ? ua : uo, o);
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
      function uo(e) {
        if (this.l) {
          var t = this.l[e.type + !1];
          if (e.t) {
            if (e.t <= t.u) return;
          } else e.t = Date.now();
          return t(cV.event ? cV.event(e) : e);
        }
      }
      function ua(e) {
        if (this.l) return this.l[e.type + !0](cV.event ? cV.event(e) : e);
      }
      function us(e, t, n, r, i, o, a, s, l, c) {
        var u,
          d,
          p,
          h,
          f,
          m,
          g,
          _,
          y,
          v,
          b,
          S,
          w,
          E,
          k,
          x = t.type;
        if (void 0 !== t.constructor) return null;
        128 & n.__u && ((l = !!(32 & n.__u)), (o = [(s = t.__e = n.__e)])),
          (u = cV.__b) && u(t);
        e: if ("function" == typeof x)
          try {
            if (
              ((_ = t.props),
              (y = (u = x.contextType) && r[u.__c]),
              (v = u ? (y ? y.props.value : u.__) : r),
              n.__c
                ? (g = (d = t.__c = n.__c).__ = d.__E)
                : ("prototype" in x && x.prototype.render
                    ? (t.__c = d = new x(_, v))
                    : ((t.__c = d = new c7(_, v)),
                      (d.constructor = x),
                      (d.render = ud)),
                  y && y.sub(d),
                  (d.props = _),
                  d.state || (d.state = {}),
                  (d.context = v),
                  (d.__n = r),
                  (p = d.__d = !0),
                  (d.__h = []),
                  (d._sb = [])),
              null == d.__s && (d.__s = d.state),
              null != x.getDerivedStateFromProps &&
                (d.__s == d.state && (d.__s = c3({}, d.__s)),
                c3(d.__s, x.getDerivedStateFromProps(_, d.__s))),
              (h = d.props),
              (f = d.state),
              (d.__v = t),
              p)
            )
              null == x.getDerivedStateFromProps &&
                null != d.componentWillMount &&
                d.componentWillMount(),
                null != d.componentDidMount && d.__h.push(d.componentDidMount);
            else {
              if (
                (null == x.getDerivedStateFromProps &&
                  _ !== h &&
                  null != d.componentWillReceiveProps &&
                  d.componentWillReceiveProps(_, v),
                !d.__e &&
                  ((null != d.shouldComponentUpdate &&
                    !1 === d.shouldComponentUpdate(_, d.__s, v)) ||
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
                (d._sb = []), d.__h.length && a.push(d);
                break e;
              }
              null != d.componentWillUpdate &&
                d.componentWillUpdate(_, d.__s, v),
                null != d.componentDidUpdate &&
                  d.__h.push(function () {
                    d.componentDidUpdate(h, f, m);
                  });
            }
            if (
              ((d.context = v),
              (d.props = _),
              (d.__P = e),
              (d.__e = !1),
              (S = cV.__r),
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
                (r = c3(c3({}, r), d.getChildContext())),
              p ||
                null == d.getSnapshotBeforeUpdate ||
                (m = d.getSnapshotBeforeUpdate(h, f)),
              un(
                e,
                c2(
                  (k =
                    null != u && u.type === c8 && null == u.key
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
                a,
                s,
                l,
                c,
              ),
              (d.base = t.__e),
              (t.__u &= -161),
              d.__h.length && a.push(d),
              g && (d.__E = d.__ = null);
          } catch (e) {
            (t.__v = null),
              l || null != o
                ? ((t.__e = s),
                  (t.__u |= l ? 160 : 32),
                  (o[o.indexOf(s)] = null))
                : ((t.__e = n.__e), (t.__k = n.__k)),
              cV.__e(e, t, n);
          }
        else
          null == o && t.__v === n.__v
            ? ((t.__k = n.__k), (t.__e = n.__e))
            : (t.__e = (function (e, t, n, r, i, o, a, s, l) {
                var c,
                  u,
                  d,
                  p,
                  h,
                  f,
                  m,
                  g = n.props,
                  _ = t.props,
                  y = t.type;
                if (("svg" === y && (i = !0), null != o)) {
                  for (c = 0; c < o.length; c++)
                    if (
                      (h = o[c]) &&
                      "setAttribute" in h == !!y &&
                      (y ? h.localName === y : 3 === h.nodeType)
                    ) {
                      (e = h), (o[c] = null);
                      break;
                    }
                }
                if (null == e) {
                  if (null === y) return document.createTextNode(_);
                  (e = i
                    ? document.createElementNS("http://www.w3.org/2000/svg", y)
                    : document.createElement(y, _.is && _)),
                    (o = null),
                    (s = !1);
                }
                if (null === y) g === _ || (s && e.data === _) || (e.data = _);
                else {
                  if (
                    ((o = o && cY.call(e.childNodes)),
                    (g = n.props || cQ),
                    !s && null != o)
                  )
                    for (g = {}, c = 0; c < e.attributes.length; c++)
                      g[(h = e.attributes[c]).name] = h.value;
                  for (c in g)
                    (h = g[c]),
                      "children" == c ||
                        ("dangerouslySetInnerHTML" == c
                          ? (d = h)
                          : "key" === c || c in _ || ui(e, c, null, h, i));
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
                                (s && "function" != typeof h) ||
                                g[c] === h ||
                                ui(e, c, h, g[c], i);
                  if (u)
                    s ||
                      (d &&
                        (u.__html === d.__html || u.__html === e.innerHTML)) ||
                      (e.innerHTML = u.__html),
                      (t.__k = []);
                  else if (
                    (d && (e.innerHTML = ""),
                    un(
                      e,
                      c2(p) ? p : [p],
                      t,
                      n,
                      r,
                      i && "foreignObject" !== y,
                      o,
                      a,
                      o ? o[0] : n.__k && c9(n, 0),
                      s,
                      l,
                    ),
                    null != o)
                  )
                    for (c = o.length; c--; ) null != o[c] && c5(o[c]);
                  s ||
                    ((c = "value"),
                    void 0 === f ||
                      (f === e[c] &&
                        ("progress" !== y || f) &&
                        ("option" !== y || f === g[c])) ||
                      ui(e, c, f, g[c], !1),
                    (c = "checked"),
                    void 0 !== m && m !== e[c] && ui(e, c, m, g[c], !1));
                }
                return e;
              })(n.__e, t, n, r, i, o, a, l, c));
        (u = cV.diffed) && u(t);
      }
      function ul(e, t, n) {
        for (var r = 0; r < n.length; r++) uc(n[r], n[++r], n[++r]);
        cV.__c && cV.__c(t, e),
          e.some(function (t) {
            try {
              (e = t.__h),
                (t.__h = []),
                e.some(function (e) {
                  e.call(t);
                });
            } catch (e) {
              cV.__e(e, t.__v);
            }
          });
      }
      function uc(e, t, n) {
        try {
          "function" == typeof e ? e(t) : (e.current = t);
        } catch (e) {
          cV.__e(e, n);
        }
      }
      function uu(e, t, n) {
        var r, i;
        if (
          (cV.unmount && cV.unmount(e),
          (r = e.ref) && ((r.current && r.current !== e.__e) || uc(r, null, t)),
          null != (r = e.__c))
        ) {
          if (r.componentWillUnmount)
            try {
              r.componentWillUnmount();
            } catch (e) {
              cV.__e(e, t);
            }
          (r.base = r.__P = null), (e.__c = void 0);
        }
        if ((r = e.__k))
          for (i = 0; i < r.length; i++)
            r[i] && uu(r[i], t, n || "function" != typeof e.type);
        n || null == e.__e || c5(e.__e), (e.__ = e.__e = e.__d = void 0);
      }
      function ud(e, t, n) {
        return this.constructor(e, n);
      }
      (cY = c0.slice),
        (cV = {
          __e: function (e, t, n, r) {
            for (var i, o, a; (t = t.__); )
              if ((i = t.__c) && !i.__)
                try {
                  if (
                    ((o = i.constructor) &&
                      null != o.getDerivedStateFromError &&
                      (i.setState(o.getDerivedStateFromError(e)), (a = i.__d)),
                    null != i.componentDidCatch &&
                      (i.componentDidCatch(e, r || {}), (a = i.__d)),
                    a)
                  )
                    return (i.__E = i);
                } catch (t) {
                  e = t;
                }
            throw e;
          },
        }),
        (cG = 0),
        (c7.prototype.setState = function (e, t) {
          var n;
          (n =
            null != this.__s && this.__s !== this.state
              ? this.__s
              : (this.__s = c3({}, this.state))),
            "function" == typeof e && (e = e(c3({}, n), this.props)),
            e && c3(n, e),
            null != e && this.__v && (t && this._sb.push(t), ue(this));
        }),
        (c7.prototype.forceUpdate = function (e) {
          this.__v && ((this.__e = !0), e && this.__h.push(e), ue(this));
        }),
        (c7.prototype.render = c8),
        (cX = []),
        (cK =
          "function" == typeof Promise
            ? Promise.prototype.then.bind(Promise.resolve())
            : setTimeout),
        (cZ = function (e, t) {
          return e.__v.__b - t.__v.__b;
        }),
        (ut.__r = 0);
      var up,
        uh,
        uf,
        um,
        ug = 0,
        u_ = [],
        uy = [],
        uv = cV,
        ub = uv.__b,
        uS = uv.__r,
        uw = uv.diffed,
        uE = uv.__c,
        uk = uv.unmount,
        ux = uv.__;
      function uC(e, t) {
        uv.__h && uv.__h(uh, e, ug || t), (ug = 0);
        var n = uh.__H || (uh.__H = { __: [], __h: [] });
        return e >= n.__.length && n.__.push({ __V: uy }), n.__[e];
      }
      function uT(e) {
        return (ug = 1), uI(u$, e);
      }
      function uI(e, t, n) {
        var r = uC(up++, 2);
        if (
          ((r.t = e),
          !r.__c &&
            ((r.__ = [
              n ? n(t) : u$(void 0, t),
              function (e) {
                var t = r.__N ? r.__N[0] : r.__[0],
                  n = r.t(t, e);
                t !== n && ((r.__N = [n, r.__[1]]), r.__c.setState({}));
              },
            ]),
            (r.__c = uh),
            !uh.u))
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
            var a = !1;
            return (
              i.forEach(function (e) {
                if (e.__N) {
                  var t = e.__[0];
                  (e.__ = e.__N), (e.__N = void 0), t !== e.__[0] && (a = !0);
                }
              }),
              !(!a && r.__c.props === e) && (!o || o.call(this, e, t, n))
            );
          };
          uh.u = !0;
          var o = uh.shouldComponentUpdate,
            a = uh.componentWillUpdate;
          (uh.componentWillUpdate = function (e, t, n) {
            if (this.__e) {
              var r = o;
              (o = void 0), i(e, t, n), (o = r);
            }
            a && a.call(this, e, t, n);
          }),
            (uh.shouldComponentUpdate = i);
        }
        return r.__N || r.__;
      }
      function uM(e, t) {
        var n = uC(up++, 4);
        !uv.__s && uP(n.__H, t) && ((n.__ = e), (n.i = t), uh.__h.push(n));
      }
      function uR(e, t) {
        var n = uC(up++, 7);
        return uP(n.__H, t)
          ? ((n.__V = e()), (n.i = t), (n.__h = e), n.__V)
          : n.__;
      }
      function uA(e, t) {
        return (
          (ug = 8),
          uR(function () {
            return e;
          }, t)
        );
      }
      function uO() {
        for (var e; (e = u_.shift()); )
          if (e.__P && e.__H)
            try {
              e.__H.__h.forEach(uN), e.__H.__h.forEach(uL), (e.__H.__h = []);
            } catch (t) {
              (e.__H.__h = []), uv.__e(t, e.__v);
            }
      }
      (uv.__b = function (e) {
        (uh = null), ub && ub(e);
      }),
        (uv.__ = function (e, t) {
          t.__k && t.__k.__m && (e.__m = t.__k.__m), ux && ux(e, t);
        }),
        (uv.__r = function (e) {
          uS && uS(e), (up = 0);
          var t = (uh = e.__c).__H;
          t &&
            (uf === uh
              ? ((t.__h = []),
                (uh.__h = []),
                t.__.forEach(function (e) {
                  e.__N && (e.__ = e.__N), (e.__V = uy), (e.__N = e.i = void 0);
                }))
              : (t.__h.forEach(uN), t.__h.forEach(uL), (t.__h = []), (up = 0))),
            (uf = uh);
        }),
        (uv.diffed = function (e) {
          uw && uw(e);
          var t = e.__c;
          t &&
            t.__H &&
            (t.__H.__h.length &&
              ((1 !== u_.push(t) && um === uv.requestAnimationFrame) ||
                (
                  (um = uv.requestAnimationFrame) ||
                  function (e) {
                    var t,
                      n = function () {
                        clearTimeout(r),
                          uD && cancelAnimationFrame(t),
                          setTimeout(e);
                      },
                      r = setTimeout(n, 100);
                    uD && (t = requestAnimationFrame(n));
                  }
                )(uO)),
            t.__H.__.forEach(function (e) {
              e.i && (e.__H = e.i),
                e.__V !== uy && (e.__ = e.__V),
                (e.i = void 0),
                (e.__V = uy);
            })),
            (uf = uh = null);
        }),
        (uv.__c = function (e, t) {
          t.some(function (e) {
            try {
              e.__h.forEach(uN),
                (e.__h = e.__h.filter(function (e) {
                  return !e.__ || uL(e);
                }));
            } catch (n) {
              t.some(function (e) {
                e.__h && (e.__h = []);
              }),
                (t = []),
                uv.__e(n, e.__v);
            }
          }),
            uE && uE(e, t);
        }),
        (uv.unmount = function (e) {
          uk && uk(e);
          var t,
            n = e.__c;
          n &&
            n.__H &&
            (n.__H.__.forEach(function (e) {
              try {
                uN(e);
              } catch (e) {
                t = e;
              }
            }),
            (n.__H = void 0),
            t && uv.__e(t, n.__v));
        });
      var uD = "function" == typeof requestAnimationFrame;
      function uN(e) {
        var t = uh,
          n = e.__c;
        "function" == typeof n && ((e.__c = void 0), n()), (uh = t);
      }
      function uL(e) {
        var t = uh;
        (e.__c = e.__()), (uh = t);
      }
      function uP(e, t) {
        return (
          !e ||
          e.length !== t.length ||
          t.some(function (t, n) {
            return t !== e[n];
          })
        );
      }
      function u$(e, t) {
        return "function" == typeof t ? t(e) : t;
      }
      let uF = {
        __proto__: null,
        useCallback: uA,
        useContext: function (e) {
          var t = uh.context[e.__c],
            n = uC(up++, 9);
          return (
            (n.c = e),
            t ? (null == n.__ && ((n.__ = !0), t.sub(uh)), t.props.value) : e.__
          );
        },
        useDebugValue: function (e, t) {
          uv.useDebugValue && uv.useDebugValue(t ? t(e) : e);
        },
        useEffect: function (e, t) {
          var n = uC(up++, 3);
          !uv.__s &&
            uP(n.__H, t) &&
            ((n.__ = e), (n.i = t), uh.__H.__h.push(n));
        },
        useErrorBoundary: function (e) {
          var t = uC(up++, 10),
            n = uT();
          return (
            (t.__ = e),
            uh.componentDidCatch ||
              (uh.componentDidCatch = function (e, r) {
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
          var e = uC(up++, 11);
          if (!e.__) {
            for (var t = uh.__v; null !== t && !t.__m && null !== t.__; )
              t = t.__;
            var n = t.__m || (t.__m = [0, 0]);
            e.__ = "P" + n[0] + "-" + n[1]++;
          }
          return e.__;
        },
        useImperativeHandle: function (e, t, n) {
          (ug = 6),
            uM(
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
        useLayoutEffect: uM,
        useMemo: uR,
        useReducer: uI,
        useRef: function (e) {
          return (
            (ug = 5),
            uR(function () {
              return { current: e };
            }, [])
          );
        },
        useState: uT,
      };
      function uU({ options: e }) {
        let t = uR(() => {
          let e, t;
          return {
            __html: ((e = cw(
              cn.createElementNS("http://www.w3.org/2000/svg", "svg"),
              {
                width: "32",
                height: "30",
                viewBox: "0 0 72 66",
                fill: "inherit",
              },
            )),
            (t = cw(cn.createElementNS("http://www.w3.org/2000/svg", "path"), {
              transform: "translate(11, 11)",
              d: "M29,2.26a4.67,4.67,0,0,0-8,0L14.42,13.53A32.21,32.21,0,0,1,32.17,40.19H27.55A27.68,27.68,0,0,0,12.09,17.47L6,28a15.92,15.92,0,0,1,9.23,12.17H4.62A.76.76,0,0,1,4,39.06l2.94-5a10.74,10.74,0,0,0-3.36-1.9l-2.91,5a4.54,4.54,0,0,0,1.69,6.24A4.66,4.66,0,0,0,4.62,44H19.15a19.4,19.4,0,0,0-8-17.31l2.31-4A23.87,23.87,0,0,1,23.76,44H36.07a35.88,35.88,0,0,0-16.41-31.8l4.67-8a.77.77,0,0,1,1.05-.27c.53.29,20.29,34.77,20.66,35.17a.76.76,0,0,1-.68,1.13H40.6q.09,1.91,0,3.81h4.78A4.59,4.59,0,0,0,50,39.43a4.49,4.49,0,0,0-.62-2.28Z",
            })),
            e.appendChild(t),
            e).outerHTML,
          };
        }, []);
        return c4(
          "h2",
          { class: "dialog__header" },
          c4("span", { class: "dialog__title" }, e.formTitle),
          e.showBranding
            ? c4("a", {
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
      function uj(e, t) {
        let n = e.get(t);
        return "string" == typeof n ? n.trim() : "";
      }
      function uB({
        options: e,
        defaultEmail: t,
        defaultName: n,
        onFormClose: r,
        onSubmit: i,
        onSubmitSuccess: o,
        onSubmitError: a,
        showEmail: s,
        showName: l,
        screenshotInput: c,
      }) {
        let {
            tags: u,
            addScreenshotButtonLabel: d,
            removeScreenshotButtonLabel: p,
            cancelButtonLabel: h,
            emailLabel: f,
            emailPlaceholder: m,
            isEmailRequired: g,
            isNameRequired: _,
            messageLabel: y,
            messagePlaceholder: v,
            nameLabel: b,
            namePlaceholder: S,
            submitButtonLabel: w,
            isRequiredLabel: E,
          } = e,
          [k, x] = uT(null),
          [C, T] = uT(!1),
          I = c && c.input,
          [M, R] = uT(null),
          A = uA((e) => {
            R(e), T(!1);
          }, []),
          O = uA(
            (e) => {
              var t;
              let n,
                r =
                  ((n = []),
                  (t = {
                    emailLabel: f,
                    isEmailRequired: g,
                    isNameRequired: _,
                    messageLabel: y,
                    nameLabel: b,
                  }).isNameRequired &&
                    !e.name &&
                    n.push(t.nameLabel),
                  t.isEmailRequired && !e.email && n.push(t.emailLabel),
                  e.message || n.push(t.messageLabel),
                  n);
              return (
                r.length > 0
                  ? x(
                      `Please enter in the following required fields: ${r.join(", ")}`,
                    )
                  : x(null),
                0 === r.length
              );
            },
            [f, g, _, y, b],
          );
        return c4(
          "form",
          {
            class: "form",
            onSubmit: uA(
              async (e) => {
                try {
                  if (
                    (e.preventDefault(), !(e.target instanceof HTMLFormElement))
                  )
                    return;
                  let t = new FormData(e.target),
                    n = await (c && C ? c.value() : void 0),
                    r = {
                      name: uj(t, "name"),
                      email: uj(t, "email"),
                      message: uj(t, "message"),
                      attachments: n ? [n] : void 0,
                    };
                  if (!O(r)) return;
                  try {
                    await i(
                      {
                        name: r.name,
                        email: r.email,
                        message: r.message,
                        source: "widget",
                        tags: u,
                      },
                      { attachments: r.attachments },
                    ),
                      o(r);
                  } catch (e) {
                    cb && Q.error(e), x(e), a(e);
                  }
                } catch (e) {}
              },
              [c && C, o, a],
            ),
          },
          I && C ? c4(I, { onError: A }) : null,
          c4(
            "div",
            { class: "form__right", "data-sentry-feedback": !0 },
            c4(
              "div",
              { class: "form__top" },
              k ? c4("div", { class: "form__error-container" }, k) : null,
              l
                ? c4(
                    "label",
                    { for: "name", class: "form__label" },
                    c4(uH, { label: b, isRequiredLabel: E, isRequired: _ }),
                    c4("input", {
                      class: "form__input",
                      defaultValue: n,
                      id: "name",
                      name: "name",
                      placeholder: S,
                      required: _,
                      type: "text",
                    }),
                  )
                : c4("input", {
                    "aria-hidden": !0,
                    value: n,
                    name: "name",
                    type: "hidden",
                  }),
              s
                ? c4(
                    "label",
                    { for: "email", class: "form__label" },
                    c4(uH, { label: f, isRequiredLabel: E, isRequired: g }),
                    c4("input", {
                      class: "form__input",
                      defaultValue: t,
                      id: "email",
                      name: "email",
                      placeholder: m,
                      required: g,
                      type: "email",
                    }),
                  )
                : c4("input", {
                    "aria-hidden": !0,
                    value: t,
                    name: "email",
                    type: "hidden",
                  }),
              c4(
                "label",
                { for: "message", class: "form__label" },
                c4(uH, { label: y, isRequiredLabel: E, isRequired: !0 }),
                c4("textarea", {
                  autoFocus: !0,
                  class: "form__input form__input--textarea",
                  id: "message",
                  name: "message",
                  placeholder: v,
                  required: !0,
                  rows: 5,
                }),
              ),
              I
                ? c4(
                    "label",
                    { for: "screenshot", class: "form__label" },
                    c4(
                      "button",
                      {
                        class: "btn btn--default",
                        type: "button",
                        onClick: () => {
                          R(null), T((e) => !e);
                        },
                      },
                      C ? p : d,
                    ),
                    M
                      ? c4("div", { class: "form__error-container" }, M.message)
                      : null,
                  )
                : null,
            ),
            c4(
              "div",
              { class: "btn-group" },
              c4("button", { class: "btn btn--primary", type: "submit" }, w),
              c4(
                "button",
                { class: "btn btn--default", type: "button", onClick: r },
                h,
              ),
            ),
          ),
        );
      }
      function uH({ label: e, isRequired: t, isRequiredLabel: n }) {
        return c4(
          "span",
          { class: "form__label__text" },
          e,
          t && c4("span", { class: "form__label__text--required" }, n),
        );
      }
      function uz({ open: e, onFormSubmitted: t, ...n }) {
        let r = n.options,
          i = uR(() => {
            let e, t, n, r, i, o, a, s;
            return {
              __html: ((t = cw(
                (e = (e) =>
                  M.document.createElementNS("http://www.w3.org/2000/svg", e))(
                  "svg",
                ),
                {
                  width: "16",
                  height: "17",
                  viewBox: "0 0 16 17",
                  fill: "inherit",
                },
              )),
              (n = cw(e("g"), { clipPath: "url(#clip0_57_156)" })),
              (r = cw(e("path"), {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M3.55544 15.1518C4.87103 16.0308 6.41775 16.5 8 16.5C10.1217 16.5 12.1566 15.6571 13.6569 14.1569C15.1571 12.6566 16 10.6217 16 8.5C16 6.91775 15.5308 5.37103 14.6518 4.05544C13.7727 2.73985 12.5233 1.71447 11.0615 1.10897C9.59966 0.503466 7.99113 0.34504 6.43928 0.653721C4.88743 0.962403 3.46197 1.72433 2.34315 2.84315C1.22433 3.96197 0.462403 5.38743 0.153721 6.93928C-0.15496 8.49113 0.00346625 10.0997 0.608967 11.5615C1.21447 13.0233 2.23985 14.2727 3.55544 15.1518ZM4.40546 3.1204C5.46945 2.40946 6.72036 2.03 8 2.03C9.71595 2.03 11.3616 2.71166 12.575 3.92502C13.7883 5.13838 14.47 6.78405 14.47 8.5C14.47 9.77965 14.0905 11.0306 13.3796 12.0945C12.6687 13.1585 11.6582 13.9878 10.476 14.4775C9.29373 14.9672 7.99283 15.0953 6.73777 14.8457C5.48271 14.596 4.32987 13.9798 3.42502 13.075C2.52018 12.1701 1.90397 11.0173 1.65432 9.76224C1.40468 8.50718 1.5328 7.20628 2.0225 6.02404C2.5122 4.8418 3.34148 3.83133 4.40546 3.1204Z",
              })),
              (i = cw(e("path"), {
                d: "M6.68775 12.4297C6.78586 12.4745 6.89218 12.4984 7 12.5C7.11275 12.4955 7.22315 12.4664 7.32337 12.4145C7.4236 12.3627 7.51121 12.2894 7.58 12.2L12 5.63999C12.0848 5.47724 12.1071 5.28902 12.0625 5.11098C12.0178 4.93294 11.9095 4.77744 11.7579 4.67392C11.6064 4.57041 11.4221 4.52608 11.24 4.54931C11.0579 4.57254 10.8907 4.66173 10.77 4.79999L6.88 10.57L5.13 8.56999C5.06508 8.49566 4.98613 8.43488 4.89768 8.39111C4.80922 8.34735 4.713 8.32148 4.61453 8.31498C4.51605 8.30847 4.41727 8.32147 4.32382 8.35322C4.23038 8.38497 4.14413 8.43484 4.07 8.49999C3.92511 8.63217 3.83692 8.81523 3.82387 9.01092C3.81083 9.2066 3.87393 9.39976 4 9.54999L6.43 12.24C6.50187 12.3204 6.58964 12.385 6.68775 12.4297Z",
              })),
              t.appendChild(n).append(i, r),
              (o = e("defs")),
              (a = cw(e("clipPath"), { id: "clip0_57_156" })),
              (s = cw(e("rect"), {
                width: "16",
                height: "16",
                fill: "white",
                transform: "translate(0 0.5)",
              })),
              a.appendChild(s),
              o.appendChild(a),
              t.appendChild(o).appendChild(a).appendChild(s),
              t).outerHTML,
            };
          }, []),
          [o, a] = uT(null),
          s = uA(() => {
            o && (clearTimeout(o), a(null)), t();
          }, [o]),
          l = uA(
            (e) => {
              n.onSubmitSuccess(e),
                a(
                  setTimeout(() => {
                    t(), a(null);
                  }, 5e3),
                );
            },
            [t],
          );
        return c4(
          c8,
          null,
          o
            ? c4(
                "div",
                { class: "success__position", onClick: s },
                c4(
                  "div",
                  { class: "success__content" },
                  r.successMessageText,
                  c4("span", {
                    class: "success__icon",
                    dangerouslySetInnerHTML: i,
                  }),
                ),
              )
            : c4(
                "dialog",
                { class: "dialog", onClick: r.onFormClose, open: e },
                c4(
                  "div",
                  { class: "dialog__position" },
                  c4(
                    "div",
                    {
                      class: "dialog__content",
                      onClick: (e) => {
                        e.stopPropagation();
                      },
                    },
                    c4(uU, { options: r }),
                    c4(uB, { ...n, onSubmitSuccess: l }),
                  ),
                ),
              ),
        );
      }
      let uW = `
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
        uq = `
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
        uY = `
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
        uV = `
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
        uG = `
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
        uX = () => ({
          name: "FeedbackModal",
          setupOnce() {},
          createDialog: ({
            options: e,
            screenshotIntegration: t,
            sendFeedback: n,
            shadow: r,
          }) => {
            var i;
            let o,
              a,
              s,
              l,
              c = e.useSentryUser,
              u =
                ((o = eN().getUser()),
                (a = eL().getUser()),
                (s = eP().getUser()),
                o && Object.keys(o).length
                  ? o
                  : a && Object.keys(a).length
                    ? a
                    : s),
              d = cn.createElement("div"),
              p =
                ((i = e.styleNonce),
                ((l = cn.createElement("style")).textContent = `
:host {
  --dialog-inset: var(--inset);
}

${uW}
${uq}
${uY}
${uV}
${uG}
`),
                i && l.setAttribute("nonce", i),
                l),
              h = "",
              f = {
                get el() {
                  return d;
                },
                appendToDom() {
                  r.contains(p) ||
                    r.contains(d) ||
                    (r.appendChild(p), r.appendChild(d));
                },
                removeFromDom() {
                  r.removeChild(d),
                    r.removeChild(p),
                    (cn.body.style.overflow = h);
                },
                open() {
                  g(!0),
                    e.onFormOpen && e.onFormOpen(),
                    (h = cn.body.style.overflow),
                    (cn.body.style.overflow = "hidden");
                },
                close() {
                  g(!1), (cn.body.style.overflow = h);
                },
              },
              m =
                t && t.createInput({ h: c4, hooks: uF, dialog: f, options: e }),
              g = (t) => {
                var r, i, o, a;
                (r = c4(uz, {
                  options: e,
                  screenshotInput: m,
                  showName: e.showName || e.isNameRequired,
                  showEmail: e.showEmail || e.isEmailRequired,
                  defaultName: (c && u && u[c.name]) || "",
                  defaultEmail: (c && u && u[c.email]) || "",
                  onFormClose: () => {
                    g(!1), e.onFormClose && e.onFormClose();
                  },
                  onSubmit: n,
                  onSubmitSuccess: (t) => {
                    g(!1), e.onSubmitSuccess && e.onSubmitSuccess(t);
                  },
                  onSubmitError: (t) => {
                    e.onSubmitError && e.onSubmitError(t);
                  },
                  onFormSubmitted: () => {
                    e.onFormSubmitted && e.onFormSubmitted();
                  },
                  open: t,
                })),
                  cV.__ && cV.__(r, d),
                  (i = d.__k),
                  (o = []),
                  (a = []),
                  us(
                    d,
                    (r = d.__k = c4(c8, null, [r])),
                    i || cQ,
                    cQ,
                    void 0 !== d.ownerSVGElement,
                    i ? null : d.firstChild ? cY.call(d.childNodes) : null,
                    o,
                    i ? i.__e : d.firstChild,
                    !1,
                    a,
                  ),
                  (r.__d = void 0),
                  ul(o, r, a);
              };
            return f;
          },
        }),
        uJ = M.devicePixelRatio,
        uK = (e) => ({
          x: Math.min(e.startX, e.endX),
          y: Math.min(e.startY, e.endY),
          width: Math.abs(e.startX - e.endX),
          height: Math.abs(e.startY - e.endY),
        }),
        uZ = (e) => {
          let t = e.clientHeight,
            n = e.clientWidth,
            r = e.width / e.height,
            i = t * r,
            o = t;
          i > n && ((i = n), (o = n / r));
          let a = (n - i) / 2,
            s = (t - o) / 2;
          return { startX: a, startY: s, endX: i + a, endY: o + s };
        },
        uQ = () => ({
          name: "FeedbackScreenshot",
          setupOnce() {},
          createInput: ({ h: e, hooks: t, dialog: n, options: r }) => {
            let i = cn.createElement("canvas");
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
                        let e = await cr.mediaDevices.getDisplayMedia({
                            video: {
                              width: M.innerWidth * M.devicePixelRatio,
                              height: M.innerHeight * M.devicePixelRatio,
                            },
                            audio: !1,
                            monitorTypeSurfaces: "exclude",
                            preferCurrentTab: !0,
                            selfBrowserSurface: "include",
                            surfaceSwitching: "exclude",
                          }),
                          i = cn.createElement("video");
                        await new Promise((t, r) => {
                          (i.srcObject = e),
                            (i.onloadedmetadata = () => {
                              n(i), e.getTracks().forEach((e) => e.stop()), t();
                            }),
                            i.play().catch(r);
                        }),
                          r();
                      })().catch(i);
                    }, []);
                  };
                })({ hooks: t });
                return function ({ onError: a }) {
                  let s = t.useMemo(() => {
                      var e;
                      let t, n, r;
                      return {
                        __html: ((e = i.styleNonce),
                        (t = cn.createElement("style")),
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
                    u = t.useRef(null),
                    d = t.useRef(null),
                    [p, h] = t.useState({
                      startX: 0,
                      startY: 0,
                      endX: 0,
                      endY: 0,
                    }),
                    [f, m] = t.useState(!1),
                    [g, _] = t.useState(!1);
                  function y() {
                    let e = d.current,
                      t = uK(uZ(n));
                    if (e) {
                      (e.width = t.width * uJ),
                        (e.height = t.height * uJ),
                        (e.style.width = `${t.width}px`),
                        (e.style.height = `${t.height}px`);
                      let n = e.getContext("2d");
                      n && n.scale(uJ, uJ);
                    }
                    let r = u.current;
                    r &&
                      ((r.style.width = `${t.width}px`),
                      (r.style.height = `${t.height}px`)),
                      h({
                        startX: 0,
                        startY: 0,
                        endX: t.width,
                        endY: t.height,
                      });
                  }
                  function v(e, t) {
                    m(!1), _(!0);
                    let n = b(t),
                      r = () => {
                        cn.removeEventListener("mousemove", n),
                          cn.removeEventListener("mouseup", r),
                          m(!0),
                          _(!1);
                      };
                    cn.addEventListener("mouseup", r),
                      cn.addEventListener("mousemove", n);
                  }
                  t.useEffect(() => {
                    M.addEventListener("resize", y, !1);
                  }, []),
                    t.useEffect(() => {
                      let e = d.current;
                      if (!e) return;
                      let t = e.getContext("2d");
                      if (!t) return;
                      let r = uK(uZ(n)),
                        i = uK(p);
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
                    }, [p]);
                  let b = t.useCallback(
                      (e) =>
                        function (t) {
                          if (!d.current) return;
                          let n = d.current,
                            r = n.getBoundingClientRect(),
                            i = t.clientX - r.x,
                            o = t.clientY - r.y;
                          switch (e) {
                            case "top-left":
                              h((e) => ({
                                ...e,
                                startX: Math.min(Math.max(0, i), e.endX - 33),
                                startY: Math.min(Math.max(0, o), e.endY - 33),
                              }));
                              break;
                            case "top-right":
                              h((e) => ({
                                ...e,
                                endX: Math.max(
                                  Math.min(i, n.width / uJ),
                                  e.startX + 33,
                                ),
                                startY: Math.min(Math.max(0, o), e.endY - 33),
                              }));
                              break;
                            case "bottom-left":
                              h((e) => ({
                                ...e,
                                startX: Math.min(Math.max(0, i), e.endX - 33),
                                endY: Math.max(
                                  Math.min(o, n.height / uJ),
                                  e.startY + 33,
                                ),
                              }));
                              break;
                            case "bottom-right":
                              h((e) => ({
                                ...e,
                                endX: Math.max(
                                  Math.min(i, n.width / uJ),
                                  e.startX + 33,
                                ),
                                endY: Math.max(
                                  Math.min(o, n.height / uJ),
                                  e.startY + 33,
                                ),
                              }));
                          }
                        },
                      [],
                    ),
                    S = t.useRef({ initialX: 0, initialY: 0 });
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
                        e && e.appendChild(n), y();
                      }, []),
                      onError: t.useCallback((e) => {
                        (r.el.style.display = "block"), a(e);
                      }, []),
                    }),
                    e(
                      "div",
                      { class: "editor" },
                      e("style", {
                        nonce: i.styleNonce,
                        dangerouslySetInnerHTML: s,
                      }),
                      e(
                        "div",
                        { class: "editor__canvas-container", ref: c },
                        e(
                          "div",
                          {
                            class: "editor__crop-container",
                            style: { position: "absolute", zIndex: 1 },
                            ref: u,
                          },
                          e("canvas", {
                            onMouseDown: function (e) {
                              if (g) return;
                              S.current = {
                                initialX: e.clientX,
                                initialY: e.clientY,
                              };
                              let t = (e) => {
                                  let t = d.current;
                                  if (!t) return;
                                  let n = e.clientX - S.current.initialX,
                                    r = e.clientY - S.current.initialY;
                                  h((i) => {
                                    let o = Math.max(
                                        0,
                                        Math.min(
                                          i.startX + n,
                                          t.width / uJ - (i.endX - i.startX),
                                        ),
                                      ),
                                      a = Math.max(
                                        0,
                                        Math.min(
                                          i.startY + r,
                                          t.height / uJ - (i.endY - i.startY),
                                        ),
                                      ),
                                      s = o + (i.endX - i.startX),
                                      l = a + (i.endY - i.startY);
                                    return (
                                      (S.current.initialX = e.clientX),
                                      (S.current.initialY = e.clientY),
                                      { startX: o, startY: a, endX: s, endY: l }
                                    );
                                  });
                                },
                                n = () => {
                                  cn.removeEventListener("mousemove", t),
                                    cn.removeEventListener("mouseup", n);
                                };
                              cn.addEventListener("mousemove", t),
                                cn.addEventListener("mouseup", n);
                            },
                            style: {
                              position: "absolute",
                              cursor: f ? "move" : "auto",
                            },
                            ref: d,
                          }),
                          e(l, {
                            left: p.startX - 3,
                            top: p.startY - 3,
                            onGrabButton: v,
                            corner: "top-left",
                          }),
                          e(l, {
                            left: p.endX - 30 + 3,
                            top: p.startY - 3,
                            onGrabButton: v,
                            corner: "top-right",
                          }),
                          e(l, {
                            left: p.startX - 3,
                            top: p.endY - 30 + 3,
                            onGrabButton: v,
                            corner: "bottom-left",
                          }),
                          e(l, {
                            left: p.endX - 30 + 3,
                            top: p.endY - 30 + 3,
                            onGrabButton: v,
                            corner: "bottom-right",
                          }),
                          e(
                            "div",
                            {
                              style: {
                                left: Math.max(0, p.endX - 191),
                                top: Math.max(0, p.endY + 8),
                                display: f ? "flex" : "none",
                              },
                              class: "editor__crop-btn-group",
                            },
                            e(
                              "button",
                              {
                                onClick: (e) => {
                                  e.preventDefault(),
                                    d.current &&
                                      h({
                                        startX: 0,
                                        startY: 0,
                                        endX: d.current.width / uJ,
                                        endY: d.current.height / uJ,
                                      }),
                                    m(!1);
                                },
                                class: "btn btn--default",
                              },
                              i.cancelButtonLabel,
                            ),
                            e(
                              "button",
                              {
                                onClick: (e) => {
                                  let t, r, i, o, a;
                                  e.preventDefault(),
                                    (t = cn.createElement("canvas")),
                                    (r = uK(uZ(n))),
                                    (t.width = (i = uK(p)).width * uJ),
                                    (t.height = i.height * uJ),
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
                                    (a = n.getContext("2d")) &&
                                      (a.clearRect(0, 0, n.width, n.height),
                                      (n.width = t.width),
                                      (n.height = t.height),
                                      (n.style.width = `${i.width}px`),
                                      (n.style.height = `${i.height}px`),
                                      a.drawImage(t, 0, 0),
                                      y()),
                                    m(!1);
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
        }),
        u0 = cT({ lazyLoadIntegration: iX }),
        u1 = cT({
          getModalIntegration: () => uX,
          getScreenshotIntegration: () => uQ,
        });
      function u2(e, t, n, r, i = {}) {
        let o = i.client || eU();
        if (!o) return;
        let a = tF(),
          s = a ? t$(a) : void 0,
          l = s && tR(s).description,
          { unit: c, tags: u, timestamp: d } = i,
          { release: p, environment: h } = o.getOptions(),
          f = {};
        p && (f.release = p),
          h && (f.environment = h),
          l && (f.transaction = l),
          I && Q.log(`Adding value of ${r} to ${t} metric ${n}`),
          (function (e, t) {
            let n = R("globalMetricsAggregators", () => new WeakMap()),
              r = n.get(e);
            if (r) return r;
            let i = new t(e);
            return (
              e.on("flush", () => i.flush()),
              e.on("close", () => i.close()),
              n.set(e, i),
              i
            );
          })(o, e).add(t, n, r, c, { ...f, ...u }, d);
      }
      function u3(e, t, n, r) {
        u2(e, "d", t, u7(n), r);
      }
      let u5 = function (e, t, n = 1, r) {
          u2(e, "c", t, u7(n), r);
        },
        u4 = function (e, t, n, r) {
          u2(e, "s", t, n, r);
        },
        u6 = function (e, t, n, r) {
          u2(e, "g", t, u7(n), r);
        },
        u8 = function (e, t, n, r = "second", i) {
          if ("function" == typeof n) {
            let r = eh();
            return ih(
              { op: "metrics.timing", name: t, startTime: r, onlyIfParent: !0 },
              (o) =>
                ie(
                  () => n(),
                  () => {},
                  () => {
                    let n = eh();
                    u3(e, t, n - r, { ...i, unit: "second" }), o.end(n);
                  },
                ),
            );
          }
          u3(e, t, n, { ...i, unit: r });
        };
      function u7(e) {
        return "string" == typeof e ? parseInt(e) : e;
      }
      let u9 = [
          ["\n", "\\n"],
          ["\r", "\\r"],
          ["	", "\\t"],
          ["\\", "\\\\"],
          ["|", "\\u{7c}"],
          [",", "\\u{2c}"],
        ],
        de = {
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
                .map((e) =>
                  "string" == typeof e
                    ? (function (e) {
                        let t = 0;
                        for (let n = 0; n < e.length; n++)
                          (t = (t << 5) - t + e.charCodeAt(n)), (t &= t);
                        return t >>> 0;
                      })(e)
                    : e,
                )
                .join(":");
            }
          },
        };
      class dt {
        constructor(e) {
          (this._client = e),
            (this._buckets = new Map()),
            (this._interval = setInterval(() => this.flush(), 5e3));
        }
        add(e, t, n, r = "none", i = {}, o = eh()) {
          let a,
            s,
            l = Math.floor(o),
            c = t.replace(/[^\w\-.]+/gi, "_"),
            u = (function (e) {
              let t = {};
              for (let n in e)
                Object.prototype.hasOwnProperty.call(e, n) &&
                  (t[n.replace(/[^\w\-./]+/gi, "")] = [...String(e[n])].reduce(
                    (e, t) =>
                      e +
                      (function (e) {
                        for (let [t, n] of u9) if (e === t) return n;
                        return e;
                      })(t),
                    "",
                  ));
              return t;
            })(i),
            d = r.replace(/[^\w]+/gi, "_"),
            p =
              ((a = Object.entries(ed(u)).sort((e, t) =>
                e[0].localeCompare(t[0]),
              )),
              `${e}${c}${d}${a}`),
            h = this._buckets.get(p),
            f = h && "s" === e ? h.metric.weight : 0;
          h
            ? (h.metric.add(n), h.timestamp < l && (h.timestamp = l))
            : ((h = {
                metric: new de[e](n),
                timestamp: l,
                metricType: e,
                name: c,
                unit: d,
                tags: u,
              }),
              this._buckets.set(p, h));
          let m = "string" == typeof n ? h.metric.weight - f : n;
          (s = tF()) &&
            (function (e, t, n, r, i, o, a) {
              let s = e[tS] || (e[tS] = new Map()),
                l = `${t}:${n}@${i}`,
                c = s.get(a);
              if (c) {
                let [, e] = c;
                s.set(a, [
                  l,
                  {
                    min: Math.min(e.min, r),
                    max: Math.max(e.max, r),
                    count: (e.count += 1),
                    sum: (e.sum += r),
                    tags: e.tags,
                  },
                ]);
              } else
                s.set(a, [l, { min: r, max: r, count: 1, sum: r, tags: o }]);
            })(s, e, c, m, d, i, p);
        }
        flush() {
          var e, t, n, r, i;
          let o, a, s, l, c;
          if (0 === this._buckets.size) return;
          let u = Array.from(this._buckets.values());
          (e = this._client),
            Q.log(
              `Flushing aggregated metrics, number of metrics: ${u.length}`,
            ),
            (o = e.getDsn()),
            (a = e.getSdkMetadata()),
            (t = u),
            (n = o),
            (r = a),
            (i = e.getOptions().tunnel),
            (l = { sent_at: new Date().toISOString() }),
            r &&
              r.sdk &&
              (l.sdk = { name: r.sdk.name, version: r.sdk.version }),
            i && n && (l.dsn = no(n)),
            (s = nd(l, [
              [
                {
                  type: "statsd",
                  length: (c = (function (e) {
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
                  })(t)).length,
                },
                c,
              ],
            ])),
            e.sendEnvelope(s),
            this._buckets.clear();
        }
        close() {
          clearInterval(this._interval), this.flush();
        }
      }
      let dn = {
        increment: function (e, t = 1, n) {
          u5(dt, e, t, n);
        },
        distribution: function (e, t, n) {
          u3(dt, e, t, n);
        },
        set: function (e, t, n) {
          u4(dt, e, t, n);
        },
        gauge: function (e, t, n) {
          u6(dt, e, t, n);
        },
        timing: function (e, t, n = "second", r) {
          return u8(dt, e, t, n, r);
        },
      };
      function dr(e) {
        return "number" == typeof e && isFinite(e);
      }
      function di(e, t, n, { ...r }) {
        let i = tR(e).start_timestamp;
        return (
          i &&
            i > t &&
            "function" == typeof e.updateStartTime &&
            e.updateStartTime(t),
          i_(e, () => {
            let e = im({ startTime: t, ...r });
            return e && e.end(n), e;
          })
        );
      }
      function da(e) {
        let t,
          n = eU();
        if (!n) return;
        let { name: r, transaction: i, attributes: o, startTime: a } = e,
          { release: s, environment: l } = n.getOptions(),
          c = n.getIntegrationByName("Replay"),
          u = c && c.getReplayId(),
          d = eN(),
          p = d.getUser(),
          h = void 0 !== p ? p.email || p.id || p.ip_address : void 0;
        try {
          t = d.getScopeData().contexts.profile.profile_id;
        } catch (e) {}
        return im({
          name: r,
          attributes: {
            release: s,
            environment: l,
            user: h || void 0,
            profile_id: t || void 0,
            replay_id: u || void 0,
            transaction: i,
            "user_agent.original": M.navigator && M.navigator.userAgent,
            ...o,
          },
          startTime: a,
          experimental: { standalone: !0 },
        });
      }
      function ds() {
        return M && M.addEventListener && M.performance;
      }
      function dl(e) {
        return e / 1e3;
      }
      function dc(e) {
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
      function du(e = {}) {
        let t,
          n = eU();
        if (
          !((t = eU()) && !1 !== t.getOptions().enabled && t.getTransport()) ||
          !n
        )
          return {};
        let r = eD(A());
        if (r.getTraceData) return r.getTraceData(e);
        let i = eN(),
          o = e.span || tF(),
          a = o
            ? tT(o)
            : (function (e) {
                let {
                  traceId: t,
                  sampled: n,
                  spanId: r,
                } = e.getPropagationContext();
                return tx(t, r, n);
              })(i),
          s = ty(o ? tW(o) : tz(n, i));
        return tE.test(a)
          ? { "sentry-trace": a, baggage: s }
          : (Q.warn("Invalid sentry-trace data. Cannot generate trace data"),
            {});
      }
      function dd(e) {
        return e
          .split(",")
          .filter((e) => !e.split("=")[0].startsWith(tm))
          .join(",");
      }
      let dp = new WeakMap(),
        dh = new Map(),
        df = {
          traceFetch: !0,
          traceXHR: !0,
          enableHTTPTimings: !0,
          trackFetchStreamPerformance: !1,
        };
      function dm(e, t) {
        let {
            traceFetch: n,
            traceXHR: r,
            trackFetchStreamPerformance: i,
            shouldCreateSpanForRequest: o,
            enableHTTPTimings: a,
            tracePropagationTargets: s,
          } = {
            traceFetch: df.traceFetch,
            traceXHR: df.traceXHR,
            trackFetchStreamPerformance: df.trackFetchStreamPerformance,
            ...t,
          },
          l = "function" == typeof o ? o : (e) => !0,
          c = (e) =>
            (function (e, t) {
              let n = nL.location && nL.location.href;
              if (n) {
                let r, i;
                try {
                  (r = new URL(e, n)), (i = new URL(n).origin);
                } catch (e) {
                  return !1;
                }
                let o = r.origin === i;
                return t ? er(r.toString(), t) || (o && er(r.pathname, t)) : o;
              }
              {
                let n = !!e.match(/^\/(?!\/)/);
                return t ? er(e, t) : n;
              }
            })(e, s),
          u = {};
        if (n) {
          let t;
          e.addEventProcessor(
            (e) => (
              "transaction" === e.type &&
                e.spans &&
                e.spans.forEach((e) => {
                  if ("http.client" === e.op) {
                    let t = dh.get(e.span_id);
                    t && ((e.timestamp = t / 1e3), dh.delete(e.span_id));
                  }
                }),
              e
            ),
          ),
            i &&
              (nH((t = "fetch-body-resolved"), (e) => {
                if (e.response) {
                  let t = dp.get(e.response);
                  t && e.endTimestamp && dh.set(t, e.endTimestamp);
                }
              }),
              nz(t, () => n2(n5))),
            n1((e) => {
              let t = (function (e, t, n, r, i = "auto.http.browser") {
                if (!e.fetchData) return;
                let o = tb() && t(e.fetchData.url);
                if (e.endTimestamp && o) {
                  let t = e.fetchData.__span;
                  if (!t) return;
                  let n = r[t];
                  n &&
                    ((function (e, t) {
                      if (t.response) {
                        iR(e, t.response.status);
                        let n =
                          t.response &&
                          t.response.headers &&
                          t.response.headers.get("content-length");
                        if (n) {
                          let t = parseInt(n);
                          t > 0 &&
                            e.setAttribute("http.response_content_length", t);
                        }
                      } else
                        t.error &&
                          e.setStatus({ code: 2, message: "internal_error" });
                      e.end();
                    })(n, e),
                    delete r[t]);
                  return;
                }
                let { method: a, url: s } = e.fetchData,
                  l = (function (e) {
                    try {
                      return new URL(e).href;
                    } catch (e) {
                      return;
                    }
                  })(s),
                  c = l ? re(l).host : void 0,
                  u = !!tF(),
                  d =
                    o && u
                      ? im({
                          name: `${a} ${s}`,
                          attributes: {
                            url: s,
                            type: "fetch",
                            "http.method": a,
                            "http.url": l,
                            "server.address": c,
                            [tc]: i,
                            [tl]: "http.client",
                          },
                        })
                      : new it();
                if (
                  ((e.fetchData.__span = d.spanContext().spanId),
                  (r[d.spanContext().spanId] = d),
                  n(e.fetchData.url))
                ) {
                  let t = e.args[0],
                    n = e.args[1] || {},
                    r = (function (e, t, n) {
                      var r, i;
                      let o = du({ span: n }),
                        a = o["sentry-trace"],
                        s = o.baggage;
                      if (!a) return;
                      let l =
                        t.headers ||
                        (((r = e), "u" > typeof Request && W(r, Request))
                          ? e.headers
                          : void 0);
                      if (!l) return { ...o };
                      if (((i = l), "u" > typeof Headers && W(i, Headers))) {
                        let e = new Headers(l);
                        if ((e.set("sentry-trace", a), s)) {
                          let t = e.get("baggage");
                          if (t) {
                            let n = dd(t);
                            e.set("baggage", n ? `${n},${s}` : s);
                          } else e.set("baggage", s);
                        }
                        return e;
                      }
                      if (Array.isArray(l)) {
                        let e = [
                          ...l
                            .filter(
                              (e) =>
                                !(Array.isArray(e) && "sentry-trace" === e[0]),
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
                                return [t, dd(n), ...r];
                              }
                            }),
                          ["sentry-trace", a],
                        ];
                        return s && e.push(["baggage", s]), e;
                      }
                      {
                        let e = "baggage" in l ? l.baggage : void 0,
                          t = [];
                        return (
                          Array.isArray(e)
                            ? (t = e
                                .map((e) => ("string" == typeof e ? dd(e) : e))
                                .filter((e) => "" === e))
                            : e && t.push(dd(e)),
                          s && t.push(s),
                          {
                            ...l,
                            "sentry-trace": a,
                            baggage: t.length > 0 ? t.join(",") : void 0,
                          }
                        );
                      }
                    })(t, n, tb() && u ? d : void 0);
                  r && ((e.args[1] = n), (n.headers = r));
                }
                return d;
              })(e, l, c, u);
              if (
                (e.response &&
                  e.fetchData.__span &&
                  dp.set(e.response, e.fetchData.__span),
                t)
              ) {
                let n = dy(e.fetchData.url),
                  r = n ? re(n).host : void 0;
                t.setAttributes({ "http.url": n, "server.address": r });
              }
              a && t && dg(t);
            });
        }
        r &&
          nX((e) => {
            let t = (function (e, t, n, r) {
              let i = e.xhr,
                o = i && i[nG];
              if (!i || i.__sentry_own_request__ || !o) return;
              let a = tb() && t(o.url);
              if (e.endTimestamp && a) {
                let e = i.__sentry_xhr_span_id__;
                if (!e) return;
                let t = r[e];
                t &&
                  void 0 !== o.status_code &&
                  (iR(t, o.status_code), t.end(), delete r[e]);
                return;
              }
              let s = dy(o.url),
                l = s ? re(s).host : void 0,
                c = !!tF(),
                u =
                  a && c
                    ? im({
                        name: `${o.method} ${o.url}`,
                        attributes: {
                          type: "xhr",
                          "http.method": o.method,
                          "http.url": s,
                          url: o.url,
                          "server.address": l,
                          [tc]: "auto.http.browser",
                          [tl]: "http.client",
                        },
                      })
                    : new it();
              return (
                (i.__sentry_xhr_span_id__ = u.spanContext().spanId),
                (r[i.__sentry_xhr_span_id__] = u),
                n(o.url) &&
                  (function (e, t) {
                    let { "sentry-trace": n, baggage: r } = du({ span: t });
                    n &&
                      (function (e, t, n) {
                        try {
                          e.setRequestHeader("sentry-trace", t),
                            n && e.setRequestHeader("baggage", n);
                        } catch (e) {}
                      })(e, n, r);
                  })(i, tb() && c ? u : void 0),
                u
              );
            })(e, l, c, u);
            a && t && dg(t);
          });
      }
      function dg(e) {
        let { url: t } = tR(e).data || {};
        if (!t || "string" != typeof t) return;
        let n = oL("resource", ({ entries: r }) => {
          r.forEach((r) => {
            "resource" === r.entryType &&
              "initiatorType" in r &&
              "string" == typeof r.nextHopProtocol &&
              ("fetch" === r.initiatorType ||
                "xmlhttprequest" === r.initiatorType) &&
              r.name.endsWith(t) &&
              ((function (e) {
                let { name: t, version: n } = dc(e.nextHopProtocol),
                  r = [];
                return (r.push(
                  ["network.protocol.version", n],
                  ["network.protocol.name", t],
                ),
                ef)
                  ? [
                      ...r,
                      ["http.request.redirect_start", d_(e.redirectStart)],
                      ["http.request.fetch_start", d_(e.fetchStart)],
                      [
                        "http.request.domain_lookup_start",
                        d_(e.domainLookupStart),
                      ],
                      ["http.request.domain_lookup_end", d_(e.domainLookupEnd)],
                      ["http.request.connect_start", d_(e.connectStart)],
                      [
                        "http.request.secure_connection_start",
                        d_(e.secureConnectionStart),
                      ],
                      ["http.request.connection_end", d_(e.connectEnd)],
                      ["http.request.request_start", d_(e.requestStart)],
                      ["http.request.response_start", d_(e.responseStart)],
                      ["http.request.response_end", d_(e.responseEnd)],
                    ]
                  : r;
              })(r).forEach((t) => e.setAttribute(...t)),
              setTimeout(n));
          });
        });
      }
      function d_(e = 0) {
        return ((ef || performance.timeOrigin) + e) / 1e3;
      }
      function dy(e) {
        try {
          return new URL(e, nL.location.origin).href;
        } catch (e) {
          return;
        }
      }
      let dv = 0,
        db = {};
      function dS(e, t, n, r, i = n) {
        var o;
        let a =
            t[
              "secureConnection" === (o = n)
                ? "connectEnd"
                : "fetch" === o
                  ? "domainLookupStart"
                  : `${o}End`
            ],
          s = t[`${n}Start`];
        s &&
          a &&
          di(e, r + dl(s), r + dl(a), {
            op: `browser.${i}`,
            name: t.name,
            attributes: { [tc]: "auto.ui.browser.metrics" },
          });
      }
      function dw(e, t, n, r) {
        let i = t[n];
        null != i && i < 0x7fffffff && (e[r] = i);
      }
      let dE = [],
        dk = new Map(),
        dx = {
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
        },
        dC = { idleTimeout: 1e3, finalTimeout: 3e4, childSpanTimeout: 15e3 };
      function dT(e, t = {}) {
        let n,
          r,
          i = new Map(),
          o = !1,
          a = "externalFinish",
          s = !t.disableAutoFinish,
          l = [],
          {
            idleTimeout: c = dC.idleTimeout,
            finalTimeout: u = dC.finalTimeout,
            childSpanTimeout: d = dC.childSpanTimeout,
            beforeSpanEnd: p,
          } = t,
          h = eU();
        if (!h || !tb()) return new it();
        let f = eN(),
          m = tF(),
          g =
            ((n = im(e)),
            ex(eN(), n),
            I && Q.log("[Tracing] Started span is an idle span"),
            n);
        function _() {
          r && (clearTimeout(r), (r = void 0));
        }
        function y(e) {
          _(),
            (r = setTimeout(() => {
              !o && 0 === i.size && s && ((a = "idleTimeout"), g.end(e));
            }, c));
        }
        function v(e) {
          r = setTimeout(() => {
            !o && s && ((a = "heartbeatFailed"), g.end(e));
          }, d);
        }
        function b(e) {
          (o = !0), i.clear(), l.forEach((e) => e()), ex(f, m);
          let t = tR(g),
            { start_timestamp: n } = t;
          if (!n) return;
          (t.data || {})[tu] || g.setAttribute(tu, a),
            Q.log(`[Tracing] Idle span "${t.op}" finished`);
          let r = tP(g).filter((e) => e !== g),
            s = 0;
          r.forEach((t) => {
            t.isRecording() &&
              (t.setStatus({ code: 2, message: "cancelled" }),
              t.end(e),
              I &&
                Q.log(
                  "[Tracing] Cancelling span since span ended early",
                  JSON.stringify(t, void 0, 2),
                ));
            let { timestamp: n = 0, start_timestamp: r = 0 } = tR(t),
              i = r <= e,
              o = n - r <= (u + c) / 1e3;
            if (I) {
              let e = JSON.stringify(t, void 0, 2);
              i
                ? o ||
                  Q.log(
                    "[Tracing] Discarding span since it finished after idle span final timeout",
                    e,
                  )
                : Q.log(
                    "[Tracing] Discarding span since it happened after idle span was finished",
                    e,
                  );
            }
            (!o || !i) && (g[tD] && g[tD].delete(t), s++);
          }),
            s > 0 && g.setAttribute("sentry.idle_span_discarded_spans", s);
        }
        return (
          (g.end = new Proxy(g.end, {
            apply(e, t, n) {
              p && p(g);
              let [r, ...i] = n,
                o = tI(r || eh()),
                a = tP(g).filter((e) => e !== g);
              if (!a.length) return b(o), Reflect.apply(e, t, [o, ...i]);
              let s = a.map((e) => tR(e).timestamp).filter((e) => !!e),
                l = s.length ? Math.max(...s) : void 0,
                c = tR(g).start_timestamp,
                d = Math.min(
                  c ? c + u / 1e3 : 1 / 0,
                  Math.max(c || -1 / 0, Math.min(o, l || 1 / 0)),
                );
              return b(d), Reflect.apply(e, t, [d, ...i]);
            },
          })),
          l.push(
            h.on("spanStart", (e) => {
              var t;
              o ||
                e === g ||
                tR(e).timestamp ||
                (tP(g).includes(e) &&
                  ((t = e.spanContext().spanId),
                  _(),
                  i.set(t, !0),
                  v(eh() + d / 1e3)));
            }),
          ),
          l.push(
            h.on("spanEnd", (e) => {
              if (!o) {
                var t;
                (t = e.spanContext().spanId),
                  i.has(t) && i.delete(t),
                  0 === i.size && y(eh() + c / 1e3);
              }
            }),
          ),
          l.push(
            h.on("idleSpanEnableAutoFinish", (e) => {
              e === g && ((s = !0), y(), i.size && v());
            }),
          ),
          t.disableAutoFinish || y(),
          setTimeout(() => {
            o ||
              (g.setStatus({ code: 2, message: "deadline_exceeded" }),
              (a = "finalTimeout"),
              g.end());
          }, u),
          g
        );
      }
      let dI = {
          ...dC,
          instrumentNavigation: !0,
          instrumentPageLoad: !0,
          markBackgroundSpan: !0,
          enableLongTask: !0,
          enableLongAnimationFrame: !0,
          enableInp: !0,
          _experiments: {},
          ...df,
        },
        dM = (e = {}) => {
          r4();
          let {
              enableInp: t,
              enableLongTask: n,
              enableLongAnimationFrame: r,
              _experiments: {
                enableInteractions: i,
                enableStandaloneClsSpans: o,
              },
              beforeStartSpan: a,
              idleTimeout: s,
              finalTimeout: l,
              childSpanTimeout: c,
              markBackgroundSpan: u,
              traceFetch: d,
              traceXHR: p,
              trackFetchStreamPerformance: f,
              shouldCreateSpanForRequest: m,
              enableHTTPTimings: g,
              instrumentPageLoad: _,
              instrumentNavigation: y,
            } = { ...dI, ...e },
            v = (function ({ recordClsStandaloneSpans: e }) {
              let t = ds();
              if (t && ef) {
                t.mark && M.performance.mark("sentry-tracing-init");
                let n = oD(({ metric: e }) => {
                    let t = e.entries[e.entries.length - 1];
                    if (!t) return;
                    let n = dl(ef),
                      r = dl(t.startTime);
                    (db.fid = { value: e.value, unit: "millisecond" }),
                      (db["mark.fid"] = { value: n + r, unit: "second" });
                  }),
                  r = oO(({ metric: e }) => {
                    let t = e.entries[e.entries.length - 1];
                    t &&
                      ((db.lcp = { value: e.value, unit: "millisecond" }),
                      (w = t));
                  }, !0),
                  i = oH(
                    "ttfb",
                    ({ metric: e }) => {
                      e.entries[e.entries.length - 1] &&
                        (db.ttfb = { value: e.value, unit: "millisecond" });
                    },
                    oj,
                    h,
                  ),
                  o = e
                    ? (function () {
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
                        let r = !1;
                        function i() {
                          var i, a, s;
                          let l, c, u;
                          r ||
                            ((r = !0),
                            t &&
                              ((i = n),
                              (a = e),
                              (s = t),
                              rU && Q.log(`Sending CLS span (${i})`),
                              (l = dl((ef || 0) + ((a && a.startTime) || 0))),
                              (c = eN().getScopeData().transactionName),
                              (u = da({
                                name: a
                                  ? Y(a.sources[0] && a.sources[0].node)
                                  : "Layout shift",
                                transaction: c,
                                attributes: ed({
                                  [tc]: "auto.http.browser.cls",
                                  [tl]: "ui.webvital.cls",
                                  [tf]: (a && a.duration) || 0,
                                  "sentry.pageload.span_id": s,
                                }),
                                startTime: l,
                              })) &&
                                (u.addEvent("cls", { [td]: "", [tp]: i }),
                                u.end(l))),
                            o());
                        }
                        let o = oA(({ metric: t }) => {
                          let r = t.entries[t.entries.length - 1];
                          r && ((n = t.value), (e = r));
                        }, !0);
                        oo(() => {
                          i();
                        }),
                          setTimeout(() => {
                            let e = eU();
                            if (!e) return;
                            let n = e.on("startNavigationSpan", () => {
                                i(), n && n();
                              }),
                              r = tF(),
                              o = r && t$(r),
                              a = o && tR(o);
                            a &&
                              "pageload" === a.op &&
                              (t = o.spanContext().spanId);
                          }, 0);
                      })()
                    : oA(({ metric: e }) => {
                        let t = e.entries[e.entries.length - 1];
                        t && ((db.cls = { value: e.value, unit: "" }), (E = t));
                      }, !0);
                return () => {
                  n(), r(), i(), o && o();
                };
              }
              return () => void 0;
            })({ recordClsStandaloneSpans: o || !1 });
          t &&
            (function () {
              if (ds() && ef) {
                let e = oN(({ metric: e }) => {
                  if (void 0 == e.value) return;
                  let t = e.entries.find(
                    (t) => t.duration === e.value && dx[t.name],
                  );
                  if (!t) return;
                  let { interactionId: n } = t,
                    r = dx[t.name],
                    i = dl(ef + t.startTime),
                    o = dl(e.value),
                    a = tF(),
                    s = a ? t$(a) : void 0,
                    l = (null != n ? dk.get(n) : void 0) || s,
                    c = l
                      ? tR(l).description
                      : eN().getScopeData().transactionName,
                    u = da({
                      name: Y(t.target),
                      transaction: c,
                      attributes: ed({
                        [tc]: "auto.http.browser.inp",
                        [tl]: `ui.interaction.${r}`,
                        [tf]: t.duration,
                      }),
                      startTime: i,
                    });
                  u &&
                    (u.addEvent("inp", { [td]: "millisecond", [tp]: e.value }),
                    u.end(i + o));
                });
                () => {
                  e();
                };
              }
            })(),
            r &&
            M.PerformanceObserver &&
            PerformanceObserver.supportedEntryTypes &&
            PerformanceObserver.supportedEntryTypes.includes(
              "long-animation-frame",
            )
              ? new PerformanceObserver((e) => {
                  let t = tF();
                  if (t)
                    for (let n of e.getEntries()) {
                      if (!n.scripts[0]) continue;
                      let e = dl(ef + n.startTime),
                        { start_timestamp: r, op: i } = tR(t);
                      if ("navigation" === i && r && e < r) continue;
                      let o = dl(n.duration),
                        a = { [tc]: "auto.ui.browser.metrics" },
                        {
                          invoker: s,
                          invokerType: l,
                          sourceURL: c,
                          sourceFunctionName: u,
                          sourceCharPosition: d,
                        } = n.scripts[0];
                      (a["browser.script.invoker"] = s),
                        (a["browser.script.invoker_type"] = l),
                        c && (a["code.filepath"] = c),
                        u && (a["code.function"] = u),
                        -1 !== d &&
                          (a["browser.script.source_char_position"] = d),
                        di(t, e, e + o, {
                          name: "Main UI thread blocked",
                          op: "ui.long-animation-frame",
                          attributes: a,
                        });
                    }
                }).observe({ type: "long-animation-frame", buffered: !0 })
              : n &&
                oL("longtask", ({ entries: e }) => {
                  let t = tF();
                  if (!t) return;
                  let { op: n, start_timestamp: r } = tR(t);
                  for (let i of e) {
                    let e = dl(ef + i.startTime),
                      o = dl(i.duration);
                    ("navigation" === n && r && e < r) ||
                      di(t, e, e + o, {
                        name: "Main UI thread blocked",
                        op: "ui.long-task",
                        attributes: { [tc]: "auto.ui.browser.metrics" },
                      });
                  }
                }),
            i &&
              oL("event", ({ entries: e }) => {
                let t = tF();
                if (t) {
                  for (let n of e)
                    if ("click" === n.name) {
                      let e = dl(ef + n.startTime),
                        r = dl(n.duration),
                        i = {
                          name: Y(n.target),
                          op: `ui.interaction.${n.name}`,
                          startTime: e,
                          attributes: { [tc]: "auto.ui.browser.metrics" },
                        },
                        o = G(n.target);
                      o && (i.attributes["ui.component_name"] = o),
                        di(t, e, e + r, i);
                    }
                }
              });
          let b = { name: void 0, source: void 0 };
          function S(e, t) {
            let n = "pageload" === t.op,
              r = a ? a(t) : t,
              i = r.attributes || {};
            t.name !== r.name && ((i[ta] = "custom"), (r.attributes = i)),
              (b.name = r.name),
              (b.source = i[ta]);
            let u = dT(r, {
              idleTimeout: s,
              finalTimeout: l,
              childSpanTimeout: c,
              disableAutoFinish: n,
              beforeSpanEnd: (e) => {
                v(),
                  (function (e, t) {
                    let n = ds();
                    if (!n || !n.getEntries || !ef) return;
                    let r = dl(ef),
                      i = n.getEntries(),
                      { op: o, start_timestamp: a } = tR(e);
                    if (
                      (i.slice(dv).forEach((t) => {
                        var n, i, s, l, c, u, d, p, h, f, m;
                        let g = dl(t.startTime),
                          _ = dl(Math.max(0, t.duration));
                        if ("navigation" !== o || !a || !(r + g < a))
                          switch (t.entryType) {
                            case "navigation":
                              let y, v, b;
                              (n = e),
                                (i = t),
                                (s = r),
                                [
                                  "unloadEvent",
                                  "redirect",
                                  "domContentLoadedEvent",
                                  "loadEvent",
                                  "connect",
                                ].forEach((e) => {
                                  dS(n, i, e, s);
                                }),
                                dS(n, i, "secureConnection", s, "TLS/SSL"),
                                dS(n, i, "fetch", s, "cache"),
                                dS(n, i, "domainLookup", s, "DNS"),
                                (l = n),
                                (c = i),
                                (y = (u = s) + dl(c.requestStart)),
                                (v = u + dl(c.responseEnd)),
                                (b = u + dl(c.responseStart)),
                                c.responseEnd &&
                                  (di(l, y, v, {
                                    op: "browser.request",
                                    name: c.name,
                                    attributes: {
                                      [tc]: "auto.ui.browser.metrics",
                                    },
                                  }),
                                  di(l, b, v, {
                                    op: "browser.response",
                                    name: c.name,
                                    attributes: {
                                      [tc]: "auto.ui.browser.metrics",
                                    },
                                  }));
                              break;
                            case "mark":
                            case "paint":
                            case "measure": {
                              let n, i, o, a;
                              (d = e),
                                (p = t),
                                (h = g),
                                (f = _),
                                (i =
                                  (m = r) +
                                  Math.max(
                                    h,
                                    dl((n = ot(!1)) ? n.requestStart : 0),
                                  )),
                                (o = m + h),
                                (a = { [tc]: "auto.resource.browser.metrics" }),
                                i !== o &&
                                  ((a[
                                    "sentry.browser.measure_happened_before_request"
                                  ] = !0),
                                  (a["sentry.browser.measure_start_time"] = i)),
                                di(d, i, o + f, {
                                  name: p.name,
                                  op: p.entryType,
                                  attributes: a,
                                });
                              let s = ou(),
                                l = t.startTime < s.firstHiddenTime;
                              "first-paint" === t.name &&
                                l &&
                                (db.fp = {
                                  value: t.startTime,
                                  unit: "millisecond",
                                }),
                                "first-contentful-paint" === t.name &&
                                  l &&
                                  (db.fcp = {
                                    value: t.startTime,
                                    unit: "millisecond",
                                  });
                              break;
                            }
                            case "resource":
                              !(function (e, t, n, r, i, o) {
                                if (
                                  "xmlhttprequest" === t.initiatorType ||
                                  "fetch" === t.initiatorType
                                )
                                  return;
                                let a = re(n),
                                  s = { [tc]: "auto.resource.browser.metrics" };
                                dw(
                                  s,
                                  t,
                                  "transferSize",
                                  "http.response_transfer_size",
                                ),
                                  dw(
                                    s,
                                    t,
                                    "encodedBodySize",
                                    "http.response_content_length",
                                  ),
                                  dw(
                                    s,
                                    t,
                                    "decodedBodySize",
                                    "http.decoded_response_content_length",
                                  );
                                let l = t.deliveryType;
                                null != l &&
                                  (s["http.response_delivery_type"] = l);
                                let c = t.renderBlockingStatus;
                                c && (s["resource.render_blocking_status"] = c),
                                  a.protocol &&
                                    (s["url.scheme"] = a.protocol
                                      .split(":")
                                      .pop()),
                                  a.host && (s["server.address"] = a.host),
                                  (s["url.same_origin"] = n.includes(
                                    M.location.origin,
                                  ));
                                let { name: u, version: d } = dc(
                                  t.nextHopProtocol,
                                );
                                (s["network.protocol.name"] = u),
                                  (s["network.protocol.version"] = d);
                                let p = o + r;
                                di(e, p, p + i, {
                                  name: n.replace(M.location.origin, ""),
                                  op: t.initiatorType
                                    ? `resource.${t.initiatorType}`
                                    : "resource.other",
                                  attributes: s,
                                });
                              })(e, t, t.name, g, _, r);
                          }
                      }),
                      (dv = Math.max(i.length - 1, 0)),
                      (function (e) {
                        let t = M.navigator;
                        if (!t) return;
                        let n = t.connection;
                        n &&
                          (n.effectiveType &&
                            e.setAttribute(
                              "effectiveConnectionType",
                              n.effectiveType,
                            ),
                          n.type && e.setAttribute("connectionType", n.type),
                          dr(n.rtt) &&
                            (db["connection.rtt"] = {
                              value: n.rtt,
                              unit: "millisecond",
                            })),
                          dr(t.deviceMemory) &&
                            e.setAttribute(
                              "deviceMemory",
                              `${t.deviceMemory} GB`,
                            ),
                          dr(t.hardwareConcurrency) &&
                            e.setAttribute(
                              "hardwareConcurrency",
                              String(t.hardwareConcurrency),
                            );
                      })(e),
                      "pageload" === o)
                    ) {
                      var s;
                      !(function (e) {
                        let t = ot(!1);
                        if (!t) return;
                        let { responseStart: n, requestStart: r } = t;
                        r <= n &&
                          (e["ttfb.requestTime"] = {
                            value: n - r,
                            unit: "millisecond",
                          });
                      })(db);
                      let n = db["mark.fid"];
                      n &&
                        db.fid &&
                        (di(e, n.value, n.value + dl(db.fid.value), {
                          name: "first input delay",
                          op: "ui.action",
                          attributes: { [tc]: "auto.ui.browser.metrics" },
                        }),
                        delete db["mark.fid"]),
                        ("fcp" in db && t.recordClsOnPageloadSpan) ||
                          delete db.cls,
                        Object.entries(db).forEach(([e, t]) => {
                          ir(e, t.value, t.unit);
                        }),
                        e.setAttribute("performance.timeOrigin", r),
                        e.setAttribute("performance.activationStart", on()),
                        (s = e),
                        w &&
                          (w.element &&
                            s.setAttribute("lcp.element", Y(w.element)),
                          w.id && s.setAttribute("lcp.id", w.id),
                          w.url &&
                            s.setAttribute(
                              "lcp.url",
                              w.url.trim().slice(0, 200),
                            ),
                          null != w.loadTime &&
                            s.setAttribute("lcp.loadTime", w.loadTime),
                          null != w.renderTime &&
                            s.setAttribute("lcp.renderTime", w.renderTime),
                          s.setAttribute("lcp.size", w.size)),
                        E &&
                          E.sources &&
                          E.sources.forEach((e, t) =>
                            s.setAttribute(`cls.source.${t + 1}`, Y(e.node)),
                          );
                    }
                    (w = void 0), (E = void 0), (db = {});
                  })(e, { recordClsOnPageloadSpan: !o });
              },
            });
            function d() {
              ["interactive", "complete"].includes(nL.document.readyState) &&
                e.emit("idleSpanEnableAutoFinish", u);
            }
            return (
              n &&
                nL.document &&
                (nL.document.addEventListener("readystatechange", () => {
                  d();
                }),
                d()),
              u
            );
          }
          return {
            name: "BrowserTracing",
            afterAllSetup(e) {
              var n, r, o, a;
              let h,
                v,
                w,
                E = nL.location && nL.location.href;
              function k() {
                w &&
                  !tR(w).timestamp &&
                  (nx &&
                    Q.log(
                      `[Tracing] Finishing current active span with op: ${tR(w).op}`,
                    ),
                  w.end());
              }
              e.on("startNavigationSpan", (t) => {
                eU() === e && (k(), (w = S(e, { op: "navigation", ...t })));
              }),
                e.on("startPageLoadSpan", (t, n = {}) => {
                  if (eU() !== e) return;
                  k();
                  let r = tk(
                    n.sentryTrace || dO("sentry-trace"),
                    n.baggage || dO("baggage"),
                  );
                  eN().setPropagationContext(r),
                    (w = S(e, { op: "pageload", ...t }));
                }),
                e.on("spanEnd", (e) => {
                  let t = tR(e).op;
                  if (e !== t$(e) || ("navigation" !== t && "pageload" !== t))
                    return;
                  let n = eN(),
                    r = n.getPropagationContext();
                  n.setPropagationContext({
                    ...r,
                    sampled: void 0 !== r.sampled ? r.sampled : tA(e),
                    dsc: r.dsc || tW(e),
                  });
                }),
                nL.location &&
                  (_ &&
                    dR(e, {
                      name: nL.location.pathname,
                      startTime: ef ? ef / 1e3 : void 0,
                      attributes: {
                        [ta]: "url",
                        [tc]: "auto.pageload.browser",
                      },
                    }),
                  y &&
                    nK(({ to: t, from: n }) => {
                      if (void 0 === n && E && -1 !== E.indexOf(t)) {
                        E = void 0;
                        return;
                      }
                      n !== t &&
                        ((E = void 0),
                        dA(e, {
                          name: nL.location.pathname,
                          attributes: {
                            [ta]: "url",
                            [tc]: "auto.navigation.browser",
                          },
                        }));
                    })),
                u &&
                  (nL && nL.document
                    ? nL.document.addEventListener("visibilitychange", () => {
                        let e = tF();
                        if (!e) return;
                        let t = t$(e);
                        if (nL.document.hidden && t) {
                          let e = "cancelled",
                            { op: n, status: r } = tR(t);
                          nx &&
                            Q.log(
                              `[Tracing] Transaction: ${e} -> since tab moved to the background, op: ${n}`,
                            ),
                            r || t.setStatus({ code: 2, message: e }),
                            t.setAttribute(
                              "sentry.cancellation_reason",
                              "document.hidden",
                            ),
                            t.end();
                        }
                      })
                    : nx &&
                      Q.warn(
                        "[Tracing] Could not set up background tab detection due to lack of global document",
                      )),
                i &&
                  ((n = s),
                  (r = l),
                  (o = c),
                  (a = b),
                  nL.document &&
                    addEventListener(
                      "click",
                      () => {
                        let e = "ui.action.click",
                          t = tF(),
                          i = t && t$(t);
                        if (
                          i &&
                          ["navigation", "pageload"].includes(tR(i).op)
                        ) {
                          nx &&
                            Q.warn(
                              `[Tracing] Did not create ${e} span because a pageload or navigation span is in progress.`,
                            );
                          return;
                        }
                        if (
                          (h &&
                            (h.setAttribute(tu, "interactionInterrupted"),
                            h.end(),
                            (h = void 0)),
                          !a.name)
                        ) {
                          nx &&
                            Q.warn(
                              `[Tracing] Did not create ${e} transaction because _latestRouteName is missing.`,
                            );
                          return;
                        }
                        h = dT(
                          {
                            name: a.name,
                            op: e,
                            attributes: { [ta]: a.source || "url" },
                          },
                          {
                            idleTimeout: n,
                            finalTimeout: r,
                            childSpanTimeout: o,
                          },
                        );
                      },
                      { once: !1, capture: !0 },
                    )),
                t &&
                  (oL(
                    "event",
                    (v = ({ entries: e }) => {
                      let t = tF(),
                        n = t && t$(t);
                      e.forEach((e) => {
                        if (!("duration" in e) || !n) return;
                        let t = e.interactionId;
                        if (null != t && !dk.has(t)) {
                          if (dE.length > 10) {
                            let e = dE.shift();
                            dk.delete(e);
                          }
                          dE.push(t), dk.set(t, n);
                        }
                      });
                    }),
                  ),
                  oL("first-input", v)),
                dm(e, {
                  traceFetch: d,
                  traceXHR: p,
                  trackFetchStreamPerformance: f,
                  tracePropagationTargets:
                    e.getOptions().tracePropagationTargets,
                  shouldCreateSpanForRequest: m,
                  enableHTTPTimings: g,
                });
            },
          };
        };
      function dR(e, t, n) {
        e.emit("startPageLoadSpan", t, n), eN().setTransactionName(t.name);
        let r = tF();
        return "pageload" === (r && tR(r).op) ? r : void 0;
      }
      function dA(e, t) {
        eL().setPropagationContext({ traceId: em() }),
          eN().setPropagationContext({ traceId: em() }),
          e.emit("startNavigationSpan", t),
          eN().setTransactionName(t.name);
        let n = tF();
        return "navigation" === (n && tR(n).op) ? n : void 0;
      }
      function dO(e) {
        var t;
        let n =
          ((t = `meta[name=${e}]`),
          M.document && M.document.querySelector
            ? M.document.querySelector(t)
            : null);
        return n ? n.getAttribute("content") : void 0;
      }
      function dD(e) {
        return new Promise((t, n) => {
          (e.oncomplete = e.onsuccess = () => t(e.result)),
            (e.onabort = e.onerror = () => n(e.error));
        });
      }
      function dN(e) {
        return dD(e.getAllKeys());
      }
      function dL(e) {
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
              (o = dD(i)),
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
              var r, i;
              let o = await nm(t);
              await ((r = n()),
              (i = e.maxQueueSize || 30),
              r((e) =>
                dN(e).then((t) => {
                  if (!(t.length >= i))
                    return e.put(o, Math.max(...t, 0) + 1), dD(e.transaction);
                }),
              ));
            } catch (e) {}
          },
          unshift: async (t) => {
            try {
              var r, i;
              let o = await nm(t);
              await ((r = n()),
              (i = e.maxQueueSize || 30),
              r((e) =>
                dN(e).then((t) => {
                  if (!(t.length >= i))
                    return e.put(o, Math.min(...t, 0) - 1), dD(e.transaction);
                }),
              ));
            } catch (e) {}
          },
          shift: async () => {
            try {
              let e = await n()((e) =>
                dN(e).then((t) => {
                  let n = t[0];
                  if (null != n)
                    return dD(e.get(n)).then(
                      (t) => (e.delete(n), dD(e.transaction).then(() => t)),
                    );
                }),
              );
              if (e)
                return (function (e) {
                  let t = "string" == typeof e ? nf(e) : e;
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
                        M.__SENTRY__ && M.__SENTRY__.decodePolyfill
                          ? M.__SENTRY__.decodePolyfill(e)
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
                })(e);
            } catch (e) {}
          },
        };
      }
      function dP(e = rG) {
        var t;
        return (
          (t = (function (e) {
            function t(...e) {
              I && Q.info("[Offline]:", ...e);
            }
            return (n) => {
              let r,
                i = e(n);
              if (!n.createStore)
                throw Error("No `createStore` function was provided");
              let o = n.createStore(n),
                a = 5e3;
              function s(e) {
                r && clearTimeout(r),
                  "number" !=
                    typeof (r = setTimeout(async () => {
                      r = void 0;
                      let e = await o.shift();
                      e &&
                        (t("Attempting to send previously queued event"),
                        (e[0].sent_at = new Date().toISOString()),
                        c(e, !0).catch((e) => {
                          t("Failed to retry sending", e);
                        }));
                    }, e)) &&
                    r.unref &&
                    r.unref();
              }
              function l() {
                r || (s(a), (a = Math.min(2 * a, 36e5)));
              }
              async function c(e, r = !1) {
                if (!r && nh(e, ["replay_event", "replay_recording"]))
                  return await o.push(e), s(100), {};
                try {
                  let t = await i.send(e),
                    n = 100;
                  if (t) {
                    if (t.headers && t.headers["retry-after"])
                      n = rz(t.headers["retry-after"]);
                    else if (t.headers && t.headers["x-sentry-rate-limits"])
                      n = 6e4;
                    else if ((t.statusCode || 0) >= 400) return t;
                  }
                  return s(n), (a = 5e3), t;
                } catch (i) {
                  var u;
                  if (
                    await ((u = a),
                    !nh(e, ["client_report"]) &&
                      (!n.shouldStore || n.shouldStore(e, i, u)))
                  )
                    return (
                      r ? await o.unshift(e) : await o.push(e),
                      l(),
                      t("Error sending. Event queued.", i),
                      {}
                    );
                  throw i;
                }
              }
              return (
                n.flushAtStartup && l(),
                {
                  send: c,
                  flush: (e) => (
                    void 0 === e && ((a = 5e3), s(100)), i.flush(e)
                  ),
                }
              );
            };
          })(e)),
          (e) => {
            let n = t({ ...e, createStore: dL });
            return (
              nL.addEventListener("online", async (e) => {
                await n.flush();
              }),
              n
            );
          }
        );
      }
      let d$ = String(0),
        dF = "",
        dU = "",
        dj = "",
        dB = (nL.navigator && nL.navigator.userAgent) || "",
        dH = "",
        dz =
          (nL.navigator && nL.navigator.language) ||
          (nL.navigator &&
            nL.navigator.languages &&
            nL.navigator.languages["0"]) ||
          "",
        dW = nL.navigator && nL.navigator.userAgentData;
      function dq(e) {
        return "pageload" === tR(e).op;
      }
      "object" == typeof dW &&
        null !== dW &&
        "getHighEntropyValues" in dW &&
        dW
          .getHighEntropyValues([
            "architecture",
            "model",
            "platform",
            "platformVersion",
            "fullVersionList",
          ])
          .then((e) => {
            if (
              ((dF = e.platform || ""),
              (dj = e.architecture || ""),
              (dH = e.model || ""),
              (dU = e.platformVersion || ""),
              e.fullVersionList && e.fullVersionList.length > 0)
            ) {
              let t = e.fullVersionList[e.fullVersionList.length - 1];
              dB = `${t.brand} ${t.version}`;
            }
          })
          .catch((e) => void 0);
      let dY = !1;
      function dV(e) {
        if (dY)
          return (
            nx &&
              Q.log(
                "[Profiling] Profiling has been disabled for the duration of the current user session.",
              ),
            !1
          );
        if (!e.isRecording())
          return (
            nx &&
              Q.log(
                "[Profiling] Discarding profile because transaction was not sampled.",
              ),
            !1
          );
        let t = eU(),
          n = t && t.getOptions();
        if (!n)
          return (
            nx && Q.log("[Profiling] Profiling disabled, no options found."), !1
          );
        let r = n.profilesSampleRate;
        return (
          ("number" != typeof r && "boolean" != typeof r) ||
          ("number" == typeof r && isNaN(r))
            ? (nx &&
                Q.warn(
                  `[Profiling] Invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(r)} of type ${JSON.stringify(typeof r)}.`,
                ),
              1)
            : !0 !== r &&
              !1 !== r &&
              (r < 0 || r > 1) &&
              (nx &&
                Q.warn(
                  `[Profiling] Invalid sample rate. Sample rate must be between 0 and 1. Got ${r}.`,
                ),
              1)
        )
          ? (nx &&
              Q.warn(
                "[Profiling] Discarding profile because of invalid sample rate.",
              ),
            !1)
          : r
            ? !!(!0 === r || Math.random() < r) ||
              (nx &&
                Q.log(
                  `[Profiling] Discarding profile because it's not included in the random sample (sampling rate = ${Number(r)})`,
                ),
              !1)
            : (nx &&
                Q.log(
                  "[Profiling] Discarding profile because a negative sampling decision was inherited or profileSampleRate is set to 0",
                ),
              !1);
      }
      let dG = new Map();
      function dX(e) {
        let t;
        dq(e) && (t = 1e3 * eh());
        let n = (function () {
          let e = nL.Profiler;
          if ("function" != typeof e) {
            nx &&
              Q.log(
                "[Profiling] Profiling is not supported by this browser, Profiler interface missing on window object.",
              );
            return;
          }
          let t = Math.floor(3e3);
          try {
            return new e({ sampleInterval: 10, maxBufferSize: t });
          } catch (e) {
            nx &&
              (Q.log(
                "[Profiling] Failed to initialize the Profiling constructor, this is likely due to a missing 'Document-Policy': 'js-profiling' header.",
              ),
              Q.log(
                "[Profiling] Disabling profiling for current user session.",
              )),
              (dY = !0);
          }
        })();
        if (!n) return;
        nx && Q.log(`[Profiling] started profiling span: ${tR(e).description}`);
        let r = em();
        async function i() {
          if (e && n)
            return n
              .stop()
              .then((t) => {
                if (
                  (o && (nL.clearTimeout(o), (o = void 0)),
                  nx &&
                    Q.log(
                      `[Profiling] stopped profiling of span: ${tR(e).description}`,
                    ),
                  !t)
                ) {
                  nx &&
                    Q.log(
                      `[Profiling] profiler returned null profile for: ${tR(e).description}`,
                      "this may indicate an overlapping span or a call to stopProfiling with a profile title that was never started",
                    );
                  return;
                }
                if ((dG.set(r, t), dG.size > 30)) {
                  let e = dG.keys().next().value;
                  dG.delete(e);
                }
              })
              .catch((e) => {
                nx && Q.log("[Profiling] error while stopping profiler:", e);
              });
        }
        eN().setContext("profile", { profile_id: r, start_timestamp: t });
        let o = nL.setTimeout(() => {
            nx &&
              Q.log(
                "[Profiling] max profile duration elapsed, stopping profiling for:",
                tR(e).description,
              ),
              i();
          }, 3e4),
          a = e.end.bind(e);
        e.end = function () {
          return e
            ? (i().then(
                () => {
                  a();
                },
                () => {
                  a();
                },
              ),
              e)
            : a();
        };
      }
      let dJ = () => ({
          name: "BrowserProfiling",
          setup(e) {
            let t = tF(),
              n = t && t$(t);
            n && dq(n) && dV(n) && dX(n),
              e.on("spanStart", (e) => {
                e === t$(e) && dV(e) && dX(e);
              }),
              e.on("beforeEnvelope", (e) => {
                let t;
                if (!dG.size) return;
                let n =
                  ((t = []),
                  np(e, (e, n) => {
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
                  t);
                if (!n.length) return;
                let r = [];
                for (let e of n) {
                  let t = e && e.contexts,
                    n = t && t.profile && t.profile.profile_id,
                    i = t && t.profile && t.profile.start_timestamp;
                  if ("string" != typeof n || !n) {
                    nx &&
                      Q.log(
                        "[Profiling] cannot find profile for a span without a profile context",
                      );
                    continue;
                  }
                  t && t.profile && delete t.profile;
                  let o = (function (e) {
                    let t = dG.get(e);
                    return t && dG.delete(e), t;
                  })(n);
                  if (!o) {
                    nx &&
                      Q.log(
                        `[Profiling] Could not retrieve profile for span: ${n}`,
                      );
                    continue;
                  }
                  let a = (function (e, t, n, r) {
                    return (
                      n.samples.length < 2
                        ? (nx &&
                            Q.log(
                              "[Profiling] Discarding profile because it contains less than 2 samples",
                            ),
                          1)
                        : !n.frames.length &&
                          (nx &&
                            Q.log(
                              "[Profiling] Discarding profile because it contains no frames",
                            ),
                          1)
                    )
                      ? null
                      : (function (e, t, n, r) {
                          var i;
                          let o;
                          if ("transaction" !== r.type)
                            throw TypeError(
                              "Profiling events may only be attached to transactions, this should never occur.",
                            );
                          if (null == n)
                            throw TypeError(
                              `Cannot construct profiling event envelope without a valid profile. Got ${n} instead.`,
                            );
                          let a = ("string" ==
                              typeof (o =
                                r &&
                                r.contexts &&
                                r.contexts.trace &&
                                r.contexts.trace.trace_id) &&
                              32 !== o.length &&
                              nx &&
                              Q.log(
                                `[Profiling] Invalid traceId: ${o} on profiled event`,
                              ),
                            "string" != typeof o)
                              ? ""
                              : o,
                            s =
                              "thread_metadata" in (i = n)
                                ? i
                                : (function (e) {
                                    let t,
                                      n = 0,
                                      r = {
                                        samples: [],
                                        stacks: [],
                                        frames: [],
                                        thread_metadata: {
                                          [d$]: { name: "main" },
                                        },
                                      },
                                      i = e.samples[0];
                                    if (!i) return r;
                                    let o = i.timestamp,
                                      a =
                                        "number" ==
                                        typeof performance.timeOrigin
                                          ? performance.timeOrigin
                                          : ef || 0,
                                      s = a - (ef || a);
                                    return (
                                      e.samples.forEach((i, a) => {
                                        if (void 0 === i.stackId) {
                                          void 0 === t &&
                                            ((t = n), (r.stacks[t] = []), n++),
                                            (r.samples[a] = {
                                              elapsed_since_start_ns: (
                                                (i.timestamp + s - o) *
                                                1e6
                                              ).toFixed(0),
                                              stack_id: t,
                                              thread_id: d$,
                                            });
                                          return;
                                        }
                                        let l = e.stacks[i.stackId],
                                          c = [];
                                        for (; l; ) {
                                          c.push(l.frameId);
                                          let t = e.frames[l.frameId];
                                          t &&
                                            void 0 === r.frames[l.frameId] &&
                                            (r.frames[l.frameId] = {
                                              function: t.name,
                                              abs_path:
                                                "number" == typeof t.resourceId
                                                  ? e.resources[t.resourceId]
                                                  : void 0,
                                              lineno: t.line,
                                              colno: t.column,
                                            }),
                                            (l =
                                              void 0 === l.parentId
                                                ? void 0
                                                : e.stacks[l.parentId]);
                                        }
                                        let u = {
                                          elapsed_since_start_ns: (
                                            (i.timestamp + s - o) *
                                            1e6
                                          ).toFixed(0),
                                          stack_id: n,
                                          thread_id: d$,
                                        };
                                        (r.stacks[n] = c),
                                          (r.samples[a] = u),
                                          n++;
                                      }),
                                      r
                                    );
                                  })(i),
                            l =
                              t ||
                              ("number" == typeof r.start_timestamp
                                ? 1e3 * r.start_timestamp
                                : 1e3 * eh()),
                            c =
                              "number" == typeof r.timestamp
                                ? 1e3 * r.timestamp
                                : 1e3 * eh();
                          return {
                            event_id: e,
                            timestamp: new Date(l).toISOString(),
                            platform: "javascript",
                            version: "1",
                            release: r.release || "",
                            environment: r.environment || te,
                            runtime: {
                              name: "javascript",
                              version: nL.navigator.userAgent,
                            },
                            os: { name: dF, version: dU, build_number: dB },
                            device: {
                              locale: dz,
                              model: dH,
                              manufacturer: dB,
                              architecture: dj,
                              is_emulator: !1,
                            },
                            debug_meta: {
                              images: (function (e) {
                                let t = eU(),
                                  n = t && t.getOptions(),
                                  r = n && n.stackParser;
                                if (!r) return [];
                                let i = ti(r);
                                if (!i) return [];
                                let o = [];
                                for (let t of e)
                                  t &&
                                    i[t] &&
                                    o.push({
                                      type: "sourcemap",
                                      code_file: t,
                                      debug_id: i[t],
                                    });
                                return o;
                              })(n.resources),
                            },
                            profile: s,
                            transactions: [
                              {
                                name: r.transaction || "",
                                id: r.event_id || em(),
                                trace_id: a,
                                active_thread_id: d$,
                                relative_start_ns: "0",
                                relative_end_ns: ((c - l) * 1e6).toFixed(0),
                              },
                            ],
                          };
                        })(e, t, n, r);
                  })(n, i, o, e);
                  a && r.push(a);
                }
                !(function (e, t) {
                  if (t.length)
                    for (let n of t) e[1].push([{ type: "profile" }, n]);
                })(e, r);
              });
          },
        }),
        dK = (e = {}) => {
          let t = e.sidecarUrl || "http://localhost:8969/stream";
          return {
            name: "SpotlightBrowser",
            setup: () => {
              nx && Q.log("Using Sidecar URL", t);
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
              var n, r;
              let i, o;
              (n = e),
                (r = t),
                (i = rB("fetch")),
                (o = 0),
                n.on("beforeEnvelope", (e) => {
                  o > 3
                    ? Q.warn(
                        "[Spotlight] Disabled Sentry -> Spotlight integration due to too many failed requests:",
                        o,
                      )
                    : i(r, {
                        method: "POST",
                        body: nm(e),
                        headers: {
                          "Content-Type": "application/x-sentry-envelope",
                        },
                        mode: "cors",
                      }).then(
                        (e) => {
                          e.status >= 200 && e.status < 400 && (o = 0);
                        },
                        (e) => {
                          o++,
                            Q.error(
                              "Sentry SDK can't connect to Sidecar is it running? See: https://spotlightjs.com/sidecar/npx/",
                              e,
                            );
                        },
                      );
                });
            },
          };
        },
        dZ = () => ({ name: "LaunchDarkly", processEvent: (e, t, n) => r1(e) });
      function dQ() {
        return {
          name: "sentry-flag-auditor",
          type: "flag-used",
          synchronous: !0,
          method: (e, t, n) => {
            r2(e, t.value);
          },
        };
      }
      let d0 = () => ({
        name: "OpenFeature",
        processEvent: (e, t, n) => r1(e),
      });
      class d1 {
        after(e, t) {
          r2(t.flagKey, t.value);
        }
        error(e, t, n) {
          r2(e.flagKey, e.defaultValue);
        }
      }
      let d2 = ({ unleashClientClass: e }) => ({
        name: "Unleash",
        processEvent: (e, t, n) => r1(e),
        setupOnce() {
          ei(e.prototype, "isEnabled", d3);
        },
      });
      function d3(e) {
        return function (...t) {
          let n = t[0],
            r = e.apply(this, t);
          return (
            "string" == typeof n && "boolean" == typeof r
              ? r2(n, r)
              : nx &&
                Q.error(
                  `[Feature Flags] UnleashClient.isEnabled does not match expected signature. arg0: ${n} (${typeof n}), result: ${r} (${typeof r})`,
                ),
            r
          );
        };
      }
      let d5 = ({ featureFlagClient: e }) => ({
          name: "Statsig",
          processEvent: (e, t, n) => r1(e),
          setup() {
            e.on("gate_evaluation", (e) => {
              r2(e.gate.name, e.gate.value);
            });
          },
        }),
        d4 = ["oppobrowser", "realmebrowser", "heytapbrowser"],
        d6 = (function (e) {
          let { maxBudgetMinute: t, maxBudgetHour: n } = e,
            r = { slot: 0, budgetUsed: 0 },
            i = { slot: 0, budgetUsed: 0 };
          return () => {
            let e = Date.now(),
              o = Math.round(e / 1e3 / 60),
              a = Math.round(e / 1e3 / 60 / 60);
            return (
              r.slot !== o && ((r.slot = o), (r.budgetUsed = 0)),
              i.slot !== a && ((i.slot = a), (i.budgetUsed = 0)),
              !!(r.budgetUsed < t) &&
                (r.budgetUsed++, !!(i.budgetUsed < n)) &&
                (i.budgetUsed++, !0)
            );
          };
        })({ maxBudgetMinute: 1, maxBudgetHour: 3 });
      window.DiscordSentry = (function () {
        rJ({
          tunnel: "/error-reporting-proxy/web",
          dsn: "https://fa97a90475514c03a42f80cd36d147c4@sentry.io/140984",
          autoSessionTracking: !1,
          environment: window.GLOBAL_ENV.RELEASE_CHANNEL,
          release: "discord_web-481aabd124ae35310423b4051c24b82a55881670",
          beforeSend: function (e, t) {
            let n;
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
              d4.some(
                (e) =>
                  window.navigator.appVersion.toLowerCase().indexOf(e) >= 0,
              )
            ) &&
              null == (n = window).jQuery &&
              null == n.$ &&
              null == n.BetterDiscord &&
              null == n.BdApi &&
              null == n.rambox &&
              null == n.Vencord &&
              null == n.VencordNative &&
              "Aborted" !== e.message &&
              "cancel captcha" !== e.message &&
              d6()
              ? e
              : null;
          },
          integrations: [
            rm({ onerror: !0, onunhandledrejection: !0 }),
            rt({
              console: !0,
              dom: !0,
              fetch: !0,
              history: !0,
              sentry: !0,
              xhr: !0,
            }),
            r3(),
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
          t3("buildNumber", "540902"),
          t3("builtAt", String("1778182802975"));
        let e = window.GLOBAL_ENV.SENTRY_TAGS;
        if (null != e && "object" == typeof e) for (let t in e) t3(t, e[t]);
        return T;
      })();
    })();
})();
//# sourceMappingURL=sentry.f59226527b4005dd.js.map
