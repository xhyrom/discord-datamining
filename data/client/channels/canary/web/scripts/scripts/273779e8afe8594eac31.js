"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["84605"],
  {
    833873: function (t, e, n) {
      n.d(e, {
        G: function () {
          return s;
        },
      });
      var r = n(356442),
        i = n(117654);
      function s(t) {
        let e = (0, r.q)(t);
        return e.acs ? e.acs : (0, i.O)();
      }
    },
    117654: function (t, e, n) {
      n.d(e, {
        O: function () {
          return d;
        },
      });
      var r = n(573736),
        i = n(592014),
        s = n(307854),
        o = n(356442);
      class u {
        constructor(t, e) {
          let n, r;
          (n = t ? t : new s.s()),
            (r = e ? e : new s.s()),
            (this._stack = [{ scope: n }]),
            (this._isolationScope = r);
        }
        withScope(t) {
          let e;
          let n = this._pushScope();
          try {
            e = t(n);
          } catch (t) {
            throw (this._popScope(), t);
          }
          return (0, r.J8)(e)
            ? e.then(
                (t) => (this._popScope(), t),
                (t) => {
                  throw (this._popScope(), t);
                },
              )
            : (this._popScope(), e);
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
          let t = this.getScope().clone();
          return this._stack.push({ client: this.getClient(), scope: t }), t;
        }
        _popScope() {
          return !(this._stack.length <= 1) && !!this._stack.pop();
        }
      }
      function c() {
        let t = (0, o.c)(),
          e = (0, o.q)(t);
        return (e.stack = e.stack || new u((0, i.X)(), (0, i.T)()));
      }
      function a(t) {
        return c().withScope(t);
      }
      function h(t, e) {
        let n = c();
        return n.withScope(() => ((n.getStackTop().scope = t), e(t)));
      }
      function _(t) {
        return c().withScope(() => t(c().getIsolationScope()));
      }
      function d() {
        return {
          withIsolationScope: _,
          withScope: a,
          withSetScope: h,
          withSetIsolationScope: (t, e) => _(e),
          getCurrentScope: () => c().getScope(),
          getIsolationScope: () => c().getIsolationScope(),
        };
      }
    },
    572299: function (t, e, n) {
      n.d(e, {
        n: function () {
          return o;
        },
      });
      var r = n(101284),
        i = n(622916),
        s = n(263449);
      function o(t, e) {
        let n = (0, s.s3)(),
          o = (0, s.aF)();
        if (!n) return;
        let { beforeBreadcrumb: u = null, maxBreadcrumbs: c = 100 } =
          n.getOptions();
        if (c <= 0) return;
        let a = { timestamp: (0, r.yW)(), ...t },
          h = u ? (0, i.Cf)(() => u(a, e)) : a;
        null !== h &&
          (n.emit && n.emit("beforeAddBreadcrumb", h, e),
          o.addBreadcrumb(h, c));
      }
    },
    356442: function (t, e, n) {
      n.d(e, {
        c: function () {
          return s;
        },
        q: function () {
          return o;
        },
      });
      var r = n(899517),
        i = n(452896);
      function s() {
        return o(r.n), r.n;
      }
      function o(t) {
        let e = (t.__SENTRY__ = t.__SENTRY__ || {});
        return (e.version = e.version || i.J), (e[i.J] = e[i.J] || {});
      }
    },
    263449: function (t, e, n) {
      n.d(e, {
        aF: function () {
          return s;
        },
        s3: function () {
          return o;
        },
      });
      var r = n(833873),
        i = n(356442);
      function s() {
        let t = (0, i.c)();
        return (0, r.G)(t).getIsolationScope();
      }
      function o() {
        return (function () {
          let t = (0, i.c)();
          return (0, r.G)(t).getCurrentScope();
        })().getClient();
      }
    },
    592014: function (t, e, n) {
      n.d(e, {
        T: function () {
          return o;
        },
        X: function () {
          return s;
        },
      });
      var r = n(899517),
        i = n(307854);
      function s() {
        return (0, r.Y)("defaultCurrentScope", () => new i.s());
      }
      function o() {
        return (0, r.Y)("defaultIsolationScope", () => new i.s());
      }
    },
    307854: function (t, e, n) {
      n.d(e, {
        s: function () {
          return _;
        },
      });
      var r = n(731889),
        i = n(573736),
        s = n(101284),
        o = n(394798),
        u = n(622916),
        c = n(112797),
        a = n(99342);
      class h {
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
            (this._propagationContext = (0, r.Q)());
        }
        clone() {
          let t = new h();
          return (
            (t._breadcrumbs = [...this._breadcrumbs]),
            (t._tags = { ...this._tags }),
            (t._extra = { ...this._extra }),
            (t._contexts = { ...this._contexts }),
            (t._user = this._user),
            (t._level = this._level),
            (t._session = this._session),
            (t._transactionName = this._transactionName),
            (t._fingerprint = this._fingerprint),
            (t._eventProcessors = [...this._eventProcessors]),
            (t._requestSession = this._requestSession),
            (t._attachments = [...this._attachments]),
            (t._sdkProcessingMetadata = { ...this._sdkProcessingMetadata }),
            (t._propagationContext = { ...this._propagationContext }),
            (t._client = this._client),
            (t._lastEventId = this._lastEventId),
            (0, a.D)(t, (0, a.Y)(this)),
            t
          );
        }
        setClient(t) {
          this._client = t;
        }
        setLastEventId(t) {
          this._lastEventId = t;
        }
        getClient() {
          return this._client;
        }
        lastEventId() {
          return this._lastEventId;
        }
        addScopeListener(t) {
          this._scopeListeners.push(t);
        }
        addEventProcessor(t) {
          return this._eventProcessors.push(t), this;
        }
        setUser(t) {
          return (
            (this._user = t || {
              email: void 0,
              id: void 0,
              ip_address: void 0,
              username: void 0,
            }),
            this._session && (0, c.CT)(this._session, { user: t }),
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
        setRequestSession(t) {
          return (this._requestSession = t), this;
        }
        setTags(t) {
          return (
            (this._tags = { ...this._tags, ...t }),
            this._notifyScopeListeners(),
            this
          );
        }
        setTag(t, e) {
          return (
            (this._tags = { ...this._tags, [t]: e }),
            this._notifyScopeListeners(),
            this
          );
        }
        setExtras(t) {
          return (
            (this._extra = { ...this._extra, ...t }),
            this._notifyScopeListeners(),
            this
          );
        }
        setExtra(t, e) {
          return (
            (this._extra = { ...this._extra, [t]: e }),
            this._notifyScopeListeners(),
            this
          );
        }
        setFingerprint(t) {
          return (this._fingerprint = t), this._notifyScopeListeners(), this;
        }
        setLevel(t) {
          return (this._level = t), this._notifyScopeListeners(), this;
        }
        setTransactionName(t) {
          return (
            (this._transactionName = t), this._notifyScopeListeners(), this
          );
        }
        setContext(t, e) {
          return (
            null === e ? delete this._contexts[t] : (this._contexts[t] = e),
            this._notifyScopeListeners(),
            this
          );
        }
        setSession(t) {
          return (
            t ? (this._session = t) : delete this._session,
            this._notifyScopeListeners(),
            this
          );
        }
        getSession() {
          return this._session;
        }
        update(t) {
          if (!t) return this;
          let e = "function" == typeof t ? t(this) : t,
            [n, r] =
              e instanceof _
                ? [e.getScopeData(), e.getRequestSession()]
                : (0, i.PO)(e)
                  ? [t, t.requestSession]
                  : [],
            {
              tags: s,
              extra: o,
              user: u,
              contexts: c,
              level: a,
              fingerprint: h = [],
              propagationContext: d,
            } = n || {};
          return (
            (this._tags = { ...this._tags, ...s }),
            (this._extra = { ...this._extra, ...o }),
            (this._contexts = { ...this._contexts, ...c }),
            u && Object.keys(u).length && (this._user = u),
            a && (this._level = a),
            h.length && (this._fingerprint = h),
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
            (0, a.D)(this, void 0),
            (this._attachments = []),
            (this._propagationContext = (0, r.Q)()),
            this._notifyScopeListeners(),
            this
          );
        }
        addBreadcrumb(t, e) {
          let n = "number" == typeof e ? e : 100;
          if (n <= 0) return this;
          let r = { timestamp: (0, s.yW)(), ...t },
            i = this._breadcrumbs;
          return (
            i.push(r),
            (this._breadcrumbs = i.length > n ? i.slice(-n) : i),
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
        addAttachment(t) {
          return this._attachments.push(t), this;
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
            span: (0, a.Y)(this),
          };
        }
        setSDKProcessingMetadata(t) {
          return (
            (this._sdkProcessingMetadata = {
              ...this._sdkProcessingMetadata,
              ...t,
            }),
            this
          );
        }
        setPropagationContext(t) {
          return (this._propagationContext = t), this;
        }
        getPropagationContext() {
          return this._propagationContext;
        }
        captureException(t, e) {
          let n = e && e.event_id ? e.event_id : (0, o.DM)();
          if (!this._client)
            return (
              u.kg.warn(
                "No client configured on scope - will not capture exception!",
              ),
              n
            );
          let r = Error("Sentry syntheticException");
          return (
            this._client.captureException(
              t,
              {
                originalException: t,
                syntheticException: r,
                ...e,
                event_id: n,
              },
              this,
            ),
            n
          );
        }
        captureMessage(t, e, n) {
          let r = n && n.event_id ? n.event_id : (0, o.DM)();
          if (!this._client)
            return (
              u.kg.warn(
                "No client configured on scope - will not capture message!",
              ),
              r
            );
          let i = Error(t);
          return (
            this._client.captureMessage(
              t,
              e,
              {
                originalException: t,
                syntheticException: i,
                ...n,
                event_id: r,
              },
              this,
            ),
            r
          );
        }
        captureEvent(t, e) {
          let n = e && e.event_id ? e.event_id : (0, o.DM)();
          return this._client
            ? (this._client.captureEvent(t, { ...e, event_id: n }, this), n)
            : (u.kg.warn(
                "No client configured on scope - will not capture event!",
              ),
              n);
        }
        _notifyScopeListeners() {
          !this._notifyingListeners &&
            ((this._notifyingListeners = !0),
            this._scopeListeners.forEach((t) => {
              t(this);
            }),
            (this._notifyingListeners = !1));
        }
      }
      let _ = h;
    },
    112797: function (t, e, n) {
      n.d(e, {
        CT: function () {
          return s;
        },
      });
      var r = n(101284),
        i = n(394798);
      function s(t, e = {}) {
        if (
          (e.user &&
            (!t.ipAddress &&
              e.user.ip_address &&
              (t.ipAddress = e.user.ip_address),
            !t.did &&
              !e.did &&
              (t.did = e.user.id || e.user.email || e.user.username)),
          (t.timestamp = e.timestamp || (0, r.ph)()),
          e.abnormal_mechanism && (t.abnormal_mechanism = e.abnormal_mechanism),
          e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration),
          e.sid && (t.sid = 32 === e.sid.length ? e.sid : (0, i.DM)()),
          void 0 !== e.init && (t.init = e.init),
          !t.did && e.did && (t.did = `${e.did}`),
          "number" == typeof e.started && (t.started = e.started),
          t.ignoreDuration)
        )
          t.duration = void 0;
        else if ("number" == typeof e.duration) t.duration = e.duration;
        else {
          let e = t.timestamp - t.started;
          t.duration = e >= 0 ? e : 0;
        }
        e.release && (t.release = e.release),
          e.environment && (t.environment = e.environment),
          !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress),
          !t.userAgent && e.userAgent && (t.userAgent = e.userAgent),
          "number" == typeof e.errors && (t.errors = e.errors),
          e.status && (t.status = e.status);
      }
    },
    99342: function (t, e, n) {
      n.d(e, {
        D: function () {
          return s;
        },
        Y: function () {
          return o;
        },
      });
      var r = n(370336);
      let i = "_sentrySpan";
      function s(t, e) {
        e ? (0, r.xp)(t, i, e) : delete t[i];
      }
      function o(t) {
        return t[i];
      }
    },
    176984: function (t, e, n) {
      n.d(e, {
        X: function () {
          return r;
        },
      });
      let r = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
    },
    573736: function (t, e, n) {
      n.d(e, {
        HD: function () {
          return o;
        },
        J8: function () {
          return _;
        },
        Kj: function () {
          return h;
        },
        PO: function () {
          return u;
        },
        V9: function () {
          return d;
        },
        VZ: function () {
          return i;
        },
        cO: function () {
          return c;
        },
        kK: function () {
          return a;
        },
        y1: function () {
          return p;
        },
      });
      let r = Object.prototype.toString;
      function i(t) {
        switch (r.call(t)) {
          case "[object Error]":
          case "[object Exception]":
          case "[object DOMException]":
            return !0;
          default:
            return d(t, Error);
        }
      }
      function s(t, e) {
        return r.call(t) === `[object ${e}]`;
      }
      function o(t) {
        return s(t, "String");
      }
      function u(t) {
        return s(t, "Object");
      }
      function c(t) {
        return "undefined" != typeof Event && d(t, Event);
      }
      function a(t) {
        return "undefined" != typeof Element && d(t, Element);
      }
      function h(t) {
        return s(t, "RegExp");
      }
      function _(t) {
        return !!(t && t.then && "function" == typeof t.then);
      }
      function d(t, e) {
        try {
          return t instanceof e;
        } catch (t) {
          return !1;
        }
      }
      function p(t) {
        return !!(
          "object" == typeof t &&
          null !== t &&
          (t.__isVue || t._isVue)
        );
      }
    },
    622916: function (t, e, n) {
      n.d(e, {
        Cf: function () {
          return u;
        },
        kg: function () {
          return c;
        },
      });
      var r = n(176984),
        i = n(899517);
      let s = ["debug", "info", "warn", "error", "log", "assert", "trace"],
        o = {};
      function u(t) {
        if (!("console" in i.n)) return t();
        let e = i.n.console,
          n = {},
          r = Object.keys(o);
        r.forEach((t) => {
          let r = o[t];
          (n[t] = e[t]), (e[t] = r);
        });
        try {
          return t();
        } finally {
          r.forEach((t) => {
            e[t] = n[t];
          });
        }
      }
      let c = (function () {
        let t = !1,
          e = {
            enable: () => {
              t = !0;
            },
            disable: () => {
              t = !1;
            },
            isEnabled: () => t,
          };
        return (
          r.X
            ? s.forEach((n) => {
                e[n] = (...e) => {
                  t &&
                    u(() => {
                      i.n.console[n](`Sentry Logger [${n}]:`, ...e);
                    });
                };
              })
            : s.forEach((t) => {
                e[t] = () => void 0;
              }),
          e
        );
      })();
    },
    394798: function (t, e, n) {
      n.d(e, {
        DM: function () {
          return i;
        },
      });
      var r = n(899517);
      function i() {
        let t = r.n,
          e = t.crypto || t.msCrypto,
          n = () => 16 * Math.random();
        try {
          if (e && e.randomUUID) return e.randomUUID().replace(/-/g, "");
          e &&
            e.getRandomValues &&
            (n = () => {
              let t = new Uint8Array(1);
              return e.getRandomValues(t), t[0];
            });
        } catch (t) {}
        return "10000000100040008000100000000000".replace(/[018]/g, (t) =>
          (t ^ ((15 & n()) >> (t / 4))).toString(16),
        );
      }
    },
    370336: function (t, e, n) {
      n.d(e, {
        Jr: function () {
          return u;
        },
        xp: function () {
          return o;
        },
      });
      var r = n(176984),
        i = n(573736),
        s = n(622916);
      function o(t, e, n) {
        try {
          Object.defineProperty(t, e, {
            value: n,
            writable: !0,
            configurable: !0,
          });
        } catch (n) {
          r.X &&
            s.kg.log(
              `Failed to add non-enumerable property "${e}" to object`,
              t,
            );
        }
      }
      function u(t) {
        return (function t(e, n) {
          if (
            (function (t) {
              if (!(0, i.PO)(t)) return !1;
              try {
                let e = Object.getPrototypeOf(t).constructor.name;
                return !e || "Object" === e;
              } catch (t) {
                return !0;
              }
            })(e)
          ) {
            let r = n.get(e);
            if (void 0 !== r) return r;
            let i = {};
            for (let r of (n.set(e, i), Object.keys(e)))
              void 0 !== e[r] && (i[r] = t(e[r], n));
            return i;
          }
          if (Array.isArray(e)) {
            let r = n.get(e);
            if (void 0 !== r) return r;
            let i = [];
            return (
              n.set(e, i),
              e.forEach((e) => {
                i.push(t(e, n));
              }),
              i
            );
          }
          return e;
        })(t, new Map());
      }
    },
    731889: function (t, e, n) {
      n.d(e, {
        Q: function () {
          return i;
        },
      });
      var r = n(394798);
      function i() {
        return { traceId: (0, r.DM)(), spanId: (0, r.DM)().substring(16) };
      }
    },
    101284: function (t, e, n) {
      let r;
      n.d(e, {
        ph: function () {
          return o;
        },
        yW: function () {
          return s;
        },
      });
      var i = n(899517);
      function s() {
        return Date.now() / 1e3;
      }
      let o = (function () {
        let { performance: t } = i.n;
        if (!t || !t.now) return s;
        let e = Date.now() - t.now(),
          n = void 0 == t.timeOrigin ? e : t.timeOrigin;
        return () => (n + t.now()) / 1e3;
      })();
      (() => {
        let { performance: t } = i.n;
        if (!t || !t.now) return;
        let e = t.now(),
          n = Date.now(),
          r = t.timeOrigin ? Math.abs(t.timeOrigin + e - n) : 36e5,
          s = t.timing && t.timing.navigationStart,
          o = "number" == typeof s ? Math.abs(s + e - n) : 36e5;
        if (r < 36e5 || o < 36e5) return r <= o ? t.timeOrigin : void 0;
      })();
    },
    452896: function (t, e, n) {
      n.d(e, {
        J: function () {
          return r;
        },
      });
      let r = "8.22.0";
    },
    899517: function (t, e, n) {
      n.d(e, {
        Y: function () {
          return s;
        },
        n: function () {
          return i;
        },
      });
      var r = n(452896);
      let i = globalThis;
      function s(t, e, n) {
        let s = n || i,
          o = (s.__SENTRY__ = s.__SENTRY__ || {}),
          u = (o[r.J] = o[r.J] || {});
        return u[t] || (u[t] = e());
      }
    },
  },
]);
//# sourceMappingURL=273779e8afe8594eac31.js.map
