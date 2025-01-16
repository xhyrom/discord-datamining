"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["35401"],
  {
    704903: function (t, e, i) {
      i(47120);
      var n,
        s = i(200651),
        l = i(192379),
        a = i(120356),
        o = i.n(a),
        r = i(772848),
        h = i(846519),
        d = i(481060),
        u = i(981631),
        m = i(388032),
        c = i(59960),
        g = i(652849),
        p = i(232186);
      function f(t, e, i) {
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
      class C extends (n = l.PureComponent) {
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
            { email: n, password: l } = this.state;
          return (0, s.jsxs)("div", {
            className: c.container,
            children: [
              (0, s.jsx)(d.FormItem, {
                title: m.intl.string(m.t.dI4d4e),
                className: p.marginBottom20,
                children: (0, s.jsx)(d.TextInput, {
                  value: n,
                  error: t,
                  onChange: this.handleEmailChange,
                  onKeyPress: this.handleKeyPress,
                  autoFocus: !0,
                }),
              }),
              (0, s.jsx)(d.FormItem, {
                title: m.intl.string(m.t["CIGa+/"]),
                className: p.marginBottom40,
                children: (0, s.jsx)(d.TextInput, {
                  type: "password",
                  value: l,
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
                disabled: 0 === n.length || 0 === l.length,
                children: m.intl.string(m.t.v740sr),
              }),
            ],
          });
        }
        renderActions() {
          let { canChange: t } = this.props;
          return (0, s.jsxs)("div", {
            className: c.container,
            children: [
              (0, s.jsx)(d.Button, {
                className: p.marginTop20,
                fullWidth: !0,
                size: d.Button.Sizes.LARGE,
                color: d.ButtonColors.PRIMARY,
                onClick: this.handleResendEmail,
                children: m.intl.string(m.t.LdUkOz),
              }),
              t &&
                (0, s.jsx)(d.Button, {
                  className: p.marginTop20,
                  fullWidth: !0,
                  size: d.Button.Sizes.MEDIUM,
                  look: d.ButtonLooks.LINK,
                  color: d.ButtonColors.LINK,
                  onClick: this.handleChangeEmailClick,
                  children: m.intl.string(m.t.oP5zGB),
                }),
            ],
          });
        }
        render() {
          let t;
          let { resent: e } = this.state,
            { email: i, canResend: n, transitionState: l } = this.props;
          return (
            (t =
              e && null != i
                ? m.intl.format(m.t.JqLgQE, { email: i })
                : n
                  ? m.intl.string(m.t.tSXg8P)
                  : m.intl.string(m.t.KW5DEh)),
            (0, s.jsxs)(d.ModalRoot, {
              transitionState: l,
              "aria-labelledby": this._headerId,
              className: o()(
                c.emailVerificationModal,
                g.vertical,
                g.alignCenter,
                g.justifyCenter,
                p.marginTop60,
              ),
              children: [
                (0, s.jsx)("div", {
                  className: c.animationContainer,
                  ref: this.setLottieRef,
                }),
                (0, s.jsx)("div", {
                  id: this._headerId,
                  className: o()(c.title, p.marginBottom8),
                  children: m.intl.string(m.t["1MPz29"]),
                }),
                (0, s.jsx)("div", {
                  className: o()(c.body, p.marginBottom20),
                  children: t,
                }),
                n ? this.renderActions() : this.renderInputs(),
              ],
            })
          );
        }
        constructor(...t) {
          super(...t),
            f(this, "_lottieRef", void 0),
            f(this, "_animItem", null),
            f(this, "_timeout", new h.V7()),
            f(this, "_headerId", (0, r.Z)()),
            f(this, "state", {
              resent: !1,
              shouldClose: !1,
              email: "",
              password: "",
            }),
            f(this, "setLottieRef", (t) => {
              this._lottieRef = t;
            }),
            f(this, "handleVerify", () => {
              let { onVerify: t } = this.props;
              t(this.state.email, this.state.password);
            }),
            f(this, "handleResendEmail", () => {
              let { onResend: t, onClose: e } = this.props;
              t(),
                !this.state.resent &&
                  (this.setState({ resent: !0, shouldClose: !0 }),
                  this._timeout.start(3e3, () => {
                    this.state.shouldClose && e();
                  }));
            }),
            f(this, "handleChangeEmailClick", () => {
              let { onChangeEmailClick: t } = this.props;
              this.setState({ resent: !1, shouldClose: !1 }), t();
            }),
            f(this, "handleEmailChange", (t) => {
              this.setState({ email: t });
            }),
            f(this, "handlePasswordChange", (t) => {
              this.setState({ password: t });
            }),
            f(this, "handleKeyPress", (t) => {
              let { email: e, password: i } = this.state;
              13 === t.which &&
                e.length > 0 &&
                i.length > 0 &&
                (t.preventDefault(), this.handleVerify());
            });
        }
      }
      f(C, "defaultProps", {
        canResend: !1,
        canChange: !0,
        onChangeEmailClick: u.dG4,
        onVerify: (t, e) => {},
        onResend: u.dG4,
        onClose: u.dG4,
      }),
        (e.Z = C);
    },
    284549: function (t, e, i) {
      i.r(e), i(47120);
      var n = i(200651),
        s = i(192379),
        l = i(442837),
        a = i(481060),
        o = i(893776),
        r = i(809206),
        h = i(704903),
        d = i(155433),
        u = i(23434),
        m = i(25990),
        c = i(594174),
        g = i(1964),
        p = i(981631),
        f = i(388032);
      e.default = (t) => {
        let { transitionState: e, onClose: i } = t,
          C = (0, l.e7)([m.Z], () => m.Z.getErrors()),
          v = (0, l.e7)([m.Z], () => m.Z.getFormState()),
          y = (0, l.e7)([c.default], () => c.default.getCurrentUser()),
          I = (0, l.e7)([u.Z], () => u.Z.getAction()),
          R = !g.Z.isEmailReverification(I),
          [b, _] = s.useState(!0),
          x = v === p.QZA.SUBMITTING;
        function E(t) {
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
        let P = E("email"),
          j = E("password");
        return (0, n.jsx)(h.Z, {
          transitionState: e,
          email: null == y ? void 0 : y.email,
          emailError: P,
          passwordError: j,
          submitting: x,
          canResend:
            b &&
            !x &&
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
                    (0, a.showToast)(
                      (0, a.createToast)(
                        f.intl.string(f.t.R0RpRU),
                        a.ToastType.FAILURE,
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
    59960: function (t, e, i) {
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
//# sourceMappingURL=6f7a9a849b3a82d43e9d.js.map
