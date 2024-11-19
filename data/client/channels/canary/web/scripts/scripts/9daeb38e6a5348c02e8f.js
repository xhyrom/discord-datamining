"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["13700"],
  {
    153069: function (e, t, s) {
      s(757143);
      var n,
        r = s(200651),
        o = s(192379),
        i = s(120356),
        a = s.n(i),
        l = s(442837),
        d = s(481060),
        c = s(893776),
        u = s(479495),
        h = s(388905),
        f = s(379760),
        p = s(124860),
        m = s(144114),
        g = s(541692),
        _ = s(952802),
        x = s(210887),
        C = s(314897),
        b = s(896797),
        N = s(585483),
        A = s(981631),
        R = s(388032),
        T = s(640890),
        I = s(971436);
      function v(e, t, s) {
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
      class S extends (n = o.PureComponent) {
        componentDidMount() {
          window.addEventListener("keydown", this.handleTabOrEnter);
        }
        componentDidUpdate(e) {
          let { authenticated: t, transitionTo: s } = this.props;
          if (
            (t && !e.authenticated && s(A.Z5c.APP),
            e.errors !== this.props.errors)
          ) {
            var n, r, o;
            this.hasError("password")
              ? null === (n = this.passwordRef) || void 0 === n || n.focus()
              : this.hasError("email") || this.hasError("login")
                ? null === (r = this.loginRef) || void 0 === r || r.focus()
                : this.hasError("code") &&
                  (null === (o = this.codeRef) || void 0 === o || o.focus());
          }
        }
        componentWillUnmount() {
          window.removeEventListener("keydown", this.handleTabOrEnter);
        }
        hasError(e) {
          return null != this.props.errors[e];
        }
        renderDefaultForm() {
          var e;
          let { country: t } = this.props,
            s = !this.hasError("email") && this.hasError("password"),
            n = (0, r.jsxs)(o.Fragment, {
              children: [
                (0, r.jsx)(
                  h.Dx,
                  {
                    className: a()(I.marginBottom8, T.title),
                    children: R.intl.string(R.t.bPP34e),
                  },
                  "title",
                ),
                (0, r.jsx)(d.Text, {
                  color: "header-secondary",
                  variant: "text-md/normal",
                  className: T.subtitle,
                  children: R.intl.string(R.t.rvx0T0),
                }),
              ],
            });
          return (0, r.jsxs)("div", {
            className: T.mainLoginContainer,
            children: [
              n,
              (0, r.jsxs)(h.gO, {
                className: T.loginForm,
                children: [
                  (0, r.jsx)(_.Z, {
                    alpha2: t.alpha2,
                    countryCode: t.code.split(" ")[0],
                    className: I.marginBottom20,
                    label: R.intl.string(R.t.tUjnxs),
                    error:
                      null !== (e = this.renderError("login")) && void 0 !== e
                        ? e
                        : this.renderError("email"),
                    onChange: (e, t) =>
                      this.setState({ login: e, loginPrefix: t }),
                    setRef: this.setLoginRef,
                    autoCapitalize: "none",
                    autoComplete: "off",
                    autoCorrect: "off",
                    spellCheck: "false",
                    value: this.state.login,
                    autoFocus: !s,
                    required: !0,
                  }),
                  (0, r.jsx)(h.II, {
                    label: R.intl.string(R.t["CIGa+/"]),
                    error: this.renderError("password"),
                    onChange: (e) => this.setState({ password: e }),
                    name: "password",
                    type: "password",
                    setRef: this.setPasswordRef,
                    autoComplete: "off",
                    spellCheck: "false",
                    autoFocus: s,
                    value: this.state.password,
                    required: !0,
                  }),
                  (0, r.jsx)(h.zx, {
                    onClick: this.handleForgotPassword,
                    look: d.Button.Looks.LINK,
                    color: d.Button.Colors.LINK,
                    className: a()(I.marginTop4),
                    children: R.intl.string(R.t.wWIufn),
                  }),
                ],
              }),
            ],
          });
        }
        renderDefault() {
          let {
            authBoxClassName: e,
            loginStatus: t,
            closeLogin: s,
            theme: n,
          } = this.props;
          return (0, r.jsxs)("div", {
            className: T.__invalid_pageContainer,
            children: [
              (0, r.jsx)(h.ZP, {
                tag: "form",
                className: e,
                expanded: !0,
                theme: n,
                children: this.renderDefaultForm(),
              }),
              (0, r.jsx)(d.ThemeProvider, {
                theme: n,
                children: (e) =>
                  (0, r.jsxs)("div", {
                    "data-theme": n,
                    "data-disable-adaptive-theme": !0,
                    className: a()(e, T.navRow),
                    children: [
                      (0, r.jsx)(d.Button, {
                        type: "button",
                        look: d.Button.Looks.LINK,
                        "aria-label": "back",
                        onClick: s,
                        size: d.Button.Sizes.SMALL,
                        className: a()(e, T.backButton),
                        children: R.intl.string(R.t["13/7kZ"]),
                      }),
                      (0, r.jsx)(d.Button, {
                        "aria-label": "continue",
                        submitting: t === A.u34.LOGGING_IN,
                        color: d.Button.Colors.BRAND,
                        onClick: this.handleLogin,
                        className: T.continueButton,
                        children: R.intl.string(R.t["3PatS0"]),
                      }),
                    ],
                  }),
              }),
            ],
          });
        }
        renderMFA() {
          let e = {
            ticket: this.props.mfaTicket,
            methods: this.props.mfaMethods,
          };
          return (0, r.jsx)(h.ZP, {
            style: { padding: 0 },
            theme: this.props.theme,
            children: (0, r.jsx)(p.Cd, {
              mfaFinish: this.handleTokenSubmitMFA,
              mfaChallenge: e,
              onEarlyClose: () => {
                this.handleReset();
              },
              width: 480,
            }),
          });
        }
        renderDisabledAccount() {
          let { authBoxClassName: e, theme: t } = this.props,
            s = this.props.loginStatus === A.u34.ACCOUNT_DISABLED,
            n = s ? R.intl.string(R.t["j3rC+f"]) : R.intl.string(R.t.ZFWofn),
            o = s ? R.intl.string(R.t["6eNTWV"]) : R.intl.string(R.t.pCBti4);
          return (0, r.jsxs)(h.ZP, {
            tag: "form",
            onSubmit: this.handleReset,
            className: e,
            theme: t,
            children: [
              (0, r.jsx)(h.Dx, { className: I.marginBottom8, children: n }),
              (0, r.jsx)(h.DK, { className: I.marginBottom20, children: o }),
              (0, r.jsxs)(h.gO, {
                children: [
                  (0, r.jsx)(d.Button, {
                    color: d.Button.Colors.BRAND,
                    type: "submit",
                    fullWidth: !0,
                    children: R.intl.string(R.t.JhDw5u),
                  }),
                  (0, r.jsx)("div", {
                    className: a()(I.marginTop8, T.needAccount),
                    children: R.intl.format(R.t.js2rr6, {
                      onClick: this.handleCancelAccountDeletion,
                    }),
                  }),
                ],
              }),
            ],
          });
        }
        renderResetPhonePassword() {
          let { resetPasswordPhoneToken: e } = this.state;
          return (0, r.jsx)(u.Z, {
            resetToken: e,
            onLoginSuccess: (e) => {
              c.Z.switchAccountToken(e);
            },
            ...this.props,
          });
        }
        renderPhonePasswordRecovery() {
          let { authBoxClassName: e } = this.props,
            { phoneVerifyError: t } = this.state;
          return (0, r.jsx)(h.ZP, {
            tag: "form",
            className: e,
            children: (0, r.jsx)("div", {
              className: I.marginTop20,
              children: (0, r.jsx)(f.Z, {
                title: R.intl.string(R.t["+xqy3d"]),
                subtitle: R.intl.format(R.t.ef4uZ2, {
                  onResendClick: this.handleResendCode,
                }),
                error: t,
                onSubmit: this.handlePasswordReset,
                onCancel: void 0,
              }),
            }),
          });
        }
        render() {
          let { loginStatus: e } = this.props;
          if (null != this.state.resetPasswordPhoneToken)
            return this.renderResetPhonePassword();
          switch (e) {
            case A.u34.LOGGING_IN_MFA_SMS:
            case A.u34.MFA_SMS_STEP:
            case A.u34.LOGGING_IN_MFA:
            case A.u34.MFA_STEP:
              return this.renderMFA();
            case A.u34.ACCOUNT_SCHEDULED_FOR_DELETION:
            case A.u34.ACCOUNT_DISABLED:
              return this.renderDisabledAccount();
            case A.u34.PASSWORD_RECOVERY_PHONE_VERIFICATION:
              return this.renderPhonePasswordRecovery();
            case A.u34.LOGGING_IN:
            case A.u34.NONE:
            default:
              return this.renderDefault();
          }
        }
        constructor(e) {
          super(e),
            v(this, "loginRef", void 0),
            v(this, "passwordRef", void 0),
            v(this, "codeRef", void 0),
            v(this, "handleAuthToken", async (e) => {
              await c.Z.loginToken(e, !1);
            }),
            v(this, "handleTabOrEnter", (e) => {
              if (
                "Tab" === e.key &&
                !e.shiftKey &&
                e.target === this.loginRef
              ) {
                var t;
                null === (t = this.passwordRef) || void 0 === t || t.focus(),
                  e.stopPropagation(),
                  e.preventDefault();
              }
              "Enter" === e.key &&
                (e.target === this.loginRef || e.target === this.passwordRef) &&
                (this.handleLogin(), e.stopPropagation(), e.preventDefault());
            }),
            v(this, "setLoginRef", (e) => {
              this.loginRef = e;
            }),
            v(this, "setPasswordRef", (e) => {
              this.passwordRef = e;
            }),
            v(this, "setCodeRef", (e) => {
              this.codeRef = e;
            }),
            v(this, "getFullLogin", () => {
              let { loginPrefix: e, login: t } = this.state;
              return e + t;
            }),
            v(this, "renderError", (e) => {
              let { errors: t } = this.props;
              if (this.hasError(e)) {
                let s = t[e];
                return Array.isArray(s) ? s[0] : s;
              }
              return null;
            }),
            v(this, "handleForgotPassword", async (e) => {
              var t;
              null == e || e.preventDefault(),
                null === (t = this.loginRef) || void 0 === t || t.focus();
              let s = this.getFullLogin();
              try {
                N.S.dispatch(A.CkL.WAVE_EMPHASIZE),
                  await c.Z.forgotPassword(s),
                  (0, d.openModal)((e) =>
                    (0, r.jsx)(d.ConfirmModal, {
                      header: R.intl.string(R.t.f5Pi7O),
                      confirmText: R.intl.string(R.t.BddRzc),
                      confirmButtonColor: d.Button.Colors.BRAND,
                      ...e,
                      children: (0, r.jsx)(d.Text, {
                        variant: "text-md/normal",
                        children: R.intl.format(R.t["6u5hQ0"], { email: s }),
                      }),
                    }),
                  );
              } catch {}
            }),
            v(this, "handleLogin", (e) => {
              let { password: t, undelete: s } = this.state;
              null != e && e.preventDefault(),
                c.Z.login({
                  login: this.getFullLogin(),
                  password: t,
                  undelete: s,
                  isMultiAccount: !0,
                });
            }),
            v(this, "handlePasswordReset", async (e) => {
              this.setState({ phoneVerifyError: null });
              try {
                let { token: t } = await m.Z.verifyPhone(
                  this.getFullLogin(),
                  e,
                  !1,
                  !0,
                );
                this.setState({ resetPasswordPhoneToken: t });
              } catch (e) {
                null != e.body &&
                  null != e.body.message &&
                  this.setState({ phoneVerifyError: e.body.message });
              }
            }),
            v(this, "handleTokenSubmitMFA", (e) => {
              let { mfaType: t, data: s, ticket: n } = e;
              return c.Z.loginMFAv2({
                code: s,
                ticket: n,
                mfaType: t,
                isMultiAccount: !0,
              });
            }),
            v(this, "handleResendCode", () => {
              m.Z.resendCode(this.getFullLogin());
            }),
            v(this, "handleReset", (e) => {
              null != e && e.preventDefault(),
                c.Z.loginReset(!0),
                this.setState({
                  password: "",
                  loginPrefix: "",
                  login: "",
                  code: "",
                  smsCode: "",
                  undelete: !1,
                  resetPasswordPhoneToken: null,
                });
            }),
            v(this, "handleCancelAccountDeletion", () => {
              this.setState({ undelete: !0 }, this.handleLogin);
            }),
            (this.state = {
              loginPrefix: "",
              login: "",
              password: "",
              code: "",
              smsCode: "",
              phoneVerifyError: null,
              resetPasswordPhoneToken: null,
              undelete: !1,
            });
        }
      }
      v(S, "defaultProps", {
        transitionTo: (e) => s.g.location.assign(e),
        replaceWith: (e) => s.g.location.replace(e),
      });
      t.Z = function (e) {
        let t = (0, l.cj)([b.Z, C.default, g.Z, x.Z], () => ({
          authenticated: C.default.isAuthenticated(),
          loginStatus: C.default.getLoginStatus(),
          mfaTicket: C.default.getMFATicket(),
          mfaSMS: C.default.getMFASMS(),
          maskedPhone: C.default.getMaskedPhone(),
          mfaMethods: C.default.getMFAMethods(),
          errors: C.default.getErrors(),
          defaultRoute: b.Z.defaultRoute,
          country: g.Z.getCountryCode(),
          theme: x.Z.theme,
        }));
        return (0, r.jsx)(S, { ...e, ...t });
      };
    },
    475062: function (e, t, s) {
      var n = s(200651);
      s(192379);
      var r = s(703656),
        o = s(153069),
        i = s(413550);
      t.Z = (e) => {
        let { onClose: t } = e;
        return (0, n.jsx)(o.Z, {
          transitionTo: (e) => {
            (0, r.uL)(e);
          },
          replaceWith: (e) => {
            (0, r.dL)(e);
          },
          authBoxClassName: i.card,
          closeLogin: t,
        });
      };
    },
    266653: function (e, t, s) {
      s.r(t),
        s.d(t, {
          default: function () {
            return N;
          },
        }),
        s(47120);
      var n,
        r,
        o = s(200651),
        i = s(192379),
        a = s(990547),
        l = s(442837),
        d = s(481060),
        c = s(570140),
        u = s(213609),
        h = s(594174),
        f = s(726745),
        p = s(475062),
        m = s(760213),
        g = s(71509),
        _ = s(981631),
        x = s(388032),
        C = s(574023);
      ((r = n || (n = {}))[(r.MANAGE_ACCOUNTS = 0)] = "MANAGE_ACCOUNTS"),
        (r[(r.LOGIN = 1)] = "LOGIN");
      let b = { 0: d.ModalSize.SMALL, 1: d.ModalSize.DYNAMIC };
      function N(e) {
        let { transitionState: t, onClose: s } = e,
          [n, r] = i.useState(0),
          { currentUser: N, multiAccountUsers: A } = (0, l.cj)(
            [h.default, f.Z],
            () => ({
              currentUser: h.default.getCurrentUser(),
              multiAccountUsers: f.Z.getUsers(),
            }),
          ),
          [R, T] = i.useState(!1),
          [I, v] = i.useState(_.lds),
          [S, w] = i.useState(null);
        i.useEffect(() => {
          if (R)
            w(
              (0, o.jsx)(d.HelpMessage, {
                messageType: d.HelpMessageTypes.ERROR,
                className: C.infoMessage,
                children: x.intl.format(x.t.HAuRSE, { maxNumAccounts: g.$H }),
              }),
            ),
              v(_.lds);
          else if (null != I) {
            let e = h.default.getUser(I);
            null != e &&
              w(
                (0, o.jsx)(d.HelpMessage, {
                  messageType: d.HelpMessageTypes.POSITIVE,
                  className: C.infoMessage,
                  children: x.intl.format(x.t["09qidX"], {
                    username: e.username,
                  }),
                }),
              ),
              T(!1);
          }
        }, [I, R]),
          i.useEffect(() => {
            A.length < g.$H && T(!1);
          }, [A]),
          (0, u.Z)({
            type: a.ImpressionTypes.MODAL,
            name:
              0 === n
                ? a.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING
                : a.ImpressionNames.USER_LOGIN,
          });
        let E = null;
        return (
          0 === n
            ? (E = (0, o.jsxs)(o.Fragment, {
                children: [
                  (0, o.jsx)(d.ModalHeader, {
                    separator: !1,
                    children: (0, o.jsxs)("div", {
                      className: C.header,
                      children: [
                        (0, o.jsx)(d.Heading, {
                          variant: "heading-xl/semibold",
                          color: "header-primary",
                          children: x.intl.string(x.t.WbFpq6),
                        }),
                        (0, o.jsx)(d.Text, {
                          className: C.subheaderText,
                          color: "header-secondary",
                          variant: "text-md/normal",
                          children: x.intl.string(x.t["+1Uk3d"]),
                        }),
                      ],
                    }),
                  }),
                  (0, o.jsxs)(d.ModalContent, {
                    children: [
                      S,
                      (0, o.jsx)(m.Z, {
                        actionText: x.intl.string(x.t.Wf421N),
                        onAction: (e, t) => {
                          switch (e) {
                            case m.W.LOGIN_REQUIRED:
                              r(1);
                              break;
                            case m.W.SWITCHED:
                              s();
                              break;
                            case m.W.REMOVED:
                              t === (null == N ? void 0 : N.id) && s(), v(t);
                          }
                        },
                      }),
                      (0, o.jsx)("div", {
                        className: C.actions,
                        children: (0, o.jsx)(d.Button, {
                          look: d.Button.Looks.LINK,
                          color: d.Button.Colors.PRIMARY,
                          onClick: () => {
                            if (A.length >= g.$H) {
                              T(!0);
                              return;
                            }
                            r(1);
                          },
                          size: d.Button.Sizes.MEDIUM,
                          children: (0, o.jsx)(d.Text, {
                            variant: "text-sm/semibold",
                            children: x.intl.string(x.t["9g2mqa"]),
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }))
            : 1 === n &&
              (E = (0, o.jsx)(p.Z, {
                onClose: () => {
                  c.Z.dispatch({ type: "CLEAR_AUTHENTICATION_ERRORS" }), r(0);
                },
              })),
          (0, o.jsx)(d.ModalRoot, {
            className: C.modal,
            transitionState: t,
            size: b[n],
            "aria-label": x.intl.string(x.t.WbFpq6),
            children: (0, o.jsx)(d.Sequencer, {
              step: n,
              steps: [0, 1],
              children: E,
            }),
          })
        );
      }
    },
    415570: function (e, t, s) {
      e.exports = {
        error: "error_c39a71",
        subTitle: "subTitle_c39a71",
        button: "button_c39a71",
        codeInput: "codeInput_c39a71",
      };
    },
    42207: function (e, t, s) {
      e.exports = { spacer: "spacer_b0944f", input: "input_b0944f" };
    },
    712694: function (e, t, s) {
      e.exports = {
        header: "header_c03fd3",
        subtitle: "subtitle_c03fd3",
        closeButton: "closeButton_c03fd3",
        content: "content_c03fd3",
        smsInputContainer: "smsInputContainer_c03fd3",
        smsInput: "smsInput_c03fd3",
        error: "error_c03fd3",
        footer: "footer_c03fd3",
        listItemContainer: "listItemContainer_c03fd3",
        listItemText: "listItemText_c03fd3",
        listItemArrow: "listItemArrow_c03fd3",
      };
    },
    640890: function (e, t, s) {
      e.exports = {
        mainLoginContainer: "mainLoginContainer_be9398",
        title: "title_be9398",
        subtitle: "subtitle_be9398",
        loginForm: "loginForm_be9398",
        needAccount: "needAccount_be9398",
        navRow: "navRow_be9398",
        continueButton: "continueButton_be9398",
        backButton: "backButton_be9398",
      };
    },
    413550: function (e, t, s) {
      e.exports = { card: "card_fe1b7e" };
    },
    940149: function (e, t, s) {
      e.exports = {
        list: "list_f20a46",
        accountCard: "accountCard_f20a46",
        separator: "separator_f20a46",
        userDetails: "userDetails_f20a46",
        usernameSection: "usernameSection_f20a46",
        hasActionMaxWidth: "hasActionMaxWidth_f20a46",
        username: "username_f20a46",
        userActions: "userActions_f20a46",
        userActionMenu: "userActionMenu_f20a46",
        overflowMenuIcon: "overflowMenuIcon_f20a46",
        textOverflow: "textOverflow_f20a46",
        hintText: "hintText_f20a46",
      };
    },
    574023: function (e, t, s) {
      e.exports = {
        modal: "modal_f31a4d",
        header: "header_f31a4d",
        subheaderText: "subheaderText_f31a4d",
        actions: "actions_f31a4d",
        infoMessage: "infoMessage_f31a4d",
      };
    },
    369365: function (e, t, s) {
      e.exports = {
        outerContainer: "outerContainer_a0cb3d",
        container: "container_a0cb3d",
        innerContainer: "innerContainer_a0cb3d",
        countryCode: "countryCode_a0cb3d",
        separator: "separator_a0cb3d",
        popout: "popout_a0cb3d",
        hidden: "hidden_a0cb3d",
      };
    },
    594567: function (e, t, s) {
      e.exports = {
        phoneFieldPopout: "phoneFieldPopout_ff761b",
        phoneFieldScroller: "phoneFieldScroller_ff761b",
        countryItem: "countryItem_ff761b",
        countryName: "countryName_ff761b",
        countryCode: "countryCode_ff761b",
      };
    },
    343471: function (e, t, s) {
      e.exports = {
        input: "input_cc6ddd",
        inputWrapper: "inputWrapper_cc6ddd",
        inputField: "inputField_cc6ddd",
      };
    },
  },
]);
//# sourceMappingURL=9daeb38e6a5348c02e8f.js.map
