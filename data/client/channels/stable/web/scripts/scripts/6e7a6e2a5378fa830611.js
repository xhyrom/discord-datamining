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
          return h;
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
      function l(t, e) {
        let n = c();
        return n.withScope(() => ((n.getStackTop().scope = t), e(t)));
      }
      function f(t) {
        return c().withScope(() => t(c().getIsolationScope()));
      }
      function h() {
        return {
          withIsolationScope: f,
          withScope: a,
          withSetScope: l,
          withSetIsolationScope: (t, e) => f(e),
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
          l = u ? (0, i.Cf)(() => u(a, e)) : a;
        null !== l &&
          (n.emit && n.emit("beforeAddBreadcrumb", l, e),
          o.addBreadcrumb(l, c));
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
        $e: function () {
          return l;
        },
        aF: function () {
          return c;
        },
        lW: function () {
          return a;
        },
        nZ: function () {
          return u;
        },
        s3: function () {
          return h;
        },
        wi: function () {
          return f;
        },
      });
      var r = n(899517),
        i = n(833873),
        s = n(356442),
        o = n(307854);
      function u() {
        let t = (0, s.c)();
        return (0, i.G)(t).getCurrentScope();
      }
      function c() {
        let t = (0, s.c)();
        return (0, i.G)(t).getIsolationScope();
      }
      function a() {
        return (0, r.Y)("globalScope", () => new o.s());
      }
      function l(...t) {
        let e = (0, s.c)(),
          n = (0, i.G)(e);
        if (2 === t.length) {
          let [e, r] = t;
          return e ? n.withSetScope(e, r) : n.withScope(r);
        }
        return n.withScope(t[0]);
      }
      function f(...t) {
        let e = (0, s.c)(),
          n = (0, i.G)(e);
        if (2 === t.length) {
          let [e, r] = t;
          return e ? n.withSetIsolationScope(e, r) : n.withIsolationScope(r);
        }
        return n.withIsolationScope(t[0]);
      }
      function h() {
        return u().getClient();
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
          return f;
        },
      });
      var r = n(731889),
        i = n(573736),
        s = n(101284),
        o = n(394798),
        u = n(622916),
        c = n(112797),
        a = n(99342);
      class l {
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
          let t = new l();
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
              e instanceof f
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
              fingerprint: l = [],
              propagationContext: h,
            } = n || {};
          return (
            (this._tags = { ...this._tags, ...s }),
            (this._extra = { ...this._extra, ...o }),
            (this._contexts = { ...this._contexts, ...c }),
            u && Object.keys(u).length && (this._user = u),
            a && (this._level = a),
            l.length && (this._fingerprint = l),
            h && (this._propagationContext = h),
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
      let f = l;
    },
    112797: function (t, e, n) {
      n.d(e, {
        CT: function () {
          return u;
        },
        Hv: function () {
          return o;
        },
        RJ: function () {
          return c;
        },
      });
      var r = n(101284),
        i = n(394798),
        s = n(370336);
      function o(t) {
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
            toJSON: () =>
              (function (t) {
                return (0, s.Jr)({
                  sid: `${t.sid}`,
                  init: t.init,
                  started: new Date(1e3 * t.started).toISOString(),
                  timestamp: new Date(1e3 * t.timestamp).toISOString(),
                  status: t.status,
                  errors: t.errors,
                  did:
                    "number" == typeof t.did || "string" == typeof t.did
                      ? `${t.did}`
                      : void 0,
                  duration: t.duration,
                  abnormal_mechanism: t.abnormal_mechanism,
                  attrs: {
                    release: t.release,
                    environment: t.environment,
                    ip_address: t.ipAddress,
                    user_agent: t.userAgent,
                  },
                });
              })(n),
          };
        return t && u(n, t), n;
      }
      function u(t, e = {}) {
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
      function c(t, e) {
        let n = {};
        e
          ? (n = { status: e })
          : "ok" === t.status && (n = { status: "exited" }),
          u(t, n);
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
    467510: function (t, e, n) {
      n.d(e, {
        Rt: function () {
          return s;
        },
        iY: function () {
          return c;
        },
        l4: function () {
          return o;
        },
        qT: function () {
          return u;
        },
      });
      var r = n(573736);
      let i = n(899517).n;
      function s(t, e = {}) {
        if (!t) return "<unknown>";
        try {
          let n,
            s = t,
            o = [],
            u = 0,
            c = 0,
            a = 3,
            l = Array.isArray(e) ? e : e.keyAttrs,
            f = (!Array.isArray(e) && e.maxStringLength) || 80;
          for (
            ;
            s &&
            u++ < 5 &&
            ((n = (function (t, e) {
              let n = [];
              if (!t || !t.tagName) return "";
              if (i.HTMLElement && t instanceof HTMLElement && t.dataset) {
                if (t.dataset.sentryComponent) return t.dataset.sentryComponent;
                if (t.dataset.sentryElement) return t.dataset.sentryElement;
              }
              n.push(t.tagName.toLowerCase());
              let s =
                e && e.length
                  ? e
                      .filter((e) => t.getAttribute(e))
                      .map((e) => [e, t.getAttribute(e)])
                  : null;
              if (s && s.length)
                s.forEach((t) => {
                  n.push(`[${t[0]}="${t[1]}"]`);
                });
              else {
                t.id && n.push(`#${t.id}`);
                let e = t.className;
                if (e && (0, r.HD)(e))
                  for (let t of e.split(/\s+/)) n.push(`.${t}`);
              }
              for (let e of ["aria-label", "type", "name", "title", "alt"]) {
                let r = t.getAttribute(e);
                r && n.push(`[${e}="${r}"]`);
              }
              return n.join("");
            })(s, l)),
            "html" !== n && (!(u > 1) || !(c + o.length * a + n.length >= f)));

          ) {
            o.push(n), (c += n.length), (s = s.parentNode);
          }
          return o.reverse().join(" > ");
        } catch (t) {
          return "<unknown>";
        }
      }
      function o() {
        try {
          return i.document.location.href;
        } catch (t) {
          return "";
        }
      }
      function u(t) {
        return i.document && i.document.querySelector
          ? i.document.querySelector(t)
          : null;
      }
      function c(t) {
        if (!i.HTMLElement) return null;
        let e = t;
        for (let t = 0; t < 5 && e; t++) {
          if (e instanceof HTMLElement) {
            if (e.dataset.sentryComponent) return e.dataset.sentryComponent;
            if (e.dataset.sentryElement) return e.dataset.sentryElement;
          }
          e = e.parentNode;
        }
        return null;
      }
    },
    309544: function (t, e, n) {
      n.d(e, {
        X: function () {
          return r;
        },
      });
      let r = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
    },
    573736: function (t, e, n) {
      n.d(e, {
        Cy: function () {
          return m;
        },
        HD: function () {
          return a;
        },
        J8: function () {
          return g;
        },
        Kj: function () {
          return d;
        },
        Le: function () {
          return l;
        },
        PO: function () {
          return h;
        },
        TX: function () {
          return u;
        },
        V9: function () {
          return y;
        },
        VW: function () {
          return o;
        },
        VZ: function () {
          return i;
        },
        cO: function () {
          return p;
        },
        fm: function () {
          return c;
        },
        kK: function () {
          return _;
        },
        pt: function () {
          return f;
        },
        y1: function () {
          return v;
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
            return y(t, Error);
        }
      }
      function s(t, e) {
        return r.call(t) === `[object ${e}]`;
      }
      function o(t) {
        return s(t, "ErrorEvent");
      }
      function u(t) {
        return s(t, "DOMError");
      }
      function c(t) {
        return s(t, "DOMException");
      }
      function a(t) {
        return s(t, "String");
      }
      function l(t) {
        return (
          "object" == typeof t &&
          null !== t &&
          "__sentry_template_string__" in t &&
          "__sentry_template_values__" in t
        );
      }
      function f(t) {
        return (
          null === t || l(t) || ("object" != typeof t && "function" != typeof t)
        );
      }
      function h(t) {
        return s(t, "Object");
      }
      function p(t) {
        return "undefined" != typeof Event && y(t, Event);
      }
      function _(t) {
        return "undefined" != typeof Element && y(t, Element);
      }
      function d(t) {
        return s(t, "RegExp");
      }
      function g(t) {
        return !!(t && t.then && "function" == typeof t.then);
      }
      function m(t) {
        return (
          h(t) &&
          "nativeEvent" in t &&
          "preventDefault" in t &&
          "stopPropagation" in t
        );
      }
      function y(t, e) {
        try {
          return t instanceof e;
        } catch (t) {
          return !1;
        }
      }
      function v(t) {
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
        LD: function () {
          return o;
        },
        RU: function () {
          return s;
        },
        kg: function () {
          return c;
        },
      });
      var r = n(309544),
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
          return o;
        },
        Db: function () {
          return a;
        },
        EG: function () {
          return l;
        },
        YO: function () {
          return h;
        },
        go: function () {
          return f;
        },
        jH: function () {
          return c;
        },
        lE: function () {
          return p;
        },
      });
      var r = n(370336),
        i = n(886115),
        s = n(899517);
      function o() {
        let t = s.n,
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
      function u(t) {
        return t.exception && t.exception.values
          ? t.exception.values[0]
          : void 0;
      }
      function c(t) {
        let { message: e, event_id: n } = t;
        if (e) return e;
        let r = u(t);
        if (r)
          return r.type && r.value
            ? `${r.type}: ${r.value}`
            : r.type || r.value || n || "<unknown>";
        return n || "<unknown>";
      }
      function a(t, e, n) {
        let r = (t.exception = t.exception || {}),
          i = (r.values = r.values || []),
          s = (i[0] = i[0] || {});
        !s.value && (s.value = e || ""), !s.type && (s.type = n || "Error");
      }
      function l(t, e) {
        let n = u(t);
        if (!n) return;
        let r = n.mechanism;
        if (
          ((n.mechanism = { type: "generic", handled: !0, ...r, ...e }),
          e && "data" in e)
        ) {
          let t = { ...(r && r.data), ...e.data };
          n.mechanism.data = t;
        }
      }
      function f(t, e, n = 5) {
        if (void 0 === e.lineno) return;
        let r = t.length,
          s = Math.max(Math.min(r - 1, e.lineno - 1), 0);
        e.pre_context = t
          .slice(Math.max(0, s - n), s)
          .map((t) => (0, i.JM)(t, 0));
        let o = Math.min(r - 1, s);
        (e.context_line = (0, i.JM)(t[o], e.colno || 0)),
          (e.post_context = t
            .slice(Math.min(s + 1, r), s + 1 + n)
            .map((t) => (0, i.JM)(t, 0)));
      }
      function h(t) {
        if (t && t.__sentry_captured__) return !0;
        try {
          (0, r.xp)(t, "__sentry_captured__", !0);
        } catch (t) {}
        return !1;
      }
      function p(t) {
        return Array.isArray(t) ? t : [t];
      }
    },
    370336: function (t, e, n) {
      n.d(e, {
        $Q: function () {
          return l;
        },
        HK: function () {
          return f;
        },
        Jr: function () {
          return m;
        },
        Sh: function () {
          return p;
        },
        _j: function () {
          return h;
        },
        hl: function () {
          return c;
        },
        xp: function () {
          return a;
        },
        zf: function () {
          return g;
        },
      });
      var r = n(467510),
        i = n(309544),
        s = n(573736),
        o = n(622916),
        u = n(886115);
      function c(t, e, n) {
        if (!(e in t)) return;
        let r = t[e],
          i = n(r);
        "function" == typeof i && l(i, r), (t[e] = i);
      }
      function a(t, e, n) {
        try {
          Object.defineProperty(t, e, {
            value: n,
            writable: !0,
            configurable: !0,
          });
        } catch (n) {
          i.X &&
            o.kg.log(
              `Failed to add non-enumerable property "${e}" to object`,
              t,
            );
        }
      }
      function l(t, e) {
        try {
          let n = e.prototype || {};
          (t.prototype = e.prototype = n), a(t, "__sentry_original__", e);
        } catch (t) {}
      }
      function f(t) {
        return t.__sentry_original__;
      }
      function h(t) {
        return Object.keys(t)
          .map((e) => `${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`)
          .join("&");
      }
      function p(t) {
        if ((0, s.VZ)(t))
          return { message: t.message, name: t.name, stack: t.stack, ...d(t) };
        if (!(0, s.cO)(t)) return t;
        {
          let e = {
            type: t.type,
            target: _(t.target),
            currentTarget: _(t.currentTarget),
            ...d(t),
          };
          return (
            "undefined" != typeof CustomEvent &&
              (0, s.V9)(t, CustomEvent) &&
              (e.detail = t.detail),
            e
          );
        }
      }
      function _(t) {
        try {
          return (0, s.kK)(t)
            ? (0, r.Rt)(t)
            : Object.prototype.toString.call(t);
        } catch (t) {
          return "<unknown>";
        }
      }
      function d(t) {
        if ("object" != typeof t || null === t) return {};
        {
          let e = {};
          for (let n in t)
            Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          return e;
        }
      }
      function g(t, e = 40) {
        let n = Object.keys(p(t));
        n.sort();
        let r = n[0];
        if (!r) return "[object has no keys]";
        if (r.length >= e) return (0, u.$G)(r, e);
        for (let t = n.length; t > 0; t--) {
          let r = n.slice(0, t).join(", ");
          if (!(r.length > e)) {
            if (t === n.length) return r;
            return (0, u.$G)(r, e);
          }
        }
        return "";
      }
      function m(t) {
        return (function t(e, n) {
          if (
            (function (t) {
              if (!(0, s.PO)(t)) return !1;
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
    886115: function (t, e, n) {
      n.d(e, {
        $G: function () {
          return i;
        },
        JM: function () {
          return s;
        },
        U0: function () {
          return u;
        },
        nK: function () {
          return o;
        },
      });
      var r = n(573736);
      function i(t, e = 0) {
        return "string" != typeof t || 0 === e
          ? t
          : t.length <= e
            ? t
            : `${t.slice(0, e)}...`;
      }
      function s(t, e) {
        let n = t,
          r = n.length;
        if (r <= 150) return n;
        e > r && (e = r);
        let i = Math.max(e - 60, 0);
        i < 5 && (i = 0);
        let s = Math.min(i + 140, r);
        return (
          s > r - 5 && (s = r),
          s === r && (i = Math.max(s - 140, 0)),
          (n = n.slice(i, s)),
          i > 0 && (n = `'{snip} ${n}`),
          s < r && (n += " {snip}"),
          n
        );
      }
      function o(t, e) {
        if (!Array.isArray(t)) return "";
        let n = [];
        for (let e = 0; e < t.length; e++) {
          let i = t[e];
          try {
            (0, r.y1)(i) ? n.push("[VueViewModel]") : n.push(String(i));
          } catch (t) {
            n.push("[value cannot be serialized]");
          }
        }
        return n.join(e);
      }
      function u(t, e = [], n = !1) {
        return e.some((e) =>
          (function (t, e, n = !1) {
            return (
              !!(0, r.HD)(t) &&
              ((0, r.Kj)(e)
                ? e.test(t)
                : !!(0, r.HD)(e) && (n ? t === e : t.includes(e)))
            );
          })(t, e, n),
        );
      }
    },
    101284: function (t, e, n) {
      let r;
      n.d(e, {
        Z1: function () {
          return u;
        },
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
        })(),
        u = (() => {
          let { performance: t } = i.n;
          if (!t || !t.now) return;
          let e = t.now(),
            n = Date.now(),
            r = t.timeOrigin ? Math.abs(t.timeOrigin + e - n) : 36e5,
            s = t.timing && t.timing.navigationStart,
            o = "number" == typeof s ? Math.abs(s + e - n) : 36e5;
          if (r < 36e5 || o < 36e5) return r <= o ? t.timeOrigin : s;
          return n;
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
//# sourceMappingURL=6e7a6e2a5378fa830611.js.map
