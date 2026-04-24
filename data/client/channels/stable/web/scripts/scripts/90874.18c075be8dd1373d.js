"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["90874"],
  {
    630449(e, t, r) {
      r.d(t, { KU: () => a, rm: () => o });
      var n = r(657829),
        i = r(75109);
      function o() {
        let e = (0, i.E)();
        return (0, n.h)(e).getIsolationScope();
      }
      function a() {
        let e;
        return ((e = (0, i.E)()), (0, n.h)(e).getCurrentScope()).getClient();
      }
    },
    680753(e, t, r) {
      r.d(t, { qO: () => o });
      var n = r(83220),
        i = r(231577);
      function o(e, t = {}) {
        if (
          (t.user &&
            (!e.ipAddress &&
              t.user.ip_address &&
              (e.ipAddress = t.user.ip_address),
            e.did ||
              t.did ||
              (e.did = t.user.id || t.user.email || t.user.username)),
          (e.timestamp = t.timestamp || (0, n.zf)()),
          t.abnormal_mechanism && (e.abnormal_mechanism = t.abnormal_mechanism),
          t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration),
          t.sid && (e.sid = 32 === t.sid.length ? t.sid : (0, i.eJ)()),
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
    },
    875565(e, t, r) {
      r.d(t, { Qd: () => i, Qg: () => o });
      let n = Object.prototype.toString;
      function i(e) {
        return "[object Object]" === n.call(e);
      }
      function o(e) {
        return !!(e && e.then && "function" == typeof e.then);
      }
    },
    272469(e, t, r) {
      r.d(t, { pq: () => s, vF: () => d });
      var n = r(780755),
        i = r(978862);
      let o = ["debug", "info", "warn", "error", "log", "assert", "trace"],
        a = {};
      function s(e) {
        if (!("console" in i.O)) return e();
        let t = i.O.console,
          r = {},
          n = Object.keys(a);
        n.forEach((e) => {
          let n = a[e];
          (r[e] = t[e]), (t[e] = n);
        });
        try {
          return e();
        } finally {
          n.forEach((e) => {
            t[e] = r[e];
          });
        }
      }
      let d = (0, i.B)("logger", function () {
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
          n.T
            ? o.forEach((r) => {
                t[r] = (...t) => {
                  e &&
                    s(() => {
                      i.O.console[r](`Sentry Logger [${r}]:`, ...t);
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
    231577(e, t, r) {
      r.d(t, { eJ: () => i });
      var n = r(978862);
      function i() {
        let e = n.O,
          t = e.crypto || e.msCrypto,
          r = () => 16 * Math.random();
        try {
          if (t && t.randomUUID) return t.randomUUID().replace(/-/g, "");
          t &&
            t.getRandomValues &&
            (r = () => {
              let e = new Uint8Array(1);
              return t.getRandomValues(e), e[0];
            });
        } catch (e) {}
        return "10000000100040008000100000000000".replace(/[018]/g, (e) =>
          (e ^ ((15 & r()) >> (e / 4))).toString(16),
        );
      }
    },
    690094(e, t, r) {
      r.d(t, { my: () => o });
      var n = r(780755),
        i = r(272469);
      function o(e, t, r) {
        try {
          Object.defineProperty(e, t, {
            value: r,
            writable: !0,
            configurable: !0,
          });
        } catch (r) {
          n.T &&
            i.vF.log(
              `Failed to add non-enumerable property "${t}" to object`,
              e,
            );
        }
      }
    },
    83220(e, t, r) {
      r.d(t, { lu: () => i, zf: () => o });
      var n = r(978862);
      function i() {
        return Date.now() / 1e3;
      }
      let o = (function () {
        let { performance: e } = n.O;
        if (!e || !e.now) return i;
        let t = Date.now() - e.now(),
          r = void 0 == e.timeOrigin ? t : e.timeOrigin;
        return () => (r + e.now()) / 1e3;
      })();
      (() => {
        let { performance: e } = n.O;
        if (!e || !e.now) return;
        let t = e.now(),
          r = Date.now(),
          i = e.timeOrigin ? Math.abs(e.timeOrigin + t - r) : 36e5,
          o = e.timing && e.timing.navigationStart,
          a = "number" == typeof o ? Math.abs(o + t - r) : 36e5;
        if ((i < 36e5 || a < 36e5) && i <= a) return e.timeOrigin;
      })();
    },
  },
]);
//# sourceMappingURL=90874.18c075be8dd1373d.js.map
