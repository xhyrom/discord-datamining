(() => {
  "use strict";
  var e,
    t,
    r,
    n,
    o = {
      359553(e, t, r) {
        var n = r(501661),
          o = r(774099),
          a = r(56833),
          l = r(883950),
          i = r(871186),
          s = r(363630);
        r(321073);
        var u = r(333405),
          d = r.n(u);
        class c {
          min;
          max;
          jitter;
          _current;
          _timeoutId;
          _callback;
          _fails = 0;
          constructor(e = 500, t = null, r = !0) {
            if (e <= 0)
              throw Error(
                "Backoff min value must be greater than zero or backoff will never back-off.",
              );
            (this.min = e),
              (this.max = null != t ? t : 10 * e),
              (this.jitter = r),
              (this._current = e);
          }
          get fails() {
            return this._fails;
          }
          get current() {
            return this._current;
          }
          get pending() {
            return null != this._timeoutId;
          }
          succeed() {
            this.cancel(), (this._fails = 0), (this._current = this.min);
          }
          fail(e, t) {
            this._fails += 1;
            let r = 2 * this._current;
            this.jitter && (r *= Math.random()),
              (this._current = Math.min(this._current + r, this.max));
            let n = null != t && t > this._current ? t : this._current;
            if (null != e) {
              if (null != this._timeoutId)
                if (this._callback !== e)
                  throw Error("callback already pending");
                else this.cancel();
              (this._callback = e),
                (this._timeoutId = setTimeout(() => {
                  try {
                    null != e && e();
                  } finally {
                    this.cancel();
                  }
                }, n));
            }
            return n;
          }
          cancel() {
            (this._callback = null),
              null != this._timeoutId &&
                (clearTimeout(this._timeoutId), (this._timeoutId = null));
          }
        }
        function f(e) {
          for (
            var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1;
            n < t;
            n++
          )
            r[n - 1] = arguments[n];
        }
        let h = () => {},
          b = () => {};
        class g {
          name;
          nativeLoggerEnabled;
          constructor(e = "default") {
            (this.name = e), (this.nativeLoggerEnabled = !1);
          }
          enableNativeLogger(e) {
            this.nativeLoggerEnabled = e;
          }
          logDangerously = (() => {
            var e = this;
            return function (t) {
              for (
                var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), o = 1;
                o < r;
                o++
              )
                n[o - 1] = arguments[o];
              h(e.name, "log", t, ...n),
                e.nativeLoggerEnabled && b?.(e.name, "log", t, ...n);
            };
          })();
          log = (() => {
            var e = this;
            return function (t) {
              for (
                var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), o = 1;
                o < r;
                o++
              )
                n[o - 1] = arguments[o];
              f(t, ...n),
                h(e.name, "log", t, ...n),
                e.nativeLoggerEnabled && b?.(e.name, "log", t, ...n);
            };
          })();
          verboseDangerously = (() => {
            var e = this;
            return function (t) {
              for (
                var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), o = 1;
                o < r;
                o++
              )
                n[o - 1] = arguments[o];
              h(e.name, "debug", t, ...n),
                e.nativeLoggerEnabled && b?.(e.name, "debug", t, ...n);
            };
          })();
          verbose = (() => {
            var e = this;
            return function (t) {
              for (
                var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), o = 1;
                o < r;
                o++
              )
                n[o - 1] = arguments[o];
              f(t, ...n),
                h(e.name, "debug", t, ...n),
                e.nativeLoggerEnabled && b?.(e.name, "debug", t, ...n);
            };
          })();
          info = (() => {
            var e = this;
            return function (t) {
              for (
                var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), o = 1;
                o < r;
                o++
              )
                n[o - 1] = arguments[o];
              f(t, ...n),
                h(e.name, "info", t, ...n),
                e.nativeLoggerEnabled && b?.(e.name, "info", t, ...n);
            };
          })();
          warn = (() => {
            var e = this;
            return function (t) {
              for (
                var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), o = 1;
                o < r;
                o++
              )
                n[o - 1] = arguments[o];
              f(t, ...n),
                h(e.name, "warn", t, ...n),
                e.nativeLoggerEnabled && b?.(e.name, "warn", t, ...n);
            };
          })();
          error = (() => {
            var e = this;
            return function (t) {
              for (
                var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), o = 1;
                o < r;
                o++
              )
                n[o - 1] = arguments[o];
              f(t, ...n),
                h(e.name, "error", t, ...n),
                e.nativeLoggerEnabled && b?.(e.name, "error", t, ...n);
            };
          })();
          trace = (() => {
            var e = this;
            return function (t) {
              for (
                var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), o = 1;
                o < r;
                o++
              )
                n[o - 1] = arguments[o];
              h(e.name, "trace", t, ...n),
                e.nativeLoggerEnabled && b?.(e.name, "trace", t, ...n);
            };
          })();
          time = (e, t) => {
            let r = Date.now(),
              n = t();
            return this.log(e, Date.now() - r), n;
          };
          timeAsync = async (e, t) => {
            let r = Date.now(),
              n = await t();
            return this.log(e, `${Date.now() - r}ms`), n;
          };
          fileOnly = (() => {
            var e = this;
            return function (t) {
              for (
                var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), o = 1;
                o < r;
                o++
              )
                n[o - 1] = arguments[o];
              h(e.name, "file-only", t, ...n),
                e.nativeLoggerEnabled && b?.(e.name, "file-only", t, ...n);
            };
          })();
        }
        let m = "_errors";
        var p = r(264572).Buffer;
        let y = new g("HTTPUtils"),
          v = new Set([502, 504, 507, 598, 599, 522, 523, 524]),
          E = new Set([429, 503]);
        class w extends Error {
          method;
          url;
          ok;
          status;
          body;
          text;
          headers;
          retryAfter;
          constructor(
            {
              method: e,
              url: t,
              ok: r,
              status: n,
              body: o,
              text: a,
              headers: l,
              retryAfter: i,
            },
            ...s
          ) {
            const u = t.replace(/\d+/g, "xxx");
            super(`${e.toUpperCase()} ${u} [${n}]`, ...s),
              (this.name = "HTTPResponseError"),
              (this.method = e),
              (this.url = t),
              (this.ok = r),
              (this.status = n),
              (this.body = o),
              (this.text = a),
              (this.headers = l),
              (this.retryAfter = i);
          }
        }
        function _(e, t) {
          let r = e?.["retry-after"] ?? e?.["Retry-After"];
          if ("string" == typeof r) {
            let e = parseInt(r, 10);
            if (Number.isFinite(e) && e > 0) return e;
          }
          if (null != t && "object" == typeof t) {
            let e = t.retry_after;
            if ("number" == typeof e && Number.isFinite(e) && e > 0) return e;
          }
        }
        function x(e, t, r, n, o) {
          if (t.signal?.aborted) {
            let e = Object.assign(Error("Request aborted"), {
              code: "ABORTED",
            });
            L(t), n(e), null != o && o({ ok: !1, hasErr: !0, err: e });
            return;
          }
          let a = d()[e](t.url);
          if (
            (null != t.onRequestCreated && t.onRequestCreated(a),
            null != t.query)
          ) {
            let e = t.query;
            if ("object" == typeof e) {
              let t = { ...e };
              Object.keys(t).map((e) => {
                null == t[e] && delete t[e];
              }),
                (e = t);
            }
            a.query(e);
          }
          if (
            (t.body && a.send(t.body),
            null != t.headers && a.set(t.headers),
            !0 === t.withCredentials && a.withCredentials(),
            null != t.reason &&
              a.set("X-Audit-Log-Reason", encodeURIComponent(t.reason)),
            t.attachments?.forEach((e) => {
              a.attach(e.name, e.file, e.filename);
            }),
            t.fields?.forEach((e) => {
              a.field(e.name, e.value);
            }),
            null != t.context)
          ) {
            let e = (function (e) {
              try {
                return p.from(JSON.stringify(e)).toString("base64");
              } catch (e) {
                return null;
              }
            })(t.context);
            null != e && a.set("X-Context-Properties", e);
          }
          null != t.retried &&
            0 !== t.retried &&
            a.set("X-Failed-Requests", `${t.retried}`),
            null != t.timeout && 0 !== t.timeout && a.timeout(t.timeout),
            t.binary && a.responseType("blob"),
            null != t.onRequestProgress &&
              a.on("progress", (e) => {
                t.onRequestProgress?.(e);
              });
          let l = () => {
              (t.backoff = null != t.backoff ? t.backoff : new c()),
                (t.retried = (null != t.retried ? t.retried : 0) + 1),
                t.backoff.fail(() => S(t.url).then(() => x(e, t, r, n, o)));
            },
            i = O?.prepareRequest?.(a);
          a.ok((e) => null != e.status),
            a.then(
              (a) => {
                if (null != t.retries && t.retries-- > 0 && v.has(a.status))
                  return l();
                let s = {
                  ok: a.ok,
                  headers: a.headers,
                  body: a.body,
                  text: a.text,
                  status: a.status,
                  retryAfter: _(a.headers, a.body),
                };
                L(t, s);
                let u = !1,
                  d = (a, l) => {
                    let i = {
                      ...t,
                      headers: { ...t.headers, ...a },
                      interceptResponse: l,
                    };
                    (u = !0), x(e, i, r, n, o);
                  },
                  c = (e) => {
                    u || (n(e), o?.({ ok: !1, hasErr: !0, err: e }));
                  };
                if (
                  t?.interceptResponse?.(a, d, c) !== !0 &&
                  O?.interceptResponse?.(a, d, c, i) !== !0
                ) {
                  if (a.ok) r(s);
                  else {
                    if (t.oldFormErrors && s?.body?.code === 50035) {
                      let { errors: e } = s.body;
                      null != e &&
                        (s.body = (function (e) {
                          let t = {};
                          for (let r in e) {
                            let n = e[r];
                            if (
                              null == n ||
                              (r === m &&
                                (t._misc = e[r].map((e) => e.message)),
                              Array.isArray(n))
                            )
                              continue;
                            let o = n[m];
                            null != o
                              ? (t[r] = o.map((e) => e.message))
                              : (t[r] = [Object.keys(n)[0]]);
                          }
                          return t;
                        })(e));
                    }
                    t.rejectWithError
                      ? n(
                          new w({
                            method: e,
                            url: t.url,
                            ok: s.ok,
                            status: s.status,
                            body: s.body,
                            text: s.text,
                            headers: s.headers,
                            retryAfter: s.retryAfter,
                          }),
                        )
                      : n(s);
                  }
                  null != o && o({ hasErr: !1, ...s });
                }
              },
              (e) => {
                null != t.retries && t.retries-- > 0 && "ABORTED" !== e.code
                  ? l()
                  : (L(t),
                    n(e),
                    null != o && o({ ok: !1, hasErr: !0, err: e }));
              },
            ),
            t.signal?.aborted
              ? a.abort()
              : t.signal?.addEventListener("abort", () => a.abort(), {
                  once: !0,
                });
        }
        let k = new Map();
        function A(e) {
          let t = k.get(e);
          if (null == t)
            return void y.verbose(
              "rateLimitExpirationHandler: rate limit for",
              e,
              "expired, but record was already removed",
            );
          let r = t.queue.shift();
          if (null == r) {
            y.verbose("rateLimitExpirationHandler: removing key for", e),
              k.delete(e);
            return;
          }
          y.verbose(
            "rateLimitExpirationHandler: moving to next record for ",
            e,
          ),
            r();
        }
        function L(e, t) {
          var r;
          let n = k.get(e.url);
          if (null != t && ((r = t.status), E.has(r))) {
            let r = n?.backoff ?? new c(1e3, 6e4),
              o = 1e3 * (_(t.headers, t.body) ?? 5),
              a = r.fail(void 0, o),
              l = Date.now() + a;
            if (null != n && n.retryAfterTimestamp >= l)
              return void y.verbose(
                "cleanupRequestEntry: already has rate limit for ",
                e.url,
              );
            null != n &&
              (y.verbose(
                "cleanupRequestEntry: extending rate limit for ",
                e.url,
              ),
              clearTimeout(n.timeoutId)),
              y.verbose(
                `cleanupRequestEntry: rate limit for ${e.url} retry after ${a}ms`,
              );
            let i = setTimeout(() => A(e.url), a);
            k.set(e.url, {
              queue: n?.queue ?? [],
              retryAfterTimestamp: l,
              latestErrorMessage: String(t.body?.message),
              status: t.status,
              timeoutId: i,
              backoff: r,
            });
          } else
            null != n &&
              n.retryAfterTimestamp < Date.now() &&
              (y.verbose(
                "cleanupRequestEntry: rate limit for ",
                e.url,
                "expired",
              ),
              A(e.url));
        }
        function R(e, t, r) {
          return new Promise((n, o) => {
            "string" == typeof t && (t = { url: t, rejectWithError: !1 });
            let a = k.get(t.url);
            if (null != a && t.failImmediatelyWhenRateLimited) {
              let e, t;
              return (
                (e = Math.round((a.retryAfterTimestamp - Date.now()) / 1e3)),
                void (o(
                  (t = {
                    status: a.status,
                    body: { message: a.latestErrorMessage, retry_after: e },
                  }),
                ),
                null != r &&
                  r({
                    ok: !0,
                    hasErr: !1,
                    status: t.status,
                    body: t.body,
                    text: "",
                    headers: {},
                  }))
              );
            }
            null != a
              ? (y.verbose("makeRequest: queueing request for ", t.url),
                a.queue.push(x.bind(null, e, t, n, o, r)))
              : x(e, t, n, o, r);
          });
        }
        R.bind(null, "get"),
          R.bind(null, "post"),
          R.bind(null, "put"),
          R.bind(null, "patch"),
          R.bind(null, "del"),
          r.g.isServerRendering;
        let O = null,
          S = () => Promise.resolve(),
          T = ["oppobrowser", "realmebrowser", "heytapbrowser"],
          j = (function (e) {
            let { maxBudgetMinute: t, maxBudgetHour: r } = e,
              n = { slot: 0, budgetUsed: 0 },
              o = { slot: 0, budgetUsed: 0 };
            return () => {
              let e = Date.now(),
                a = Math.round(e / 1e3 / 60),
                l = Math.round(e / 1e3 / 60 / 60);
              return (
                n.slot !== a && ((n.slot = a), (n.budgetUsed = 0)),
                o.slot !== l && ((o.slot = l), (o.budgetUsed = 0)),
                !!(n.budgetUsed < t) &&
                  (n.budgetUsed++, !!(o.budgetUsed < r)) &&
                  (o.budgetUsed++, !0)
              );
            };
          })({ maxBudgetMinute: 1, maxBudgetHour: 3 });
        window.DiscordSentry = (function () {
          n.Ts({
            tunnel: "/error-reporting-proxy/web",
            dsn: "https://fa97a90475514c03a42f80cd36d147c4@sentry.io/140984",
            autoSessionTracking: !1,
            environment: window.GLOBAL_ENV.RELEASE_CHANNEL,
            release: "discord_web-44cabb5a00836f02f17e9aa5d8548fdc004537b1",
            beforeSend: function (e, t) {
              var r;
              let n;
              if (
                (null != e.exception &&
                  null != e.exception.values &&
                  e.exception.values.every(
                    (e) =>
                      null == e.stacktrace ||
                      (null != e.stacktrace.frames &&
                        1 === e.stacktrace.frames.length),
                  ) &&
                  "canary" !== window.GLOBAL_ENV.RELEASE_CHANNEL) ||
                T.some(
                  (e) =>
                    window.navigator.appVersion.toLowerCase().indexOf(e) >= 0,
                ) ||
                null != (n = window).jQuery ||
                null != n.$ ||
                null != n.BetterDiscord ||
                null != n.BdApi ||
                null != n.rambox ||
                null != n.Vencord ||
                null != n.VencordNative ||
                "Aborted" === (r = e).message ||
                "cancel captcha" === r.message ||
                !j()
              )
                return null;
              if (null == e.fingerprint) {
                let r,
                  n =
                    (r = t?.originalException) instanceof w
                      ? [
                          "HTTPResponseError",
                          r.method.toUpperCase(),
                          r.url.replace(/\d+/g, "xxx"),
                          String(r.status),
                        ]
                      : null;
                null != n && (e.fingerprint = n);
              }
              return e;
            },
            integrations: [
              o.L({ onerror: !0, onunhandledrejection: !0 }),
              a.F({
                console: !0,
                dom: !0,
                fetch: !0,
                history: !0,
                sentry: !0,
                xhr: !0,
              }),
              l.S(),
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
            i.NA("buildNumber", "590769"),
            i.NA("builtAt", String("1786457423989"));
          let e = window.GLOBAL_ENV.SENTRY_TAGS;
          if (null != e && "object" == typeof e) for (let t in e) i.NA(t, e[t]);
          return s;
        })();
      },
      234629() {},
      159093() {},
    },
    a = {};
  function l(e) {
    var t = a[e];
    if (void 0 !== t) return t.exports;
    var r = (a[e] = { exports: {} });
    return o[e].call(r.exports, r, r.exports, l), r.exports;
  }
  (l.m = o),
    (l.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return l.d(t, { a: t }), t;
    }),
    (l.d = (e, t) => {
      for (var r in t)
        l.o(t, r) &&
          !l.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (l.g = (() => {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (l.r = (e) => {
      "u" > typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (e = []),
    (l.O = (t, r, n, o) => {
      if (r) {
        o = o || 0;
        for (var a = e.length; a > 0 && e[a - 1][2] > o; a--) e[a] = e[a - 1];
        e[a] = [r, n, o];
        return;
      }
      for (var i = 1 / 0, a = 0; a < e.length; a++) {
        for (var [r, n, o] = e[a], s = !0, u = 0; u < r.length; u++)
          (!1 & o || i >= o) && Object.keys(l.O).every((e) => l.O[e](r[u]))
            ? r.splice(u--, 1)
            : ((s = !1), o < i && (i = o));
        if (s) {
          e.splice(a--, 1);
          var d = n();
          void 0 !== d && (t = d);
        }
      }
      return t;
    }),
    (l.rv = () => "1.7.11"),
    (t = { 44771: 0 }),
    (l.O.j = (e) => 0 === t[e]),
    (r = (e, r) => {
      var n,
        o,
        [a, i, s] = r,
        u = 0;
      if (a.some((e) => 0 !== t[e])) {
        for (n in i) l.o(i, n) && (l.m[n] = i[n]);
        if (s) var d = s(l);
      }
      for (e && e(r); u < a.length; u++)
        (o = a[u]), l.o(t, o) && t[o] && t[o][0](), (t[o] = 0);
      return l.O(d);
    }),
    (n = this.webpackChunkdiscord_app =
      this.webpackChunkdiscord_app || []).forEach(r.bind(null, 0)),
    (n.push = r.bind(null, n.push.bind(n))),
    (l.ruid = "bundler=rspack@1.7.11");
  var i = l.O(
    void 0,
    ["32509", "70644", "52082", "33820", "64310", "24159"],
    () => l(359553),
  );
  i = l.O(i);
})();
//# sourceMappingURL=sentry.0e3e69c2313a696d.js.map
