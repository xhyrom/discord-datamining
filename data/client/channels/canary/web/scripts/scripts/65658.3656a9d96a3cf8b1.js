"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["65658"],
  {
    3745(e, t, r) {
      r.d(t, { A: () => s });
      var n = r(64700);
      function i(e, t) {
        return (i =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var o = function (e) {
          var t = document.createElement("script");
          (t.async = !0),
            (t.defer = !0),
            (t.src = e),
            document.head && document.head.appendChild(t);
        },
        a = /(http|https):\/\/(www)?.+\/recaptcha/,
        c = ["sitekey", "theme", "size", "badge", "tabindex", "hl", "isolated"],
        s = (function (e) {
          function t() {
            for (var t, r = arguments.length, i = Array(r), c = 0; c < r; c++)
              i[c] = arguments[c];
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
                t.props.inject &&
                  !Array.from(document.scripts).reduce(function (e, t) {
                    return e || a.test(t.src);
                  }, !1) &&
                  o(
                    "https://recaptcha.net/recaptcha/api.js?render=explicit" +
                      (t.props.hl ? "&hl=" + t.props.hl : ""),
                  );
              }),
              (t._prepare = function () {
                var e = t.props,
                  r = e.explicit,
                  n = e.onLoad;
                window.grecaptcha.ready(function () {
                  t.setState({ ready: !0 }, function () {
                    r || t.renderExplicitly(), n && n();
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
                return new Promise(function (e, r) {
                  if (t.state.rendered)
                    return r(
                      Error(
                        "This recaptcha instance has been already rendered.",
                      ),
                    );
                  if (!t.state.ready || !t.container)
                    return r(
                      Error("Recaptcha is not ready for rendering yet."),
                    );
                  var n = t._renderRecaptcha(t.container, {
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
                  t.setState({ instanceId: n, rendered: !0 }, function () {
                    t.props.onRender && t.props.onRender(), e();
                  });
                });
              }),
              (t.reset = function () {
                return new Promise(function (e, r) {
                  if (t.state.rendered) return t._resetRecaptcha(), e();
                  r(Error("This recaptcha instance did not render yet."));
                });
              }),
              (t.execute = function () {
                return new Promise(function (e, r) {
                  return t.state.invisible
                    ? (t.state.rendered && (t._executeRecaptcha(), e()),
                      r(Error("This recaptcha instance did not render yet.")))
                    : r(
                        Error(
                          "Manual execution is only available for invisible size.",
                        ),
                      );
                });
              }),
              (t.getResponse = function () {
                return new Promise(function (e, r) {
                  if (t.state.rendered) return e(t._getResponseRecaptcha());
                  r(Error("This recaptcha instance did not render yet."));
                });
              }),
              (t.render = function () {
                var e = n.createElement("div", {
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
              var r = "invisible" === e.size;
              return r !== t.invisible ? { invisible: r } : null;
            }),
            (t.prototype.componentDidUpdate = function (e) {
              var t = this;
              c.reduce(function (r, n) {
                return t.props[n] !== e[n] ? [].concat(r, [n]) : r;
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
        })(n.Component);
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
  },
]);
//# sourceMappingURL=65658.3656a9d96a3cf8b1.js.map
