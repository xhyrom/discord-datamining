"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["35401"],
  {
    704903: function (t, e, i) {
      i(47120);
      var n,
        s = i(200651),
        a = i(192379),
        l = i(120356),
        o = i.n(l),
        r = i(772848),
        h = i(846519),
        d = i(481060),
        u = i(981631),
        c = i(388032),
        m = i(57258),
        g = i(639944),
        f = i(971436);
      function p(t, e, i) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = i),
          t
        );
      }
      class C extends (n = a.PureComponent) {
        async componentDidMount() {
          let [t, { default: e }] = await Promise.all([
            i.e("27526").then(i.t.bind(i, 555589, 19)),
            Promise.resolve().then(i.t.bind(i, 500923, 23)),
          ]);
          null != this._lottieRef &&
            (this._animItem = e.loadAnimation({
              container: this._lottieRef,
              renderer: "svg",
              loop: !0,
              autoplay: !0,
              animationData: t,
            }));
        }
        componentWillUnmount() {
          this._timeout.stop(),
            null != this._animItem &&
              (this._animItem.destroy(), (this._animItem = void 0));
        }
        renderInputs() {
          let { emailError: t, passwordError: e, submitting: i } = this.props,
            { email: n, password: a } = this.state;
          return (0, s.jsxs)("div", {
            className: m.container,
            children: [
              (0, s.jsx)(d.FormItem, {
                title: c.intl.string(c.t.dI4d4e),
                className: f.marginBottom20,
                children: (0, s.jsx)(d.TextInput, {
                  value: n,
                  error: t,
                  onChange: this.handleEmailChange,
                  onKeyPress: this.handleKeyPress,
                  autoFocus: !0,
                }),
              }),
              (0, s.jsx)(d.FormItem, {
                title: c.intl.string(c.t["CIGa+/"]),
                className: f.marginBottom40,
                children: (0, s.jsx)(d.TextInput, {
                  type: "password",
                  value: a,
                  error: e,
                  onChange: this.handlePasswordChange,
                  onKeyPress: this.handleKeyPress,
                }),
              }),
              (0, s.jsx)(d.Button, {
                fullWidth: !0,
                size: d.Button.Sizes.LARGE,
                onClick: this.handleVerify,
                submitting: i,
                disabled: 0 === n.length || 0 === a.length,
                children: c.intl.string(c.t.v740sr),
              }),
            ],
          });
        }
        renderActions() {
          let { canChange: t } = this.props;
          return (0, s.jsxs)("div", {
            className: m.container,
            children: [
              (0, s.jsx)(d.Button, {
                className: f.marginTop20,
                fullWidth: !0,
                size: d.Button.Sizes.LARGE,
                color: d.ButtonColors.PRIMARY,
                onClick: this.handleResendEmail,
                children: c.intl.string(c.t.LdUkOz),
              }),
              t &&
                (0, s.jsx)(d.Button, {
                  className: f.marginTop20,
                  fullWidth: !0,
                  size: d.Button.Sizes.MEDIUM,
                  look: d.ButtonLooks.LINK,
                  color: d.ButtonColors.LINK,
                  onClick: this.handleChangeEmailClick,
                  children: c.intl.string(c.t.oP5zGB),
                }),
            ],
          });
        }
        render() {
          let t;
          let { resent: e } = this.state,
            { email: i, canResend: n, transitionState: a } = this.props;
          return (
            (t =
              e && null != i
                ? c.intl.format(c.t.JqLgQE, { email: i })
                : n
                  ? c.intl.string(c.t.tSXg8P)
                  : c.intl.string(c.t.KW5DEh)),
            (0, s.jsxs)(d.ModalRoot, {
              transitionState: a,
              "aria-labelledby": this._headerId,
              className: o()(
                m.emailVerificationModal,
                g.vertical,
                g.alignCenter,
                g.justifyCenter,
                f.marginTop60,
              ),
              children: [
                (0, s.jsx)("div", {
                  className: m.animationContainer,
                  ref: this.setLottieRef,
                }),
                (0, s.jsx)("div", {
                  id: this._headerId,
                  className: o()(m.title, f.marginBottom8),
                  children: c.intl.string(c.t["1MPz29"]),
                }),
                (0, s.jsx)("div", {
                  className: o()(m.body, f.marginBottom20),
                  children: t,
                }),
                n ? this.renderActions() : this.renderInputs(),
              ],
            })
          );
        }
        constructor(...t) {
          super(...t),
            p(this, "_lottieRef", void 0),
            p(this, "_animItem", null),
            p(this, "_timeout", new h.V7()),
            p(this, "_headerId", (0, r.Z)()),
            p(this, "state", {
              resent: !1,
              shouldClose: !1,
              email: "",
              password: "",
            }),
            p(this, "setLottieRef", (t) => {
              this._lottieRef = t;
            }),
            p(this, "handleVerify", () => {
              let { onVerify: t } = this.props;
              t(this.state.email, this.state.password);
            }),
            p(this, "handleResendEmail", () => {
              let { onResend: t, onClose: e } = this.props;
              t(),
                !this.state.resent &&
                  (this.setState({ resent: !0, shouldClose: !0 }),
                  this._timeout.start(3e3, () => {
                    this.state.shouldClose && e();
                  }));
            }),
            p(this, "handleChangeEmailClick", () => {
              let { onChangeEmailClick: t } = this.props;
              this.setState({ resent: !1, shouldClose: !1 }), t();
            }),
            p(this, "handleEmailChange", (t) => {
              this.setState({ email: t });
            }),
            p(this, "handlePasswordChange", (t) => {
              this.setState({ password: t });
            }),
            p(this, "handleKeyPress", (t) => {
              let { email: e, password: i } = this.state;
              13 === t.which &&
                e.length > 0 &&
                i.length > 0 &&
                (t.preventDefault(), this.handleVerify());
            });
        }
      }
      p(C, "defaultProps", {
        canResend: !1,
        canChange: !0,
        onChangeEmailClick: u.dG4,
        onVerify: (t, e) => {},
        onResend: u.dG4,
        onClose: u.dG4,
      }),
        (e.Z = C);
    },
    155433: function (t, e, i) {
      i.d(e, {
        P: function () {
          return a;
        },
      });
      var n = i(481060),
        s = i(388032);
      function a() {
        (0, n.showToast)(
          (0, n.createToast)(s.intl.string(s.t["TGg/2t"]), n.ToastType.FAILURE),
        );
      }
    },
    284549: function (t, e, i) {
      i.r(e), i(47120);
      var n = i(200651),
        s = i(192379),
        a = i(442837),
        l = i(481060),
        o = i(893776),
        r = i(809206),
        h = i(704903),
        d = i(155433),
        u = i(23434),
        c = i(25990),
        m = i(594174),
        g = i(1964),
        f = i(981631),
        p = i(388032);
      e.default = (t) => {
        let { transitionState: e, onClose: i } = t,
          C = (0, a.e7)([c.Z], () => c.Z.getErrors()),
          v = (0, a.e7)([c.Z], () => c.Z.getFormState()),
          y = (0, a.e7)([m.default], () => m.default.getCurrentUser()),
          I = (0, a.e7)([u.Z], () => u.Z.getAction()),
          R = !g.Z.isEmailReverification(I),
          [b, _] = s.useState(!0),
          E = v === f.QZA.SUBMITTING;
        function x(t) {
          var e, i;
          return null !==
            (i =
              null == C
                ? void 0
                : null === (e = C[t]) || void 0 === e
                  ? void 0
                  : e[0]) && void 0 !== i
            ? i
            : "";
        }
        let P = x("email"),
          j = x("password");
        return (0, n.jsx)(h.Z, {
          transitionState: e,
          email: null == y ? void 0 : y.email,
          emailError: P,
          passwordError: j,
          submitting: E,
          canResend:
            b &&
            !E &&
            (null == y ? void 0 : y.email) != null &&
            0 === P.length &&
            0 === j.length,
          canChange: R,
          onChangeEmailClick: function () {
            _(!1);
          },
          onVerify: function (t, e) {
            (0, r.Mn)({ email: t, password: e }).then((t) => {
              if (!(null == t ? void 0 : t.ok)) {
                var e;
                (null == t
                  ? void 0
                  : null === (e = t.body) || void 0 === e
                    ? void 0
                    : e.username) != null
                  ? (0, d.P)()
                  : 0 === j.length &&
                    0 === P.length &&
                    (0, l.showToast)(
                      (0, l.createToast)(
                        p.intl.string(p.t.R0RpRU),
                        l.ToastType.FAILURE,
                      ),
                    );
              }
            }),
              _(!0);
          },
          onResend: function () {
            o.Z.verifyResend();
          },
          onClose: i,
        });
      };
    },
    57258: function (t, e, i) {
      t.exports = {
        emailVerificationModal: "emailVerificationModal_be7f63",
        animationContainer: "animationContainer_be7f63",
        title: "title_be7f63",
        body: "body_be7f63",
        container: "container_be7f63",
      };
    },
  },
]);
//# sourceMappingURL=f3430f93947ea950a535.js.map
