"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["35401"],
  {
    704903: function (e, t, s) {
      s(47120);
      var i,
        n = s(735250),
        a = s(470079),
        o = s(120356),
        l = s.n(o),
        r = s(772848),
        h = s(846519),
        d = s(481060),
        u = s(981631),
        c = s(689938),
        m = s(378611),
        f = s(739017),
        g = s(113207);
      function p(e, t, s) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = s),
          e
        );
      }
      class E extends (i = a.PureComponent) {
        async componentDidMount() {
          let [e, { default: t }] = await Promise.all([
            s.e("27526").then(s.t.bind(s, 555589, 19)),
            Promise.resolve().then(s.t.bind(s, 500923, 23)),
          ]);
          null != this._lottieRef &&
            (this._animItem = t.loadAnimation({
              container: this._lottieRef,
              renderer: "svg",
              loop: !0,
              autoplay: !0,
              animationData: e,
            }));
        }
        componentWillUnmount() {
          this._timeout.stop(),
            null != this._animItem &&
              (this._animItem.destroy(), (this._animItem = void 0));
        }
        renderInputs() {
          let { emailError: e, passwordError: t, submitting: s } = this.props,
            { email: i, password: a } = this.state;
          return (0, n.jsxs)("div", {
            className: m.container,
            children: [
              (0, n.jsx)(d.FormItem, {
                title: c.Z.Messages.FORM_LABEL_EMAIL,
                className: g.marginBottom20,
                children: (0, n.jsx)(d.TextInput, {
                  value: i,
                  error: e,
                  onChange: this.handleEmailChange,
                  onKeyPress: this.handleKeyPress,
                  autoFocus: !0,
                }),
              }),
              (0, n.jsx)(d.FormItem, {
                title: c.Z.Messages.FORM_LABEL_PASSWORD,
                className: g.marginBottom40,
                children: (0, n.jsx)(d.TextInput, {
                  type: "password",
                  value: a,
                  error: t,
                  onChange: this.handlePasswordChange,
                  onKeyPress: this.handleKeyPress,
                }),
              }),
              (0, n.jsx)(d.Button, {
                fullWidth: !0,
                size: d.Button.Sizes.LARGE,
                onClick: this.handleVerify,
                submitting: s,
                disabled: 0 === i.length || 0 === a.length,
                children: c.Z.Messages.VERIFY_ACCOUNT,
              }),
            ],
          });
        }
        renderActions() {
          let { canChange: e } = this.props;
          return (0, n.jsxs)("div", {
            className: m.container,
            children: [
              (0, n.jsx)(d.Button, {
                className: g.marginTop20,
                fullWidth: !0,
                size: d.Button.Sizes.LARGE,
                color: d.ButtonColors.PRIMARY,
                onClick: this.handleResendEmail,
                children: c.Z.Messages.RESEND_EMAIL,
              }),
              e &&
                (0, n.jsx)(d.Button, {
                  className: g.marginTop20,
                  fullWidth: !0,
                  size: d.Button.Sizes.MEDIUM,
                  look: d.ButtonLooks.LINK,
                  color: d.ButtonColors.LINK,
                  onClick: this.handleChangeEmailClick,
                  children: c.Z.Messages.CHANGE_EMAIL,
                }),
            ],
          });
        }
        render() {
          let e;
          let { resent: t } = this.state,
            { email: s, canResend: i, transitionState: a } = this.props;
          return (
            (e =
              t && null != s
                ? c.Z.Messages.VERIFY_EMAIL_BODY_RESENT.format({ email: s })
                : i
                  ? c.Z.Messages.VERIFY_EMAIL_BODY
                  : c.Z.Messages.ENTER_EMAIL_BODY),
            (0, n.jsxs)(d.ModalRoot, {
              transitionState: a,
              "aria-labelledby": this._headerId,
              className: l()(
                m.emailVerificationModal,
                f.vertical,
                f.alignCenter,
                f.justifyCenter,
                g.marginTop60,
              ),
              children: [
                (0, n.jsx)("div", {
                  className: m.animationContainer,
                  ref: this.setLottieRef,
                }),
                (0, n.jsx)("div", {
                  id: this._headerId,
                  className: l()(m.title, g.marginBottom8),
                  children: c.Z.Messages.VERIFY_BY_EMAIL,
                }),
                (0, n.jsx)("div", {
                  className: l()(m.body, g.marginBottom20),
                  children: e,
                }),
                i ? this.renderActions() : this.renderInputs(),
              ],
            })
          );
        }
        constructor(...e) {
          super(...e),
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
            p(this, "setLottieRef", (e) => {
              this._lottieRef = e;
            }),
            p(this, "handleVerify", () => {
              let { onVerify: e } = this.props;
              e(this.state.email, this.state.password);
            }),
            p(this, "handleResendEmail", () => {
              let { onResend: e, onClose: t } = this.props;
              e(),
                !this.state.resent &&
                  (this.setState({ resent: !0, shouldClose: !0 }),
                  this._timeout.start(3e3, () => {
                    this.state.shouldClose && t();
                  }));
            }),
            p(this, "handleChangeEmailClick", () => {
              let { onChangeEmailClick: e } = this.props;
              this.setState({ resent: !1, shouldClose: !1 }), e();
            }),
            p(this, "handleEmailChange", (e) => {
              this.setState({ email: e });
            }),
            p(this, "handlePasswordChange", (e) => {
              this.setState({ password: e });
            }),
            p(this, "handleKeyPress", (e) => {
              let { email: t, password: s } = this.state;
              13 === e.which &&
                t.length > 0 &&
                s.length > 0 &&
                (e.preventDefault(), this.handleVerify());
            });
        }
      }
      p(E, "defaultProps", {
        canResend: !1,
        canChange: !0,
        onChangeEmailClick: u.dG4,
        onVerify: (e, t) => {},
        onResend: u.dG4,
        onClose: u.dG4,
      }),
        (t.Z = E);
    },
    155433: function (e, t, s) {
      s.d(t, {
        P: function () {
          return a;
        },
      });
      var i = s(481060),
        n = s(689938);
      function a() {
        (0, i.showToast)(
          (0, i.createToast)(
            n.Z.Messages.USER_SETTINGS_UPDATE_FAILURE,
            i.ToastType.FAILURE,
          ),
        );
      }
    },
    284549: function (e, t, s) {
      s.r(t), s(47120);
      var i = s(735250),
        n = s(470079),
        a = s(442837),
        o = s(481060),
        l = s(893776),
        r = s(809206),
        h = s(704903),
        d = s(155433),
        u = s(23434),
        c = s(25990),
        m = s(594174),
        f = s(1964),
        g = s(981631),
        p = s(689938);
      t.default = (e) => {
        let { transitionState: t, onClose: s } = e,
          E = (0, a.e7)([c.Z], () => c.Z.getErrors()),
          _ = (0, a.e7)([c.Z], () => c.Z.getFormState()),
          C = (0, a.e7)([m.default], () => m.default.getCurrentUser()),
          I = (0, a.e7)([u.Z], () => u.Z.getAction()),
          R = !f.Z.isEmailReverification(I),
          [v, M] = n.useState(!0),
          y = _ === g.QZA.SUBMITTING;
        function A(e) {
          var t, s;
          return null !==
            (s =
              null == E
                ? void 0
                : null === (t = E[e]) || void 0 === t
                  ? void 0
                  : t[0]) && void 0 !== s
            ? s
            : "";
        }
        let T = A("email"),
          Z = A("password");
        return (0, i.jsx)(h.Z, {
          transitionState: t,
          email: null == C ? void 0 : C.email,
          emailError: T,
          passwordError: Z,
          submitting: y,
          canResend:
            v &&
            !y &&
            (null == C ? void 0 : C.email) != null &&
            0 === T.length &&
            0 === Z.length,
          canChange: R,
          onChangeEmailClick: function () {
            M(!1);
          },
          onVerify: function (e, t) {
            (0, r.Mn)({ email: e, password: t }).then((e) => {
              if (!(null == e ? void 0 : e.ok)) {
                var t;
                (null == e
                  ? void 0
                  : null === (t = e.body) || void 0 === t
                    ? void 0
                    : t.username) != null
                  ? (0, d.P)()
                  : 0 === Z.length &&
                    0 === T.length &&
                    (0, o.showToast)(
                      (0, o.createToast)(
                        p.Z.Messages.ERROR_GENERIC_TITLE,
                        o.ToastType.FAILURE,
                      ),
                    );
              }
            }),
              M(!0);
          },
          onResend: function () {
            l.Z.verifyResend();
          },
          onClose: s,
        });
      };
    },
    378611: function (e, t, s) {
      e.exports = {
        emailVerificationModal: "emailVerificationModal_be7f63",
        animationContainer: "animationContainer_be7f63",
        title: "title_be7f63",
        body: "body_be7f63",
        container: "container_be7f63",
      };
    },
  },
]);
//# sourceMappingURL=6d2081e2770956879105.js.map
