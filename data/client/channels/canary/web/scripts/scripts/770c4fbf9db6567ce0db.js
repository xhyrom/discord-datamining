"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["12192"],
  {
    894582: function (e, t, n) {
      var r = n(987609),
        i = n(190031),
        a = n(192379),
        c = n(616295),
        o = "hcaptcha-api-script-id",
        s = "hcaptchaOnLoad",
        p = [],
        d = function (e) {
          void 0 === e && (e = {});
          var t = (0, c.as)(e.scriptLocation);
          delete e.scriptLocation;
          var n = (0, c.$h)(t),
            r = p.find(function (e) {
              return e.scope === n.window;
            });
          if (n.document.getElementById(o) && r) return r.promise;
          var i = new Promise(function (r, i) {
            n.window[s] = r;
            var a = e.apihost || "https://js.hcaptcha.com";
            delete e.apihost;
            var p = n.document.createElement("script");
            (p.id = o),
              (p.src = a + "/1/api.js?render=explicit&onload=" + s),
              (p.async = void 0 === e.loadAsync || e.loadAsync),
              delete e.loadAsync,
              (p.onerror = function (e) {
                return i("script-error");
              });
            var d = (0, c.Ku)(e);
            (p.src += "" !== d ? "&" + d : ""), t.appendChild(p);
          });
          return p.push({ promise: i, scope: n.window }), i;
        },
        l = (function (e) {
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
              (n.ref = a.createRef()),
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
          (0, i.Z)(t, e);
          var n = t.prototype;
          return (
            (n.componentDidMount = function () {
              var e = this,
                t = (0, c.as)(this.props.scriptLocation),
                n = (0, c.$h)(t);
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
                  i = e.host,
                  a = e.imghost,
                  c = e.languageOverride,
                  o = e.reCaptchaCompat,
                  s = e.reportapi,
                  p = e.sentry,
                  l = e.custom,
                  u = e.loadAsync,
                  h = e.scriptLocation;
                d({
                  apihost: t,
                  assethost: n,
                  endpoint: r,
                  hl: c,
                  host: i,
                  imghost: a,
                  recaptchacompat: !1 === o ? "off" : null,
                  reportapi: s,
                  sentry: p,
                  custom: l,
                  loadAsync: u,
                  scriptLocation: h,
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
                var t = (0, c.as)(e.props.scriptLocation),
                  n = (0, c.$h)(t);
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
                i = n.captchaId,
                a = this._hcaptcha;
              if (void 0 !== a && !r) {
                var c = a.getResponse(i),
                  o = a.getRespKey(i);
                t && t(c, o);
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
              return a.createElement("div", { ref: this.ref, id: e });
            }),
            t
          );
        })(a.Component);
      t.Z = l;
    },
    616295: function (e, t, n) {
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
      function i(e) {
        var t = (e && e.ownerDocument) || document,
          n = t.defaultView || t.parentWindow || window;
        return { document: t, window: n };
      }
      function a(e) {
        return e || document.head;
      }
      n.d(t, {
        $h: function () {
          return i;
        },
        Ku: function () {
          return r;
        },
        as: function () {
          return a;
        },
      });
    },
    29978: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var r = n(192379);
      function i(e, t) {
        return (i =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var a = function (e) {
          var t = document.createElement("script");
          (t.async = !0),
            (t.defer = !0),
            (t.src = e),
            document.head && document.head.appendChild(t);
        },
        c = /(http|https):\/\/(www)?.+\/recaptcha/,
        o = ["sitekey", "theme", "size", "badge", "tabindex", "hl", "isolated"],
        s = (function (e) {
          function t() {
            for (var t, n = arguments.length, i = Array(n), o = 0; o < n; o++)
              i[o] = arguments[o];
            return (
              ((t = e.call.apply(e, [this].concat(i)) || this).container =
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
                  ((e = c),
                  !Array.from(document.scripts).reduce(function (t, n) {
                    return t || e.test(n.src);
                  }, !1)) &&
                  a(
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
            i(t, e),
            (t.getDerivedStateFromProps = function (e, t) {
              var n = "invisible" === e.size;
              return n !== t.invisible ? { invisible: n } : null;
            }),
            (t.prototype.componentDidUpdate = function (e) {
              var t = this;
              o.reduce(function (n, r) {
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
    234888: function (e, t, n) {
      n.d(t, {
        i: function () {
          return r;
        },
      });
      let r = 3e4;
    },
    109167: function (e, t, n) {
      n.d(t, {
        H: function () {
          return i;
        },
      });
      let r = (0, n(818083).B)({
        kind: "user",
        id: "2024-08_captcha_serve_volume_distribution_metric",
        label: "Captcha serve volume distribution metric",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label: "Enables sending captcha serve volume distribution metric",
            config: { enabled: !0 },
          },
        ],
      });
      function i(e) {
        return !!r.useExperiment({ location: e }, { autoTrackExposure: !0 })
          .enabled;
      }
    },
    644947: function (e, t, n) {
      n.d(t, {
        Zq: function () {
          return d;
        },
        _8: function () {
          return s;
        },
        s$: function () {
          return p;
        },
      }),
        n(47120);
      var r = n(15729),
        i = n(286379),
        a = n(731965),
        c = n(797614);
      let o = (0, r.U)((e) => ({ captchaServeVolume: {} }));
      function s() {
        return 0 === Object.keys(o.getState().captchaServeVolume).length;
      }
      function p(e) {
        (0, a.j)(() => {
          o.setState((t) =>
            null == e
              ? t
              : e in t.captchaServeVolume
                ? {
                    captchaServeVolume: {
                      ...t.captchaServeVolume,
                      [e]: t.captchaServeVolume[e] + 1,
                    },
                  }
                : { captchaServeVolume: { ...t.captchaServeVolume, [e]: 1 } },
          );
        });
      }
      function d() {
        for (let [e, t] of Object.entries(o.getState().captchaServeVolume))
          c.Z.distribution(
            {
              name: i.V.CAPTCHA_SERVE_VOLUME_DISTRIBUTION,
              tags: ["user_flow:".concat(e)],
            },
            t,
            !0,
          );
        (0, a.j)(() => o.setState({ captchaServeVolume: {} }));
      }
    },
    353250: function (e, t, n) {
      n.r(t),
        n.d(t, {
          CaptchaError: function () {
            return i;
          },
          emitCaptchaDistributionMetric: function () {
            return s;
          },
          extractCaptchaPropsFromResponse: function () {
            return o;
          },
        });
      var r,
        i,
        a = n(644947),
        c = n(234888);
      function o(e) {
        var t;
        return {
          captchaService: e.captcha_service,
          sitekey: e.captcha_sitekey,
          options: {
            rqdata: e.captcha_rqdata,
            rqtoken: e.captcha_rqtoken,
            serveInvisible:
              null !== (t = e.should_serve_invisible) && void 0 !== t && t,
            userflow: e.user_flow,
          },
        };
      }
      function s(e, t) {
        if (!!e)
          (0, a._8)() && setTimeout(() => (0, a.Zq)(), c.i), (0, a.s$)(t);
      }
      ((r = i || (i = {})).CANCEL = "cancel"),
        (r.ERROR = "error"),
        (r.EXPIRED = "expired");
    },
    637538: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var r = n(192379),
        i = n(493773),
        a = n(626135),
        c = n(353250),
        o = n(981631);
      function s(e) {
        let t = r.useRef(!0);
        return (
          (0, i.Z)(() => () => {
            t.current && (null == e || e(c.CaptchaError.CANCEL));
          }),
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
            [],
          ),
          () => {
            t.current = !1;
          }
        );
      }
    },
    747387: function (e, t, n) {
      n(47120);
      var r = n(200651),
        i = n(192379),
        a = n(894582),
        c = n(29978),
        o = n(772848),
        s = n(286379),
        p = n(343817),
        d = n(797614),
        l = n(626135),
        u = n(109167),
        h = n(353250),
        f = n(599857),
        v = n(981631);
      t.Z = (e) => {
        let {
            captchaService: t = p.hP.RECAPTCHA,
            sitekey: n,
            rqdata: m,
            onRender: y,
            onVerify: C,
            onError: E,
            onOpen: b,
            onClose: _,
            onChalExpired: R,
            size: x,
            userflow: g,
            ...w
          } = e,
          S = i.useRef(null),
          A = (0, u.H)("captcha"),
          k = (0, o.Z)(),
          [I, j] = i.useState(!1),
          O = i.useCallback(
            (e) => {
              l.default.track(v.rMx.CAPTCHA_EVENT, {
                captcha_event_name: e,
                captcha_service: t,
                sitekey: n,
                captcha_flow_key: k,
              });
            },
            [k, t, n],
          ),
          L = i.useCallback(
            (e) => {
              d.Z.increment({
                name: s.V.CAPTCHA_EVENT,
                tags: ["event_name:".concat(e), "captcha_service:".concat(t)],
              });
            },
            [t],
          ),
          P = i.useCallback(() => {
            if (t === p.hP.HCAPTCHA) {
              var e, n;
              null != m &&
                "" !== m &&
                null != S.current &&
                (null === (e = S.current) ||
                  void 0 === e ||
                  e.setData({ rqdata: m })),
                "invisible" === x &&
                  null != S.current &&
                  (null === (n = S.current) || void 0 === n || n.execute());
            }
          }, [m, S, x, t]),
          T = i.useCallback(() => {
            !I && (O("initial-load"), L("initial-load"), j(!0)), P();
          }, [L, I, O, P]);
        i.useEffect(() => {
          P();
        }, [P]),
          i.useEffect(() => {
            T();
          }, [T]);
        let V = i.useCallback(() => {
            O("error"), L("error"), P(), null == E || E();
          }, [O, L, P, E]),
          N = i.useCallback(
            (e) => {
              O("verify"), L("verify"), C(e);
            },
            [L, C, O],
          ),
          Z = i.useCallback(() => {
            O("render"),
              (0, h.emitCaptchaDistributionMetric)(A, g),
              null == y || y();
          }, [A, y, O, g]),
          D = i.useCallback(() => {
            O("open"),
              L("open"),
              (0, h.emitCaptchaDistributionMetric)(A, g),
              null == b || b();
          }, [L, A, b, O, g]),
          M = i.useCallback(() => {
            O("close"), null == _ || _(), P();
          }, [_, O, P]),
          H = i.useCallback(() => {
            O("chal-expire"), null == R || R();
          }, [R, O]);
        return ((null == n || "" === n) && (n = v.OL7), t === p.hP.RECAPTCHA)
          ? (0, r.jsx)(c.Z, {
              ...w,
              onLoad: T,
              onRender: Z,
              onVerify: N,
              onError: V,
              sitekey: n,
            })
          : t === p.hP.RECAPTCHA_ENTERPRISE
            ? (0, r.jsx)(f._, {
                ...w,
                onLoad: T,
                onRender: Z,
                onVerify: N,
                onError: V,
                sitekey: n,
                action: g,
              })
            : t === p.hP.HCAPTCHA
              ? (0, r.jsx)(a.Z, {
                  ref: S,
                  ...w,
                  sitekey: n,
                  onLoad: T,
                  onError: V,
                  onVerify: N,
                  onChalExpired: H,
                  onOpen: D,
                  onClose: M,
                  size: x,
                  reCaptchaCompat: !1,
                })
              : (0, r.jsx)(c.Z, {
                  ...w,
                  sitekey: n,
                  onLoad: T,
                  onRender: Z,
                  onVerify: N,
                  onError: V,
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
      var r = n(200651),
        i = n(192379),
        a = n(481060),
        c = n(585483),
        o = n(637538),
        s = n(747387),
        p = n(981631),
        d = n(388032),
        l = n(172857),
        u = n(480781);
      let h = new Set([
        a.ModalTransitionState.ENTERING,
        a.ModalTransitionState.ENTERED,
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
            ...b
          } = e,
          _ = (0, o.Z)(f);
        return (i.useEffect(() => {
          c.S.subscribe(p.CkL.LAYER_POP_ESCAPE_KEY, t);
        }, [t]),
        null != v && h.has(v))
          ? (0, r.jsx)(a.ModalRoot, {
              transitionState: v,
              "aria-label": "CAPTCHA",
              className: l.modal,
              children: (0, r.jsxs)(a.ModalContent, {
                className: l.container,
                children: [
                  (0, r.jsx)(a.ModalCloseButton, {
                    className: l.close,
                    onClick: t,
                  }),
                  (0, r.jsx)("div", {
                    className: l.content,
                    children:
                      v !== a.ModalTransitionState.ENTERED
                        ? (0, r.jsx)(a.Spinner, {
                            type: a.Spinner.Type.SPINNING_CIRCLE,
                          })
                        : (0, r.jsxs)(r.Fragment, {
                            children: [
                              (0, r.jsx)("div", {
                                children: (0, r.jsx)("img", {
                                  src: u,
                                  alt: "",
                                }),
                              }),
                              (0, r.jsx)("div", {
                                className: l.title,
                                "aria-hidden": !0,
                                children:
                                  null != m ? m : d.intl.string(d.t.FpoiHR),
                              }),
                              (0, r.jsx)("div", {
                                children:
                                  null != y ? y : d.intl.string(d.t["/CidxM"]),
                              }),
                              (0, r.jsxs)("div", {
                                className: l.captchaContainer,
                                children: [
                                  E &&
                                    (0, r.jsx)(a.Spinner, {
                                      type: a.Spinner.Type.SPINNING_CIRCLE,
                                    }),
                                  (0, r.jsx)(s.Z, {
                                    size: E ? "invisible" : void 0,
                                    onVerify: (e) => {
                                      _(), n(e, C), t();
                                    },
                                    onClose: E ? t : void 0,
                                    ...b,
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
    599857: function (e, t, n) {
      n.d(t, {
        _: function () {
          return d;
        },
      });
      var r = n(200651),
        i = n(192379),
        a = n(29978),
        c = n(780384),
        o = n(481060),
        s = n(756148),
        p = n(981631);
      function d(e) {
        return (
          i.useEffect(() => {
            s.I.loadRecaptchaScript(e.sitekey, () => {
              var t, n, r;
              return null === (r = window) || void 0 === r
                ? void 0
                : null === (n = r.grecaptcha) || void 0 === n
                  ? void 0
                  : null === (t = n.enterprise) || void 0 === t
                    ? void 0
                    : t.ready(async () => {
                        var t;
                        let n = await (
                          null === (t = window) || void 0 === t
                            ? void 0
                            : t.grecaptcha
                        ).enterprise.execute(
                          e.sitekey,
                          null != e.action ? { action: e.action } : void 0,
                        );
                        e.onVerify(n);
                      });
            });
          }, [e]),
          (0, r.jsx)(o.Spinner, {})
        );
      }
      let l = (e) => {
        let { theme: t, ...n } = e,
          i = (0, c.wj)(t) ? "dark" : "light";
        return (0, r.jsx)(a.Z, { sitekey: p.OL7, ...n, theme: i });
      };
      (l.Themes = { LIGHT: "light", DARK: "dark" }),
        (l.Sizes = {
          COMPACT: "compact",
          NORMAL: "normal",
          INVISIBLE: "invisible",
        }),
        (t.Z = 12633 == n.j ? l : null);
    },
    756148: function (e, t, n) {
      n.d(t, {
        I: function () {
          return r;
        },
      });
      class r {
        static getSiteKey(e) {
          return null != e
            ? e
            : "production" === window.GLOBAL_ENV.PROJECT_ENV
              ? "6LeYqFcqAAAAAD6iZesmNgVulsO4PkpBdr6NVG6M"
              : "6LdtfVMqAAAAAMurhtf2pDhK0oqD4eLqeQPh025y";
        }
        static loadRecaptchaScript(e, t) {
          if (
            null !=
            document.getElementById(
              "recaptcha-script-".concat(this.getSiteKey(e)),
            )
          ) {
            null != t && t();
            return;
          }
          let n = document.createElement("script");
          (n.src =
            "https://www.google.com/recaptcha/enterprise.js?render=".concat(
              this.getSiteKey(e),
            )),
            (n.id = "recaptcha-script-".concat(this.getSiteKey(e))),
            (n.async = !0),
            (n.defer = !0),
            document.body.appendChild(n),
            null != t &&
              (n.onload = () => {
                t();
              });
        }
      }
    },
    172857: function (e, t, n) {
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
//# sourceMappingURL=770c4fbf9db6567ce0db.js.map
