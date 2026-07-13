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
          i = o(56833),
          a = o(883950),
          l = o(871186),
          d = o(363630);
        let s = ["oppobrowser", "realmebrowser", "heytapbrowser"],
          u = (function (e) {
            let { maxBudgetMinute: r, maxBudgetHour: o } = e,
              t = { slot: 0, budgetUsed: 0 },
              n = { slot: 0, budgetUsed: 0 };
            return () => {
              let e = Date.now(),
                i = Math.round(e / 1e3 / 60),
                a = Math.round(e / 1e3 / 60 / 60);
              return (
                t.slot !== i && ((t.slot = i), (t.budgetUsed = 0)),
                n.slot !== a && ((n.slot = a), (n.budgetUsed = 0)),
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
            release:
              "2026-07-13-3df4bdb784357f5655e38823330689144c50ab1f-discord_web",
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
              i.F({
                console: !0,
                dom: !0,
                fetch: !0,
                history: !0,
                sentry: !0,
                xhr: !0,
              }),
              a.S(),
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
            l.NA("buildNumber", "577023"),
            l.NA("builtAt", String("1783927164263"));
          let e = window.GLOBAL_ENV.SENTRY_TAGS;
          if (null != e && "object" == typeof e) for (let r in e) l.NA(r, e[r]);
          return d;
        })();
      },
    },
    i = {};
  function a(e) {
    var r = i[e];
    if (void 0 !== r) return r.exports;
    var o = (i[e] = { exports: {} });
    return n[e](o, o.exports, a), o.exports;
  }
  (a.m = n),
    (a.d = (e, r) => {
      for (var o in r)
        a.o(r, o) &&
          !a.o(e, o) &&
          Object.defineProperty(e, o, { enumerable: !0, get: r[o] });
    }),
    (a.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
    (a.r = (e) => {
      "u" > typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (e = []),
    (a.O = (r, o, t, n) => {
      if (o) {
        n = n || 0;
        for (var i = e.length; i > 0 && e[i - 1][2] > n; i--) e[i] = e[i - 1];
        e[i] = [o, t, n];
        return;
      }
      for (var l = 1 / 0, i = 0; i < e.length; i++) {
        for (var [o, t, n] = e[i], d = !0, s = 0; s < o.length; s++)
          (!1 & n || l >= n) && Object.keys(a.O).every((e) => a.O[e](o[s]))
            ? o.splice(s--, 1)
            : ((d = !1), n < l && (l = n));
        if (d) {
          e.splice(i--, 1);
          var u = t();
          void 0 !== u && (r = u);
        }
      }
      return r;
    }),
    (a.rv = () => "1.7.11"),
    (r = { 44771: 0 }),
    (a.O.j = (e) => 0 === r[e]),
    (o = (e, o) => {
      var t,
        n,
        [i, l, d] = o,
        s = 0;
      if (i.some((e) => 0 !== r[e])) {
        for (t in l) a.o(l, t) && (a.m[t] = l[t]);
        if (d) var u = d(a);
      }
      for (e && e(o); s < i.length; s++)
        (n = i[s]), a.o(r, n) && r[n] && r[n][0](), (r[n] = 0);
      return a.O(u);
    }),
    (t = this.webpackChunkdiscord_app =
      this.webpackChunkdiscord_app || []).forEach(o.bind(null, 0)),
    (t.push = o.bind(null, t.push.bind(t))),
    (a.ruid = "bundler=rspack@1.7.11");
  var l = a.O(void 0, ["48255", "64310", "56707"], () => a(219249));
  l = a.O(l);
})();
//# sourceMappingURL=sentry.410781e70fe5b6a9.js.map
