(() => {
  "use strict";
  var e,
    r,
    o,
    t,
    n = {
      219249(e, r, o) {
        var t = o(501661),
          n = o(774099),
          a = o(56833),
          i = o(883950),
          d = o(871186),
          l = o(363630);
        let s = ["oppobrowser", "realmebrowser", "heytapbrowser"],
          u = (function (e) {
            let { maxBudgetMinute: r, maxBudgetHour: o } = e,
              t = { slot: 0, budgetUsed: 0 },
              n = { slot: 0, budgetUsed: 0 };
            return () => {
              let e = Date.now(),
                a = Math.round(e / 1e3 / 60),
                i = Math.round(e / 1e3 / 60 / 60);
              return (
                t.slot !== a && ((t.slot = a), (t.budgetUsed = 0)),
                n.slot !== i && ((n.slot = i), (n.budgetUsed = 0)),
                !!(t.budgetUsed < r) &&
                  (t.budgetUsed++, !!(n.budgetUsed < o)) &&
                  (n.budgetUsed++, !0)
              );
            };
          })({ maxBudgetMinute: 1, maxBudgetHour: 3 });
        window.DiscordSentry = (function () {
          t.Ts({
            tunnel: "/error-reporting-proxy/web",
            dsn: "https://fa97a90475514c03a42f80cd36d147c4@sentry.io/140984",
            autoSessionTracking: !1,
            environment: window.GLOBAL_ENV.RELEASE_CHANNEL,
            release: "discord_web-d7de90a85a6b3e3bb21ce1eaa3e9e8d3fa6d27d6",
            beforeSend: function (e, r) {
              let o;
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
                s.some(
                  (e) =>
                    window.navigator.appVersion.toLowerCase().indexOf(e) >= 0,
                )
              ) &&
                null == (o = window).jQuery &&
                null == o.$ &&
                null == o.BetterDiscord &&
                null == o.BdApi &&
                null == o.rambox &&
                null == o.Vencord &&
                null == o.VencordNative &&
                "Aborted" !== e.message &&
                "cancel captcha" !== e.message &&
                u()
                ? e
                : null;
            },
            integrations: [
              n.L({ onerror: !0, onunhandledrejection: !0 }),
              a.F({
                console: !0,
                dom: !0,
                fetch: !0,
                history: !0,
                sentry: !0,
                xhr: !0,
              }),
              i.S(),
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
            d.NA("buildNumber", "579459"),
            d.NA("builtAt", String("1784215353598"));
          let e = window.GLOBAL_ENV.SENTRY_TAGS;
          if (null != e && "object" == typeof e) for (let r in e) d.NA(r, e[r]);
          return l;
        })();
      },
    },
    a = {};
  function i(e) {
    var r = a[e];
    if (void 0 !== r) return r.exports;
    var o = (a[e] = { exports: {} });
    return n[e](o, o.exports, i), o.exports;
  }
  (i.m = n),
    (i.d = (e, r) => {
      for (var o in r)
        i.o(r, o) &&
          !i.o(e, o) &&
          Object.defineProperty(e, o, { enumerable: !0, get: r[o] });
    }),
    (i.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
    (i.r = (e) => {
      "u" > typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (e = []),
    (i.O = (r, o, t, n) => {
      if (o) {
        n = n || 0;
        for (var a = e.length; a > 0 && e[a - 1][2] > n; a--) e[a] = e[a - 1];
        e[a] = [o, t, n];
        return;
      }
      for (var d = 1 / 0, a = 0; a < e.length; a++) {
        for (var [o, t, n] = e[a], l = !0, s = 0; s < o.length; s++)
          (!1 & n || d >= n) && Object.keys(i.O).every((e) => i.O[e](o[s]))
            ? o.splice(s--, 1)
            : ((l = !1), n < d && (d = n));
        if (l) {
          e.splice(a--, 1);
          var u = t();
          void 0 !== u && (r = u);
        }
      }
      return r;
    }),
    (i.rv = () => "1.7.11"),
    (r = { 44771: 0 }),
    (i.O.j = (e) => 0 === r[e]),
    (o = (e, o) => {
      var t,
        n,
        [a, d, l] = o,
        s = 0;
      if (a.some((e) => 0 !== r[e])) {
        for (t in d) i.o(d, t) && (i.m[t] = d[t]);
        if (l) var u = l(i);
      }
      for (e && e(o); s < a.length; s++)
        (n = a[s]), i.o(r, n) && r[n] && r[n][0](), (r[n] = 0);
      return i.O(u);
    }),
    (t = this.webpackChunkdiscord_app =
      this.webpackChunkdiscord_app || []).forEach(o.bind(null, 0)),
    (t.push = o.bind(null, t.push.bind(t))),
    (i.ruid = "bundler=rspack@1.7.11");
  var d = i.O(void 0, ["48255", "64310", "56707"], () => i(219249));
  d = i.O(d);
})();
//# sourceMappingURL=sentry.4e86e397a820da38.js.map
