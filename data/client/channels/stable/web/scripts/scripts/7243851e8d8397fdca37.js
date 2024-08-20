"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["12192"],
  {
    745625: function (e, t, n) {
      var r = n(15393),
        a = n(919499),
        i = n(470079),
        o = n(520250),
        c = "hcaptcha-api-script-id",
        s = "hcaptchaOnLoad",
        p = [],
        d = function (e) {
          void 0 === e && (e = {});
          var t = (0, o.as)(e.scriptLocation);
          delete e.scriptLocation;
          var n = (0, o.$h)(t),
            r = p.find(function (e) {
              return e.scope === n.window;
            });
          if (n.document.getElementById(c) && r) return r.promise;
          var a = new Promise(function (r, a) {
            n.window[s] = r;
            var i = e.apihost || "https://js.hcaptcha.com";
            delete e.apihost;
            var p = n.document.createElement("script");
            (p.id = c),
              (p.src = i + "/1/api.js?render=explicit&onload=" + s),
              (p.async = void 0 === e.loadAsync || e.loadAsync),
              delete e.loadAsync,
              (p.onerror = function (e) {
                return a("script-error");
              });
            var d = (0, o.Ku)(e);
            (p.src += "" !== d ? "&" + d : ""), t.appendChild(p);
          });
          return p.push({ promise: a, scope: n.window }), a;
        },
        h = (function (e) {
          function t(t) {
            var n;
            return (
              ((n = e.call(this, t) || this)._hcaptcha = void 0),
              (n.renderCaptcha = n.renderCaptcha.bind((0, r.Z)(n))),
              (n.resetCaptcha = n.resetCaptcha.bind((0, r.Z)(n))),
              (n.removeCaptcha = n.removeCaptcha.bind((0, r.Z)(n))),
              (n.isReady = n.isReady.bind((0, r.Z)(n))),
              (n.loadCaptcha = n.loadCaptcha.bind((0, r.Z)(n))),
              (n.handleOnLoad = n.handleOnLoad.bind((0, r.Z)(n))),
              (n.handleSubmit = n.handleSubmit.bind((0, r.Z)(n))),
              (n.handleExpire = n.handleExpire.bind((0, r.Z)(n))),
              (n.handleError = n.handleError.bind((0, r.Z)(n))),
              (n.handleOpen = n.handleOpen.bind((0, r.Z)(n))),
              (n.handleClose = n.handleClose.bind((0, r.Z)(n))),
              (n.handleChallengeExpired = n.handleChallengeExpired.bind(
                (0, r.Z)(n),
              )),
              (n.ref = i.createRef()),
              (n.apiScriptRequested = !1),
              (n.state = {
                isApiReady: !1,
                isRemoved: !1,
                elementId: t.id,
                captchaId: "",
              }),
              n
            );
          }
          (0, a.Z)(t, e);
          var n = t.prototype;
          return (
            (n.componentDidMount = function () {
              var e = this,
                t = (0, o.as)(this.props.scriptLocation),
                n = (0, o.$h)(t);
              if (
                ((this._hcaptcha = n.window.hcaptcha || void 0),
                void 0 !== this._hcaptcha)
              ) {
                this.setState({ isApiReady: !0 }, function () {
                  e.renderCaptcha();
                });
                return;
              }
              this.loadCaptcha();
            }),
            (n.componentWillUnmount = function () {
              var e = this.state.captchaId,
                t = this._hcaptcha;
              if (!!this.isReady()) t.reset(e), t.remove(e);
            }),
            (n.shouldComponentUpdate = function (e, t) {
              return (
                this.state.isApiReady === t.isApiReady &&
                this.state.isRemoved === t.isRemoved &&
                !0
              );
            }),
            (n.componentDidUpdate = function (e) {
              var t = this;
              ![
                "sitekey",
                "size",
                "theme",
                "tabindex",
                "languageOverride",
                "endpoint",
              ].every(function (n) {
                return e[n] === t.props[n];
              }) &&
                this.removeCaptcha(function () {
                  t.renderCaptcha();
                });
            }),
            (n.loadCaptcha = function () {
              if (!this.apiScriptRequested) {
                var e = this.props,
                  t = e.apihost,
                  n = e.assethost,
                  r = e.endpoint,
                  a = e.host,
                  i = e.imghost,
                  o = e.languageOverride,
                  c = e.reCaptchaCompat,
                  s = e.reportapi,
                  p = e.sentry,
                  h = e.custom,
                  l = e.loadAsync,
                  u = e.scriptLocation;
                d({
                  apihost: t,
                  assethost: n,
                  endpoint: r,
                  hl: o,
                  host: a,
                  imghost: i,
                  recaptchacompat: !1 === c ? "off" : null,
                  reportapi: s,
                  sentry: p,
                  custom: h,
                  loadAsync: l,
                  scriptLocation: u,
                })
                  .then(this.handleOnLoad)
                  .catch(this.handleError),
                  (this.apiScriptRequested = !0);
              }
            }),
            (n.renderCaptcha = function (e) {
              if (this.state.isApiReady) {
                var t = Object.assign(
                    {
                      "open-callback": this.handleOpen,
                      "close-callback": this.handleClose,
                      "error-callback": this.handleError,
                      "chalexpired-callback": this.handleChallengeExpired,
                      "expired-callback": this.handleExpire,
                      callback: this.handleSubmit,
                    },
                    this.props,
                    {
                      hl: this.props.hl || this.props.languageOverride,
                      languageOverride: void 0,
                    },
                  ),
                  n = this._hcaptcha.render(this.ref.current, t);
                this.setState({ isRemoved: !1, captchaId: n }, function () {
                  e && e();
                });
              }
            }),
            (n.resetCaptcha = function () {
              var e = this.state.captchaId,
                t = this._hcaptcha;
              if (!!this.isReady()) t.reset(e);
            }),
            (n.removeCaptcha = function (e) {
              var t = this.state.captchaId,
                n = this._hcaptcha;
              if (!!this.isReady())
                this.setState({ isRemoved: !0 }, function () {
                  n.remove(t), e && e();
                });
            }),
            (n.handleOnLoad = function () {
              var e = this;
              this.setState({ isApiReady: !0 }, function () {
                var t = (0, o.as)(e.props.scriptLocation),
                  n = (0, o.$h)(t);
                (e._hcaptcha = n.window.hcaptcha),
                  e.renderCaptcha(function () {
                    var t = e.props.onLoad;
                    t && t();
                  });
              });
            }),
            (n.handleSubmit = function (e) {
              var t = this.props.onVerify,
                n = this.state,
                r = n.isRemoved,
                a = n.captchaId,
                i = this._hcaptcha;
              if (void 0 !== i && !r) {
                var o = i.getResponse(a),
                  c = i.getRespKey(a);
                t && t(o, c);
              }
            }),
            (n.handleExpire = function () {
              var e = this.props.onExpire,
                t = this.state.captchaId,
                n = this._hcaptcha;
              if (!!this.isReady()) n.reset(t), e && e();
            }),
            (n.handleError = function (e) {
              var t = this.props.onError,
                n = this.state.captchaId,
                r = this._hcaptcha;
              this.isReady() && r.reset(n), t && t(e);
            }),
            (n.isReady = function () {
              var e = this.state,
                t = e.isApiReady,
                n = e.isRemoved;
              return t && !n;
            }),
            (n.handleOpen = function () {
              if (!!this.isReady() && !!this.props.onOpen) this.props.onOpen();
            }),
            (n.handleClose = function () {
              if (!!this.isReady() && !!this.props.onClose)
                this.props.onClose();
            }),
            (n.handleChallengeExpired = function () {
              if (!!this.isReady() && !!this.props.onChalExpired)
                this.props.onChalExpired();
            }),
            (n.execute = function (e) {
              void 0 === e && (e = null);
              var t = this.state.captchaId,
                n = this._hcaptcha;
              if (!!this.isReady())
                return e && "object" != typeof e && (e = null), n.execute(t, e);
            }),
            (n.setData = function (e) {
              var t = this.state.captchaId,
                n = this._hcaptcha;
              if (!!this.isReady())
                e && "object" != typeof e && (e = null), n.setData(t, e);
            }),
            (n.getResponse = function () {
              return this._hcaptcha.getResponse(this.state.captchaId);
            }),
            (n.getRespKey = function () {
              return this._hcaptcha.getRespKey(this.state.captchaId);
            }),
            (n.render = function () {
              var e = this.state.elementId;
              return i.createElement("div", { ref: this.ref, id: e });
            }),
            t
          );
        })(i.Component);
      t.Z = h;
    },
    520250: function (e, t, n) {
      function r(e) {
        return Object.entries(e)
          .filter(function (e) {
            e[0];
            var t = e[1];
            return t || !1 === t;
          })
          .map(function (e) {
            var t = e[0],
              n = e[1];
            return encodeURIComponent(t) + "=" + encodeURIComponent(n);
          })
          .join("&");
      }
      function a(e) {
        var t = (e && e.ownerDocument) || document,
          n = t.defaultView || t.parentWindow || window;
        return { document: t, window: n };
      }
      function i(e) {
        return e || document.head;
      }
      n.d(t, {
        $h: function () {
          return a;
        },
        Ku: function () {
          return r;
        },
        as: function () {
          return i;
        },
      });
    },
    14199: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var r = n(470079);
      function a(e, t) {
        return (a =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var i = function (e) {
          var t = document.createElement("script");
          (t.async = !0),
            (t.defer = !0),
            (t.src = e),
            document.head && document.head.appendChild(t);
        },
        o = /(http|https):\/\/(www)?.+\/recaptcha/,
        c = ["sitekey", "theme", "size", "badge", "tabindex", "hl", "isolated"],
        s = (function (e) {
          function t() {
            for (var t, n = arguments.length, a = Array(n), c = 0; c < n; c++)
              a[c] = arguments[c];
            return (
              ((t = e.call.apply(e, [this].concat(a)) || this).container =
                void 0),
              (t.timer = void 0),
              (t.state = {
                instanceKey: Date.now(),
                ready: !1,
                rendered: !1,
                invisible: "invisible" === t.props.size,
              }),
              (t._isAvailable = function () {
                var e;
                return !!(null == (e = window.grecaptcha) ? void 0 : e.ready);
              }),
              (t._inject = function () {
                var e;
                t.props.inject &&
                  ((e = o),
                  !Array.from(document.scripts).reduce(function (t, n) {
                    return t || e.test(n.src);
                  }, !1)) &&
                  i(
                    "https://recaptcha.net/recaptcha/api.js?render=explicit" +
                      (t.props.hl ? "&hl=" + t.props.hl : ""),
                  );
              }),
              (t._prepare = function () {
                var e = t.props,
                  n = e.explicit,
                  r = e.onLoad;
                window.grecaptcha.ready(function () {
                  t.setState({ ready: !0 }, function () {
                    n || t.renderExplicitly(), r && r();
                  });
                });
              }),
              (t._renderRecaptcha = function (e, t) {
                return window.grecaptcha.render(e, t);
              }),
              (t._resetRecaptcha = function () {
                return window.grecaptcha.reset(t.state.instanceId);
              }),
              (t._executeRecaptcha = function () {
                return window.grecaptcha.execute(t.state.instanceId);
              }),
              (t._getResponseRecaptcha = function () {
                return window.grecaptcha.getResponse(t.state.instanceId);
              }),
              (t._onVerify = function (e) {
                return t.props.onVerify(e);
              }),
              (t._onExpire = function () {
                return t.props.onExpire && t.props.onExpire();
              }),
              (t._onError = function () {
                return t.props.onError && t.props.onError();
              }),
              (t._stopTimer = function () {
                t.timer && clearInterval(t.timer);
              }),
              (t.componentDidMount = function () {
                t._inject(),
                  t._isAvailable()
                    ? t._prepare()
                    : (t.timer = window.setInterval(function () {
                        t._isAvailable() && (t._prepare(), t._stopTimer());
                      }, 500));
              }),
              (t.componentWillUnmount = function () {
                t._stopTimer();
              }),
              (t.renderExplicitly = function () {
                return new Promise(function (e, n) {
                  if (t.state.rendered)
                    return n(
                      Error(
                        "This recaptcha instance has been already rendered.",
                      ),
                    );
                  if (!t.state.ready || !t.container)
                    return n(
                      Error("Recaptcha is not ready for rendering yet."),
                    );
                  var r = t._renderRecaptcha(t.container, {
                    sitekey: t.props.sitekey,
                    theme: t.props.theme,
                    size: t.props.size,
                    badge: t.state.invisible ? t.props.badge : void 0,
                    tabindex: t.props.tabindex,
                    callback: t._onVerify,
                    "expired-callback": t._onExpire,
                    "error-callback": t._onError,
                    isolated: t.state.invisible ? t.props.isolated : void 0,
                    hl: t.state.invisible ? void 0 : t.props.hl,
                  });
                  t.setState({ instanceId: r, rendered: !0 }, function () {
                    t.props.onRender && t.props.onRender(), e();
                  });
                });
              }),
              (t.reset = function () {
                return new Promise(function (e, n) {
                  if (t.state.rendered) return t._resetRecaptcha(), e();
                  n(Error("This recaptcha instance did not render yet."));
                });
              }),
              (t.execute = function () {
                return new Promise(function (e, n) {
                  return t.state.invisible
                    ? (t.state.rendered && (t._executeRecaptcha(), e()),
                      n(Error("This recaptcha instance did not render yet.")))
                    : n(
                        Error(
                          "Manual execution is only available for invisible size.",
                        ),
                      );
                });
              }),
              (t.getResponse = function () {
                return new Promise(function (e, n) {
                  if (t.state.rendered) return e(t._getResponseRecaptcha());
                  n(Error("This recaptcha instance did not render yet."));
                });
              }),
              (t.render = function () {
                var e = r.createElement("div", {
                  key: t.state.instanceKey,
                  id: t.props.id,
                  className: t.props.className,
                  ref: function (e) {
                    return (t.container = e);
                  },
                });
                return t.props.children
                  ? t.props.children({
                      renderExplicitly: t.renderExplicitly,
                      reset: t.reset,
                      execute: t.execute,
                      getResponse: t.getResponse,
                      recaptchaComponent: e,
                    })
                  : e;
              }),
              t
            );
          }
          return (
            (t.prototype = Object.create(e.prototype)),
            (t.prototype.constructor = t),
            a(t, e),
            (t.getDerivedStateFromProps = function (e, t) {
              var n = "invisible" === e.size;
              return n !== t.invisible ? { invisible: n } : null;
            }),
            (t.prototype.componentDidUpdate = function (e) {
              var t = this;
              c.reduce(function (n, r) {
                return t.props[r] !== e[r] ? [].concat(n, [r]) : n;
              }, []).length > 0 &&
                this.setState(
                  { instanceKey: Date.now(), rendered: !1 },
                  function () {
                    t.props.explicit || t.renderExplicitly();
                  },
                );
            }),
            t
          );
        })(r.Component);
      s.defaultProps = {
        id: "",
        className: "g-recaptcha",
        theme: "light",
        size: "normal",
        badge: "bottomright",
        tabindex: 0,
        explicit: !1,
        inject: !0,
        isolated: !1,
        hl: "",
      };
    },
    480781: function (e) {
      e.exports = "/assets/4ede869e6900fcdb1d61.svg";
    },
    353250: function (e, t, n) {
      var r, a;
      function i(e) {
        var t;
        return {
          captchaService: e.captcha_service,
          sitekey: e.captcha_sitekey,
          options: {
            rqdata: e.captcha_rqdata,
            rqtoken: e.captcha_rqtoken,
            serveInvisible:
              null !== (t = e.should_serve_invisible) && void 0 !== t && t,
          },
        };
      }
      n.r(t),
        n.d(t, {
          CaptchaError: function () {
            return r;
          },
          extractCaptchaPropsFromResponseBody: function () {
            return i;
          },
        }),
        ((a = r || (r = {})).CANCEL = "cancel"),
        (a.ERROR = "error"),
        (a.EXPIRED = "expired");
    },
    637538: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var r = n(470079),
        a = n(626135),
        i = n(353250),
        o = n(981631);
      function c(e) {
        let t = r.useRef(!0);
        return (
          r.useEffect(
            () => () => {
              t.current && (null == e || e(i.CaptchaError.CANCEL));
            },
            [],
          ),
          r.useEffect(
            () => (
              a.default.track(o.rMx.OPEN_MODAL, { type: "Guild Join Captcha" }),
              () => {
                t.current &&
                  a.default.track(o.rMx.MODAL_DISMISSED, {
                    type: "Guild Join Captcha",
                  });
              }
            ),
            [t],
          ),
          () => {
            t.current = !1;
          }
        );
      }
    },
    747387: function (e, t, n) {
      n(47120);
      var r = n(735250),
        a = n(470079),
        i = n(745625),
        o = n(14199),
        c = n(772848),
        s = n(286379),
        p = n(343817),
        d = n(797614),
        h = n(626135),
        l = n(981631);
      t.Z = (e) => {
        let {
            captchaService: t = p.hP.RECAPTCHA,
            sitekey: n,
            rqdata: u,
            onRender: f,
            onVerify: v,
            onError: m,
            onOpen: y,
            onClose: C,
            onChalExpired: E,
            size: R,
            ..._
          } = e,
          b = a.useRef(null),
          x = (0, c.Z)(),
          [g, w] = a.useState(!1),
          k = a.useCallback(
            (e) => {
              h.default.track(l.rMx.CAPTCHA_EVENT, {
                captcha_event_name: e,
                captcha_service: t,
                sitekey: n,
                captcha_flow_key: x,
              });
            },
            [x, t, n],
          ),
          A = a.useCallback(
            (e) => {
              d.Z.increment({
                name: s.V.CAPTCHA_EVENT,
                tags: ["event_name:".concat(e), "captcha_service:".concat(t)],
              });
            },
            [t],
          ),
          I = a.useCallback(() => {
            var e, t;
            null != u &&
              "" !== u &&
              null != b.current &&
              (null === (e = b.current) ||
                void 0 === e ||
                e.setData({ rqdata: u })),
              "invisible" === R &&
                (null === (t = b.current) || void 0 === t || t.execute());
          }, [u, b, R]),
          S = a.useCallback(() => {
            !g && (k("initial-load"), A("initial-load"), w(!0)), I();
          }, [A, g, k, I]);
        a.useEffect(() => {
          I();
        }, [I]),
          a.useEffect(() => {
            S();
          }, [S]);
        let j = a.useCallback(() => {
            k("error"), A("error"), I(), null == m || m();
          }, [k, A, I, m]),
          O = a.useCallback(
            (e) => {
              k("verify"), A("verify"), v(e);
            },
            [A, v, k],
          ),
          P = a.useCallback(() => {
            k("render"), null == f || f();
          }, [f, k]),
          N = a.useCallback(() => {
            k("open"), A("open"), null == y || y();
          }, [A, y, k]),
          T = a.useCallback(() => {
            k("close"), null == C || C();
          }, [C, k]),
          Z = a.useCallback(() => {
            k("chal-expire"), null == E || E();
          }, [E, k]);
        return ((null == n || "" === n) && (n = l.OL7), t === p.hP.RECAPTCHA)
          ? (0, r.jsx)(o.Z, {
              ..._,
              onLoad: S,
              onRender: P,
              onVerify: O,
              onError: j,
              sitekey: n,
            })
          : t === p.hP.HCAPTCHA
            ? (0, r.jsx)(i.Z, {
                ref: b,
                ..._,
                sitekey: n,
                onLoad: S,
                onError: j,
                onVerify: O,
                onChalExpired: Z,
                onOpen: N,
                onClose: T,
                size: R,
              })
            : (0, r.jsx)(o.Z, {
                ..._,
                sitekey: n,
                onLoad: S,
                onRender: P,
                onVerify: O,
                onError: j,
              });
      };
    },
    718742: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        }),
        n(47120);
      var r = n(735250),
        a = n(470079),
        i = n(481060),
        o = n(585483),
        c = n(637538),
        s = n(747387),
        p = n(981631),
        d = n(689938),
        h = n(383654),
        l = n(480781);
      let u = new Set([
        i.ModalTransitionState.ENTERING,
        i.ModalTransitionState.ENTERED,
      ]);
      function f(e) {
        let {
            onClose: t,
            onCaptchaVerify: n,
            onReject: f,
            transitionState: v,
            headerText: m,
            bodyText: y,
            rqtoken: C,
            serveInvisible: E,
            ...R
          } = e,
          _ = (0, c.Z)(f);
        return (a.useEffect(() => {
          o.S.subscribe(p.CkL.LAYER_POP_ESCAPE_KEY, t);
        }, [t]),
        null != v && u.has(v))
          ? (0, r.jsx)(i.ModalRoot, {
              transitionState: v,
              "aria-label": "CAPTCHA",
              className: h.modal,
              children: (0, r.jsxs)(i.ModalContent, {
                className: h.container,
                children: [
                  (0, r.jsx)(i.ModalCloseButton, {
                    className: h.close,
                    onClick: t,
                  }),
                  (0, r.jsx)("div", {
                    className: h.content,
                    children:
                      v !== i.ModalTransitionState.ENTERED
                        ? (0, r.jsx)(i.Spinner, {
                            type: i.Spinner.Type.SPINNING_CIRCLE,
                          })
                        : (0, r.jsxs)(r.Fragment, {
                            children: [
                              (0, r.jsx)("div", {
                                children: (0, r.jsx)("img", {
                                  src: l,
                                  alt: "",
                                }),
                              }),
                              (0, r.jsx)("div", {
                                className: h.title,
                                "aria-hidden": !0,
                                children:
                                  null != m
                                    ? m
                                    : d.Z.Messages.GENERIC_CAPTCHA_HEADER,
                              }),
                              (0, r.jsx)("div", {
                                children:
                                  null != y
                                    ? y
                                    : d.Z.Messages.GENERIC_CAPTCHA_DESCRIPTION,
                              }),
                              (0, r.jsxs)("div", {
                                className: h.captchaContainer,
                                children: [
                                  E &&
                                    (0, r.jsx)(i.Spinner, {
                                      type: i.Spinner.Type.SPINNING_CIRCLE,
                                    }),
                                  (0, r.jsx)(s.Z, {
                                    size: E ? "invisible" : void 0,
                                    onVerify: (e) => {
                                      _(), n(e, C), t();
                                    },
                                    ...R,
                                  }),
                                ],
                              }),
                            ],
                          }),
                  }),
                ],
              }),
            })
          : null;
      }
    },
    383654: function (e, t, n) {
      e.exports = {
        modal: "modal_d10a58",
        container: "container_d10a58",
        close: "close_d10a58",
        content: "content_d10a58",
        title: "title_d10a58",
        captchaContainer: "captchaContainer_d10a58",
      };
    },
  },
]);
//# sourceMappingURL=7243851e8d8397fdca37.js.map
