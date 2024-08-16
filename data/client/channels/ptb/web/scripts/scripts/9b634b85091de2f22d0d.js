"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["12192"],
  {
    745625: function (e, t, n) {
      var a = n(15393),
        r = n(919499),
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
            a = p.find(function (e) {
              return e.scope === n.window;
            });
          if (n.document.getElementById(c) && a) return a.promise;
          var r = new Promise(function (a, r) {
            n.window[s] = a;
            var i = e.apihost || "https://js.hcaptcha.com";
            delete e.apihost;
            var p = n.document.createElement("script");
            (p.id = c),
              (p.src = i + "/1/api.js?render=explicit&onload=" + s),
              (p.async = void 0 === e.loadAsync || e.loadAsync),
              delete e.loadAsync,
              (p.onerror = function (e) {
                return r("script-error");
              });
            var d = (0, o.Ku)(e);
            (p.src += "" !== d ? "&" + d : ""), t.appendChild(p);
          });
          return p.push({ promise: r, scope: n.window }), r;
        },
        h = (function (e) {
          function t(t) {
            var n;
            return (
              ((n = e.call(this, t) || this)._hcaptcha = void 0),
              (n.renderCaptcha = n.renderCaptcha.bind((0, a.Z)(n))),
              (n.resetCaptcha = n.resetCaptcha.bind((0, a.Z)(n))),
              (n.removeCaptcha = n.removeCaptcha.bind((0, a.Z)(n))),
              (n.isReady = n.isReady.bind((0, a.Z)(n))),
              (n.loadCaptcha = n.loadCaptcha.bind((0, a.Z)(n))),
              (n.handleOnLoad = n.handleOnLoad.bind((0, a.Z)(n))),
              (n.handleSubmit = n.handleSubmit.bind((0, a.Z)(n))),
              (n.handleExpire = n.handleExpire.bind((0, a.Z)(n))),
              (n.handleError = n.handleError.bind((0, a.Z)(n))),
              (n.handleOpen = n.handleOpen.bind((0, a.Z)(n))),
              (n.handleClose = n.handleClose.bind((0, a.Z)(n))),
              (n.handleChallengeExpired = n.handleChallengeExpired.bind(
                (0, a.Z)(n),
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
          (0, r.Z)(t, e);
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
                  a = e.endpoint,
                  r = e.host,
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
                  endpoint: a,
                  hl: o,
                  host: r,
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
                a = n.isRemoved,
                r = n.captchaId,
                i = this._hcaptcha;
              if (void 0 !== i && !a) {
                var o = i.getResponse(r),
                  c = i.getRespKey(r);
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
                a = this._hcaptcha;
              this.isReady() && a.reset(n), t && t(e);
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
      function a(e) {
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
      function r(e) {
        var t = (e && e.ownerDocument) || document,
          n = t.defaultView || t.parentWindow || window;
        return { document: t, window: n };
      }
      function i(e) {
        return e || document.head;
      }
      n.d(t, {
        $h: function () {
          return r;
        },
        Ku: function () {
          return a;
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
      var a = n(470079);
      function r(e, t) {
        return (r =
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
            for (var t, n = arguments.length, r = Array(n), c = 0; c < n; c++)
              r[c] = arguments[c];
            return (
              ((t = e.call.apply(e, [this].concat(r)) || this).container =
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
                  a = e.onLoad;
                window.grecaptcha.ready(function () {
                  t.setState({ ready: !0 }, function () {
                    n || t.renderExplicitly(), a && a();
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
                  var a = t._renderRecaptcha(t.container, {
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
                  t.setState({ instanceId: a, rendered: !0 }, function () {
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
                var e = a.createElement("div", {
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
            r(t, e),
            (t.getDerivedStateFromProps = function (e, t) {
              var n = "invisible" === e.size;
              return n !== t.invisible ? { invisible: n } : null;
            }),
            (t.prototype.componentDidUpdate = function (e) {
              var t = this;
              c.reduce(function (n, a) {
                return t.props[a] !== e[a] ? [].concat(n, [a]) : n;
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
        })(a.Component);
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
      var a, r;
      function i(e) {
        return {
          captchaService: e.captcha_service,
          sitekey: e.captcha_sitekey,
          options: { rqdata: e.captcha_rqdata, rqtoken: e.captcha_rqtoken },
        };
      }
      n.r(t),
        n.d(t, {
          CaptchaError: function () {
            return a;
          },
          extractCaptchaPropsFromResponseBody: function () {
            return i;
          },
        }),
        ((r = a || (a = {})).CANCEL = "cancel"),
        (r.ERROR = "error"),
        (r.EXPIRED = "expired");
    },
    637538: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var a = n(470079),
        r = n(626135),
        i = n(353250),
        o = n(981631);
      function c(e) {
        let t = a.useRef(!0);
        return (
          a.useEffect(
            () => () => {
              t.current && (null == e || e(i.CaptchaError.CANCEL));
            },
            [],
          ),
          a.useEffect(
            () => (
              r.default.track(o.rMx.OPEN_MODAL, { type: "Guild Join Captcha" }),
              () => {
                t.current &&
                  r.default.track(o.rMx.MODAL_DISMISSED, {
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
      var a = n(735250),
        r = n(470079),
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
            ...R
          } = e,
          _ = r.useRef(null),
          b = (0, c.Z)(),
          [x, g] = r.useState(!1),
          w = r.useCallback(
            (e) => {
              h.default.track(l.rMx.CAPTCHA_EVENT, {
                captcha_event_name: e,
                captcha_service: t,
                sitekey: n,
                captcha_flow_key: b,
              });
            },
            [b, t, n],
          ),
          k = r.useCallback(
            (e) => {
              d.Z.increment({
                name: s.V.CAPTCHA_EVENT,
                tags: ["event_name:".concat(e), "captcha_service:".concat(t)],
              });
            },
            [t],
          ),
          A = r.useCallback(() => {
            if (null != u && "" !== u && null != _.current) {
              var e;
              null === (e = _.current) ||
                void 0 === e ||
                e.setData({ rqdata: u });
            }
          }, [u, _]),
          I = r.useCallback(() => {
            !x && (w("initial-load"), k("initial-load"), g(!0)), A();
          }, [k, x, w, A]);
        r.useEffect(() => {
          A();
        }, [A]),
          r.useEffect(() => {
            I();
          }, [I]);
        let S = r.useCallback(() => {
            w("error"), k("error"), A(), null == m || m();
          }, [w, k, A, m]),
          j = r.useCallback(
            (e) => {
              w("verify"), k("verify"), v(e);
            },
            [k, v, w],
          ),
          O = r.useCallback(() => {
            w("render"), null == f || f();
          }, [f, w]),
          P = r.useCallback(() => {
            w("open"), k("open"), null == y || y();
          }, [k, y, w]),
          Z = r.useCallback(() => {
            w("close"), A(), null == C || C();
          }, [C, w, A]),
          T = r.useCallback(() => {
            w("chal-expire"), null == E || E();
          }, [E, w]);
        return ((null == n || "" === n) && (n = l.OL7), t === p.hP.RECAPTCHA)
          ? (0, a.jsx)(o.Z, {
              ...R,
              onLoad: I,
              onRender: O,
              onVerify: j,
              onError: S,
              sitekey: n,
            })
          : t === p.hP.HCAPTCHA
            ? (0, a.jsx)(i.Z, {
                ref: _,
                ...R,
                sitekey: n,
                onLoad: I,
                onError: S,
                onVerify: j,
                onChalExpired: T,
                onOpen: P,
                onClose: Z,
              })
            : (0, a.jsx)(o.Z, {
                ...R,
                sitekey: n,
                onLoad: I,
                onRender: O,
                onVerify: j,
                onError: S,
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
      var a = n(735250),
        r = n(470079),
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
            ...E
          } = e,
          R = (0, c.Z)(f);
        return (r.useEffect(() => {
          o.S.subscribe(p.CkL.LAYER_POP_ESCAPE_KEY, t);
        }, [t]),
        null != v && u.has(v))
          ? (0, a.jsx)(i.ModalRoot, {
              transitionState: v,
              "aria-label": "CAPTCHA",
              className: h.modal,
              children: (0, a.jsxs)(i.ModalContent, {
                className: h.container,
                children: [
                  (0, a.jsx)(i.ModalCloseButton, {
                    className: h.close,
                    onClick: t,
                  }),
                  (0, a.jsx)("div", {
                    className: h.content,
                    children:
                      v !== i.ModalTransitionState.ENTERED
                        ? (0, a.jsx)(i.Spinner, {
                            type: i.Spinner.Type.SPINNING_CIRCLE,
                          })
                        : (0, a.jsxs)(a.Fragment, {
                            children: [
                              (0, a.jsx)("div", {
                                children: (0, a.jsx)("img", {
                                  src: l,
                                  alt: "",
                                }),
                              }),
                              (0, a.jsx)("div", {
                                className: h.title,
                                "aria-hidden": !0,
                                children:
                                  null != m
                                    ? m
                                    : d.Z.Messages.GENERIC_CAPTCHA_HEADER,
                              }),
                              (0, a.jsx)("div", {
                                children:
                                  null != y
                                    ? y
                                    : d.Z.Messages.GENERIC_CAPTCHA_DESCRIPTION,
                              }),
                              (0, a.jsx)("div", {
                                className: h.captchaContainer,
                                children: (0, a.jsx)(s.Z, {
                                  onVerify: (e) => {
                                    R(), n(e, C), t();
                                  },
                                  ...E,
                                }),
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
//# sourceMappingURL=9b634b85091de2f22d0d.js.map
